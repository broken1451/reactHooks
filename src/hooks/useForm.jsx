import { useState } from 'react'

export const useForm = (initialState={}) => {
  

    const [values, setvalues] = useState(initialState)

    const inputChange = ({ target }) => {
        setvalues({
          ...values,
          [target.name]: target.value, // computando, quiero q esta propiedad sea lo q venga en el objeto
        });
    };

    return [values, inputChange]
    // return {values, inputChange}

}
