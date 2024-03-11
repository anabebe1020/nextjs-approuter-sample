import { AppShell, Container } from '@mantine/core';
import { signOut } from 'aws-amplify/auth';
import { PropsWithChildren, useState } from 'react';
import AppLoader from '../loader';
import NavigationBar from './bar';
import NavigationHeader from './header';
import APP_STYLES from '@/app/(common)/_styles/app';

export default function AppNavigation(props: PropsWithChildren) {
  const [isLoading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut();
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };
  return (
    <AppShell
      display='flex'
      header={{ height: APP_STYLES.size.headerHeight }}
      navbar={{ width: 200, breakpoint: 'sm' }}
    >
      <NavigationHeader logout={handleLogout} />
      <NavigationBar />
      <AppShell.Main>
        <Container
          fluid
          pt={0}
          px={0}
          w='80dvw'
          h={`calc(100dvH - ${APP_STYLES.size.headerHeight}px)`}
          bg={APP_STYLES.color.background}
        >
          <AppLoader visible={isLoading} />
          {props.children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
