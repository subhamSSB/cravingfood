import { useRouteError } from "react-router-dom";
const Error = () => {
    let errStatus = useRouteError();
    console.log(errStatus)
    return(
        <div className="error-page">
            <h1>Hello myself error, how are you feeling 😂</h1>
            <p>{errStatus.status}: {errStatus.statusText}</p>
        </div>
    )
}

export default Error;