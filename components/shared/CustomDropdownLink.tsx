import Link from "next/link";
import { ReactNode } from "react";

const CustomDropDownLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="block px-4 py-2 text-sm font-medium text-black-75 hover:text-brand flex flex-row items-center gap-1"
      >
        {children}
      </Link>
    </li>
  );
};

export default CustomDropDownLink;
