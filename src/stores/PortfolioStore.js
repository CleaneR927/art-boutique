import { makeAutoObservable } from 'mobx';

class PortfolioStore {
  items = [];
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchItems = async () => {
    try {
      // Здесь должна быть логика для получения карточек портфолио
      const response = await fakeApiFetchPortfolio();
      this.items = response.items;
      this.error = null;
    } catch (err) {
      this.error = err.message;
    }
  };

  addItem = (item) => {
    this.items.push(item);
  };

  removeItem = (itemId) => {
    this.items = this.items.filter((item) => item.id !== itemId);
  };
}

// Фейковая функция для имитации API
const fakeApiFetchPortfolio = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        items: [
          { id: 1, title: 'Card 1', description: 'Description 1' },
          { id: 2, title: 'Card 2', description: 'Description 2' }
        ]
      });
    }, 1000);
  });
};

const portfolioStore = new PortfolioStore();
export default portfolioStore;
