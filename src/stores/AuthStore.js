import { makeAutoObservable } from 'mobx';

class AuthStore {
  isAuthenticated = false;
  user = null;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (username, password) => {
    try {
      const response = await fakeApiLogin(username, password);
      this.user = response.user;
      this.isAuthenticated = true;
      this.error = null;
    } catch (err) {
      this.error = err.message;
    }
  };

  logout = () => {
    this.user = null;
    this.isAuthenticated = false;
  };
}

// Фейковая функция для имитации API
const fakeApiLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve({ user: { name: 'User', id: 1 } });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

const authStore = new AuthStore();
export default authStore;
