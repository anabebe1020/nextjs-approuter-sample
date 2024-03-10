import { Button, Container, Flex, Title } from '@mantine/core';

const PAGE_TITLE = '記事一覧';

export default function ArticleListPage() {
  return (
    <Container p={24}>
      <Flex direction='row' align='center' justify='space-between'>
        <Title order={2} lineClamp={2}>
          {PAGE_TITLE}
        </Title>
        <Button>新規作成</Button>
      </Flex>
    </Container>
  );
}
