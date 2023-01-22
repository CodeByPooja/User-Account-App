import React from "react";
import Wave from './../../assets/wave.svg';
const AccountWraper = (props) => {
  return (
    <div>
      <img src={Wave} alt='top-wave' />
      {props.children}
    </div>
  );
};

export default AccountWraper;
