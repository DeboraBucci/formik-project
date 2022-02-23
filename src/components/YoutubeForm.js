import React from "react";
import { useFormik } from "formik";

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

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!values.channel) {
      errors.channel = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Form values", formik.values);

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <label htmlFor="text" id="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="text" id="email">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="text" id="channel">
        Channel
      </label>
      <input
        type="text"
        id="channel"
        name="channel"
        onChange={formik.handleChange}
        value={formik.values.channel}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default YoutubeForm;
