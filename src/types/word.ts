//Object structure for used data from topics data structure
export type Word = {
  id: string
  label: string
  volume: number
  type: string
  sentiment: {
    positive?: number
    neutral?: number
    negative?: number
  }
  sentimentScore: number
  burst: number
}
