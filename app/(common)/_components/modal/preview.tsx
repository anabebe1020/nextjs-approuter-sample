import { Box, Button, Modal } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { ClearIcon } from '../../_icons';
import APP_STYLES from '../../_styles/app';

type Props = {
  opened: boolean;
  onClose: () => void;
  width?: number;
  sp?: boolean;
};

const BUTTON_SIZE = 40;
const MODAL_WIDTH = 578;

export default function ModalForPreview(props: PropsWithChildren<Props>) {
  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      centered
      size={props.sp ? undefined : 'lg'}
      styles={{
        inner: { top: 20, backgroundColor: 'transparent' },
        header: { display: 'none' },
        content: { overflowY: 'unset' },
        close: { color: APP_STYLES.color.textSecondary },
        body: {
          backgroundColor: 'white',
          width: props.sp ? undefined : props.width ?? MODAL_WIDTH,
          borderRadius: 4,
          padding: 0,
        },
      }}
    >
      <Button
        w={BUTTON_SIZE}
        h={BUTTON_SIZE}
        p={0}
        color='gray.4'
        variant='outline'
        onClick={props.onClose}
        styles={{
          root: {
            color: APP_STYLES.color.textSecondary,
            ':hover': { backgroundColor: APP_STYLES.color.hoverBackground },
            backgroundColor: 'white',
            position: 'fixed',
            top: -48,
            right: 0,
            zIndex: 10001,
          },
        }}
      >
        <ClearIcon fontSize='large' />
      </Button>

      <Box
        style={{
          maxHeight: '85dvH',
          padding: 16,
        }}
        pt={16}
      >
        {props.children}
      </Box>
    </Modal>
  );
}
