import anime from "animejs";
const showHeadingAnimation = (element: HTMLElement) => {
  const animation = createAnimation(element);
  const observer = createObserver(element, animation);
  return () => observer.unobserve(element);
};

const createAnimation = (element: HTMLElement) =>
  anime({
    targets: element,
    translateY: ["-100%", "20px"],
    opacity: ["0%", "100%"],
    duration: 2000,
  });

const createObserver = (
  element: HTMLElement,
  animation: anime.AnimeInstance
) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && animation.began) animation.play();
  });
  observer.observe(element);
  return observer;
};

export default showHeadingAnimation;
