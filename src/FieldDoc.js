import React from 'react';
import PropTypes from 'prop-types';
import Argument from './Argument';
import Directive from './Directive';
import MarkdownContent from './MarkdownContent';
import TypeLink from './TypeLink';
import {
  GraphQLField,
  GraphQLInputField,
  GraphQLArgument
} from 'graphql';

const FieldDoc = ({ field, onClickType }) => {
  let argsDef;
  if (field && 'args' in field && field.args.length > 0) {
    argsDef = (
      <div className="doc-category">
        <div className="doc-category-title">{'arguments'}</div>
        {field.args.map((arg) => (
          <div key={arg.name} className="doc-category-item">
            <div>
              <Argument arg={arg} onClickType={onClickType} />
            </div>
            <MarkdownContent
              className="doc-value-description"
              markdown={arg.description}
            />
          </div>
        ))}
      </div>
    );
  }

  let directivesDef;
  if (
    field &&
    field.astNode &&
    field.astNode.directives &&
    field.astNode.directives.length > 0
  ) {
    directivesDef = (
      <div className="doc-category">
        <div className="doc-category-title">{'directives'}</div>
        {field.astNode.directives.map((directive) => (
          <div key={directive.name.value} className="doc-category-item">
            <div>
              <Directive directive={directive} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <MarkdownContent
        className="doc-type-description"
        markdown={field?.description || 'No Description'}
      />
      {field && 'deprecationReason' in field && (
        <MarkdownContent
          className="doc-deprecation"
          markdown={field?.deprecationReason}
        />
      )}
      <div className="doc-category">
        <div className="doc-category-title">{'type'}</div>
        <TypeLink type={field?.type} onClick={onClickType} />
      </div>
      {argsDef}
      {directivesDef}
    </div>
  );
}

FieldDoc.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.instanceOf(GraphQLField),
    PropTypes.instanceOf(GraphQLInputField),
    PropTypes.instanceOf(GraphQLArgument)
  ]),
  onClickType: PropTypes.func
};

export default FieldDoc;
