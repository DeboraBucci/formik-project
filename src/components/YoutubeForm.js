import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./YoutubeForm.module.css";
import TextError from "./TextError";

const YoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
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
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div>
          <label htmlFor="text" id="email">
            Email
          </label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div>
          <label htmlFor="text" id="channel">
            Channel
          </label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div>
          <label htmlFor="text" id="comments">
            Comments
          </label>
          <Field as="textarea" id="comments" name="comments" />
        </div>

        <div>
          <label htmlFor="text" id="address">
            Address
          </label>
          <Field name="address" />
          {(props) => {
            const { field, form, meta } = props;
            return (
              <div>
                <input id="address" {...field} />
                {meta.touched && meta.error && <div>{meta.error}</div>}
              </div>
            );
          }}
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
