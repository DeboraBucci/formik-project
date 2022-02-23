import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./YoutubeForm.module.css";

const YoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      <Form className={classes.form}>
        <div>
          <label htmlFor="text" id="name">
            Name
          </label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div>
          <label htmlFor="text" id="email">
            Email
          </label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor="text" id="channel">
            Channel
          </label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
