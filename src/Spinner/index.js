import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './StyledWrapper';

// Todo: Size, Color config support
const Spinner = ({size, color, children}) => {
  return (
    <StyledWrapper>
      <div className="spinner"></div>
      {children &&
        <div>
          {children}
        </div>
      }
    </StyledWrapper>
  )
};

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string
};

export default Spinner;
