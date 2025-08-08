import { useState, useEffect } from 'react'
import topicsData from './data/topics.json'
import './index.css'
import WordList from './components/WordList'
import WordDetails from './components/WordDetails'
import type { Word } from './types'

export interface TopicsData {
  topics: Word[]
}

function App() {
  const [words, setWords] = useState<Word[]>([])
  const [selectedWord, setSelectedWord] = useState<Word | null>(null)

  useEffect(() => {
    const parsed = topicsData as TopicsData
    setWords(parsed.topics)
  }, [])

  return (
    <main className="w-full font-roboto min-h-screen bg-teal-900">
      <WordList words={words} onWordClick={setSelectedWord} />

      {selectedWord && (
        <WordDetails
          name={selectedWord.label}
          total={selectedWord.volume}
          sentiment={selectedWord.sentiment}
          onClose={() => setSelectedWord(null)}
        />
      )}
    </main>
  )
}

export default App
