import { useEffect } from 'react'

type ModalProps = {
  name: string
  total: number
  sentiment: {
    positive?: number
    neutral?: number
    negative?: number
  }
  onClose: () => void
}

export default function WordDetails({ name, total, sentiment, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <>
      {/* Modal dark overlay */}
      <div
        className="fixed z-10 w-full h-full top-0 left-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="topic-dialog-title"
        tabIndex={-1}
        className="fixed z-20 left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-50 text-blue-950 p-6 rounded-sm"
      >
        <h2 id="topic-dialog-title" className="font-bold pb-3.5">
          Information on a topic: {name}
        </h2>
        <p className="pt-2 capitalize">Total mentions: {total}</p>
        {sentiment.positive != null && (
          <p className="pt-2">&#128522; Positive: {sentiment.positive}</p>
        )}
        {sentiment.neutral != null && (
          <p className="pt-2">&#128528; Neutral: {sentiment.neutral}</p>
        )}
        {sentiment.negative != null && (
          <p className="pt-2">&#128577; Negative: {sentiment.negative}</p>
        )}
        <button
          className="mt-4 w-full py-1 rounded-sm bg-blue-950 text-white font-bold hover:cursor-pointer hover:bg-blue-900"
          onClick={onClose}
        >
          close
        </button>
      </div>
    </>
  )
}
