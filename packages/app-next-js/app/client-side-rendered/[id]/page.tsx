'use client'

import { useEffect, useState, type ComponentType } from 'react'
import clientSideRenderedDetail from './ClientSideRenderedDetail'

export default function ClientSideRenderedDetailPage() {
  const [Detail, setDetail] = useState<ComponentType | null>(null)

  useEffect(() => {
    setDetail(() => clientSideRenderedDetail)
  }, [])

  return Detail ? <Detail /> : null
}
