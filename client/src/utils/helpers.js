class Helpers {  
    
    
    // piece of code to set verification timer start time from button handlers
    // Avoid using it. This creates a mock time stapm for the creation of a token.
    // Use the actual createdAt sent by the mmutation called.

    setStartTime = () => {
        const verificationStartTime = Date.now();
        localStorage.setItem('verificationStartTime', verificationStartTime);
    }


    // logic to run the timer from whatever timestamp saved on localStorage
    // add this to whatever component that shows the time left to verify account
    // this function has to be called inside a useEffect hook set to run at component mount
    // (set that by adding ,[] after the closure curly bracket)
    /* 
        useEffect(()=>{
            Helpers.runVerificationTimer(setTimer);
        }, [])
    */

    // Also, for this function to actually work, the component must have this line of code
    /*
    const [timer, setTimer] = useState(0)
    */

    runVerificationTimer = () => {        
            const interval = setInterval(()=>{
                const verificationStartTime = localStorage.getItem('verificationStartTime');
                if(verificationStartTime){
                    const currentTime = Date.now();
                    const dueTime = parseInt(verificationStartTime, 10) + 3600000;
                    const remainingTime = dueTime - currentTime;
    
                    if(remainingTime <= 0) {
                        clearInterval(interval);
                        localStorage.removeItem('verificationStartTime');
                    }else{
                        setTimer(Math.floor(remainingTime/1000));
                    }
                }
            });
    
            return () => clearInterval(interval);        
    }

    // function to format timer (time in seconds) to MM:SS format
    // add this line in your code
    /* 
    const formattedTimer = Helpers.formatTime(timer);
    */

    formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds/60);
        const seconds = timeInSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }

}

export default new Helpers();