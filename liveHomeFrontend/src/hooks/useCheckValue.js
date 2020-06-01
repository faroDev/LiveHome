import { useState } from 'react';

const useCheckValue = initialValue => {
  const [checked, setChecked] = useState(initialValue);
  const handleChange = event => setChecked(!checked);

  return { checked, handleChange, setChecked };
};

export default useCheckValue;
