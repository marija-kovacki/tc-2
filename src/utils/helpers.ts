// Color for label depending on sentimentScore using Tailwind palette
export function getColor(sentiment: number): string {
  if (sentiment > 60) {
    return 'text-green-600'
  } else if (sentiment < 40) {
    return 'text-red-600'
  } else {
    return 'text-gray-500'
  }
}

// Font-size for label depending on volume using Tailwind text scale
export function getFontSize(popularity: number): string {
  if (popularity > 150) return 'text-4xl'
  if (popularity > 100) return 'text-3xl'
  if (popularity > 80) return 'text-2xl'
  if (popularity > 50) return 'text-xl'
  if (popularity > 10) return 'text-base'
  return 'text-xs'
}
