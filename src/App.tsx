import './styles/App.scss';
import FadeInText from './utils/FadeInText';

function App() {
  return (
    <div className="app">
      <div className="container">Прокрутите вниз, чтобы увидеть текст!</div>
      <FadeInText>
        <h2>Я плавно появлюсь при прокрутке!</h2>
      </FadeInText>
      <div className="container">Я плавно появлюсь при прокрутке!</div>
    </div>
  );
}

export default App;

