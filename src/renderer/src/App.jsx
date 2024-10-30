import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/16/solid";
import electronLogo from "./assets/electron.svg";
import "./index.css";
import { Button } from "@nextui-org/react";
import AppViewModel from "./App.viewmodel"; // Importación correcta sin llaves
import { ModalOne } from "./components";

function App() {
  const {
    lockOutButton,
    isLock,
    ownerRenderedText,
    discursoRenderedText,
    lockoutRenderedText,
  } = AppViewModel();

  return (
    <div className="grid grid-cols-[400px_1fr_400px] h-screen">
      {/* Columna izquierda */}
      <div className="bg-gray-200 h-full place-self-start">
        <Button
          variant="light"
          className="text-black font-bold"
          endContent={
            !isLock ? (
              <LockOpenIcon className="w-6 h-6" />
            ) : (
              <LockClosedIcon className="w-6 h-6" />
            )
          }
          onClick={lockOutButton} // Función correctamente llamada aquí
        />
      </div>

      {/* Columna central con el contenido principal */}
      <div className="flex flex-col items-center justify-center w-screen fixed">
        <img
          alt="logo"
          className={`h-12 mt-2 transition-opacity duration-300 ease-in-out ${
            isLock ? "opacity-0" : "opacity-100"
          } hover:opacity-100`}
          src={electronLogo}
        />
        <div className="creator text-black text-lg">{ownerRenderedText}</div>
        <div className="text text-black">
          <span>{discursoRenderedText}</span>
          <span className="react"> {lockoutRenderedText}</span>
        </div>

        <div className="flex my-5 justify-center text-center items-center">
          <Button
            variant="light"
            className="text-black font-bold"
            endContent={
              !isLock ? (
                <LockOpenIcon className="w-6 h-6" />
              ) : (
                <LockClosedIcon className="w-6 h-6" />
              )
            }
            onClick={lockOutButton} // Función correctamente llamada aquí
          />
        </div>
      </div>

      {/* Columna derecha */}
      <div className="h-full place-self-end fixed">
        <ModalOne />
      </div>
    </div>
  );
}

export default App;
