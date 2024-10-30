import { useState } from "react";
import { useGetChangeLang } from "./Hooks";

const AppViewModel = () => {
  const { getLang } = useGetChangeLang();
  const [isLock, setIsLock] = useState(false);
  const lockOutButton = () => {
    setIsLock(!isLock);

    // Ejecuta el archivo .exe que bloquea el teclado usando el nuevo método
    // window.api.exec("src/renderer/src/Lockout.exe", (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`Error al ejecutar el archivo: ${error}`);
    //     return;
    //   }
    //   console.log(`Salida: ${stdout}`);
    // });
  };

  const ownerText = getLang("global.poweredBy");
  const discursoText = getLang("global.prioritizeSecurity");
  const lockOutText = "Lockout";
  const textClasses = {
    t1: "creator text-lg",
    t2: "text text-black",
    t3: "react",
  };

  const renderText = (text, type) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className={`text-black transition-opacity duration-300 ease-in-out ${
          isLock ? "opacity-0" : "opacity-100"
        } hover:opacity-100 ${textClasses[type] || ""}`}
      >
        {word}
      </span>
    ));
  };

  const ownerRenderedText = isLock ? renderText(ownerText, "t1") : ownerText;

  const discursoRenderedText = isLock
    ? renderText(discursoText, "t2")
    : discursoText;
  const lockoutRenderedText = isLock
    ? renderText(lockOutText, "t3")
    : lockOutText;

  return {
    lockOutButton,
    isLock,
    ownerRenderedText,
    discursoRenderedText,
    lockoutRenderedText,
  };
};

export default AppViewModel;
