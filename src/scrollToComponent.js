export const scrollToComponent = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};
