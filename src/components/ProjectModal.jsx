import React, { useEffect, useRef } from "react";

// Components
import Icon from "./Icon";

// Translate
import { useTranslation } from "react-i18next";

// Helpers
import { firstLetterToUpperCase } from "../helpers";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/slices/modalsSlice";

// Images
import crossIcon from "../assets/images/icons/cross.svg";
import MarkdownRenderer from "./MarkdownRenderer";

const ProjectModal = () => {
  const dispatch = useDispatch();
  const modalContentRef = useRef();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const project = useSelector((state) => state.modals.project.data);

  // function to close the modal
  const handleCloseModal = () => dispatch(closeModal("project"));

  // close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      // close modal if Escape is pressed
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // clean up event listener when component is unmounted
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // close modal when clicking outside of the modal content
  const handleClickOutside = (event) => {
    // close modal if click is outside the modal content
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // clean up event listener when component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center fixed inset-0 z-5 size-full bg-dark-300/70 backdrop-blur">
      <div
        ref={modalContentRef}
        className="max-w-3xl w-full max-h-[calc(100%-40px)] overflow-y-auto scroll-primary bg-dark-300/70 mx-3.5 p-3.5 space-y-3.5 border-2 border-dark-200 rounded-xl xs:p-5 sm:space-y-5"
      >
        {/* Title wrapper (modal header) */}
        <div className="flex items-center justify-between gap-3.5">
          <h1 className="line-clamp-1 font-medium text-lg xs:text-xl">
            {firstLetterToUpperCase(project.title[currentLanguage])}
          </h1>

          {/* Close modal button */}
          <button
            title={t("close")}
            className="opacity-70"
            aria-label={t("close")}
            onClick={handleCloseModal}
          >
            <Icon src={crossIcon} alt="cross icon" />
          </button>
        </div>

        {/* Image */}
        <img
          width={724}
          height={384}
          src={project.image}
          alt={project.title}
          style={{ objectFit: "contain" }}
          className="w-full h-72 bg-dark-300 border-2 border-dark-200 rounded-lg xs:h-80 sm:h-96"
        />

        {/* Description */}
        <div className="space-y-4 text-white/70 markdown strong-white">
          <MarkdownRenderer text={project.description[currentLanguage]} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
