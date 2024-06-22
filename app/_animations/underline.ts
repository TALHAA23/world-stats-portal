import anime from "animejs";

const underlineAnimation = (element: Element | NodeList, delay: number) =>
  anime({
    targets: element,
    width: ["0%", "100%"],
    duration: 200,
    delay: delay,
  }).play();

export default underlineAnimation;
