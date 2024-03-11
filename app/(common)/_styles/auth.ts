import { Theme } from '@aws-amplify/ui-react';
import APP_STYLES from './app';

// eslint-disable-next-line import/prefer-default-export
export const AuthTheme: Theme = {
  name: 'custome-theme',
  tokens: {
    components: {
      button: {
        fontWeight: { value: 700 },
        primary: {
          backgroundColor: APP_STYLES.color.primary,
          _hover: { backgroundColor: APP_STYLES.color.hoverPrimary },
        },
        link: {
          color: APP_STYLES.color.primary,
          _hover: {
            color: APP_STYLES.color.hoverPrimary,
            backgroundColor: APP_STYLES.color.hoverYellow,
          },
        },
      },
    },
  },
};
