import React, { Fragment } from "react";

// Headless ui components
import { Transition } from "@headlessui/react";

const DefaultTransition = ({ children }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-y-80"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-y-80"
    >
      {children}
    </Transition>
  );
};

export default DefaultTransition;
