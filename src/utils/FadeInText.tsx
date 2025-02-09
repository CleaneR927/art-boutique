import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import '../styles/fadeInText.scss';

interface FadeInTextProps {
  children: React.ReactNode;
}

const FadeInText: React.FC<FadeInTextProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div ref={ref} className={clsx('content', inView && 'visible')}>
      {children}
    </div>
  );
};

export default FadeInText;
