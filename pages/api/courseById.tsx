import { NextApiRequest, NextApiResponse } from 'next';
import { courses } from './courses';



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ message: 'Invalid course ID' });
    return;
  }

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    res.status(404).json({ message: 'Course not found' });
    return;
  }

  res.status(200).json(course);
}
