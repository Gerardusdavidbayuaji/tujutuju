import { Separator } from "@/components/ui/separator";

interface titleProps {
  text: string;
}

function SectionTitle({ text }: titleProps) {
  return (
    <div>
      <h2 className="text-2xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
