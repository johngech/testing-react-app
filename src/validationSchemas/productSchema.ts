import * as z from "zod";

export const productFormSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required").max(255),
  price: z
    .number({ message: "Price is required" })
    .min(1, "Price must be at least 1")
    .max(1000, "Price must be at most 1000"),
  categoryId: z.number().min(1, "Category is required"),
});

export type ProductFormData = z.infer<typeof productFormSchema>;
