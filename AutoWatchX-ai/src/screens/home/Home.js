import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import Navbar from '../../Components/Navbar/Navbar';
import Button from '../../Components/Button/Button'


const Home = (props) => {
    return (
        <>
            <div className='LandingPage'>
                <main className='main-container'>
                    <Navbar />
                    <div className='main-a center'>
                        <h1>
                            Take  Your  Exam โ๏ธ <br />
                            With <h1 style={{color:"purple"}}> ๐ค AutoWatchX.ai ๐ค</h1>
                        </h1>
                        <p>
                           Powered by {' '}
                            <span> Artificial Intelligence & Deep Learning </span> for you and your students
                        </p>
                        {/* <p onClick={()=>props.history.push('/test')}>
                        Student?    Teacher?
                    </p> */}
                        <div className='main-a-btns'>
                            <Button className="btn btn-success"
                                buttonType='btn btn-success'
                                handleClick={() => {
                                    // props.history.push('/signup');
                                    props.history.push('/test');
                                }}
                            >
                                {/* Signup */}
                                ๐งช Take a trial ๐งช
                            </Button>
                            {/* <button onClick={()=>props.history.push('/test')}>Attempt test</button> */}
                        </div>
                    </div>
                    <div className='main-b'>
                        <div>
                            {/* <p>Trusted By</p>
                        <h2>50000+</h2>
                        <p>Registered Teachers</p> */}
                            <p>Get Exclusive features of </p>
                            <h2> ๐งโ๐ป WatchX.ai ๐งโ๐ป </h2>
                            <p>additionallly</p>
                        </div>  
                        <div>
                            <p>With new technolgy </p>
                            <h2>Automatic Monitoring ๐ค๐ฆพโ๏ธ๐ป</h2>
                            <p>No proctor needed</p>
                        </div>
                        {/* <div>
                        <p>We have taken</p>
                        <h2>25000+</h2>
                        <p>Tests Around The Globe</p>
                    </div> */}
                    </div>
                </main>
                
                <footer>
                    
                    <p>
                        <h2>Made with โค๏ธ by <span>VIKAS PANDEY</span>. </h2>
                    </p>
                </footer>
            </div>





        </>
    )
}

export default Home
