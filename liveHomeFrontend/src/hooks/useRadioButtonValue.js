import { useState } from 'react';

const useRadioButtonValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => setValue(event.target.value);

  return { value, onChange };
};

export default useRadioButtonValue;
