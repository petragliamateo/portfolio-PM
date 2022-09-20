import { useEffect } from 'react';

const slowScroll = (id) => {
  const scrolltotop = document.scrollingElement.scrollTop;
  const target = document.getElementById(id);
  const factor = 0.5;
  const yvalue = scrolltotop * factor;
  target.style.backgroundPosition = `center ${yvalue}px`;
};

export default function useSlowScroll(id) {
  useEffect(() => {
    function listener() {
      window.addEventListener('scroll', () => slowScroll(id));
    }
    listener();
    return () => listener();
  }, []);
}
