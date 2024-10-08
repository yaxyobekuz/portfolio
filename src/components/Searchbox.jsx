import React, { useState, useRef, useEffect, useMemo } from "react";

// Lodash
import { debounce } from "lodash";

// Components
import Icon from "./Icon";
import SpinLoader from "./SpinLoader";

// Translate
import { useTranslation } from "react-i18next";

// Images
import searchIcon from "../assets/images/icons/search.svg";

const Searchbox = ({ onChange, className = "" }) => {
  const { t } = useTranslation();
  const searchInputRef = useRef(null);
  const [state, setState] = useState({ query: "", loading: false });

  // set input value
  const handleSearch = useMemo(
    () =>
      debounce((value) => {
        if (onChange) {
          onChange(value);
        }
        setState((prevState) => ({ ...prevState, loading: false }));
      }, 500),
    [onChange]
  );

  // handle change
  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setState({ query: e.target.value, loading: true });
    handleSearch(value);
  };

  // handle focus
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "/") {
        searchInputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const { query, loading } = state;

  return (
    <label
      rel="search"
      className={`flex items-center grow relative ${className}`}
    >
      {/* icon wrapper */}
      <div className="absolute left-4 size-6">
        {loading ? <SpinLoader /> : <Icon src={searchIcon} alt="search icon" />}
      </div>

      {/* input */}
      <input
        name="search"
        type="search"
        value={query}
        maxLength={240}
        className="pl-12"
        autoComplete="off"
        title={t("search")}
        ref={searchInputRef}
        onChange={handleChange}
        placeholder={t("search") + "..."}
      />

      {/* bar */}
      <kbd
        className={`${
          query.length > 0 ? "hidden" : ""
        } absolute right-4 opacity-70 text-sm font-Poppins max-sm:!hidden`}
      >
        <abbr title="Control" className="no-underline font-poppins">
          Ctrl +
        </abbr>
        <span> /</span>
      </kbd>
    </label>
  );
};

export default Searchbox;
