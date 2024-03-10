import { AppShell, Center, Flex, Text, UnstyledButton } from '@mantine/core';
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

export default function NavigationBar() {
  const pathname = usePathname();

  const navLinks = NAV_ITEMS.map((item) => (
    <UnstyledButton
      key={item.label}
      component={Link}
      href={item.hrefs[0]}
      px={12}
      styles={(theme) => ({
        root: {
          width: '100%',
          '&:hover': {
            backgroundColor: theme.colors.yellow[1],
          },
          backgroundColor: item.hrefs.includes(pathname)
            ? theme.colors.yellow[1]
            : 'white',
        },
      })}
    >
      <Flex direction='row' py={12}>
        <Center>{item.icon}</Center>
        <Text ml='16px'>{item.label}</Text>
      </Flex>
    </UnstyledButton>
  ));

  return (
    <AppShell.Navbar>
      <AppShell.Section grow>
        <Flex direction='column' p={12} gap={0}>
          {navLinks}
        </Flex>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
