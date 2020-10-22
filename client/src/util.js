import Swal from 'sweetalert2';

export const popupMessages = {
  async fail(message) {
    await Swal.fire({ icon: 'error', text: message });
  },
  async success(message) {
    await Swal.fire({ icon: 'success', text: message, timer: 1000 });
  },
};

export const convertTagStringToTags = (tagString) => tagString.split('#').map((tag) => tag.trim()).filter((v) => v);
export const convertTagsToTagString = (tags) => tags.map((tag) => `#${tag}`).join(' ');
