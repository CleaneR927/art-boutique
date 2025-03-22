import styles from './index.module.scss';

const CarouselBlock = ({ children }) => {
  return (
    <section>
      <div>
        <h1>
          АРТ <span>.</span> БУТИК БИЖУТЕРИИ
        </h1>
        <p>
          Украшения ручной работы из натуральных камней, полные стиля и
          вдохновения, для истинных ценителей
        </p>
      </div>
      <div>{children}</div>
      <button>Портфолио работ</button>
    </section>
  );
};

export default CarouselBlock;
