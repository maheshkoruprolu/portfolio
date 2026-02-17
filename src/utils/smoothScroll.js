/**
 * Smoothly scrolls to a target scroll position or element.
 * @param {number|string} target - The vertical scroll position (number) or a selector string.
 * @param {number} duration - Animation duration in ms.
 * @param {number} offset - Vertical offset (useful for fixed navbars).
 */
export const smoothScroll = (target, duration = 1000) => {
  const start = window.pageYOffset;
  let targetPosition = 0;
  
  // Use dynamic offset based on navbar height
  const nav = document.querySelector('nav');
  const offset = nav ? nav.offsetHeight : 80;

  if (typeof target === 'string') {
    const element = document.querySelector(target);
    if (!element) return;
    targetPosition = element.getBoundingClientRect().top + start - offset;
  } else {
    targetPosition = target;
  }

  const distance = targetPosition - start;
  const startTime = performance.now();

  const scroll = () => {
    const time = Math.min(1, (performance.now() - startTime) / duration);
    
    // Easing function: easeInOutQuart
    const t = time;
    const ease = t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    
    window.scrollTo(0, Math.floor(start + distance * ease));
    
    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};
