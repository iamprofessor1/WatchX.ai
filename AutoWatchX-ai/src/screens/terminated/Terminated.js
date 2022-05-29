import React from 'react'
import './terminated.css'
import Button from '../../Components/Button/Button'

const Terminated = (props) => {
    return (
        <div className='container-fluid m-auto p-auto terminated_container d-flex justify-content-center align-items-center'>
            <h1> Malpractice and Cheating detected.</h1>
            <Button
                buttonType='sec-btn'
                handleClick={() => {
                    // props.history.push('/signup');
                    props.history.push('/');
                }}
                >
                Back to home screen
            </Button>
        </div>
    )
}

export default Terminated
