import React, { useRef, useEffect } from 'react'
import Detector from '../../Components/ObjectDetector/Detector'
import './test.css'

const Test = (props) => {

    const fullscreenRef = useRef(null);
    // var element = document.getElementById("#container");

    function openFullscreen() {
        if (fullscreenRef.current.requestFullscreen) {
            fullscreenRef.current.webkitRequestFullscreen();
        } else if (fullscreenRef.current.webkitRequestFullscreen) { /* Safari */
            fullscreenRef.current.webkitRequestFullscreen();
        } else if (fullscreenRef.current.msRequestFullscreen) { /* IE11 */
            fullscreenRef.current.msRequestFullscreen();
        }
    }

    useEffect(() => {
        openFullscreen();
    }, [fullscreenRef.current])

    document.addEventListener("fullscreenchange", onFullScreenChange, false);
    document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
    document.addEventListener("mozfullscreenchange", onFullScreenChange, false);

    function onFullScreenChange() {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    
    if (fullscreenElement ===null){
        console.log("Exiting fullscreen", fullscreenElement);
        props.history.push('/terminated');
    }
    }

    return (
        <>
            <div ref={fullscreenRef} className='container-fluid m-0 p-0 test_container'>
                <div className='row m-0 p-0'>
                    <div className='col-12 m-0 p-0'>
                        {/* <button onClick={()=>{openFullscreen()}}>Test button for fullscreen</button> */}
                        <Detector propsData={props.history}/>
                        <div className='d-flex justify-content-center align-items-center'>
                            <iframe style={{zIndex:14}} src="https://forms.office.com/r/HiyuaLxpCT?embedded=true" width="640" height="1325" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
                {/* <Detector/> */}
            </div>
        </>
    )
}

export default Test
