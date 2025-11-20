import { render, screen } from "@testing-library/react";
import { JsonInput } from "@/components/JsonInput";
import { vi } from "vitest";

// Mock del hook para controlar el error
vi.mock("@/hooks/useMatrixValidator", () => ({
  useMatrixValidator: () => ({
    error: "Formato inválido",
    validate: vi.fn(),
  }),
}));

describe("JsonInput", () => {
  it("deshabilita el botón si hay error", () => {
    render(
      <JsonInput
        jsonText="[1,2,3]"
        onChange={() => {}}
        onPasteJson={() => {}}
        onReset={() => {}}
      />
    );

    const button = screen.getByText("Cargar JSON");

    expect(button).toBeDisabled();
  });
});
