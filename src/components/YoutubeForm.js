import React from "react";
import { useFormik } from "formik";

import classes from "./YoutubeForm.module.css";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  console.log("Form values", formik.values);

  return (
    <form className={classes.form}>
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

      <button>Submit</button>
    </form>
  );
};

export default YoutubeForm;
