import React from 'react';
import PropTypes from 'prop-types';
import {
  GraphQLField,
  GraphQLInputField,
  GraphQLArgument,
  astFromValue,
  print
} from 'graphql';

const printDefault = (ast) => {
  if (!ast) {
    return '';
  }
  return print(ast);
};

const DefaultValue = ({ field }) => {
  // field.defaultValue could be null or false, so be careful here!
  if ('defaultValue' in field && field.defaultValue !== undefined) {
    return (
      <span>
        {' = '}
        <span className="arg-default-value">
          {printDefault(astFromValue(field.defaultValue, field.type))}
        </span>
      </span>
    );
  }

  return null;
}

DefaultValue.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.instanceOf(GraphQLField),
    PropTypes.instanceOf(GraphQLInputField),
    PropTypes.instanceOf(GraphQLArgument)
  ])
};

export default DefaultValue;
