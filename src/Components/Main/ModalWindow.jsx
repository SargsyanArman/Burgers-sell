import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import ModalMui from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import bublik from '../../../images/public/bublik.png'

import Form from './Form';

const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 684,
    height: 432,
    bgcolor: 'background.paper',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 7px 40px rgba(0, 0, 0, 0.2)',
    borderRadius: '12px'
}

const styleFirstHalf = {
    paddingTop: '9%',
    paddingLeft: "17px",
    width: '50%',
    bgcolor: '#FFAB08',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
};

const styleSecondHalf = {
    display: 'flex',
    flexDirection: 'column',
    padding: '35px 30px 0px 30px',
    width: '50%',
};




const ModalWindow = ({ handleMouseUp }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button
                className='mt-2 ml-5 py-[11px] px-[100px] text-white bg-[#F86310] rounded-[12px] cursor-pointer hover:bg-[#FFAB08] focus:bg-[#F86310]'
                onMouseUp={handleMouseUp}
                onClick={handleOpen}
            >
                Добавить
            </button>
            <ModalMui
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={styleFirstHalf}>
                        <img src={bublik} alt="bublik photo" />
                    </Box>

                    <Box sx={styleSecondHalf}>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Form handleMouseUp={handleMouseUp} />
                    </Box>
                </Box>
            </ModalMui>
        </div >
    )
}

export default ModalWindow