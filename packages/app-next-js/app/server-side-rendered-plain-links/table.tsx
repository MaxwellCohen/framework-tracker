'use client'

import { use } from 'react'

type Entry = { id: string; name: string }

export function RequestTable({ entries }: { entries: Promise<Entry[]> }) {
  const rows = use(entries)

  return (
    <table>
      <tbody>
        {rows.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>
              <a href={`/server-side-rendered/${entry.id}`}>View →</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
