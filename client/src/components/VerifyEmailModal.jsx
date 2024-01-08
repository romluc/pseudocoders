import React, {useState, useEffect} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { VERIFY_EMAIL, RESEND_VERIFICATION_EMAIL } from '../utils/mutations';
import { QUERY_VERIFICATION_TOKEN } from '../utils/queries';
import {Modal, Button, Form} from 'react-bootstrap';
import Auth from '../utils/auth';
import Helpers from '../utils/helpers';

const VerifyEmailModal = ({show, handleClose}) => {
    const [pin, setPin] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [timer, setTimer] = useState(0);
    const [verificationToken, setVerificationToken] = useState(null);
    const [ startTime, setStartTime] = useState(localStorage.getItem('verificationStartTime') || '')       
        
    const [verifyEmail, {verifyError, verifyData}]= useMutation(VERIFY_EMAIL);
    const [resendVerificationEmail, {resendError, resendData}] = useMutation(RESEND_VERIFICATION_EMAIL);
   
    const {tokenLoading, tokenError, tokenData, refetch: refetchVerificationToken} = useQuery(QUERY_VERIFICATION_TOKEN, {
        variables: {userId: Auth.getProfile().data?._id}, 
        onCompleted: (tokenData) => {
            setVerificationToken(tokenData.verificationToken)
        }
    });
  

    /*
    const { ndTokenLoading, ndTokenError, ndTokenData } = useQuery(QUERY_VERIFICATION_TOKEN, {
        variables: {userId: Auth.getProfile().data?._id},
        onCompleted: (ndTokenData) => {
            setVerificationToken(ndTokenData)
            localStorage.setItem('verificationToken', ndTokenData)            
        },
        skip: true
    })
    */

    const formattedTimer = Helpers.formatTime(timer);
    

    const handleVerify = async(e) => {
        e.preventDefault();
        setShowMessage(true)
        try{
            const {data} = await verifyEmail({
                variables: {
                    incomingPin: pin,
                    userId: Auth.getProfile().data._id
                }
            });
            console.log({data});

            if(data.verifyEmail.isMatched){
                setMessage('Your email is verified! Welcome!');
                setIsVerified(true);
                Auth.login(data.verifyEmail.token);
            }else{
                setMessage('The pin number you provided is wrong.');                
            }
        }catch(err){
            console.error(err); 
            console.log(err.message)
            setMessage(err.message)           
        }
    }

        
    const handleSendNewCode = async(e) => {
        e.preventDefault();

        try {
            const {data} = await resendVerificationEmail({
                variables: {
                    userId: Auth.getProfile().data._id
                },                
            })
           setStartTime(data.resendVerificationEmail.createdAt) 
        } catch (error) {
            console.error(error.message, error)
        }
    };

    verificationToken && localStorage.setItem('verificationStartTime', verificationToken.createdAt)
    
 
    const currentTime = Date.now();
    const dueTime = parseInt(startTime, 10) + 3600000;
    const remainingTime = dueTime - currentTime;

    let isExpired;
    remainingTime <=0 ? isExpired = true : isExpired = false

    const verificationTimer = () => {        
        
        setTimer(Math.floor(remainingTime/1000))
        let interval;
        interval = setInterval(()=>{
            if(remainingTime > 0){
                setTimer(timer - 1)
            }else{            
                setTimer(0);
                return () => clearInterval(interval); 
            }
        }, 1000)
    }  

    Auth.getProfile().data.verified == false && useEffect(()=>{        
        verificationTimer()
    }, [timer]);    
    

    return isVerified ? (<div className='alert alert-success' role='alert'>{message}</div>) : (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Verify your Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formName'>
                        <p className='alert alert-success'>Enter the pin number sent to your email address on the field below. If you don't find the email, check the spam box.</p>
                        <Form.Label>Pin: </Form.Label>
                        <Form.Control
                        type='text'
                        value={pin}
                        onChange={(e)=> setPin(String(e.target.value))}></Form.Control>
                    </Form.Group>                    
                </Form>
                {showMessage && <div className='text-danger'>{message}</div>}
            </Modal.Body>
            <Modal.Footer>
                {!isExpired && <p className='text-danger'>Time before pin number expires: {formattedTimer}</p>}
                {!isExpired && <Button variant='primary' onClick={handleVerify}>
                    Verify Email
                </Button>}
                {isExpired && <div className='text-danger'>The Pin number to verify your account has expired. Click the button to receive a new one.</div>}
                {<Button variant='primary' onClick={handleSendNewCode}>
                    Send New Pin
                </Button>}
            </Modal.Footer>
        </Modal>
    )
}

export default VerifyEmailModal;