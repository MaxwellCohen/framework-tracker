'use client'

import { useEffect, useState, type ComponentType } from 'react'
import ClientSideRenderedTable from './ClientSideRenderedTable'

export default function ClientSideRenderedPage() {
  const [Table, setTable] = useState<ComponentType | null>(null)

  useEffect(() => {
    setTable(() => ClientSideRenderedTable)
  }, [])

  return Table ? <Table /> : null
}
