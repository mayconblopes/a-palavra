import { Box, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy'
import React, { Dispatch, SetStateAction, useState } from 'react'

export default function MyModal({
  open,
  content,
  setModalOpen
}: {
  open: boolean
  content: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
}) {
  // const [modalOpen, setModalOpen] = useState(open)
  return (
    <Modal open={open} onClose={() => setModalOpen(!open)}>
      <ModalDialog>
        <ModalClose />
        <Typography>{content}</Typography>
      </ModalDialog>
    </Modal>
  )
}
