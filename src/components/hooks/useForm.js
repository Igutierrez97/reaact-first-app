import { useState } from "react"



export const useForm = (initialSate={ }) => {
  const [values, setvalues] = useState(initialSate)

  const resect = () =>{
    setvalues(initialSate)
  }

  const handleInputChange = ({ target }) => {
    
    setvalues(
      {
        ...values,
        [target.name]: target.value
      }
    )
  }
  return [values, handleInputChange, resect]
}