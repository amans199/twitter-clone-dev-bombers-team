import Chip from '@mui/material/Chip';

type propsType = {
    icon: any,
    label: String
}

const GenericButton = (props : propsType) => {
    return (
        <div>
            <Chip icon={props.icon} label={props.label} color='primary'
            sx={{ bgcolor: 'secondary.contrastText', width: '250px', fontSize: '13px', fontWeight: 'bold', color: 'black' }}/>
        </div>
    )
}

export default GenericButton