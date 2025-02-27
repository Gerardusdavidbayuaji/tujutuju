import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";
import Image from "next/image";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        width={24}
        height={24}
        alt="User Profile"
        className="rounded-full object-cover"
      />
    );
  }
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
