'use client';

import {
  Authenticator,
  ThemeProvider,
  translations,
} from '@aws-amplify/ui-react';
import { Flex, Image, MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify/utils';
import { CommonConst } from './(common)/_constants';
import { L10n } from './(common)/_constants/l10n';
import { APP_PRIMARY_COLOR, APP_SECONDARY_COLOR } from './(common)/_styles/app';
import { AuthTheme } from './(common)/_styles/auth';
import ArticleListPage from './(pages)/articles';
import { AppNavigation } from './_components';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_CLIENT_ID!,
    },
  },
});
I18n.putVocabularies(translations);
I18n.setLanguage('ja');
I18n.putVocabularies(L10n);

export default function Home() {
  // components
  const components = {
    Header: LoginHeader,
  };

  return (
    <div
      style={{
        height: '96dvh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MantineProvider>
        <ThemeProvider theme={AuthTheme}>
          <Authenticator hideSignUp components={components}>
            {(authProps) => (
              <AppNavigation
                logout={() => authProps.signOut?.()}
                isLoading={false}
              >
                <ArticleListPage />
              </AppNavigation>
            )}
          </Authenticator>
        </ThemeProvider>
      </MantineProvider>
    </div>
  );
}

function LoginHeader() {
  return (
    <Flex
      display='flex'
      w='100%'
      px={12}
      direction='row'
      align='center'
      justify='center'
      gap='md'
      bg={APP_SECONDARY_COLOR}
    >
      <Image
        alt=''
        height={24}
        width={24}
        src='https://docs.amplify.aws/assets/logo-dark.svg'
      />
      <Text c={APP_PRIMARY_COLOR} size='xl'>
        {CommonConst.APP_TITLE}
      </Text>
    </Flex>
  );
}
