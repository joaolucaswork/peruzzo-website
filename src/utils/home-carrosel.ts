// Start of Splide Carrosel

import Splide from '@splidejs/splide';

export const homeCarrosel = () => {
  const splide = new Splide('#slider1', {
    perPage: 4,
    perMove: 1,
    focus: 0, // 0 = left and 'center' = center
    type: 'loop', // 'loop' or 'slide'
    gap: '4.6875em', // space between slides
    arrows: false, // 'slider' or false
    pagination: false, // 'slider' or false
    speed: 1500, // transition speed in miliseconds
    dragAngleThreshold: 30, // default is 30
    autoWidth: false, // for1 cards with differing widths
    rewind: false, // go back to beginning when reach end
    rewindSpeed: 400,
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true, // true removes empty space from end of list
    breakpoints: {
      2560: {
        fixedWidth: 385,
        fixedHeight: 414,
      },
      991: {
        fixedWidth: '100%',
        fixedHeight: '100%',
        // Tablet
        perPage: 4,
      },
      767: {
        // Mobile Landscape
        perPage: 1,
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        fixedWidth: '100%',
        fixedHeight: '100%',
      },
    },
  });

  const btnNext = document.querySelector('.seta-splide.seta-next');
  const btnPrev = document.querySelector('.seta-splide.seta-prev');

  //check if btnNext is not null before adding event listener
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      splide.go('+1');
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      splide.go('-1');
    });
  }

  splide.mount();

  // End of Splide Carrosel
};
