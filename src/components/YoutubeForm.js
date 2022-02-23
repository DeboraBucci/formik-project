import React from "react";

const YoutubeForm = () => {
  return (
    <form>
      <label htmlFor="text" id="name">
        Name
      </label>
      <input type="text" id="name" name="name" />

      <label htmlFor="text" id="email">
        Email
      </label>
      <input type="text" id="email" name="email" />

      <label htmlFor="text" id="channel">
        Channel
      </label>
      <input type="text" id="channel" name="channel" />

      <button>Submit</button>
    </form>
  );
};

export default YoutubeForm;
