'use client';

import { Button } from '@mantine/core';
import { AppNavigation } from '@/app/(common)/_components';
import AppBody from '@/app/(common)/_components/body';

const PAGE_TITLE = 'ゲーム一覧';

export default function GameListPage() {
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
