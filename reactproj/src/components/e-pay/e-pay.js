import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './e-pay.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const EpayForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      court: '',
      gender: '',
      name: '',
      age: '',
      cnrNumber: '',
      caseRegistrationDate: '',
    },
  });

  const onSubmit = async (data) => {
    try {
        const token = localStorage.getItem('jwt');
        
        if (!token) {
            console.error('No token found in localStorage');
            return;
        }
         
        console.log(token);
        
        const response = await axios.post("http://localhost:3005/enter", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log('Response:', response.data);
        navigate('/update');
        
    } catch (error) {
        console.error('Req failed:', error.message);
        
    }
};


  return (
    <div className={styles.Main}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>E-CHALLAN FORM</h1>
        <form
          className={`${styles.myform} ${isSubmitting ? styles.formLoading : ''}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Form fields */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Court:</legend>
            
            <label htmlFor="district" className={styles.label}>District:</label>
<div className={styles.districtContainer}>
  <select
    id="district"
    className={`${styles.select} ${errors.district ? styles.errorInput : ''}`}
    {...register('district', { required: 'District selection is required.' })}
  >
    <option value="">-- Select Court --</option>
    <option value="Hyderabad District Court">Hyderabad District Court</option>
    <option value="Hyderabad Session Court">Hyderabad Session Court</option>
    <option value="Warangal District Court">Warangal District Court</option>
    <option value="Warangal Session Court">Warangal Session Court</option>
    <option value="Khammam District Court">Khammam District Court</option>
    <option value="Khammam Session Court">Khammam Session Court</option>
    <option value="Nizamabad District Court">Nizamabad District Court</option>
    <option value="Nizamabad Session Court">Nizamabad Session Court</option>
    <option value="Adilabad District Court">Adilabad District Court</option>
    <option value="Adilabad Session Court">Adilabad Session Court</option>
    <option value="Rangareddy District Court">Rangareddy District Court</option>
    <option value="Rangareddy Session Court">Rangareddy Session Court</option>
    <option value="Medchal-Malkajgiri District Court">Medchal-Malkajgiri District Court</option>
    <option value="Medchal-Malkajgiri Session Court">Medchal-Malkajgiri Session Court</option>
    <option value="Mahabubnagar District Court">Mahabubnagar District Court</option>
    <option value="Mahabubnagar Session Court">Mahabubnagar Session Court</option>
    <option value="Nalgonda District Court">Nalgonda District Court</option>
    <option value="Nalgonda Session Court">Nalgonda Session Court</option>
    <option value="Sangareddy District Court">Sangareddy District Court</option>
    <option value="Sangareddy Session Court">Sangareddy Session Court</option>
    <option value="Jagtial District Court">Jagtial District Court</option>
    <option value="Jagtial Session Court">Jagtial Session Court</option>
    <option value="Karimnagar District Court">Karimnagar District Court</option>
    <option value="Karimnagar Session Court">Karimnagar Session Court</option>
    <option value="Kamareddy District Court">Kamareddy District Court</option>
    <option value="Kamareddy Session Court">Kamareddy Session Court</option>
    <option value="Nirmal District Court">Nirmal District Court</option>
    <option value="Nirmal Session Court">Nirmal Session Court</option>
    <option value="Siddipet District Court">Siddipet District Court</option>
    <option value="Siddipet Session Court">Siddipet Session Court</option>
    <option value="Peddapalli District Court">Peddapalli District Court</option>
    <option value="Peddapalli Session Court">Peddapalli Session Court</option>
    <option value="Rajanna-Sircilla District Court">Rajanna-Sircilla District Court</option>
    <option value="Rajanna-Sircilla Session Court">Rajanna-Sircilla Session Court</option>
    <option value="Medak District Court">Medak District Court</option>
    <option value="Medak Session Court">Medak Session Court</option>
    <option value="Warangal Urban District Court">Warangal Urban District Court</option>
    <option value="Warangal Urban Session Court">Warangal Urban Session Court</option>
    <option value="Warangal Rural District Court">Warangal Rural District Court</option>
    <option value="Warangal Rural Session Court">Warangal Rural Session Court</option>
    <option value="Wanaparthy District Court">Wanaparthy District Court</option>
    <option value="Wanaparthy Session Court">Wanaparthy Session Court</option>
    <option value="Jogulamba Gadwal District Court">Jogulamba Gadwal District Court</option>
    <option value="Jogulamba Gadwal Session Court">Jogulamba Gadwal Session Court</option>
    <option value="Narayanpet District Court">Narayanpet District Court</option>
    <option value="Narayanpet Session Court">Narayanpet Session Court</option>
    <option value="Yadadri Bhuvanagiri District Court">Yadadri Bhuvanagiri District Court</option>
    <option value="Yadadri Bhuvanagiri Session Court">Yadadri Bhuvanagiri Session Court</option>
    {/* Add more districts and court types as needed */}
  </select>
</div>
{errors.district && <div className={styles.error}>{errors.district.message}</div>}

          </fieldset>

          {/* Text inputs and labels */}
          <div>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`${styles.inputText} ${errors.name ? styles.errorInput : ''}`}
              {...register('name', { required: 'Name is required.' })}
            />
            {errors.name && <div className={styles.error}>{errors.name.message}</div>}

            <label htmlFor="gender" className={styles.label}>Gender:</label>
            <div className={styles.genderContainer}>
              <input
                type="radio"
                id="male"
                value="Male"
                className={`${styles.radio} ${errors.gender ? styles.errorInput : ''}`}
                {...register('gender', { required: 'Gender is required.' })}
              />
              <label htmlFor="male" className={styles.radioLabel}>Male</label>
              <input
                type="radio"
                id="female"
                value="Female"
                className={`${styles.radio} ${errors.gender ? styles.errorInput : ''}`}
                {...register('gender', { required: 'Gender is required.' })}
              />
              <label htmlFor="female" className={styles.radioLabel}>Female</label>
            </div>
            {errors.gender && <div className={styles.error}>{errors.gender.message}</div>}

            <label htmlFor="age" className={styles.label}>Age:</label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className={`${styles.inputText} ${errors.age ? styles.errorInput : ''}`}
              {...register('age', { required: 'Age is required.' })}
            />
            {errors.age && <div className={styles.error}>{errors.age.message}</div>}

            <label htmlFor="cnr_number" className={styles.label}>CNR Number:</label>
            <input
              type="text"
              id="CNR"
              placeholder="Enter CNR number"
              className={`${styles.inputText} ${errors.CNR ? '' : ''}`}
              {...register('CNR', { required: 'CNR Number is required.' })}
            />
            {errors.CNR && <div className={styles.error}>{errors.CNR.message}</div>}

            <label htmlFor="case_registration_date" className={styles.label}>Date of Case Registration:</label>
            <input
              type="date"
              id="case_registration_date"
              className={`${styles.inputDate} ${errors.caseRegistrationDate ? styles.errorInput : ''}`}
              {...register('caseRegistrationDate', { required: 'Date of Case Registration is required.' })}
            />
            {errors.caseRegistrationDate && <div className={styles.error}>{errors.caseRegistrationDate.message}</div>}
            <label htmlFor="fine" className={styles.label}>Fine:</label>
            <input
              type="text"
              id="paymentAmount"
              placeholder="Amount"
              className={`${styles.inputText} ${errors.paymentAmount? '' : ''}`}
              {...register('paymentAmount', { required: 'Amount is required.' })}
            />
            {errors.paymentAmount && <div className={styles.error}>{errors.paymentAmount.message}</div>}
          </div>

          <button type="submit" className={styles.button}>Submit</button>
        </form>
        {isSubmitting && (
          <div className={styles.loadingOverlay}>
            <div className={styles.loadingSpinner}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpayForm; 



