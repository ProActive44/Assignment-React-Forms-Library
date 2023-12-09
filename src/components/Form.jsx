import "./Form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formError, setFormError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);
    setFormError(validation(data));
    // console.log(formError);
    setIsSubmitted(true);
  };

  const validation = (values) => {
    let errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!values.firstName) {
      errors.firstName = "First name is required*";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required*";
    }
    if (!values.email) {
      errors.email = "Email is required*";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email*";
    }
    if (!values.password) {
      errors.password = "Password is required*";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 4 characters";
    }
     else if (values.password.length > 20){
        errors.password = "Password cannot be more than 20 characters"
     }
    return errors;
  };

//   console.log(errors);
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(formError).length === 0 && isSubmitted && (
          <div className="successMsg">
            <input type="text" readOnly value="Registration successful!" />
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            {...register("firstName", { required: true })}
          />
          {errors.firstName ? <p>First name is required*</p> : <p></p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            {...register("lastName", { required: true })}
          />
          {errors.lastName ? <p>Last name is required*</p> : <p></p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            {...register("email", { required: true })}
          />
          <p>{formError.email}</p>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            {...register("password", { required: true })}
          />
          <p>{formError.password}</p>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
