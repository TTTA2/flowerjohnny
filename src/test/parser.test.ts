import { describe, it, expect } from "vitest";
import { createNodes } from "../internal/node/parser";
// import { createNodes } from "./path/to/your/module"; // モジュールのパスを指定

describe("createNodes", () => {
  it("should parse text without tokens correctly", () => {
    const source = "This is plain text without tokens.";
    const result = createNodes(source);

    expect(result).toEqual([
      { type: "Text", text: "This is plain text without tokens." },
    ]);
  });

  it("should parse text with Description tokens correctly", () => {
    const source = "Text before $$$$$ Description token.";
    const result = createNodes(source);

    expect(result).toEqual([
      { type: "Text", text: "Text before " },
      { type: "Text", text: " Description token." },
    ]);
  });

  it("should parse text with Template tokens correctly", () => {
    const source = "Text before %%%%% Template token.";
    const result = createNodes(source);

    expect(result).toEqual([
      { type: "Text", text: "Text before " },
      { type: "Text", text: " Template token." },
    ]);
  });

  it("should handle multiple tokens in a string", () => {
    const source = "Start $$$$$ middle %%%%% end.";
    const result = createNodes(source);

    expect(result).toEqual([
      { type: "Text", text: "Start " },
      { type: "Text", text: " middle %%%%% end." },
    ]);
  });

  it("should ignore incomplete token sequences", () => {
    const source = "Text with incomplete $$ tokens.";
    const result = createNodes(source);

    expect(result).toEqual([
      { type: "Text", text: "Text with incomplete $$ tokens." },
    ]);
  });

  it("should trim leading newlines in segments", () => {
    const source = "Text before\n$$$$$ Description with newline.";
    const result = createNodes(source);

    expect(result).toEqual([
      { type: "Text", text: "Text before\n" },
      { type: "Text", text: " Description with newline." },
    ]);
  });

  it("should handle empty input", () => {
    const source = "";
    const result = createNodes(source);

    expect(result).toEqual([]);
  });
});
