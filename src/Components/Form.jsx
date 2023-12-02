import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validación del nombre
    if (formData.fullName.length < 5) {
      newErrors.fullName = "Por favor verifique su información nuevamente";
      isValid = false;
    } else {
      newErrors.fullName = "";
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor verifique su información nuevamente";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aquí puedes realizar acciones con los datos del formulario
      console.log("Formulario enviado:", formData);
      // Puedes limpiar el formulario si es necesario
      setFormData({
        fullName: "",
        email: "",
      });
      // Establecer el mensaje de éxito
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail.`);
    }
  };

  return (
    <div>
      {successMessage ? (
        <p className="success-message">{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre completo:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
