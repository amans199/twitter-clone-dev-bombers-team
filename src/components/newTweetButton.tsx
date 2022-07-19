// import { Button } from "@mui/material"


type propTypes = {
    // icon: any,
    label: String,
    color: string,
    // variant: string,
}

const NewTweetButton = ({color, label} : propTypes) => {
    return (
        <div>
            <button 
            className='btn btn-primary  btn-sm rounded-pill px-3'
            onClick={() => {
                window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });}}>
                &#8593; See new Tweets
            </button>
        </div>
    )
}

export default NewTweetButton
