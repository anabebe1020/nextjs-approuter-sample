import { AppShell, Flex, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CommonConst } from '@/app/(common)/_constants';
import { ExitToAppIcon, SettingsIcon } from '@/app/(common)/_icons';
import Routes from '@/app/(common)/_routes';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
} from '@/app/(common)/_styles/app';

type Props = {
  logout: () => void;
};

export default function NavigationHeader({ logout }: Props) {
  const { push } = useRouter();

  return (
    <AppShell.Header styles={{ header: { background: APP_SECONDARY_COLOR } }}>
      <Flex
        direction='row'
        h='100%'
        w='100%'
        align='center'
        justify='space-between'
        px={16}
      >
        <UnstyledButton component={Link} href={Routes.TopPage.path}>
          <Text size='lg' fw={700} c={APP_PRIMARY_COLOR}>
            {CommonConst.APP_TITLE}
          </Text>
        </UnstyledButton>

        <Flex direction='row' gap={24}>
          <UnstyledButton
            component='a'
            onClick={() => push(Routes.AccountSettingPage.path)}
          >
            <Flex direction='row' gap={8}>
              <SettingsIcon sx={{ color: APP_PRIMARY_COLOR, fontSize: 18 }} />
              <Text c={APP_PRIMARY_COLOR} size='sm'>
                アカウント設定
              </Text>
            </Flex>
          </UnstyledButton>

          <UnstyledButton component='a' onClick={logout}>
            <Flex direction='row' gap={8}>
              <ExitToAppIcon sx={{ color: APP_PRIMARY_COLOR, fontSize: 18 }} />
              <Text c={APP_PRIMARY_COLOR} size='sm'>
                ログアウト
              </Text>
            </Flex>
          </UnstyledButton>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
}
