// 1st-party
import { ReqHandler } from "@ethicdevs/react-monolith";

// app
import HomeView from "../views/HomeView";

import type { GHUserData } from "../services/fetchUserData";
import { fetchUserData } from "../services/fetchUserData";

const getGitHubUser = async (username: string): Promise<GHUserData | null> => {
  let results: GHUserData | null = null;
  await fetchUserData(username, (data) => {
    results = data;
  });
  return results;
};

export const getHomeView: ReqHandler = async (_, reply) => {
  const usernames = ["GitHub", null, "microsoft", null];
  const [github, ethicdevs, microsoft, facebook] = await Promise.all(
    usernames.map((u) => u != null && getGitHubUser(u))
  );

  return reply.streamReactView(HomeView.name, {
    title: "React Monolith",
    foo: "🔥",
    users: {
      ethicdevs,
      github,
      microsoft,
      facebook,
    },
  });
};
