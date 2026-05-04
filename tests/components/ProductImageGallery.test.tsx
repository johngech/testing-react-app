import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing when no images are found", () => {
    const imageUrls: string[] = [];

    const { container } = render(
      <ProductImageGallery imageUrls={imageUrls} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    const imageUrls: string[] = ["a.png", "b.jpg", "c.gif"];

    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(3);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
