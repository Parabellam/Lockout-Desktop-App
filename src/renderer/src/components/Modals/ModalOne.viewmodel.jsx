import i18next from "i18next";
import { useGetChangeLang } from "../../Hooks";

const ModalOneViewModel = () => {
  const { getLang } = useGetChangeLang();
  const langOptions = [
    {
      name: getLang("global.ingles"),
      id: 1,
      code: "en_US",
      img: "../src/assets/flags/en.png",
    }, // Inglés
    {
      name: getLang("global.espanol"),
      id: 2,
      code: "es_SP",
      img: "../src/assets/flags/es.png",
    }, // Español
    {
      name: getLang("global.aleman"),
      id: 3,
      code: "de_DE",
      img: "../src/assets/flags/de.png",
    }, // Alemán
    {
      name: getLang("global.italiano"),
      id: 4,
      code: "it_IT",
      img: "../src/assets/flags/it.png",
    }, // Italiano
    {
      name: getLang("global.frances"),
      id: 5,
      code: "fr_FR",
      img: "../src/assets/flags/fr.png",
    }, // Francés
    {
      name: getLang("global.japones"),
      id: 6,
      code: "ja_JP",
      img: "../src/assets/flags/ja.png",
    }, // Japonés
    {
      name: getLang("global.catalan"),
      id: 7,
      code: "ca_ES",
      img: "../src/assets/flags/ca.png",
    }, // Catalán
    {
      name: getLang("global.mandarin"),
      id: 8,
      code: "zh_CN",
      img: "../src/assets/flags/cn.png",
    }, // Mandarín
    {
      name: getLang("global.arabe"),
      id: 9,
      code: "ar_SA",
      img: "../src/assets/flags/ar.png",
    }, // Árabe
    {
      name: getLang("global.hindi"),
      id: 10,
      code: "hi_IN",
      img: "../src/assets/flags/in.png",
    }, // Hindi
  ];

  const elegirIdioma = (key) => {
    langOptions.map((item) => {
      if (item.id === parseInt(key)) {
        console.log("Se ha elgido el idioma ", item.name);
        localStorage.setItem("l4946e_2e137ed", item.code);
        i18next.changeLanguage(item.code);
      }
    });
  };
  return { elegirIdioma, langOptions, getLang };
};

export default ModalOneViewModel;
