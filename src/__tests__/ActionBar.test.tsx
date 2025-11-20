import { render, screen, fireEvent } from "@testing-library/react";
import { ActionsBar } from "@/components/ActionBar";
import { vi } from "vitest";

describe("ActionsBar", () => {
  it("llama a onRotate cuando se hace clic en 'Rotate 90°'", () => {
    const onRotate = vi.fn();
    const onReset = vi.fn();
    const onRandom = vi.fn();

    render(<ActionsBar onRotate={onRotate} onReset={onReset} onRandom={onRandom} />);

    fireEvent.click(screen.getByText("Rotate 90°"));

    expect(onRotate).toHaveBeenCalledTimes(1);
    expect(onReset).not.toHaveBeenCalled();
    expect(onRandom).not.toHaveBeenCalled();
  });

  it("llama a onReset cuando se hace clic en 'Reset'", () => {
    const onRotate = vi.fn();
    const onReset = vi.fn();
    const onRandom = vi.fn();

    render(<ActionsBar onRotate={onRotate} onReset={onReset} onRandom={onRandom} />);

    fireEvent.click(screen.getByText("Reset"));

    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it("llama a onRandom cuando se hace clic en 'Random'", () => {
    const onRotate = vi.fn();
    const onReset = vi.fn();
    const onRandom = vi.fn();

    render(<ActionsBar onRotate={onRotate} onReset={onReset} onRandom={onRandom} />);

    fireEvent.click(screen.getByText("Random"));

    expect(onRandom).toHaveBeenCalledTimes(1);
  });
});
