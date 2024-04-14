import { badgePT, badgeDirectivePT } from "./badge/index.mjs";
import { buttonPT } from "./button/index.mjs";
import { accordionPT } from "./accordion/index.mjs";
import { accordionTabPT } from "./accordiontab/index.mjs";
import { messagePT } from "./message/index.mjs";
import { breadcrumbPT } from "./breadcrumb/index.mjs";
import { cardPT } from "./card/index.mjs";
import { carouselPT } from "./carousel/index.mjs";
import { inputTextPT } from "./inputtext/index.mjs";
import { floatLabelPT } from "./floatlabel/index.mjs";
import { inputNumberPT } from "./inputnumber/index.mjs";
import { dropdownPT } from "./dropdown/index.mjs";
export default {
  button: buttonPT,
  accordion: accordionPT,
  accordiontab: accordionTabPT,
  message: messagePT,
  badge: badgePT,
  breadcrumb: breadcrumbPT,
  card: cardPT,
  carousel: carouselPT,
  inputtext: inputTextPT,
  floatlabel: floatLabelPT,
  inputnumber: inputNumberPT,
  dropdown: dropdownPT,
  directives: {
    badge: badgeDirectivePT
  }
};
