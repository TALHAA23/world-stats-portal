import anime from "animejs";
import underlineAnimation from "./underline";
import roundNumberAnimation from "./roundNumber";
import progressBarAnimation from "./progressBar";

const NEXT_CHILD_ANIMATION_DELAY = 500;
const ADDITIONAL_ANIMATION_DELAY = 200;

const showSectionDetailsOneByOneAnimation = (element: HTMLElement) => {
  createObserver(element);
};

const createAnimation = (element: HTMLElement) => {
  let currentElementDelay = 0;
  const animation = anime({
    targets: element.children,
    scale: [0, 1],
    delay(element, index) {
      if (element.dataset.delay)
        currentElementDelay += ADDITIONAL_ANIMATION_DELAY;
      const calculateDelay =
        index * NEXT_CHILD_ANIMATION_DELAY + currentElementDelay;
      startSubAnimations(element, calculateDelay);
      return index * NEXT_CHILD_ANIMATION_DELAY + currentElementDelay;
    },
  });
  return animation;
};

const startSubAnimations = (element: HTMLElement, delay: number) => {
  if (element.id == "speical-parent") {
    const underlineEl = element.querySelectorAll("#custom-underline");
    const numbersEl = element.querySelector("#numbers") as HTMLElement;
    const progressEl = element.querySelector("#progress-bar") as HTMLElement;
    underlineEl && underlineAnimation(underlineEl, delay);
    numbersEl && roundNumberAnimation(numbersEl, delay);
    progressEl && progressBarAnimation(progressEl, delay);
  }
};
const createObserver = (element: HTMLElement) =>
  new IntersectionObserver((entries) => {
    entries[0].isIntersecting && createAnimation(element).play();
  }).observe(element);

export default showSectionDetailsOneByOneAnimation;
