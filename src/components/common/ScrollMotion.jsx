import { useEffect } from 'react';

export default function ScrollMotion() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-target');

    const handleScroll = () => {
      const point = window.innerHeight * 0.8;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < point) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}