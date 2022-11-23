export type Word = {
  text: string
  translation: string
  description: string
  image: string
  transcription: string
  expamples: string[]
}

export enum WordStageType {
  Intro = 0,
  Repeating = 1,
}

class WordSessionAttributes {
  public currectAnswers: number = 0
  public incorrectAnswers: number = 0
  clear(): void {
    this.currectAnswers = this.incorrectAnswers = 0
  }
}

type WordSessionInro = Word &
  WordSessionAttributes & {
    stage: WordStageType.Intro
  }

type WordSessionRepeating = Word &
  WordSessionAttributes & {
    stage: WordStageType.Repeating
  }

export type WordSession = WordSessionInro | WordSessionRepeating
