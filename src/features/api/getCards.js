import { images } from '../../assets/data/data';

export const getCards = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (images) {
        resolve(images);
      } else {
        reject(new Error('Cards not found'));
      }
    }, 250);
  });
};

export const getCard = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (images.find((item) => item.id === id)) {
        resolve(images.find((item) => item.id === id));
      } else {
        reject(new Error('Card not found'));
      }
    }, 250);
  });
};
