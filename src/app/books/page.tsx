import { Metadata } from 'next'
import React from 'react'
import { useSearchProvider } from '@/app/providers/SearchProvider'

export const metadata: Metadata = {
  title: 'VITLIB | Books',
  description: 'Access all information about a book here',
}

export default function BooksPage() {
  return <div>BooksPage</div>
}
