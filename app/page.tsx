'use client';

import { Button } from '@mantine/core';
import { AppNavigation } from './(common)/_components';
import AppBody from './(common)/_components/body';

const PAGE_TITLE = '記事一覧';

export default function Home() {
  return (
    <AppNavigation>
      <AppBody
        isLoading={false}
        title={PAGE_TITLE}
        rightActions={[
          <Button key='create' variant='default'>
            新規作成
          </Button>,
        ]}
      >
        {}
      </AppBody>
    </AppNavigation>
  );
}
