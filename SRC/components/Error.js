import {useRouteError} from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err)
    return (
      <div className="error-container">
        <h2 className="error-title">You have entered some unknown words my dear friend</h2>
        <p className="error-message">An unknown error has occurred</p>
        <p>{err.status}: {err.statusText}</p>
      </div>
    );
};
  
  export default Error;