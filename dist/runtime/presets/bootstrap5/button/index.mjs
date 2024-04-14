import { BPV_SEVERITY, BPV_BUTTON_SIZE } from "../../../constants/index.mjs";
import { inArrayValidator, isUndefined } from "../../../utils/validators.mjs";
export const buttonPT = {
  root: ({ instance, props }) => {
    const { block } = instance.$params.attrs;
    const { severity, link, raised, rounded, text, outlined, size } = props;
    const currentSeverity = inArrayValidator(severity, BPV_SEVERITY, "primary");
    const currentSize = inArrayValidator(size, BPV_BUTTON_SIZE);
    const classes = [
      "btn",
      "bpv-btn",
      severity && !link && !text && !outlined && `btn-${currentSeverity}`,
      severity && text && `bpv-btn-text-${currentSeverity}`,
      severity && outlined && `btn-outline-${currentSeverity}`,
      link && !severity && "btn-link",
      !isUndefined(block) && "bpv-btn-block",
      raised && "bpv-btn-shadow",
      rounded && "bpv-btn-pill",
      currentSize && `btn-${currentSize}`
    ];
    return { class: classes };
  },
  label: ({ instance, props }) => {
    const { label } = props;
    const classes = ["bpv-btn-label", !label && "bpv-btn-label-hidden"];
    return { class: classes };
  },
  icon: ({ instance, props }) => {
    const { iconPos } = props;
    const classes = [
      "bpv-btn-icon",
      iconPos === "left" && "bpv-btn-icon-left",
      iconPos === "right" && "bpv-btn-icon-right"
    ];
    return { class: classes };
  },
  loadingIcon: ({ instance, props }) => {
    const classes = ["bpv-btn-icon", "bpv-btn-icon-loading"];
    return { class: classes };
  }
};
