import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Confetti
import confetti from "canvas-confetti";

// Translate
import { useTranslation } from "react-i18next";

const Success = () => {
  const { t } = useTranslation();

  const fireMultipleBursts = () => {
    const duration = 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 10,
        startVelocity: 10,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  useEffect(() => {
    fireMultipleBursts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full text-center">
      {/* Title */}
      <h1 className="">{t("success_msg.title")}!</h1>

      {/* Description */}
      <p className="text-lg opacity-70 sm:text-xl">
        {t("success_msg.description")}.
      </p>

      {/* Btn */}
      <Link to={-1} className="btn-primary min-w-44">
        {t("back")}
      </Link>
    </div>
  );
};

export default Success;
