import React from 'react';
import PropTypes from 'prop-types';
import { GraphQLArgument } from 'graphql';
import TypeLink from './TypeLink';
import DefaultValue from './DefaultValue';

const Argument = ({
  arg,
  onClickType,
  showDefaultValue,
}) => {
  return (
    <span className="arg">
      <span className="arg-name">{arg.name}</span>
      {': '}
      <TypeLink type={arg.type} onClick={onClickType} />
      {showDefaultValue !== false && <DefaultValue field={arg} />}
    </span>
  );
}

Argument.propTypes = {
  arg: PropTypes.instanceOf(GraphQLArgument),
  onClickType: PropTypes.func,
  showDefaultValue: PropTypes.bool,
};

export default Argument;
