import React from 'react';
import useState from 'react'
import PropTypes from 'prop-types';

const Filed = () => {
const acknowledgment_no=localStorage.getItem('acknowledgement_no');
  return(<div>
    <h1>Your case has been filed</h1><br></br>
     {acknowledgment_no}
  </div>)};


export default Filed;
