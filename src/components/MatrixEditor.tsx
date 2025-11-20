'use client'

import { useState, useMemo } from "react"
import { Matrix } from "@/utils/matrix"

import { MatrixGrid } from "./MatrixGrid"
import { RotatedMatrixGrid } from "./RotatedMatrixGrid"
import { JsonInput } from "./JsonInput"
import { SizeSelector } from "./SizeSelector"
import { ActionsBar } from "./ActionBar"
import { rotate90CCW, defaultMatrix, randomMatrix } from "@/utils/matrix"

// ---------- Component ----------

export function MatrixEditor({ initial }: { initial?: Matrix }) {
  const [matrix, setMatrix] = useState(initial ?? defaultMatrix(3))
  const [jsonText, setJsonText] = useState(JSON.stringify(matrix))

  // Rotated matrix
  const rotated = useMemo(() => rotate90CCW(matrix), [matrix])

  // --- Handlers ---

  function updateCell(i: number, j: number, value: string) {
    const parsed = Number(value)
    const num = Number.isFinite(parsed) ? parsed : 0
    const updated = matrix.map((row, r) =>
      row.map((cell, c) => (r === i && c === j ? num : cell))
    )
    setMatrix(updated)
    setJsonText(JSON.stringify(updated))
  }

  function pasteJson(text: string) {
    try {
      const parsed: Matrix = JSON.parse(text)
      setMatrix(parsed)
      setJsonText(text)
    } catch {
      console.error("Invalid JSON")
    }
  }

  function changeSize(size: number) {
    const newM = defaultMatrix(size)
    setMatrix(newM)
    setJsonText(JSON.stringify(newM))
  }

  function reset(size: number) {
    const newM = defaultMatrix(size)
    setMatrix(newM)
    setJsonText(JSON.stringify(newM))
  }

  function randomize() {
    const newM = randomMatrix(matrix.length)
    setMatrix(newM)
    setJsonText(JSON.stringify(newM))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      
      <JsonInput
        jsonText={jsonText}
        onChange={setJsonText}
        onPasteJson={pasteJson}
      />

      <SizeSelector 
        value={matrix.length} 
        onChange={changeSize}
      />

      <ActionsBar
        onRotate={() => setMatrix(rotate90CCW(matrix))}
        onReset={() => reset(matrix.length)}
        onRandom={randomize}
      />

      <div className="flex align-middle flex-wrap gap-8 mt-6">
        <MatrixGrid matrix={matrix} onChange={updateCell} />
        {rotated && <RotatedMatrixGrid matrix={rotated} />}
      </div>
    </div>
  )
}
