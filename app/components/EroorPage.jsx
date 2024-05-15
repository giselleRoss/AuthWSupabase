'use client'

import { useSearchParams } from 'next/navigation'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  return (
    <div>
      <h1>Error</h1>
      {message && <p>{decodeURIComponent(message)}</p>}
    </div>
  )
}
