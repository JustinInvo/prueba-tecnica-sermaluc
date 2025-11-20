'use client'

export function SizeSelector({ value, onChange }: { value: number; onChange: (n: number) => void; }) {
  return (
    <div className="mb-4 flex gap-4 items-center">
      <label className="text-sm">Tamaño (N):</label>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-20 p-1 border rounded border-[#444]"
      />
    </div>
  )
}
