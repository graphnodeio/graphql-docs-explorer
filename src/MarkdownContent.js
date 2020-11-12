import React from 'react';
import PropTypes from 'prop-types';
import MD from 'markdown-it';

const md = new MD();

const MarkdownContent = ({ markdown, className }) => {
  if (!markdown) {
    return <div />;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    />
  );
};

MarkdownContent.propTypes = {
  markdown: PropTypes.string,
  className: PropTypes.string
};

export default MarkdownContent;
 