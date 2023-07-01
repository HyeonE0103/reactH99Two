import React, { useCallback, useState } from 'react';

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  return [form, setForm, onChange];
}

export default useInput;
