import { getColor, getFontSize } from '../utils/helpers'
import type { Word } from '../types'
import { useState } from 'react'

type WordListProps = {
  words: Word[]
  onWordClick: (word: Word) => void
}

export default function WordList({ words, onWordClick }: WordListProps) {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredWords = words.filter((word) => {
    return word.label.toLowerCase().includes(search)
  })

  return (
    <>
      {/* Wordlist header */}
      <div className="border-b-2 border-white">
        <h1 className="flex flex-wrap justify-center pt-6 text-4xl font-bold text-white">
          Topics
          <span className="pl-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.47701 1 1.00001 5.477 1.00001 11C0.997756 12.978 1.58395 14.9121 2.68401 16.556C2.80567 16.7377 2.57767 17.8857 2.00001 20C4.11467 19.4223 5.26267 19.1943 5.44401 19.316C7.08795 20.4161 9.02196 21.0023 11 21Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M7.30251 8.91H15.692M9.92351 6.869L8.46651 15.131M13.4235 6.869L11.9665 15.131M6.30251 13H14.692"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </h1>
        <p className="pt-1 pb-6 text-center text-sm text-gray-300 italic">
          Relevant topcis. At a glance.
        </p>
      </div>

      <div className="flex items-center justify-center pt-8">
        <input
          id="searchInput"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search term..."
          maxLength={12}
          className="w-[300px] outline-none border-t-0 border-x-0 border-b-2 p-1 border-white text-white"
        />
      </div>

      {/* Wordlist */}
      <div className="max-w-lvh grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 auto-rows-[100px] gap-2 m-auto py-6 px-5">
        {filteredWords.length > 0 ? (
          filteredWords.map((word) => (
            <div
              key={word.id}
              role="button"
              tabIndex={0}
              aria-label={`Show details for ${word.label}`}
              className={`${getColor(word.sentimentScore)} ${getFontSize(
                word.volume
              )} content-center text-center p-4 bg-teal-50 border border-indigo-950 rounded-sm cursor-pointer capitalize hover:opacity-75`}
              onClick={() => onWordClick(word)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onWordClick(word)
              }}
              data-tooltip-id={word.id}
            >
              {word.label}
              {word.burst > word.volume && <span className="ml-1 text-sm">🔥</span>}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-white">
            Sorry! There is currently no topic for{' '}
            <span className="capitalize font-bold">{search}.</span>
          </p>
        )}
      </div>
    </>
  )
}
