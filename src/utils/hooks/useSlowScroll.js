import { useEffect } from 'react';

const slowScroll = (ids = []) => {
  const scrolltotop = document.scrollingElement.scrollTop;
  const factor = 0.5;
  const yvalue = scrolltotop * factor;
  ids.forEach((id) => {
    const target = document.getElementById(id);
    target.style.backgroundPosition = `center ${yvalue}px`;
  });
};

export default function useSlowScroll(ids) {
  useEffect(() => {
    function listener() {
      window.addEventListener('scroll', () => slowScroll(ids));
    }
    listener();
    return () => listener();
  }, []);
}
