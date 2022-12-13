// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, test_tabel } from '@prisma/client'
import {cors, runMiddleware} from "./cors";

type Data = {
  name: string,
  num: test_tabel[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors)

  const prisma = new PrismaClient()
  const num = await prisma.test_tabel.findMany()
  res.status(200).json({ name: 'John Doe 22', num: num })
}
