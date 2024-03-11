'use client';

import {
  Authenticator,
  ThemeProvider,
  View,
  translations,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Center, Flex, Image, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { Amplify } from 'aws-amplify';
import { I18n } from 'aws-amplify/utils';
import { PropsWithChildren } from 'react';
import { CommonConst } from '@/app/(common)/_constants';
import { L10n } from '@/app/(common)/_constants/l10n';
import APP_STYLES from '@/app/(common)/_styles/app';
import { AuthTheme } from '@/app/(common)/_styles/auth';

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

export default function AuthProvider({ children }: PropsWithChildren) {
  // components
  const components = {
    Header: LoginHeader,
  };

  return (
    <Authenticator.Provider>
      <ThemeProvider theme={AuthTheme}>
        <Center h='100dvh'>
          <Authenticator hideSignUp components={components}>
            <View>{children}</View>
          </Authenticator>
        </Center>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

function LoginHeader() {
  return (
    <Flex
      display='flex'
      w='100%'
      p={12}
      direction='row'
      align='center'
      justify='center'
      gap='md'
      bg={APP_STYLES.color.primary}
    >
      <Image alt='' height={24} width={24} src='/app_icon.png' />
      <Text c={APP_STYLES.color.huddleYellow} size='xl'>
        {CommonConst.APP_TITLE}
      </Text>
    </Flex>
  );
}
