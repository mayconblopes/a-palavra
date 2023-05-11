import {
  Box,
  Button,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from '@mui/joy'
import React, { Dispatch, SetStateAction, useState } from 'react'
import colors from '../utils/colors'

export default function MyModal({
  open,
  title,
  content,
  setModalOpen,
}: {
  open: boolean
  title: string
  content: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
}) {
  // const [modalOpen, setModalOpen] = useState(open)
  return (
    <Modal open={open} onClose={() => setModalOpen(false)}>
      <ModalDialog sx={{ backgroundColor: colors.darkGrey, overflow: 'auto' }}>
        <ModalClose />
        <Typography className='fontJosefin' textColor={colors.yellow}>
          { title ? title.toLocaleUpperCase(): null}
        </Typography>
        <Typography
          className='fontRobotoMono'
          fontWeight='300'
          textColor={colors.white}
        >
          {content}
        </Typography>
        <Button
          color='warning'
          variant='soft'
          sx={{ m: '10px', color: colors.black }}
          onClick={() => setModalOpen(false)}
        >
          FECHAR
        </Button>
      </ModalDialog>
    </Modal>
  )
}
