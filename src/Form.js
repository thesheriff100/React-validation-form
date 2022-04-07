import {useEffect, useState } from "react"


const Form = () => {
    const initialValues = {username: "", password: "", password2: "", email: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange =(e) =>{
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value})
    }
     const handleSubmit = (e) =>{
      e.preventDefault()
      setFormErrors(validate(formValues))
      setIsSubmit(true)
     }
     useEffect(()=>{
     if (Object.keys(formErrors).length === 0  && isSubmit){
         console.log(formValues)
}
     },[formErrors])

     const validate = (values) =>{
     const errors = {}
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     if(!values.username){
         errors.username = "Username is required!"
     }
     if(!values.password){
        errors.password = "Password is required!"
    }
    if(!values.password2){
        errors.password2 = "Password is required!"
    }
    if(!values.email){
        errors.email= "Email is required!"
    }else if(!regex.test(values.email)){
        errors.email = "This is not a valid email"
    }
    return errors
     }
  return (
         <div className="form">
             {Object.keys(formErrors).length === 0  && isSubmit ? (
             <div className="form-message">Registered Successfully</div>
             ) :(
                 <pre></pre>
             )}
           <form onSubmit={handleSubmit} className="register-form">
           <input type="text"
            name="username"
             placeholder="username"
             value={formValues.username}
            onChange ={handleChange}
           />  
           <p className="formm">{formErrors.username}</p>
             <input type="password" 
           name="password"
            placeholder="password"
            value={formValues.password}
            onChange ={handleChange}
            />
            <p className="formm">{formErrors.password}</p>
             <input type="password"
            name="password2"
             placeholder=" confirm password"
             value={formValues.password2} 
             onChange ={handleChange}
            />
            <p className="formm">{formErrors.password2}</p>
            <input type="email"
            name="email"
             placeholder="email address"
             value={formValues.email} 
             onChange ={handleChange}
             />
             <p className="formm">{formErrors.email}</p>
           <button className="submit">Create</button> 
               </form> 
            </div>
      
    
  )
}

export default Form
