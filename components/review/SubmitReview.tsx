"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

import { createReviewAction } from "@/utils/actions/actions";

import TextAreaInput from "@/components/form/TextAreaInput";
import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RatingInput from "./RatingInput";

interface SubmitReviewProps {
  productId: string;
}

function SubmitReview({ productId }: SubmitReviewProps) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <Button
        size="lg"
        className="capitalize"
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="authorName"
              value={user?.firstName || "user"}
            />
            <input
              type="hidden"
              name="authorImageUrl"
              value={user?.imageUrl || ""}
            />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              labelText="feedback"
              defaultValue="Wow, outstanding product!"
            />
            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
