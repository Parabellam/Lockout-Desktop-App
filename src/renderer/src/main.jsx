import "./assets/main.css";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { SnackbarProvider } from "notistack";
import {
  Global_en_US,
  Global_es_SP,
  Global_de_DE,
  Global_it_IT,
  Global_fr_FR,
  Global_ja_JP,
  Global_ca_ES,
  Global_zh_CN,
  Global_ar_SA,
  Global_hi_IN,
} from "./Language/index";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import App from "./App";

const defaultLang = navigator.language || navigator.userLanguage;

// Inicializar i18next con todos los idiomas soportados
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en_US", // Configuración inicial basada en el navegador
  resources: {
    en_US: { global: Global_en_US },
    es_SP: { global: Global_es_SP },
    de_DE: { global: Global_de_DE },
    it_IT: { global: Global_it_IT },
    fr_FR: { global: Global_fr_FR },
    ja_JP: { global: Global_ja_JP },
    ca_ES: { global: Global_ca_ES },
    zh_CN: { global: Global_zh_CN },
    ar_SA: { global: Global_ar_SA },
    hi_IN: { global: Global_hi_IN },
  },
});

// Verificar si el idioma está guardado en el localStorage
const actuallyLang = localStorage.getItem("l4946e_2e137ed");

if (actuallyLang) {
  i18next.changeLanguage(actuallyLang); // Cambiar idioma al guardado
} else {
  // Si no hay un idioma guardado, almacenar el idioma por defecto basado en el navegador
  const defaultLanguage = defaultLang.includes("es") ? "es_SP" : "en_US";
  localStorage.setItem("l4946e_2e137ed", defaultLanguage);
  i18next.changeLanguage(defaultLanguage); // Establecer el idioma inicial
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <SnackbarProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </SnackbarProvider>
  </NextUIProvider>
);
