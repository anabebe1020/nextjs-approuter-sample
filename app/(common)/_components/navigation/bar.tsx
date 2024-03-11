import {
  AppShell,
  Box,
  Center,
  Flex,
  Text,
  UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import {
  ArticleIcon,
  EventNoteIcon,
  GroupsIcon,
  LocalOfferIcon,
  ManageAccountsIcon,
  MenuBookIcon,
  PersonSearchIcon,
  QuestionAnswerIcon,
  SportsFootballIcon,
} from '@/app/(common)/_icons';
import Routes from '@/app/(common)/_routes';
import APP_STYLES from '@/app/(common)/_styles/app';

type NavItem = {
  label: string;
  hrefs: string[];
  icon: ReactNode;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: '記事',
    hrefs: [
      Routes.TopPage.path,
      Routes.ArticleDetailPage.path,
      Routes.ArticleCreatePage.path,
      Routes.ArticleEditPage.path,
    ],
    icon: <ArticleIcon />,
  },
  {
    label: '試合日程',
    hrefs: [Routes.GameListPage.path],
    icon: <EventNoteIcon />,
  },
  {
    label: '選手名鑑',
    hrefs: [
      Routes.MemberListPage.path,
      Routes.HeadCoachCreatePage.path,
      Routes.HeadCoachDetailPage.path,
      Routes.HeadCoachEditPage.path,
      Routes.StaffCreatePage.path,
      Routes.StaffDetailPage.path,
      Routes.StaffEditPage.path,
      Routes.PlayerCreatePage.path,
      Routes.PlayerDetailPage.path,
      Routes.PlayerEditPage.path,
    ],
    icon: <GroupsIcon />,
  },
  {
    label: 'リーグ(記事)',
    hrefs: [
      Routes.ArticleLeagueListPage.path,
      Routes.ArticleLeagueDetailPage.path,
    ],
    icon: <LocalOfferIcon />,
  },
  {
    label: 'リーグ(チーム)',
    hrefs: [
      Routes.LeagueListPage.path,
      Routes.LeagueDetailPage.path,
      Routes.TeamDetailPage.path,
      Routes.TeamCreatePage.path,
      Routes.TeamEditPage.path,
    ],
    icon: <SportsFootballIcon />,
  },
  {
    label: 'バックナンバー',
    hrefs: [Routes.BackNumberListPage.path],
    icon: <MenuBookIcon />,
  },
  {
    label: 'ユーザー',
    hrefs: [Routes.UserListPage.path],
    icon: <PersonSearchIcon />,
  },
  {
    label: '管理ユーザー',
    hrefs: [Routes.OperatorListPage.path],
    icon: <ManageAccountsIcon />,
  },
  {
    label: '退会理由',
    hrefs: [
      Routes.WithdrawalSurveyListPage.path,
      Routes.WithdrawalAnswerListPage.path,
      Routes.WithdrawalWantListPage.path,
    ],
    icon: <QuestionAnswerIcon />,
  },
];

const STASTA_NAV_ITEMS: NavItem[] = [
  {
    label: 'ユーザー',
    hrefs: [
      Routes.TopPage.path,
      //
    ],
    icon: <PersonSearchIcon />,
  },
];

export default function NavigationBar() {
  const navLinks = NAV_ITEMS.map((item) => (
    <NavigationItem key={item.hrefs[0]} item={item} />
  ));
  const stastaNavLinks = STASTA_NAV_ITEMS.map((item) => (
    <NavigationItem key={item.hrefs[0]} item={item} />
  ));

  return (
    <AppShell.Navbar>
      <Flex direction='column' p={12} gap={0}>
        <NavigationCategory label='HUDDLE' />
        {navLinks}
        <NavigationCategory label='スタスタ' />
        {stastaNavLinks}
      </Flex>
    </AppShell.Navbar>
  );
}

function NavigationCategory({ label }: { label: string }) {
  return (
    <Box px={12} py={12} bg={APP_STYLES.color.primary}>
      <Text c={APP_STYLES.color.huddleYellow} fw={700}>
        {label}
      </Text>
    </Box>
  );
}

type HeaderMenuProps = {
  item: NavItem;
};

function NavigationItem(props: HeaderMenuProps) {
  const pathname = usePathname();

  return (
    <UnstyledButton
      key={props.item.label}
      component={Link}
      href={props.item.hrefs[0]}
      px={12}
      styles={(theme) => ({
        root: {
          width: '100%',
          '&:hover': {
            backgroundColor: theme.colors.yellow[1],
          },
          backgroundColor: props.item.hrefs.includes(pathname)
            ? theme.colors.yellow[1]
            : 'white',
        },
      })}
    >
      <Flex direction='row' py={12}>
        <Center>{props.item.icon}</Center>
        <Text ml='16px'>{props.item.label}</Text>
      </Flex>
    </UnstyledButton>
  );
}
