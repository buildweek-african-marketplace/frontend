import React from 'react'
import { withFormik,Form, Feild } from "formik";

const LoginForm = () => {
    return (
       <Form>
           <Field type="email" name="email" placeholder="Email" />
           <Field type="username" name="username" placeholder="Username" />
           <Field type="password" name="password" placeholder="Placeholder" />
           <button>Submit</button> 
       </Form>
       /*button submit --> this should link to tabnav*/
    );
}
const FormikLoginForm = withFormik({
    mapPropsToValues({ email, username, password }) {
      return {
        email: email || "",
        username: username || "",
        password: password || ""
      };
    },
  
    handleSubmit(values) {
      console.log(values);
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(LoginForm);
  
  export default FormikLoginForm;

export default Login
