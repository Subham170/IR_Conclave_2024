import React from 'react';
import { Modal, Box, Typography, IconButton, Fade } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  transition: 'transform 0.4s ease-out', // Smooth transition effect
};

const ModalComponent = ({ open, handleClose, title, content }) => {
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open} timeout={400}>
        <Box
          sx={{
            ...style,

          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" align="center" sx={{ textDecoration: 'underline' }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 4, color: 'gray' }}>
            {content}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
