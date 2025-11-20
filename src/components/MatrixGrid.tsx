'use client'
import { Matrix } from '@/utils/matrix'

type Props = {
  matrix: Matrix
  onChange: (r: number, c: number, value: string) => void
}

export function MatrixGrid({ matrix, onChange }: Props) {
  return (
    <div className='bg-[#f8faff] border-[1px] border-[#e1e7ff] w-fit p-4 rounded-2xl'>
      <table>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="p-1">
                  <input
                    aria-label={`cell-${i}-${j}`}
                    className="w-20 p-1 border rounded text-right border-[#444]"
                    value={Number.isFinite(cell) ? String(cell) : ''}
                    onChange={(e) => onChange(i, j, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
