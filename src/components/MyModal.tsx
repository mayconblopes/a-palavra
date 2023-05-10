import { Box, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy'
import React, { Dispatch, SetStateAction, useState } from 'react'
import colors from '../utils/colors'

export default function MyModal({
  open,
  title,
  content,
  setModalOpen
}: {
  open: boolean
  title: string,
  content: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
}) {
  // const [modalOpen, setModalOpen] = useState(open)
  return (
    <Modal open={open} onClose={() => setModalOpen(!open)}>
      <ModalDialog sx={{ backgroundColor: colors.darkGrey }}>
        <ModalClose />
        <Typography>{title}</Typography>
        <Typography>{content}</Typography>
      </ModalDialog>
    </Modal>
  )
}
