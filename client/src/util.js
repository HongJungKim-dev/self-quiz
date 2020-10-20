import Swal from 'sweetalert2';

export const popupMessages = {
  async fail(message) {
    await Swal.fire({ icon: 'error', text: message });
  },
  async success(message) {
    await Swal.fire({ icon: 'success', text: message, timer: 1000 });
  },
};

// TODO: 제거
const xxx = 'xxx';
export default xxx;
