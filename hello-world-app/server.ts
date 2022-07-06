// 3rd-party
import serveStatic from "fastify-static";
import {
  makeAppServer,
  startAppServer,
  stopAppServerAndExit,
} from "@ethicdevs/react-monolith";

// app
import * as paths from "./paths";
import { getEnv } from "./app/utils/server";
import { version as appVersion } from "./package.json";

async function main() {
  const HOST = process.env.HOST || "localhost";
  const PORT = process.env.PORT || 4100;

  const __DEV__ = process.env.NODE_ENV !== "production";

  const server = await makeAppServer(HOST, PORT, {
    appName: "hello-world-app",
    appVersion,
    env: getEnv(),
    featureFlags: {
      withDevServer: __DEV__ === true,
      withResponseCompression: __DEV__ !== true,
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

  ["unhandledRejection", "uncaughtException"].forEach((exception) => {
    process.on(exception, async (reason: Error) => {
      await stopAppServerAndExit(server, reason);
    });
  });

  ["SIGQUIT", "SIGTERM", "SIGINT"].forEach((killSignal) => {
    process.on(killSignal, async () => {
      await stopAppServerAndExit(server);
    });
  });

  server.register(serveStatic, {
    root: paths.PUBLIC_FOLDER,
    prefix: "/public",
  });

  await startAppServer(server);
  return server;
}

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
