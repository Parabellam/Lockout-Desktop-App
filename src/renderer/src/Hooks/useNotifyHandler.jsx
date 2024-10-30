import { useSnackbar } from "notistack";

const useNotifyHandler = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notify = (
    text,
    vertical,
    horizontal,
    typeLabel,
    autoHideDuration = 2000,
  ) => {
    try {
      enqueueSnackbar(text, {
        autoHideDuration: autoHideDuration,
        variant: typeLabel,
        anchorOrigin: {
          vertical: vertical,
          horizontal: horizontal,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { notify };
};

export default useNotifyHandler;
