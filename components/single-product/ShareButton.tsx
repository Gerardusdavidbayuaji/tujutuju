"use client";

import {
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share";

import { Button } from "@/components/ui/button";
import { LuShare2 } from "react-icons/lu";
import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@/components/ui/popover";

interface ShareButtonProps {
  productId: string;
  name: string;
}

function ShareButton({ productId, name }: ShareButtonProps) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/product/${productId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} subject={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
