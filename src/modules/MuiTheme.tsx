import React from 'react'
// import { Button, Box, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
// import { dark } from '@mui/material/styles/createPalette';

type propsType = {
    children: any
}

const MuiTheme = (props : propsType) => {

    const theme = createTheme({
        palette: {
          // mode: "dark",
            primary: {
                main: "#1DA1F2",
                light: "#97E3FF",
                dark: "#024E9A",
                // contrastText: ''
            },
            secondary: {
                main: "#CFD9DE",
                contrastText: '#ffffff',
                dark: "#000000"
            },
            error: {
                main: "#fa4233",
                // contrastText: 'darkred'
            },
            warning: {
                main: "#fcd61a",
                // contrastText: ''
            },
            info: {
                main: "#7366d8",
                // contrastText: ''
            },
            success: {
                main: "#23c59e",
                // contrastText: ''
            },
            dimMode: {
                main: '#15202b',
                // contrastText: '#fff',
            },
        },
        // status: {
        //     danger: "#fa4233",
        //     warning: "#fcd61a",
        //     info: "#7366d8",
        //     success: "#23c59e",
        // },
        typography: {
            fontFamily: '"Roboto", "Helvetica","Arial", sans-serif ',
            // fontSize: 15
        },
    })
    // theme.spacing(3)
    return (
        <ThemeProvider theme={theme}>
            { props.children }
        </ThemeProvider>
            
    )
}

export default MuiTheme