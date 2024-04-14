import { inArrayValidator } from "../../../utils/validators.mjs";
const carouselItemPT = ({ state }) => {
  const visibleItems = state.d_numVisible;
  return {
    class: ["carousel-item", "bpv-carousel-item"],
    style: {
      "--computed-item-width": `${100 / visibleItems}%`
    }
  };
};
export const carouselPT = {
  root: ({ props }) => {
    const currentOrientation = inArrayValidator(props.orientation, ["horizontal", "vertical"], "horizontal");
    return { class: `carousel slide bpv-carousel bpv-carousel-${currentOrientation}` };
  },
  content: { class: "bpv-carousel-content" },
  container: { class: "bpv-carousel-container" },
  itemsContent: { class: "carousel-inner bpv-carousel-inner" },
  itemsContainer: { class: "bpv-carousel-items-container" },
  item: carouselItemPT,
  itemCloned: carouselItemPT,
  indicators: { class: "carousel-indicators bpv-carousel-indicators" },
  indicator: ({ context }) => ({ class: ["bpv-carousel-indicator", context.highlighted && "active"] }),
  indicatorButton: { class: "bpv-carousel-indicator-btn" },
  nextButton: { class: "carousel-control-next bpv-carousel-control-next" },
  previousButton: { class: "carousel-control-prev bpv-carousel-control-prev" }
};
