import anime from "animejs";

const NEXT_CHILD_ANIMATION_DELAY = 500;

const showSectionDetailsOneByOneAnimation = (element: HTMLElement) => {
  const animation = createAnimation(element);
  createObserver(element, animation);
};

const createAnimation = (element: HTMLElement) =>
  anime({
    targets: element.children,
    scale: [0, 1],
    delay(element, index) {
      return index * NEXT_CHILD_ANIMATION_DELAY;
    },
  });

const createObserver = (element: HTMLElement, animation: anime.AnimeInstance) =>
  new IntersectionObserver((entries) => {
    entries[0].isIntersecting ? animation.play() : animation.pause;
  }).observe(element);

export default showSectionDetailsOneByOneAnimation;
