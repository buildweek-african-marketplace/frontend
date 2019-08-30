import React from 'react'
import { withFormik, Form, Field } from "formik";
import { Link, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';



const LoginForm = () => {
    return (     
        <Form className ="login">
            <Field className="box" type="email" name="email" placeholder="Email" />
            <Field className="box" type="username" name="username" placeholder="Username" />
            <Field className="box" type="password" name="password" placeholder="Password" />
            <Link to="/welcomepage">
                <button className = "submit">Submit</button>
            </Link>
            <Route path="/welcomepage" component={WelcomePage} />
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

export default FormikLoginForm
