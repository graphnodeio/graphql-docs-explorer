import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TypeLink from './TypeLink';
import MarkdownContent from './MarkdownContent';
import { GraphQLSchema } from 'graphql';

const SchemaDoc = ({ schema, onClickType }) => {
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType && schema.getMutationType();
  const subscriptionType = schema.getSubscriptionType && schema.getSubscriptionType();

  return (
    <div>
      <MarkdownContent
        className="doc-type-description"
        markdown={
          'A GraphQL schema provides a root type for each kind of operation.'
        }
      />
      <div className="doc-category">
        <div className="doc-category-title">root types</div>
        <div className="doc-category-item">
          <span className="keyword">query</span>
          {': '}
          <TypeLink type={queryType} onClick={onClickType} />
        </div>
        {mutationType && (
          <div className="doc-category-item">
            <span className="keyword">mutation</span>
            {': '}
            <TypeLink type={mutationType} onClick={onClickType} />
          </div>
        )}
        {subscriptionType && (
          <div className="doc-category-item">
            <span className="keyword">subscription</span>
            {': '}
            <TypeLink type={subscriptionType} onClick={onClickType} />
          </div>
        )}
      </div>
    </div>
  );
};

SchemaDoc.propTypes = {
  schema: PropTypes.object.isRequired,
  onClickType: PropTypes.func
};

export default SchemaDoc;
