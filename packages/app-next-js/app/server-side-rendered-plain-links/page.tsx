import { Suspense } from 'react'
import { getTestData } from '../../data'
import { RequestTable } from './table'

export default function ServerSideRenderedPage() {
  const entries = getTestData()

  return (
    <Suspense fallback={null}>
      <RequestTable entries={entries} />
    </Suspense>
  )
}
