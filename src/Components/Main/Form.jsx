import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React, { useState, Fragment } from 'react';

const Form = () => {
    const [countryNumber, setCountryNumber] = useState('AM');
    const [makeOrder, setMakeOrder] = useState(false);
    const [orderType, setOrderType] = useState('selfcall');

    const handleChangeCountryNumber = (newValue) => {
        setCountryNumber(newValue);
    };

    const handleChangeOrderType = (event) => {
        setOrderType(event.target.value);
        setMakeOrder(event.target.value === 'order');
    };

    const commonSx = {
        marginBottom: 1,
    };

    return (
        <FormControl>
            <Typography variant='h6' mb={2} fontWeight='bold'>Доставка</Typography>
            <TextField
                id="standard-basic"
                label="Ваша имя"
                variant="outlined"
                size="small"
                sx={commonSx}
            />
            <MuiTelInput
                value={countryNumber}
                onChange={handleChangeCountryNumber}
                defaultCountry="AM"
                size="small"
                sx={commonSx}
            />
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={orderType}
                onChange={handleChangeOrderType}
                sx={commonSx}
            >
                <FormControlLabel
                    value="selfcall"
                    control={<Radio />}
                    label="Самовызов"
                />
                <FormControlLabel
                    value="order"
                    control={<Radio />}
                    label="Доставка"
                />
                {makeOrder && (
                    <Fragment>
                        <TextField
                            id="address-basic"
                            label="Улица, дом, квартира"
                            variant="outlined"
                            size="small"
                            sx={commonSx}
                        />
                        <Box>
                            <TextField
                                id="floor-basic"
                                label="Этаж"
                                sx={{ width: '47%', marginRight: '16px' }}
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                id="intercom-basic"
                                label="Домофон"
                                sx={{ width: '47%' }}
                                variant="outlined"
                                size="small"
                            />
                        </Box>
                    </Fragment>
                )}
            </RadioGroup>
        </FormControl>
    );
};

export default Form;
