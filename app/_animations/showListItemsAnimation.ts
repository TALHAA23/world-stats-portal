import anime from "animejs";
import getRandomNumber from "../_utils/getRandomNumber";

const ANIMATION_DURATION = 1000;
const showListItemsAnimation = (element: HTMLElement) => {
  const animation = createAnimation(element);
  createObserver(element, animation);
  return () => anime.remove(animation);
};

const createAnimation = (parentElement: HTMLElement) => {
  const childHeight =
    parentElement.firstElementChild?.firstElementChild?.clientHeight || 0;
  const childrenLength = parentElement.children.length;
  const animation = anime({
    targets: Array.from(parentElement.children),
    top: (el: HTMLElement, index: number) => (index * childHeight) / 2,
    rotate: (el: HTMLElement, index: number) => `${getRandomNumber()}deg`,
    opacity: ["0%", "100%"],
    scale: ["0", "1"],
    delay: (el, index) => index * ANIMATION_DURATION,
    direction: "alternate",
    loop: true,
    endDelay: (el, index) => (childrenLength - index - 1) * ANIMATION_DURATION,
  });
  return animation;
};

const createObserver = (
  element: HTMLElement,
  animation: anime.AnimeInstance
) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animation.play();
    } else animation.pause();
  });
  observer.observe(element);
};

export default showListItemsAnimation;
