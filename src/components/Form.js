import React from 'react';
import {useForm} from '../hooks/useForm';


// pull in the custom hook, 
// define the initial values of your data, 
// use the handleChange method in the hook, rather than on withinn this component

const Form = () => {

  const [values, handleChange] = useForm({email: '', password: ''}); 
  return (
    <div>
      <input 
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      
    </div>
  );
};

export default Form;