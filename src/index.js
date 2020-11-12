import React,{ useState, useEffect } from 'react';
import { isType } from 'graphql';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import StyledWrapper from './StyledWrapper';
import Spinner from '../Spinner/index';
import SchemaDoc from './SchemaDoc';
import TypeDoc from './TypeDoc';
import FieldDoc from './FieldDoc';

const DocExplorer = ({
  schema,
  isOpen,
  onRequestClose
}) => {
  const [navStack, setNavStack] = useState([{
    name: 'Schema',
    title: 'Documentation Explorer'
  }]);
  const navItem = navStack[navStack.length - 1];

  useEffect(() => {
    if(!isOpen) {
      setNavStack([{
        name: 'Schema',
        title: 'Documentation Explorer'
      }])
    }
  }, [isOpen]);

  if(!isOpen) {
    return null;
  }

  let content;
  const handleClickType = (type) => {
    showDoc(type);
  };

  const handleClickField = (field) => {
    showDoc(field);
  };

  const showDoc = (typeOrField) => {
    const topNav = navStack[navStack.length - 1]; {
      if (topNav.def !== typeOrField) {
        setNavStack(navStack.concat([{
          name: typeOrField.name,
          def: typeOrField,
        }]));
      }
    }
  };

  if (schema === undefined) {
    content = (
      <Spinner />
    );
  } else if (navStack.length === 1) {
    content =(
      <SchemaDoc schema = {schema} onClickType = {handleClickType}/>
    );
  } else if (isType(navItem.def)) {
      content = (
        <TypeDoc
          schema={schema}
          type={navItem.def}
          onClickType={handleClickType}
          onClickField={handleClickField}
        />
      );
  } else {
    content = (
      <FieldDoc
        field={navItem.def}
        onClickType={handleClickType}
      />
    );
  }

  let prevName;
  if (navStack.length > 1) {
    prevName = navStack[navStack.length - 2].name;
  }

  const handleNavBackClick = () => {
    if (navStack.length > 1) {
      setNavStack(navStack.slice(0, -1));
    }
  };

  return (
    <StyledWrapper className="doc-explorer">
      <div className="title-bar">
        {prevName && (
          <div
            className="doc-explorer-back"
            onClick={handleNavBackClick}>
            {'<'}{prevName}
          </div>
        )}
        <div className="title">
           {navItem.title || navItem.name}
         </div>
        <div className="close-section" onClick={onRequestClose}>
          ✕
        </div>
      </div>
      <div className="contents">
        {content}
      </div>
    </StyledWrapper>
  );
};

DocExplorer.propTypes = {
  schema: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default DocExplorer;
