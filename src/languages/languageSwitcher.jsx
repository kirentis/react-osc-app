// LanguageSwitcher.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import io from "socket.io-client";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const socket = io.connect("http://localhost:3001");

  useEffect(() => {
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    socket.on("language", (data) => {
      console.log("LANGUAGE: " + data);
      changeLanguage(data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [i18n, socket]);

  return <div></div>;
};

export default LanguageSwitcher;
