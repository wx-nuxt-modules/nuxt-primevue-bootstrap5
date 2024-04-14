import { BPV_SEVERITY, BPV_BADGE_SIZE } from "../../../constants/index.mjs";
import { inArrayValidator, isUndefined } from "../../../utils/validators.mjs";
const sharedPT = {
  severity(value) {
    return `bpv-badge-${inArrayValidator(value, BPV_SEVERITY, "secondary")}`;
  }
};
export const badgePT = {
  root: ({ instance, props }) => {
    const { pill, rounded } = instance.$params.attrs;
    const { severity, size } = props;
    const classes = [
      "badge",
      "bpv-badge",
      sharedPT.severity(severity),
      { "bpv-badge-rounded": !isUndefined(rounded) },
      { "bpv-badge-pill": !isUndefined(pill) },
      { [`bpv-badge-${size}`]: inArrayValidator(size, BPV_BADGE_SIZE, null) }
    ];
    return { class: classes };
  }
};
export const badgeDirectivePT = {
  root: ({ context }) => {
    console.log(context);
    const severity = BPV_SEVERITY.find((val) => context[val]);
    const classes = [
      "badge",
      "bpv-badge",
      sharedPT.severity(severity),
      "bpv-badge-pill",
      { "bpv-badge-dot": context.dot }
    ];
    return { class: classes };
  }
};
