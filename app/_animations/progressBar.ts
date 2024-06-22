import anime from "animejs";

const progressBarAnimation = (element: HTMLElement, delay: number) =>
  anime({
    targets: element,
    width: ["0%", `${element.dataset.completePercentage}%`],
    delay: delay,
    duration: 1000,
    easing: "linear",
  }).play();
export default progressBarAnimation;
