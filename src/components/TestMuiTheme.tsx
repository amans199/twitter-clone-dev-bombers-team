import { Button, Box, Typography } from '@mui/material';
import AppleIcon from '@material-ui/icons/Apple';
import GenericButton from './genericButton/GenericButton';

const TestMuiTheme = () => {
    return (
        <div>
            <Box height='300px' bgcolor='dimMode.main' width= '300px' margin='30px auto' padding='20px'>
                <Typography color='#fff' 
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        marginBottom: '20px' }}>
                    This is a warning box
                </Typography>
                <Button variant='contained' color='primary' 
                    sx={{fontSize: '14px', marginBottom: '30px !important', color: '#fff'}} >
                    Click here
                </Button>
                <GenericButton label="Sign up with Apple" icon={<AppleIcon />} />
            </Box>
        </div>
    )
}

export default TestMuiTheme
