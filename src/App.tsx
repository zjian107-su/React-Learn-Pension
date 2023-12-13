import React, { useState, useContext } from "react";
import PensionForm from "./components/PensionForm/PensionForm";
import PensionChart from "./components/PensionChart/PensionChart";
import PensionTest from "./components/PensionTest/pensionTest";
import { PensionContext, PensionProvider } from "./context/PensionContext";

function App() {

   const { devMode, setDevMode } = useContext(PensionContext);

   const toggleDevMode = () => {
     setDevMode(!devMode);
   };

   return (
     <div className="max-w-screen-2xl mx-auto px-6 my-6 space-y-6">
       <header>
         <h1 className="text-5xl font-bold">✨Daniel's Pension Tracker✨</h1>
         <br />
         <div className="flex justify-start">
           <button className="btn btn-secondary" onClick={toggleDevMode}>
             Toggle Dev Mode
           </button>
         </div>
       </header>

       <PensionTest />

       <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
         <PensionForm className="flex-1" />
         <PensionChart className="flex-1" />
       </div>
       <br />
     </div>
   );
}

export default App;
