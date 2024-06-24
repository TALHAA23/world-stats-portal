import anime from "animejs";

const shatteredAndIntactWordAnimation = (
  element: HTMLElement
): anime.AnimeInstance => {
  const animation = createAnimation(element);
  //   createObserver(element, animation);
  observer.observe(element);
  return animation;
};

const createAnimation = (element: HTMLElement) => {
  const animation = anime({
    targets: element.querySelectorAll("span"),
    translateX: () => [anime.random(-200, 200), 0],
    translateY: () => [anime.random(-200, 200), 0],
    autoplay: false,
  });
  return animation;
};

const observer = new IntersectionObserver((entries) => {
  let scrollListener = null; // Initialize scroll listener variable outside the loop

  if (entries[0].isIntersecting) {
    if (!scrollListener) {
      // Check if scroll listener already exists
      scrollListener = window.addEventListener("scroll", () => {
        console.log("Hello");
      });
    }
  } else {
    console.log("NIO");
    if (scrollListener) {
      // Ensure scroll listener exists before removing
      window.removeEventListener("scroll", scrollListener);
      scrollListener = null;
    }
  }
});

export default shatteredAndIntactWordAnimation;
