import React from 'react';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EpayForm from './components/e-pay/e-pay'; // The form component you created
import LoginForm from './components/loginForm/loginForm';
import UpdatedPayment from './components/e-pay/updatedpayment/updatedpayment';
import FIRForm from './components/FIRForm/FIRForm';
import  Filed from './components/filed/filed'
import Case_status from './components/track_status/case_status/case_status'
import Track_status from './components/track_status/track_status';
const App = () => {
  return (
    
    <Router>
      <Routes>
       
        
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/update" element={<UpdatedPayment/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/epay" element={<EpayForm />} />
        <Route path="/FIR" element={<FIRForm />} />
        <Route path="/filed" element={<Filed />} />
        <Route path="/trackstatus" element={<Track_status />} />
        <Route path="/case/:caseNumber" element={<Case_status />} />
      </Routes>
    </Router>
  );
};

export default App;

