// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type HelloResponse = {
  name: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<HelloResponse>
): void {
  res.status(200).json({ name: "John Doe" });
}
