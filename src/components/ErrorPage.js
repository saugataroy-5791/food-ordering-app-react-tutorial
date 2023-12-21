import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const err = useRouteError();
   return (
      <div className="error">
         <h2><span>{err?.status}</span> - <span>{err?.statusText}</span></h2>
         <h3>{err?.data}</h3>
      </div>
   )
}

export default ErrorPage;
