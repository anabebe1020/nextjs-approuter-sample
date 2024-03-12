import {
  Box,
  Flex,
  Group,
  Loader,
  Modal,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { Error } from '@mui/icons-material';
import APP_STYLES from '../../_styles/app';

type Props = {
  opened: boolean;
  onSubmit: () => void;
  onClose: () => void;
  isLoading: boolean;
  title: string;
  description: string;
  submitLabel: string;
  warning?: boolean;
};

export default function ModalForSubmit(props: Props) {
  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      title={
        props.warning ? (
          <Flex direction='row' gap={4}>
            <Error sx={{ color: APP_STYLES.color.errorMain, fontSize: 20 }} />
            <Text fw={700}>{props.title}</Text>
          </Flex>
        ) : (
          <Text fw={700}>{props.title}</Text>
        )
      }
      centered
    >
      <Flex direction='column' gap={24}>
        <Box>
          <Text c={APP_STYLES.color.textSecondary}>{props.description}</Text>
        </Box>

        <Group py={4} justify='flex-end'>
          <UnstyledButton
            variant='subtle'
            style={{ fontSize: 14, color: APP_STYLES.color.textPrimary }}
            onClick={props.onClose}
          >
            キャンセル
          </UnstyledButton>
          <UnstyledButton
            variant='subtle'
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: props.warning
                ? APP_STYLES.color.errorMain
                : APP_STYLES.color.textPrimary,
            }}
            onClick={props.onSubmit}
          >
            {props.isLoading ? (
              <Loader color={APP_STYLES.color.huddleYellow} />
            ) : (
              props.submitLabel
            )}
          </UnstyledButton>
        </Group>
      </Flex>
    </Modal>
  );
}
