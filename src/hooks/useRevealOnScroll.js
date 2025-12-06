import { useEffect } from "react";

export const useRevealOnScroll = (ref, { threshold = 0.2 } = {}) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("is-hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold]);
};
