import anime from "animejs";
import controlAnimationByScroll from "../_lib/controlAnimationByScroll";

const shatteredAndIntactWordAnimation = (element: HTMLElement) => {
  const animation = createAnimation(element);
  createObserver(element, animation);
};

const createAnimation = (element: HTMLElement) => {
  const animation = anime({
    targets: element.querySelectorAll("span"),
    translateX: () => [anime.random(-200, 200), 0],
    translateY: () => [anime.random(-200, 200), 0],
    rotate: () => [`${anime.random(-120, 120)}deg`, "0deg"],
    autoplay: false,
  });
  return animation;
};

const createObserver = (
  element: HTMLElement,
  animation: anime.AnimeInstance
) => {
  const callback = () => controlAnimationByScroll(element, animation);
  const observer = new IntersectionObserver((entries) => {
    entries[0].isIntersecting
      ? window.addEventListener("scroll", callback)
      : window.removeEventListener("scroll", callback);
  });
  observer.observe(element);
};
export default shatteredAndIntactWordAnimation;
