export enum Answer {
  YES,
  NO,
}

export type CueCard = {
  question: string
  answer: string
  history: Array<Answer>
}
