import { LoadingOverlay } from '@mantine/core';
import APP_STYLES from '../../_styles/app';

type Props = {
  visible?: boolean;
};

export default function AppLoader({ visible }: Props) {
  return (
    <LoadingOverlay
      visible={visible}
      loaderProps={{ color: APP_STYLES.color.hoverYellow }}
    />
  );
}
