import { cn } from "@/lib/utils";

interface headingProps {
  heading?: string;
  className?: string;
}

const heanding = "No items found.";

function EmptyList({ heading, className }: headingProps) {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
}

export default EmptyList;
