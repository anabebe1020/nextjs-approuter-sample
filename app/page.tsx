"use client";

import {
  Authenticator,
  ThemeProvider,
  translations,
  useTheme,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify/utils";
import Image from "next/image";
import { CommonConst } from "./(common)/_constants";
import { L10n } from "./(common)/_constants/l10n";
import { AuthTheme } from "./(common)/_styles/auth";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_CLIENT_ID!,
    },
  },
});
I18n.putVocabularies(translations);
I18n.setLanguage("ja");
I18n.putVocabularies(L10n);

export default function Home() {
  // components
  const components = {
    Header: LoginHeader,
  };

  return (
    <div
      style={{
        height: "96dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={AuthTheme}>
        <Authenticator hideSignUp components={components}>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user?.username}</h1>
              <button type="button" onClick={signOut}>
                Sign out
              </button>
            </main>
          )}
        </Authenticator>
      </ThemeProvider>
    </div>
  );
}

function LoginHeader() {
  const { tokens } = useTheme();
  return (
    <div
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: tokens.space.large.value,
      }}
    >
      <Image
        alt=""
        height={40}
        width={40}
        src="https://docs.amplify.aws/assets/logo-dark.svg"
      />
      <text>{CommonConst.APP_TITLE}</text>
    </div>
  );
}
