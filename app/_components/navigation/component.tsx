'use client';

import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {pathname === '/' ? <text>TOP</text> : <a href="/">TOP</a>}
      {pathname === '/first' ? <text>FIRST</text> : <a href="/first">FIRST</a>}
    </div>
  );
}