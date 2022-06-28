import { Button, Box, Typography } from '@mui/material';

const TestMuiTheme = () => {
    return (
        <div>
            <Box height='300px' bgcolor='dimMode.main' width= '300px' margin='30px auto' padding='20px'>
                <Typography color='#fff' 
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    This is a warning box
                </Typography>
                <Button variant='contained' color='error' 
                    sx={{fontSize: '14px', margin:'20px auto', color: '#fff'}} >
                    Click here
                </Button>
            </Box>
        </div>
    )
}

export default TestMuiTheme
