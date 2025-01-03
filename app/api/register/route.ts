import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

function GET(res: NextApiResponse<Data>) {
  res.status(200).json({
    name: "Marinao",
  });
}

export { GET };
