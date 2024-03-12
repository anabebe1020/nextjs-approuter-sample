'use client';

import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppNavigation, ModalForSubmit } from './(common)/_components';
import AppBody from './(common)/_components/body';

const PAGE_TITLE = '記事一覧';

export default function Home() {
  const [openedModal, modalHandler] = useDisclosure();

  return (
    <AppNavigation>
      <AppBody
        isLoading={false}
        title={PAGE_TITLE}
        rightActions={[
          <Button key='create' variant='default' onClick={modalHandler.open}>
            新規作成
          </Button>,
        ]}
      >
        {}
      </AppBody>

      <ModalForSubmit
        opened={openedModal}
        onClose={modalHandler.close}
        isLoading={false}
        onSubmit={() => {}}
        submitLabel='作成'
        title='新規作成'
        description='新規作成しますか？'
      />
    </AppNavigation>
  );
}
