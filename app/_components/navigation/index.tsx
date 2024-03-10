import { AppShell, Container, LoadingOverlay } from '@mantine/core';
import { PropsWithChildren } from 'react';
import NavigationBar from './bar';
import NavigationHeader from './header';
import { APP_BACKGROUND_COLOR } from '@/app/(common)/_styles/app';

type Props = {
  isLoading: boolean;
  logout: () => void;
};

export default function AppNavigation(props: PropsWithChildren<Props>) {
  return (
    <AppShell
      display='flex'
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: 'sm' }}
    >
      <NavigationHeader logout={props.logout} />
      <NavigationBar />
      <AppShell.Main>
        <Container
          fluid
          pt={20}
          px={100}
          w='100dvw'
          h='calc(100dvH - 60px)'
          bg={APP_BACKGROUND_COLOR}
        >
          <LoadingOverlay visible={props.isLoading} />
          {props.children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
