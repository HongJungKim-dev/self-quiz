import Swal from 'sweetalert2';

export const popupMessages = {
  async fail(message) {
    await Swal.fire({ icon: 'error', text: message });
  },
  async success(message, timer = 1000) {
    await Swal.fire({ icon: 'success', text: message, timer });
  },
};

export const convertTagStringToTags = (tagString) => tagString.split('#').map((tag) => tag.trim()).filter((v) => v);
export const convertTagsToTagString = (tags) => tags.map((tag) => `#${tag}`).join(' ');

export const getCurrentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, 0);
  const date = today.getDate().toString().padStart(2, 0);

  return `${year}-${month}-${date}`;
};
