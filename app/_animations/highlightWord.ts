import anime from "animejs";

const hightlightWord = (element: HTMLElement) => createObserver(element);

const createAnimation = (element: HTMLElement) => {
  const animation = anime({
    targets: element.children,
    opacity: [0.1, 1],
    delay: anime.stagger(200),
  });
  return animation;
};

const createObserver = (element: HTMLElement) => {
  const observer = new IntersectionObserver(
    (entries) => entries[0].isIntersecting && createAnimation(element)
  );
  observer.observe(element);
  return () => observer.unobserve(element);
};

export default hightlightWord;
