let leadingTimeoutId: any = null;
let trailingTimeoutId: any = null;

const throttle = (
  element: HTMLElement,
  animation: anime.AnimeInstance,
  callback: (element: HTMLElement, animation: anime.AnimeInstance) => void,
  delay: number = 50
) => {
  // Clear any existing timeouts to ensure only one execution within delay
  if (leadingTimeoutId) {
    clearTimeout(leadingTimeoutId);
  }
  if (trailingTimeoutId) {
    clearTimeout(trailingTimeoutId);
  }

  // Execute callback immediately if no timeouts are active (leading execution)
  if (!leadingTimeoutId && !trailingTimeoutId) {
    callback(element, animation);
  }

  // Schedule trailing execution after the delay
  leadingTimeoutId = setTimeout(() => {
    leadingTimeoutId = null;
    callback(element, animation);
  }, delay);
};

export default throttle;
