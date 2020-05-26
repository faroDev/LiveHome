import React from 'react';
import { useRouter } from 'next/router';

const Test = () => {
  const router = useRouter();
  const { test } = router.query;
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
};

export default Test;
