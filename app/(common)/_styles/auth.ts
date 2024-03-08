import { Theme } from '@aws-amplify/ui-react';
import { APP_SECONDARY_COLOR } from './app';

export const AuthTheme: Theme = {
  name: 'custome-theme',
  tokens: {
    components: {
      authenticator: {},
      button: {
        fontWeight: { value: 700 },
        primary: {
          backgroundColor: APP_SECONDARY_COLOR,
        },
        link: {
          color: APP_SECONDARY_COLOR,
        },
      },
    },
  },
};
