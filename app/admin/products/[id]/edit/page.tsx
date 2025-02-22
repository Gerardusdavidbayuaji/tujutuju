import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions/actions";

import ImageInputContainer from "@/components/form/ImageInputContainer";
import FormContainer from "@/components/form/FormContainer";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckBoxInput";
import PriceInput from "@/components/form/PriceInput";
import SubmitButton from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        <div className="border p-8 rounded-md">
          <ImageInputContainer
            action={updateProductImageAction}
            name={product.name}
            image={product.image}
            text="update image"
          >
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="url" value={product.image} />
          </ImageInputContainer>
          <FormContainer action={updateProductAction}>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <input type="hidden" name="id" value={id} />
              <FormInput
                type="text"
                name="name"
                label="product name"
                defaultValue={product.name}
              />
              <FormInput
                type="text"
                name="company"
                label="company"
                defaultValue={product.company}
              />

              <PriceInput defaultValue={product.price} />
            </div>
            <TextAreaInput
              name="description"
              labelText="product description"
              defaultValue={product.description}
            />
            <div className="mt-6">
              <CheckboxInput
                name="featured"
                label="featured"
                defaultChecked={product.featured}
              />
            </div>
            <SubmitButton text="update product" className="mt-8" />
          </FormContainer>
        </div>
      </h1>
    </section>
  );
}

export default EditProductPage;
