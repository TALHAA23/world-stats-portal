let timeoutId: any = null; // Initialize with null

const debounce = (
  element: HTMLElement,
  animation: anime.AnimeInstance,
  callback: (element: HTMLElement, animation: anime.AnimeInstance) => void,
  delay: number = 100
) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    callback(element, animation);
  }, delay);
};

export default debounce;
