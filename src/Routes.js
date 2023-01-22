import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { PrivateRoutes } from "./PrivateRoutes";
import './styles/App.css';
import './assets/scss/app.scss'
import FormRate from "./page/Form/FormRate";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormSuccessful from "./page/Form/FormSuccessful";

  export const AppRoute =()=>{
    return(

        <BrowserRouter>
           <ToastContainer />
           <Routes>
          <Route  exact  path="/form" element={<FormRate />} />
          <Route path="/form/form_successful" element={<FormSuccessful/>} />
        </Routes>
        </BrowserRouter>
        
    )
  }