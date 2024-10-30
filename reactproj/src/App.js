import React from 'react';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EpayForm from './components/e-pay/e-pay'; // The form component you created
import LoginForm from './components/loginForm/loginForm';
import UpdatedPayment from './components/updatedpayment/updatedpayment';
import FIRForm from './components/FIRForm/FIRForm';
import  Filed from './components/filed/filed'
import Case_status from './components/track_status/case_status/case_status'
import Track_status from './components/track_status/track_status';
import  RegisterForm from './components/loginForm/registerForm/registerForm'
import Mainhome from './components/mainhome/mainhome';
import Lawyerinfo from './components/lawyerinfo/lawyerinfo';
import Policeview from './components/Policeview/Policeview';
import MainPolice from './components/Policeview/MainPolice/MainPolice';
import Policeview2 from './components/Policeview/Policeview2/Policeview2';
import AdminView from './components/AdminView/AdminView';
import AddPoliceOfficerForm from './components/AdminView/AddPoliceOfficerForm/AddPoliceOfficerForm';
import AddCaseForm from './components/AdminView/Addcases/Addcases';
import RescheduleDate from './components/AdminView/RescheduleDate/RescheduleDate';
import CalendarControl from './components/AdminView/CALENDARONTROL/CALENDARONTROL';
const App = () => {
  return (
    
    <Router>
      <Routes>
       
        
          
         {/* <Route path="/" element={<Mainhome/>}/>  */}
         {/* <Route path="/" element={<MainPolice/>}/> */}
         {/* <Route path="/" element={<AdminView/>}/> */}
         <Route path="/" element={<RescheduleDate/>}/>
         <Route path="/retrieve" element={<Policeview2/>}/>
         <Route path="/view" element={<Policeview/>}/>  
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/update" element={<UpdatedPayment/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/epay" element={<EpayForm />} />
        <Route path="/FIR" element={<FIRForm />} />
        <Route path="/filed" element={<Filed />} />
        <Route path="/lawyers" element={<Lawyerinfo/>}/>
        <Route path="/trackstatus" element={<Track_status />} />
        <Route path="/case/:caseNumber" element={<Case_status />} />
        <Route path="register" element={<RegisterForm />}></Route>
        <Route path="/addpolice" element={<AddPoliceOfficerForm></AddPoliceOfficerForm>}></Route>
        <Route path="/addcase" element={<AddCaseForm/>}></Route>
        <Route path="/reschedule" element={<RescheduleDate/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;

