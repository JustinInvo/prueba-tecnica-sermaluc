import { render, screen, fireEvent } from "@testing-library/react";
import { ActionsBar } from "@/components/ActionBar";
import { vi } from "vitest";

describe("ActionsBar", () => {
  it("llama a onRotate cuando se hace clic en 'Rotate 90°'", () => {
    const onRotate = vi.fn();
    const onRandom = vi.fn();

    render(<ActionsBar onRotate={onRotate} onRandom={onRandom} />);

    fireEvent.click(screen.getByText("Rotate 90°"));
    expect(onRotate).toHaveBeenCalledTimes(1);
  });

  it("llama a onRandom cuando se hace clic en 'Random'", () => {
    const onRotate = vi.fn();
    const onRandom = vi.fn();

    render(<ActionsBar onRotate={onRotate} onRandom={onRandom} />);

    fireEvent.click(screen.getByText("Random"));
    expect(onRandom).toHaveBeenCalledTimes(1);
  });
});
