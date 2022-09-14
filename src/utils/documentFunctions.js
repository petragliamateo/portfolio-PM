function handleScroll(component) {
  document.querySelector(`#${component}`).scrollIntoView({ behavior: 'smooth' });
}

function onScrollFixedReveal(elementId) {
  const element = document.getElementById(elementId);

  const myScrollFunc = () => {
    const y = window.scrollY;
    if (y >= 500) {
      element.className = 'cta show';
    } else {
      element.className = 'cta hide';
    }
  };
  window.addEventListener('scroll', myScrollFunc);
}

function onScrollReveal(elementId) {
  const element = document.getElementById(elementId);
  element.className = 'hide';

  const myScrollFunc = () => {
    const y = window.scrollY;
    if (y >= 500) {
      element.className = 'cta show';
    }
  };
  window.addEventListener('scroll', myScrollFunc);
}

export { handleScroll, onScrollFixedReveal, onScrollReveal };
