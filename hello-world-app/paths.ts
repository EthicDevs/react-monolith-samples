import { join, resolve } from "path";

export const ROOT_FOLDER = resolve(__dirname);

export const DIST_FOLDER =
  process.env.NODE_ENV === "production"
    ? ROOT_FOLDER
    : resolve(join(ROOT_FOLDER, "dist"));

export const PUBLIC_FOLDER =
  process.env.NODE_ENV === "production"
    ? resolve(join(ROOT_FOLDER, "..", "public"))
    : resolve(join(ROOT_FOLDER, "public"));

export const APP_FOLDER = resolve(join(ROOT_FOLDER, "app"));

export const ROUTES_FILE = resolve(join(APP_FOLDER, "routes.tsx"));

export const VIEWS_FOLDER = resolve(join(APP_FOLDER, "views"));

export const ISLANDS_FOLDER = resolve(join(APP_FOLDER, "islands"));

export const ISLANDS_BUNDLES_FOLDER = resolve(join(PUBLIC_FOLDER, ".islands"));

export const CDN_FOLDER = resolve(join(PUBLIC_FOLDER, ".cdn"));
