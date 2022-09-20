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

function onScrollReveal(reactElementRef) {
  const element = reactElementRef;
  element.style.opacity = 0;

  const myScrollFunc = () => {
    const pos = element.getBoundingClientRect().y;
    if (pos <= 450) {
      element.style.opacity = 1;
    }
  };
  window.addEventListener('scroll', myScrollFunc);
}

function hideNavbar() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-60px';
    }
    prevScrollpos = currentScrollPos;
  };
}

export {
  handleScroll, onScrollFixedReveal, onScrollReveal, hideNavbar,
};
