import { useTranslation } from "react-i18next";

const useGetChangeLang = () => {
  const [t, i18n] = useTranslation("global");

  // Lista de idiomas admitidos
  const supportedLanguages = {
    en: "en_US", // Inglés
    es: "es_SP", // Español
    de: "de_DE", // Alemán
    it: "it_IT", // Italiano
    fr: "fr_FR", // Francés
    ja: "ja_JP", // Japonés
    ca: "ca_ES", // Catalán
    zh: "zh_CN", // Mandarín (simplificado)
    ar: "ar_SA", // Árabe
    hi: "hi_IN", // Hindi
  };

  const handleLang = (lang) => {
    localStorage.setItem("l4946e_2e137ed", lang);
    i18n.changeLanguage(lang);
  };

  const getLang = (key) => t(key);

  const getLangSelect = () => {
    const valueLocal = localStorage.getItem("l4946e_2e137ed");
    const defaultLang = navigator.language || navigator.userLanguage;

    if (valueLocal) return valueLocal;

    const langCode = defaultLang.split("-")[0]; // Extraer solo el código del idioma

    // Verificar si el idioma del navegador está en la lista de idiomas admitidos
    return supportedLanguages[langCode] || "en_US"; // Por defecto inglés
  };

  const reloadData = () => {
    const valueLocal = localStorage.getItem("l4946e_2e137ed");
    if (valueLocal) handleLang(valueLocal);
  };

  return { handleLang, getLang, getLangSelect, reloadData };
};

export default useGetChangeLang;
