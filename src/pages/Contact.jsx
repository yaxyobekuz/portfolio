import React from "react";

// Translate
import { useTranslation } from "react-i18next";

// Components
import Icon from "../components/Icon";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = t("contactInfo", { returnObjects: true });

  return (
    <div className="py-8 space-y-12 xl:py-10">
      <h1 className="title-rectangle">{t("contact")}</h1>

      {/* Contact items */}
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {contactInfo.map((item, i) => (
          <li
            key={i}
            className="flex flex-col items-center gap-3.5 w-full bg-dark-300 p-5 rounded-lg border-2 border-dark-200"
          >
            {/* icon */}
            <div
              style={{ background: item.icon.fill }}
              className="flex items-center justify-center size-16 rounded-md sm:size-20 sm:rounded-lg"
            >
              <Icon
                size={28}
                className="size-7"
                src={item.icon.url}
                alt={`${item.type} icon`}
              />
            </div>

            {/* item title */}
            <h3 className="font-medium text-lg">{item.name}</h3>

            {/* item value */}
            {item.type === "address" ? (
              <span className="opacity-50 transition-opacity hover:opacity-100">
                {item.value}
              </span>
            ) : (
              <a
                href={
                  item.type === "email"
                    ? `mailto:${item.value}`
                    : `tel:${item.value}`
                }
                className="opacity-50 transition-opacity hover:opacity-100"
              >
                {item.value}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Contact form */}
      <section className="space-y-9">
        <h2 className="title-rectangle">{t("send_request")}</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
