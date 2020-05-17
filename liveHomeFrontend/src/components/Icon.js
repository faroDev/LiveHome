import React from 'react';

import FeatherIcon from 'feather-icons-react';

const Icon = ({name, size = '20', stroke = '#4424A6', fill = 'white' }) => {
  return (
    <FeatherIcon icon={name} size={size} stroke={stroke} fill={fill} />
  );
};

export default Icon;
