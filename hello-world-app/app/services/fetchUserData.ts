// 3rd-party
import { fetch as crossFetch } from "cross-fetch";

// app
export interface GHUserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  type: "User";
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null | string;
  hireable: null | boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const GH_API_URL_PREFIX = "https://api.github.com/users";

const fetchData = typeof fetch === "undefined" ? crossFetch : fetch;

export async function fetchUserData(
  username: string,
  onData: (data: GHUserData | null) => void
) {
  try {
    const res = await fetchData(
      `${GH_API_URL_PREFIX}/${encodeURIComponent(username.split("/")[0])}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const json = await res.json();
    onData(json as GHUserData);
  } catch (err) {
    onData(null);
  }
}
