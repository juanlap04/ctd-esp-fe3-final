import React, { useContext } from "react";
import Form from "../Components/Form";
import { AppContext } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContext(AppContext);

  const themeClass = state.theme === "dark" ? "dark" : "light";

  return (
    <div className={themeClass}>
      <h2 className="contacto">Want to know more?</h2>
      <p className="contacto">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
