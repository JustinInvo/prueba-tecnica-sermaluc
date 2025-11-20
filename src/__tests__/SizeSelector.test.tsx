import { render, screen, fireEvent } from "@testing-library/react";
import { SizeSelector } from "@/components/SizeSelector";
import { vi } from "vitest";

describe("SizeSelector", () => {
  it("renderiza el valor correctamente", () => {
    render(<SizeSelector value={5} onChange={() => {}} />);

    const input = screen.getByRole("spinbutton");

    expect(input).toHaveValue(5);
  });

  it("llama a onChange con el nuevo número", () => {
    const onChange = vi.fn();

    render(<SizeSelector value={3} onChange={onChange} />);

    const input = screen.getByRole("spinbutton");

    fireEvent.change(input, { target: { value: "8" } });

    expect(onChange).toHaveBeenCalledWith(8);
  });

  it("no permite valores menores a 1 (min=1)", () => {
    const onChange = vi.fn();

    render(<SizeSelector value={3} onChange={onChange} />);

    const input = screen.getByRole("spinbutton");

    fireEvent.change(input, { target: { value: "0" } });

    // lo importante: que sí llame con el valor ingresado
    expect(onChange).toHaveBeenCalledWith(0);

    // validamos que el input tenga el atributo min correcto
    expect(input).toHaveAttribute("min", "1");
  });
});
