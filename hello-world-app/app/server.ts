// 3rd-party
import serveStatic from "fastify-static";
import {
  AppServer,
  makeAppServer,
  startAppServer,
  stopAppServerAndExit,
} from "@ethicdevs/react-monolith";

// app
import { getEnv } from "./utils/server";
import * as paths from "../paths";
import { version as appVersion } from "../package.json";

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4100;
const __DEV__ = process.env.NODE_ENV !== "production";

let server: null | AppServer = null;

async function main() {
  server = await makeAppServer(HOST, PORT, {
    appName: "Hello World App",
    appVersion,
    env: getEnv(),
    externalDependencies: {
      // "markdown-to-jsx": "MarkdownToJSX", // not an umd module
    },
    featureFlags: {
      withDevServer: __DEV__ === true,
      withStyledSSR: true,
    },
    paths: {
      distFolder: paths.DIST_FOLDER,
      islandsFolder: paths.ISLANDS_FOLDER,
      rootFolder: paths.ROOT_FOLDER,
      routesFile: paths.ROUTES_FILE,
      viewsFolder: paths.VIEWS_FOLDER,
    },
  });

  server.register(serveStatic, {
    root: paths.PUBLIC_FOLDER,
    prefix: "/public",
  });

  await startAppServer(server);
  return server;
}

// Catch errors that are fatal
["unhandledRejection", "uncaughtException"].forEach((exception) => {
  process.on(exception, async (reason: Error) => {
    await stopAppServerAndExit(server, reason);
  });
});
// Catch standard linux signals to kill a daemon
["SIGQUIT", "SIGTERM", "SIGINT"].forEach((killSignal) => {
  process.on(killSignal, async () => {
    await stopAppServerAndExit(server);
  });
});
// Start the application server
main()
  .then((server) => {
    // safe because it wont start if null
    const { $config, $host, $port } = server.reactMonolith!;
    console.log(
      `[🚀][${$config.env}] App Server ready at http://${$host}:${$port} !`
    );
  })
  .catch(async (err) => {
    const error = err as Error;
    console.error(`[❌] Cannot start App Server. Error: ${error.message}`);
    await stopAppServerAndExit(null, error);
  });
