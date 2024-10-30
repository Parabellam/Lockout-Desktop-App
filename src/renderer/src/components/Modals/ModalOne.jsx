import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarouselStyles.css";
import ModalOneViewModel from "./ModalOne.viewmodel";
import { Cog6ToothIcon } from "@heroicons/react/16/solid";

export default function ModalOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { elegirIdioma, langOptions, getLang } = ModalOneViewModel();

  return (
    <>
      <Tooltip content={getLang("global.idioma")}>
        <Button
          variant="light"
          onPress={onOpen}
          className="min-w-0 h-10 w-16 mr-1 mt-3"
        >
          <Cog6ToothIcon className="w-6 h-6 text-black" />
        </Button>
      </Tooltip>
      <Modal
        backdrop={"opaque"}
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
        className="h-48"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 h-12 text-black font-semibold">
                {getLang("global.chooseLanguage")}
              </ModalHeader>
              <ModalBody>
                {/* Implementar el carrusel de banderas con Swiper */}
                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    Mousewheel,
                  ]}
                  spaceBetween={10}
                  slidesPerView={4} // Mostrar 3 banderas al mismo tiempo
                  centeredSlides={true}
                  grabCursor={true}
                  pagination={{ clickable: true }} // Agregar paginación
                  navigation={true} // Mantener navegación activa
                  scrollbar={{ draggable: true }}
                  mousewheel={true} // Habilitar control con el scroll del ratón
                  className="w-full h-full"
                >
                  {langOptions.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => {
                          elegirIdioma(item.id);
                          onClose(); // Cerrar el modal después de seleccionar
                        }}
                      >
                        <img
                          src={item.img}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:scale-110 transition-transform duration-300"
                          alt={item.name} // Buena práctica para accesibilidad
                        />
                        <span className="text-sm mt-2">{item.name}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

ModalOne.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
    })
  ),
  elegirIdioma: PropTypes.func,
};
