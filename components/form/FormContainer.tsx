"use client";

import { useToast } from "@/hooks/use-toast";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { ReactNode } from "react";

import { actionFunction } from "@/utils/types/types";

interface FormContainerProps {
  action: actionFunction;
  children: ReactNode;
}

const initialState = {
  message: "",
};

function FormContainer({ action, children }: FormContainerProps) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
