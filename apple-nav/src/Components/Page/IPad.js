import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavWrapper from '../Nav/NavWrapper';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivIPad = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const IPad = props => {
  return (
    <div>
      <DivIPad>
        <h1>This is the IPad Component</h1>
      </DivIPad>
    </div>
  );
};

// IPad.propTypes = {
//   propertyName: PropTypes.string
// }

export default IPad;