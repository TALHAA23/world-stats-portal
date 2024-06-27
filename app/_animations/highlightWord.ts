import anime from "animejs";
import underlineAnimation from "./underline";
import bubbleupAnimation from "./bubbleup";

const hightlightWord = (element: HTMLElement) => createObserver(element);

const createAnimation = (element: HTMLElement) => {
  Array.from(element.children).forEach((el, index) => {
    const calulatedDelay = index * 200;
    startSubAnimations(el, calulatedDelay);
    const animation = anime({
      targets: el,
      opacity: [0.1, 1],
      delay: index * 200,
    });
    animation.finished.then(() => anime.remove(animation));
  });
};

const startSubAnimations = (element: Element, calulatedDelay: number) => {
  if (element.classList.contains("special-parent")) {
    const customUnderlineEl = element.querySelector("#custom-underline");
    const iconBubbleupEl = element.querySelector("#icon-to-bubble-up");
    customUnderlineEl &&
      underlineAnimation(customUnderlineEl, calulatedDelay, {
        duration: 1000,
        easing: "easeInOutExpo",
      });
    iconBubbleupEl && bubbleupAnimation(iconBubbleupEl, calulatedDelay);
  }
};

const createObserver = (element: HTMLElement) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      createAnimation(element);
      observer.unobserve(element);
    }
  });
  observer.observe(element);
};

export default hightlightWord;
