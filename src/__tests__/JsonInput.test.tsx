import { render, screen, fireEvent } from "@testing-library/react";
import { JsonInput } from "@/components/JsonInput";
import { vi } from "vitest";

describe("JsonInput", () => {
  it("no permite letras", () => {
    const onChange = vi.fn();

    render(
      <JsonInput 
        jsonText="" 
        onChange={onChange} 
        onPasteJson={() => {}} 
        onReset={() => {}} 
      />);

    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "[1, a, b]" } });

    expect(onChange).toHaveBeenCalledWith("[1, , ]"); // letras removidas
  });

  it("deshabilita el botón si hay error", () => {
    render(
      <JsonInput 
        jsonText="[1,2,3" 
        onChange={() => {}} 
        onPasteJson={() => {}} 
        onReset={() => {}} 
      />
    );

    const button = screen.getByText("Cargar JSON");

    expect(button).not.toBeDisabled();
  });
});
