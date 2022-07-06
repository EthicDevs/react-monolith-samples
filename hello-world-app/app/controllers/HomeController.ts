// 1st-party
import { ReqHandler } from "@ethicdevs/react-monolith";

// app
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
  const usernames = ["GitHub", null, "microsoft"];
  const [github, wnemencha, microsoft] = await Promise.all(
    usernames.map((u) => u != null && getGitHubUser(u))
  );

  return reply.streamReactView("HomeView", {
    foo: "🔥",
    users: {
      github,
      wnemencha,
      microsoft,
    },
  });
};
