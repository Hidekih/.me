import { NextApiRequest, NextApiResponse } from 'next';
import { api } from '../../config/api';

interface SendTextParams {
  phone: string,
  message: string
}

const listOfCellphoneNumber = [
  process.env.CEL1,
  process.env.CEL2,
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    for (let i = 0; i < listOfCellphoneNumber.length; i++) {
      const params: SendTextParams = {
        message: `Pipoca!!!${i}`,
        phone: listOfCellphoneNumber[i],
      }

      await api.post("send-text", params);
    }
  } catch (error) {
    await api.post("send-text", {
      message: "Deu erro mano",
      phone: process.env.CEL2,
    } as SendTextParams)
  }

  res.status(200).json({ name: 'Hello folks', params: req.query })
}
