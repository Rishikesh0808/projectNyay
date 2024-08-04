import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './e-pay.module.css'; // Import the CSS module

const EpayForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className={styles.formContainer}>
       <h1 className={styles.formTitle}>Case Registration Form</h1>
    <form className={styles.myform} onSubmit={handleSubmit(onSubmit)}>
      {/* Radio buttons for court selection */}
      <div>
        <div>
          <input
            type="radio"
            id="district_courts"
            value="District Courts"
            className={`${styles.radio} ${errors.court ? styles.errorInput : ''}`}
            {...register('court', { required: 'Court selection is required.' })}
          />
          <label htmlFor="district_courts" className={styles.radioLabel}>District Courts</label>
        </div>
        <div>
          <input
            type="radio"
            id="high_court"
            value="High Court"
            className={`${styles.radio} ${errors.court ? styles.errorInput : ''}`}
            {...register('court', { required: 'Court selection is required.' })}
          />
          <label htmlFor="high_court" className={styles.radioLabel}>High Court</label>
        </div>
        <div>
          <input
            type="radio"
            id="supreme_court"
            value="Supreme Court"
            className={`${styles.radio} ${errors.court ? styles.errorInput : ''}`}
            {...register('court', { required: 'Court selection is required.' })}
          />
          <label htmlFor="supreme_court" className={styles.radioLabel}>Supreme Court</label>
        </div>
        {errors.court && <div className={styles.error}>{errors.court.message}</div>}
      </div>

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
        <div>
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
          type="text"
          id="age"
          placeholder="Enter your age"
          className={`${styles.inputText} ${errors.age ? styles.errorInput : ''}`}
          {...register('age', { required: 'Age is required.' })}
        />
        {errors.age && <div className={styles.error}>{errors.age.message}</div>}

        <label htmlFor="cnr_number" className={styles.label}>CNR Number:</label>
        <input
          type="text"
          id="cnr_number"
          placeholder="Enter CNR number"
          className={`${styles.inputText} ${errors.cnrNumber ? styles.errorInput : ''}`}
          {...register('cnrNumber', { required: 'CNR Number is required.' })}
        />
        {errors.cnrNumber && <div className={styles.error}>{errors.cnrNumber.message}</div>}

        <label htmlFor="case_registration_date" className={styles.label}>Date of Case Registration:</label>
        <input
          type="date"
          id="case_registration_date"
          className={`${styles.inputDate} ${errors.caseRegistrationDate ? styles.errorInput : ''}`}
          {...register('caseRegistrationDate', { required: 'Date of Case Registration is required.' })}
        />
        {errors.caseRegistrationDate && <div className={styles.error}>{errors.caseRegistrationDate.message}</div>}
      </div>

      <button type="submit" className={styles.button}>Submit</button>
    </form>
    </div>
  );
};

export default EpayForm;
