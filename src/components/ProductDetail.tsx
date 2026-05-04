import { useEffect, useRef, useState } from "react";
import { Product } from "../entities";

const ProductDetail = ({ productId }: { productId: number }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [error, setError] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!productId) return;

    const controller = new AbortController();
    abortControllerRef.current = controller;

    fetch("/products/" + productId, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError((err as Error).message);
      })
      .finally(() => {
        abortControllerRef.current = null;
      });

    return () => {
      controller.abort();
    };
  }, [productId]);

  if (!productId) return <div>Error: Invalid ProductId</div>;

  if (error) return <div>Error: {error}</div>;

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product Detail</h1>
      <div>Name: {product.name}</div>
      <div>Price: ${product.price}</div>
    </div>
  );
};

export default ProductDetail;
