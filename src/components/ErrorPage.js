import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
   const err = useRouteError();
   const navigateBackToHome = useNavigate();

   const onBackToHomeClicked = () => {
      navigateBackToHome("/", { replace: true });
   }
   return (
      <div className="error min-h-[550px] p-4">
         <h2 className="text-2xl font-bold mb-5"><span>{err?.status}</span> - <span>{err?.statusText}</span></h2>
         <h3 className="mb-10">{err?.data}</h3>
         <hr className="mb-10" />

         <button type="button" className="back-home-btn w-3/12 bg-green-500 hover:bg-green-700 text-white p-2 mb-4 font-bold rounded" onClick={onBackToHomeClicked}>Back to Home</button>

      </div>
   )
}

export default ErrorPage;
