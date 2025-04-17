import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/db";
import Job from "../../../models/Job";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  await dbConnect();

  if (req.method === "GET") {
    const jobs = await Job.find({ userId });
    return res.status(200).json({ jobs });
  }

  if (req.method === "POST") {
    const { title, company } = req.body;
    const newJob = await Job.create({ userId, title, company });
    return res.status(201).json({ job: newJob });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
