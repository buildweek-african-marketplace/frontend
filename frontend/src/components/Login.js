import React from 'react'
import { withFormik, Form, Field } from "formik";
import { Link, Route } from "react-router-dom";
import TabNav from "./TabNav";


const LoginForm = () => {
    return (
        <Form>
            <Field type="email" name="email" placeholder="Email" />
            <Field type="username" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Placeholder" />
            <Link to="/home">
                <button>Submit</button>
            </Link>
            <Route path="/home" component={TabNav} />
        </Form>
        
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
    }
})(LoginForm);

export default LoginForm
