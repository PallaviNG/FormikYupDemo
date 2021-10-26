import React from "react";
import {ErrorMessage, Formik, Field,Form} from "formik";
import * as yup from "yup";

function FormikYupDemo(props) {

    let validationSchema = yup.object().shape({
        username:yup.string().min(4,"username must be more than 4 characters").required("username is required"),
        password:yup.string().required("password is required"),
        emailID:yup.string().email("Invalid Email-id").required("Email-Id is required")
    });

    let initialValues = {
        username : "",
        password : "",
        emailID : ""
    };

    let onSubmit = (values) => {
        console.log(values);
    };

    
    // console.log(formik.values);

    // console.log(formik.touched);

    return (
        <div className="register">
            <h1>User Registration </h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

                <Form>
                    <div>
                        <label htmlFor="username">User Name</label>
                        <Field type="text" name="username" autoComplete="off"/>
                        <ErrorMessage name="username" className="error"/>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" autoComplete="off"/>
                        <ErrorMessage name="password" className="error" />
                    </div>

                    <div>
                        <label htmlFor="emailID">Email ID</label>
                        <Field type="email" name="emailID" autoComplete="off"/>
                        <ErrorMessage name="emailID" className="error" />
                    </div>
                    <button type ="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormikYupDemo;