"use server";

import { UploadImage } from "../config/supabase";
import db from "../config/db";

import { getAuthUser } from "./products";
import { renderError } from "./products";
import {
  validateWithZodSchema,
  productSchema,
  imageSchema,
} from "../types/schemas";

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await UploadImage(validatedFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      },
    });

    return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }
};
