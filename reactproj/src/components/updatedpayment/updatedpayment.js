import {React,useState,useEffect} from 'react';
import styles from './updatedpayment.module.css';

const UpdatedPayment = () => {
   const [Fine,setFine]=useState('');
   useEffect(()=>{
   setFine(localStorage.getItem('Fine'));
   
   
   },[])
   return (
 <div className={styles.container}>
            <div className={styles.card}>
   <h1 className={styles.heading}>Payment Successful</h1>
   <div className={styles.Fine}>REMAINING FINE:{Fine}</div>
   </div></div>)
   
 
};
export default UpdatedPayment;
