import './detector.css'
import React, { useState, useEffect , useRef } from 'react';
import Webcam from 'react-webcam';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as cocossd from "@tensorflow-models/coco-ssd"
import { drawRect } from "../utilities";

const Detector = (props) => {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [missingCounter, setMissingCounter] = useState(0);
    const [phoneCounter, setPhoneCounter] = useState(0);
    const [bookCounter, setBookCounter] = useState(0);
    const [multipleCounter, setMultipleCounter] = useState(0);
    // const [toastOpen, setToastOpen] = useState(false);

    const notify = () => {
        // toast.error('WARNING: Phone detected!');
        // toast.clearWaitingQueue();
        toast.error(<div>WARNING
        {/* NO. {phoneCounter} */}
        : Phone detected!</div>,{
        onOpen: ()=>setPhoneCounter(phoneCounter=>phoneCounter+1)
        });
        toast.clearWaitingQueue();
    }

    const notifyBook = () => {
        toast.error(<div>WARNING
        {/* NO. {bookCounter} */}
        : Book detected!</div>,{
        onOpen: ()=>setBookCounter(bookCounter=>bookCounter+1)
        });
        toast.clearWaitingQueue();
    }

    const notifyStudent = () => {
        console.log("MC",missingCounter)
        toast.error(<div>WARNING 
        {/* NO. {missingCounter} */}
        : Student missing!</div>,{
        onOpen: ()=>{setMissingCounter(missingCounter=>missingCounter+1);
            // setToastOpen(true);
        },
        // onClose: ()=>setToastOpen(false)
        });
        toast.clearWaitingQueue();
    }

    const notifyMultipleStudents = () => {
        // toast.error('WARNING: Multiple people visible!');
        // toast.clearWaitingQueue();
        toast.error(<div>WARNING 
        {/* NO. {multipleCounter} */}
        : Multiple persons detected!</div>,{
        onOpen: ()=>setMultipleCounter(multipleCounter=>multipleCounter+1)
        });
        toast.clearWaitingQueue();
    }

    // Main function
    const runCoco = async () => {
        // 3. TODO - Load network 
        const net = await cocossd.load();
        
        //  Loop and detect hands
        setInterval(() => {
        detect(net);
        }, 10);
    };

    let obj

    const detect = async (net) => {
        // Check data is available
        if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
        ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // 4. TODO - Make Detections
        obj = await net.detect(video);
        // if(toastOpen===false){
            if(obj && obj.length>0){

            if (obj.filter(e => e.class === 'cell phone').length > 0) {
                notify();
            }
            if (obj.filter(e => e.class === 'book').length > 0) {
                notifyBook();
            }
            if (obj.filter(e => e.class === 'person').length > 1) {
                notifyMultipleStudents();
            }
            }
            else{
            notifyStudent();
            }
        // }
        
        console.log("Model output:",obj);

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");

        // 5. TODO - Update drawing utility
        drawRect(obj, ctx)  
        }
    };

    useEffect(()=>{runCoco()},[]);

    useEffect(() => {
        // console.log("MC",missingCounter, toastOpen)
        console.log("Book count",bookCounter)
        console.log("Missing count",missingCounter)
        console.log("Phone count",phoneCounter)
        console.log("Multiple count",multipleCounter)
        if(bookCounter>2 || missingCounter>2 || phoneCounter>2 || multipleCounter>2){
        // window.alert('Session terminated due to detected malpractise')
        // console.log('Session terminated due to detected malpractise')
        props.propsData.push('/terminated')
        }
    }, [phoneCounter, missingCounter, bookCounter, multipleCounter
        //  toastOpen
    ])

    useEffect(() => {
        console.log("Webcam",webcamRef.current)
    }, [webcamRef.current])

    return (
        <div className="Detect">
            <header className="App-header">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                limit={1}
                />
                <Webcam
                ref={webcamRef}
                muted={true} 
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    // zindex: 9,
                    // width: 640,
                    // height: 480,
                    //uncomment above and comment below for demo
                    width: '100vw',
                    height: '100vh',
                    opacity: 0,
                    zIndex: -1,
                }}
                />

                <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 8,
                    // width: 640,
                    // height: 480,
                    //uncomment above and comment below for demo
                    width: '100vw',
                    height: '100vh',
                }}
                />
            </header>
        </div>
    )
}

export default Detector
