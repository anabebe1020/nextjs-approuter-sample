const Routes = {
  TopPage: { path: '/' },
  ArticleCreatePage: { path: '/articles/create' },
  ArticleDetailPage: { path: '/articles/[aid]' },
  ArticleEditPage: { path: '/articles/[aid]/edit' },
  GameListPage: { path: '/games' },
  MemberListPage: { path: '/members' },
  HeadCoachCreatePage: { path: '/members/[tid]/head_coach/create' },
  HeadCoachDetailPage: { path: '/members/[tid]/head_coach/[hid]' },
  HeadCoachEditPage: { path: '/members/[tid]/head_coach/[hid]/edit' },
  StaffCreatePage: { path: '/members/[tid]/staff/create' },
  StaffDetailPage: { path: '/members/[tid]/staff/[sid]' },
  StaffEditPage: { path: '/members/[tid]/staff/[sid]/edit' },
  PlayerCreatePage: { path: '/members/[tid]/player/create' },
  PlayerDetailPage: { path: '/members/[tid]/player/[pid]' },
  PlayerEditPage: { path: '/members/[tid]/player/[pid]/edit' },
  BackNumberListPage: { path: '/buck_numbers' },
  ArticleLeagueListPage: { path: '/article_leagues' },
  ArticleLeagueDetailPage: { path: '/article_leagues/[lid]' },
  LeagueListPage: { path: '/leagues' },
  LeagueDetailPage: { path: '/leagues/[lid]' },
  TeamCreatePage: { path: '/leagues/[lid]/create' },
  TeamDetailPage: { path: '/leagues/[lid]/[tid]' },
  TeamEditPage: { path: '/leagues/[lid]/[tid]/edit' },
  UserListPage: { path: '/users' },
  OperatorListPage: { path: '/operators' },
  WithdrawalSurveyListPage: { path: '/withdrawal' },
  WithdrawalAnswerListPage: { path: '/withdrawal/answers' },
  WithdrawalWantListPage: { path: '/withdrawal/wants' },
  AccountSettingPage: { path: '/settings' },
  NotFoundPage: { path: '/404' },
} as const;

export default Routes;