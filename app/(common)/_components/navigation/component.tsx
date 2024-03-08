'use client';

import { usePathname } from 'next/navigation';

export default function Navigation() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <PageLink href='/'>TOP</PageLink>
      <Spacer />
      <PageLink href='/first'>FIRST</PageLink>
    </div>
  );
}

function PageLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return pathname === href ? (
    <text style={{ fontSize: '24px' }}>{children}</text>
  ) : (
    <a href={href} style={{ fontSize: '24px' }}>
      {children}
    </a>
  );
}

function Spacer() {
  return <div style={{ height: '8px' }} />;
}
