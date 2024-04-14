export const accordionTabPT = {
  root: ({ instance, props }) => {
    const classes = ["accordion-item bpv-accordion-item"];
    return { class: classes };
  },
  header: ({ instance, props }) => {
    const classes = ["accordion-header bpv-accordion-header"];
    return { class: classes };
  },
  headerAction: ({ accordiontab, ...rest }) => {
    const { active = false } = accordiontab.context;
    const { disabled } = accordiontab.props;
    const classes = ["accordion-button bpv-accordion-button", { collapsed: !active }];
    return { class: classes, disabled: typeof disabled !== "undefined" };
  },
  headerIcon: { class: "d-none" },
  toggleableContent: { class: "accordion-collapse bpv-accordion-collapse" },
  content: { class: "accordion-body bpv-accordion-body" },
  transition: {
    name: "bpv-accordion-collapse"
  }
};
