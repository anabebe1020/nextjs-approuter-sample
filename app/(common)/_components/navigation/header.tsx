import {
  AppShell,
  Burger,
  Flex,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { CommonConst } from '@/app/(common)/_constants';
import { ExitToAppIcon, SettingsIcon } from '@/app/(common)/_icons';
import Routes from '@/app/(common)/_routes';
import APP_STYLES from '@/app/(common)/_styles/app';

type Props = {
  logout: () => void;
};

export default function NavigationHeader(props: Props) {
  return (
    <AppShell.Header
      styles={{ header: { background: APP_STYLES.color.primary } }}
    >
      <Flex
        direction='row'
        h='100%'
        w='100%'
        align='center'
        justify='space-between'
        px={16}
      >
        <UnstyledButton component={Link} href={Routes.TopPage.path}>
          <Text size='lg' fw={700} c={APP_STYLES.color.huddleYellow}>
            {CommonConst.APP_TITLE}
          </Text>
        </UnstyledButton>

        <HeaderMenu {...props} />
      </Flex>
    </AppShell.Header>
  );
}

function HeaderMenu(props: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <Menu shadow='md' width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <Flex direction='row'>
          <Text>{}</Text>
          <Burger color='white' opened={opened} />
        </Flex>
      </Menu.Target>

      <Menu.Dropdown bg={APP_STYLES.color.primary}>
        <Menu.Label>Menu</Menu.Label>
        <Menu.Item
          component={Link}
          href={Routes.AccountSettingPage.path}
          c='white'
          leftSection={
            <SettingsIcon
              sx={{ color: APP_STYLES.color.huddleYellow, fontSize: 18 }}
            />
          }
        >
          アカウント設定
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          c='white'
          leftSection={
            <ExitToAppIcon
              sx={{ color: APP_STYLES.color.huddleYellow, fontSize: 18 }}
            />
          }
          onClick={props.logout}
        >
          ログアウト
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
