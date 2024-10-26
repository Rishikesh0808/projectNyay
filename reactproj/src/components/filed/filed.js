import React from 'react';
import PropTypes from 'prop-types';
import styles from './filed.module.css';

const Filed = () => {
    const acknowledgment_no = localStorage.getItem('acknowledgement_no');
  
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.heading}>Your Case Has Been Filed</h1>
                {acknowledgment_no && (
                    <p className={styles.acknowledgment}>
                        <strong>Acknowledgment Number:</strong> {acknowledgment_no}
                    </p>
                )}
            </div>
        </div>
    );
};

Filed.propTypes = {
    acknowledgment_no: PropTypes.string
};

export default Filed;

