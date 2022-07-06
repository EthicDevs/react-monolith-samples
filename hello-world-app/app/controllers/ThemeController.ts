// 1st-party
import { ReqHandler } from "@ethicdevs/react-monolith";

export const getTheme: ReqHandler = async (_, reply) => {
  return reply.send("OK");
};

export const postTheme: ReqHandler = async (_, reply) => {
  return reply.send("NOK");
};
