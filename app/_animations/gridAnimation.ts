import anime from "animejs";
const gridAnimation = (element: HTMLElement, textElement: HTMLElement) => {
  const animation = createAnimation(element, textElement);
  createObserver(animation).observe(element);
};

const createAnimation = (
  element: HTMLElement,
  textElement: HTMLElement
): anime.AnimeInstance => {
  let index = 1;
  const names = textElement.dataset.namesList?.split(",") as string[];
  const animation = anime({
    targets: element.querySelectorAll("span"),
    scale: [
      { value: 0, easing: "easeOutSine", duration: 500 },
      { value: 0, easing: "easeOutSine", duration: 1000 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
    loop: true,
    loopComplete: () => {
      textElement.innerHTML = names[index];
      index = index > names.length - 2 ? 0 : index + 1;
    },
  });
  return animation;
};

const createObserver = (animation: anime.AnimeInstance) =>
  new IntersectionObserver((entries) =>
    entries[0].isIntersecting ? animation.play() : animation.pause()
  );

export default gridAnimation;
