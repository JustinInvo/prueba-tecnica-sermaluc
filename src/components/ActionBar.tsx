'use client'

export function ActionsBar({
  onRotate,
  // onReset,
  onRandom
}: {
  onRotate: () => void
  // onReset: () => void
  onRandom: () => void
}) {
  return (
    <div className="flex gap-3 my-4">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={onRotate}
      >
        Rotate 90°
      </button>

      {/* <button
        className="px-4 py-2 bg-red-600 text-white rounded"
        onClick={onReset}
      >
        Reset
      </button> */}

      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={onRandom}
      >
        Random
      </button>
    </div>
  )
}
