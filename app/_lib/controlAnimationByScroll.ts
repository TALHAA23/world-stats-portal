const controlAnimationByScroll = (
  element: HTMLElement,
  animation: anime.AnimeInstance
) => {
  console.log("Jelo");
  if (!element) {
    throw new Error("Can't control null element");
  }
  const value1 = element.getBoundingClientRect().bottom - window.innerHeight;
  const value2 = window.innerHeight;

  const absoluteDifference = Math.abs(value1 - value2);
  const largerValue = Math.max(Math.abs(value1), Math.abs(value2));

  if (
    largerValue === 0 ||
    (value1 < 0 && value2 > 0 && Math.abs(value1) > value2) ||
    value1 > 0
  ) {
    return;
  } else {
    const percentageDifference = Math.min(
      (absoluteDifference / largerValue) * 100
    );

    animation.seek(animation.duration * ((percentageDifference - 100) / 100));
  }
};
export default controlAnimationByScroll;
