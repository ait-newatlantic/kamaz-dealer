import { NextApiRequest, NextApiResponse } from 'next';

const robots = `
User-agent: *
Disallow:
`;

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(robots);
};
