import useOnlineStatus from "../utils/useOnlineStatus";

const Contact = () => {
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus)
if(onlineStatus === false)
    return(
        <h1>Looks like you're oflline</h1>
    )
    
    return(
        <div className="contact">
            <h1>Please contact me</h1>
        </div>
    )
}

export default Contact;