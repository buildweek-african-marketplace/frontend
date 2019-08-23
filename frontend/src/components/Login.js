import React from 'react'
import { withFormik,Form, Feild } from "formik";

const Login = () => {
    return (
       <Form>
           <Field type="email" name="email" placeholder="Email" />
           <Field type="username" name="username" placeholder="UserName" />
           <Field type="password" name="password" placeholder="Placeholder" />
           <button>Submit</button> /*this should link to tabnav*/
       </Form>
    );
}

export default Login
