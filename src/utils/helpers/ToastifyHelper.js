import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Helper for Toastify
 */
class ToastifyHelper {
    static information(message) {
        return toast.info(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
        });
    }

    static error(message) {
        return toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
        });
    }
}

export default ToastifyHelper