import './GenericButton.scss'
import { Button } from "@mui/material"

type propsType = {
    icon: any,
    label: String
}

const GenericButton = (props : propsType) => {
    return (
        <div>
            <Button variant='contained' className='generic-button'>
                {props.icon} 
                {" "}
                {props.label}
            </Button>
        </div>
    )
}

export default GenericButton

