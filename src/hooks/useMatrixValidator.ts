import { useState } from "react";

export function useMatrixValidator() {
  const [error, setError] = useState<string | null>(null);

  function validate(text: string) {
    try {
      const parsed = JSON.parse(text);

      if (!Array.isArray(parsed)) {
        setError("El JSON debe ser un array.");
        return false;
      }

      const N = parsed.length;
      if (N === 0) {
        setError("La matriz no puede estar vacía.");
        return false;
      }

      for (let i = 0; i < N; i++) {
        const row = parsed[i];

        if (!Array.isArray(row)) {
          setError(`La fila ${i + 1} no es un array.`);
          return false;
        }

        if (row.length !== N) {
          setError(`La fila ${i + 1} debe tener exactamente ${N} elementos.`);
          return false;
        }

        if (!row.every((val) => typeof val === "number")) {
          setError(`La fila ${i + 1} contiene valores no numéricos.`);
          return false;
        }
      }

      setError(null);
      return true;

    } catch {
      setError("JSON no válido.");
      return false;
    }
  }

  return { error, validate };
}
