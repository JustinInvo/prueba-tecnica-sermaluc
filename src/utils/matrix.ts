export type Matrix = number[][]

export class MatrixError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MatrixError'
  }
}

/**
 * Valida que sea una matriz cuadrada de números (NxN).
 * Lanza MatrixError con mensajes claros para UI / logging.
 */
export function validateSquareMatrix(m: unknown): Matrix {
  if (!Array.isArray(m)) throw new MatrixError('La matriz debe ser un array.')
  if (m.length === 0) throw new MatrixError('La matriz no puede estar vacía.')

  const n = m.length
  if (!m.every((row) => Array.isArray(row) && row.length === n)) {
    throw new MatrixError(`La matriz debe ser cuadrada (NxN). Se recibió ${n} filas con longitudes diferentes o no válidas.`)
  }

  const parsed: Matrix = []
  for (let i = 0; i < n; i++) {
    const row = m[i] as unknown[]
    const newRow: number[] = []
    for (let j = 0; j < n; j++) {
      const v = row[j]
      const num = typeof v === 'number' ? v : Number(v)
      if (!Number.isFinite(num) || Number.isNaN(num)) {
        throw new MatrixError(`Celda [${i}][${j}] no es un número válido: ${JSON.stringify(v)}`)
      }
      newRow.push(num)
    }
    parsed.push(newRow)
  }
  return parsed
}

/**
 * Rota una matriz NxN 90 grados en sentido anti-horario (ccw).
 * Implementación pura: O(N^2) y no muta la matriz original.
 *
 * Mapeo: new[N - 1 - j][i] = old[i][j]
 */
export function rotate90CCW(matrix: Matrix): Matrix {
  const n = matrix.length
  // crear nueva matriz vacía NxN
  const result: Matrix = Array.from({ length: n }, () => new Array<number>(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[n - 1 - j][i] = matrix[i][j]
    }
  }
  return result
}

export function defaultMatrix(size: number): Matrix {
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => i * size + j)
  )
}

export function randomMatrix(size: number): Matrix {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10)
  )
}