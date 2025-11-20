'use client'

import { useMatrixValidator } from "@/hooks/useMatrixValidator";

export function JsonInput({ jsonText, onChange, onPasteJson }: any) {
  const { error, validate } = useMatrixValidator();

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    const cleaned = value.replace(/[^\d\[\]\s,.-]/g, "");
    onChange(cleaned);
    validate(cleaned);
  }

  return (
    <div className="mb-4 space-y-2">
      <label className="block text-sm">Pegar / editar JSON</label>

      <textarea
        value={jsonText}
        onChange={handleInput}
        rows={4}
        className="w-full p-2 border rounded-[12px] border-[#444]"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex gap-2">
        <button
          onClick={() => !error && onPasteJson(jsonText)}
          disabled={!!error}
          className={`
            px-3 py-1 rounded text-white 
            ${error ? "bg-gray-500 cursor-not-allowed" : "bg-[#0071ff]"}
          `}
        >
          Cargar JSON
        </button>
      </div>
    </div>
  );
}
