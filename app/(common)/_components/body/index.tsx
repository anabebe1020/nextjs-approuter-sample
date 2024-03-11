import { Container, Flex, Title } from '@mantine/core';
import { PropsWithChildren } from 'react';
import AppLoader from '../loader';

type Props = {
  isLoading?: boolean;
  title: string;
  rightActions?: React.ReactNode[];
};

export default function AppBody(props: PropsWithChildren<Props>) {
  return (
    <Container p={24}>
      <AppLoader visible={props.isLoading} />
      <Flex direction='column'>
        <Flex direction='row' align='center' justify='space-between'>
          <Title order={2} lineClamp={2}>
            {props.title}
          </Title>
          <Flex direction='row' align='center' gap={12}>
            {props.rightActions}
          </Flex>
        </Flex>
        {props.children}
      </Flex>
    </Container>
  );
}
