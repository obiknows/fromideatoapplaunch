import React from 'react';

const InternalLink = ({ href, children, ...other }) => (
  <a href={href} {...other}>
    {children}
  </a>
);

export default InternalLink;
