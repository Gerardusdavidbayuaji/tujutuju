"use server";

export const createProductAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);
};
