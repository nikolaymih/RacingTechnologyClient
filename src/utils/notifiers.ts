import { toast, ToastOptions } from 'react-toastify';

const CLOSE_TIME = 3000; // milliseconds
const POSITION = 'top-right';

export const notifySuccess = (message: string, options?: ToastOptions) => {
    if (options && options.toastId && toast.isActive(options.toastId)) {
        toast.update(options.toastId, {
            autoClose: CLOSE_TIME,
        });
        return;
    }

    return toast(message, {
        position: POSITION,
        autoClose: CLOSE_TIME,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'success',
        ...options,
    });
};

export const notifyError = (message: string, id?: string) =>
    toast(message, {
        position: POSITION,
        autoClose: CLOSE_TIME,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'error',
        toastId: id,
    });
