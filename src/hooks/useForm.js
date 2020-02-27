import {useState} from 'react';

// hooks are extracted to this custom hook
// state is then extracted, can be used whenever you may need it    

// the hook can be used in all sorts of components, with no ui associated

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues); 

  // returning array state, just to mirro hooks notation  

  // based off the name of the input field e, 
  // we update the name of the value when used in a form
  return [values, e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }]
}; 