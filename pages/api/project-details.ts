// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProjectDetailsType } from '../components/atoms/ProjectSquare'

const projectDetails: ProjectDetailsType[] = [
  {
    date: '11/01/2023',
    title: 'Connect4',
    description: "A website which hosts a game of connect4 against an AI.",
    link: "https://github.com/biratkk/connect4"
  },
  {
    date: '12/01/2023',
    title: 'Pentatonic',
    description: "A flashcard application which uses NLP to translate notes into direct flashcards.",
    link: ""
  },
  {
    date: '13/01/2023',
    title: 'Sudoku Solver',
    description: 'A sudoku solver that utilises a DFS backtracking algorithm to find a solution to the sudoku solver.',
    link: "https://github.com/biratkk/JavaSudokuSolver"
  }
]

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectDetailsType[]>
) {
  res.status(200).json(projectDetails);
}