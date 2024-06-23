import anime from "animejs";

const bubbleupAnimation = (element: Element, delay: number) => {
  //   const animation = anime
  //     .timeline({
  //       targets: element,
  //       duration: 4000,
  //       delay: delay,
  //     })
  //     .add({ opacity: 1, scale: 1, translateY: -30 })
  //     .add({ opacity: 1, scale: 2, translateY: -60 })
  //     .add({ opacity: 0, scale: 0, translateY: -30 });

  //   animation.finished.then(() => {
  //     console.log("completed!!!");
  //   });

  const animation = anime({
    targets: element,
    duration: 2000,
    delay: delay,
    opacity: [0, 1],
    easing: "linear",
    keyframes: [
      {
        opacity: [0, 1],
        scale: [0, 1],
        translateY: [-8, -20],
      },
      {
        opacity: [1, 1],
        scale: [1, 1],
        translateY: [-20, -20],
      },
      {
        opacity: [1, 0],
        scale: [1, 0],
      },
    ],
  });
  return animation;
};
export default bubbleupAnimation;
