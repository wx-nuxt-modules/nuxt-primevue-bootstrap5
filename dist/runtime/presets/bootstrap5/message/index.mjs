import CheckIcon from "primevue/icons/check";
import ExclamationTriangleIcon from "primevue/icons/exclamationtriangle";
import InfoCircleIcon from "primevue/icons/infocircle";
import TimesCircleIcon from "primevue/icons/timescircle";
import { BPV_SEVERITY } from "../../../constants/index.mjs";
import { inArrayValidator } from "../../../utils/validators.mjs";
export const messagePT = {
  root: ({ props, ...rest }) => {
    Object.defineProperty(rest.instance, "iconComponent", {
      get() {
        const obj = {
          info: InfoCircleIcon,
          success: CheckIcon,
          warning: ExclamationTriangleIcon,
          danger: TimesCircleIcon
        };
        obj.primary = obj.secondary = obj.dark = obj.light = obj.info;
        return obj[props.severity || "info"];
      }
    });
    return {
      class: ["alert", "bpv-alert", `alert-${inArrayValidator(props.severity, BPV_SEVERITY, "info")}`]
    };
  },
  wrapper: () => ({
    class: "bpv-alert-wrapper"
  }),
  icon: () => {
    return {
      class: "bpv-alert-icon"
    };
  },
  closeButton: () => ({
    class: "btn bpv-alert-btn-close"
  }),
  transition: {
    name: "bpv-alert"
  }
};
