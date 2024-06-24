import anime from "animejs";

const gridAnimation = (
  element: HTMLElement,
  textElement: HTMLElement,
  names: string[]
) => {
  createAnimation(element, textElement, names);
};
const createAnimation = (
  element: HTMLElement,
  textElement: HTMLElement,
  names: string[]
) => {
  let index = 1;
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
  animation.play();
};

export default gridAnimation;
