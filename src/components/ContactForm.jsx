import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Axios
import axios from "axios";

// Components
import SpinLoader from "./SpinLoader";

// Translate
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [description, setDescription] = useState("");
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (event, valueName) => {
    const value = event.target.value;
    if (valueName === "name") {
      setName(value);
    } else if (valueName === "email") {
      setEmail(value);
    } else {
      setDescription(value);
    }
  };

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    const chatId = -1002380833749;
    const apiUrl = `${apiBaseUrl}sendMessage`;

    // message
    const message = `👤 *Ism:* ${name}\n✉️ *E-pochta:* ${email}\nℹ️ *Izoh:* ${description}`;

    // form data
    const formData = {
      text: message,
      chat_id: chatId,
      parse_mode: "Markdown",
    };

    // send a request
    axios
      .post(apiUrl, formData)
      .then(() => navigate(`/${currentLanguage}/success`))
      .catch(() => alert(t("error_msg.title")))
      .finally(() => setLoader(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark-300 space-y-5 p-5 rounded-lg border-2 border-dark-200"
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        {/* Name */}
        <div className="w-full space-y-3.5">
          <label htmlFor="name">{t("inputs.name.label")}*</label>

          {/* input */}
          <input
            required
            id="name"
            name="name"
            type="text"
            value={name}
            maxLength={96}
            disabled={loader}
            placeholder={t("inputs.name.placeholder")}
            onChange={(e) => handleInputChange(e, "name")}
          />
        </div>

        {/* Email */}
        <div className="w-full space-y-3.5">
          <label htmlFor="email">{t("inputs.email.label")}*</label>

          {/* input */}
          <input
            required
            id="email"
            name="email"
            type="email"
            value={email}
            maxLength={96}
            disabled={loader}
            placeholder={t("inputs.email.placeholder")}
            onChange={(e) => handleInputChange(e, "email")}
          />
        </div>
      </div>

      {/* Description */}
      <div className="w-full space-y-3.5">
        <label htmlFor="description">{t("inputs.description.label")}*</label>

        {/* input */}
        <textarea
          required
          maxLength={2048}
          id="description"
          disabled={loader}
          name="description"
          value={description}
          onChange={(e) => handleInputChange(e)}
          placeholder={t("inputs.description.placeholder")}
        />
      </div>

      {/* Submit btn */}
      <button
        disabled={loader}
        className="btn-primary min-w-48 h-12 text-base rounded-md disabled:opacity-70 sm:min-w-56"
      >
        {loader ? <SpinLoader /> : t("submit")}
      </button>
    </form>
  );
};

export default ContactForm;
