import anime from "animejs";

const roundNumberAnimation = (element: HTMLElement, delay: number) =>
  anime({
    targets: element,
    innerHTML: [0, element.dataset.number],
    delay: delay,
    easing: "linear",
    duration: 1000,
    round: 10,
  }).play();
export default roundNumberAnimation;
