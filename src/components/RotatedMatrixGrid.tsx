'use client'

import { Matrix } from "@/utils/matrix"

export function RotatedMatrixGrid({ matrix }: { matrix: Matrix }) {
  return (
    <div className='bg-[#f8faff] border-[1px] border-[#e1e7ff] w-fit p-4 rounded-2xl'>
      <table>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="p-1">
                  <div className="w-20 p-1 border rounded text-right border-[#444]">
                    {cell}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
