import React from 'react';
import PropTypes from 'prop-types';
import {
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

const TypeLink = ({type, onClick}) => {
  return renderType(type, onClick ? onClick: () => null);
};

function renderType(type, onClick) {
  if (type instanceof GraphQLNonNull) {
    return (
      <span>
        {renderType(type.ofType, onClick)}
        {'!'}
      </span>
    );
  }

  if (type instanceof GraphQLList) {
    return (
      <span>
        {'['}
        {renderType(type.ofType, onClick)}
        {']'}
      </span>
    );
  }

  return (
    <a
      className="type-name"
      onClick={e => {
        e.preventDefault();
        onClick(type, e);
      }}
      href="#">
      {type?.name}
    </a>
  );
}

TypeLink.propTypes = {
  type: PropTypes.object.isRequired,
  onClickType: PropTypes.func
};
export default TypeLink;
