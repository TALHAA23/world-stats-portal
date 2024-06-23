import anime from "animejs";

const underlineAnimation = (
  element: Element | NodeList,
  delay: number,
  customization: anime.AnimeAnimParams
) =>
  anime({
    targets: element,
    width: ["0%", "100%"],
    duration: customization?.duration || 200,
    easing: customization?.easing || "easeInQuad",
    delay: delay,
  }).play();

export default underlineAnimation;
