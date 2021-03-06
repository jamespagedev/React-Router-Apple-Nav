import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivTv = styled.div`
  color: black;
  text-align: center;

  h1 {
    margin: 500px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const TV = props => {
  return (
    <div>
      <DivTv>
        <h1>This is the TV Component</h1>
      </DivTv>
    </div>
  );
};

// TV.propTypes = {
//   propertyName: PropTypes.string
// }

export default TV;
