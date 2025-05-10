import { makeAutoObservable } from 'mobx';

class RegistrationStore {
  user = {
    username: '',
    password: '',
    email: ''
  };
  error = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserField = (field, value) => {
    this.user[field] = value;
  };

  register = async () => {
    this.isLoading = true;
    this.error = null;

    try {
      const response = await fakeApiRegister(this.user);
      console.log('Registration successful:', response);
      this.resetUser();
    } catch (err) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  };

  resetUser = () => {
    this.user = {
      username: '',
      password: '',
      email: ''
    };
  };
}

// Фейковая функция для имитации API регистрации
const fakeApiRegister = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.username && user.password && user.email) {
        resolve({ message: 'User registered successfully' });
      } else {
        reject(new Error('All fields are required'));
      }
    }, 1000);
  });
};

const registrationStore = new RegistrationStore();
export default registrationStore;
