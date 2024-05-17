
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string;
  children: string;
  className:string
};

const NavLink = ({ href, children,className}: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={` transition-all ease-in-out duration-700 ${pathname === href? 'active' : ''} ${className}`} >
      {children}
    </Link>
  );
};

export default NavLink;