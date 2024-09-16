import type { ButtonPassThroughOptions, BPVButtonProps } from './types';

import { BPV_BUTTON_SIZE } from '../../../constants';
import { inArrayValidator, isUndefined } from '../../../utils/validators';

export const buttonPTRoot = ({
  block,
  severity,
  link,
  raised,
  rounded,
  text,
  outlined,
  size
}: {
  block?: BPVButtonProps['block'];
  severity?: BPVButtonProps['severity'];
  link?: BPVButtonProps['link'];
  raised?: BPVButtonProps['raised'];
  rounded?: BPVButtonProps['rounded'];
  text?: BPVButtonProps['text'];
  outlined?: BPVButtonProps['outlined'];
  size?: BPVButtonProps['size'];
}) => {
  const currentSize = inArrayValidator(size, BPV_BUTTON_SIZE);

  const classes = [
    'btn',
    'bpv-btn',
    severity && !link && !text && !outlined && `btn-${severity}`,
    severity && text && `bpv-btn-text-${severity}`,
    severity && outlined && `btn-outline-${severity}`,
    link && !severity && 'btn-link',
    !isUndefined(block) && block && 'bpv-btn-block',
    raised && 'bpv-btn-shadow',
    rounded && 'bpv-btn-pill',
    currentSize && `btn-${currentSize}`
  ];

  return { class: classes };
};

export const buttonPTLabel = ({ label }: { label: BPVButtonProps['label'] }) => {
  const classes = ['bpv-btn-label', !label && 'bpv-btn-label-hidden'];

  return { class: classes };
};

export const buttonPTIcon = ({ iconPos }: { iconPos: BPVButtonProps['iconPos'] }) => {
  const classes = [
    'bpv-btn-icon',
    iconPos === 'left' && 'bpv-btn-icon-left',
    iconPos === 'right' && 'bpv-btn-icon-right'
  ];

  return { class: classes };
};

export const buttonPTLoadingIcon = () => {
  const classes = ['bpv-btn-icon', 'bpv-btn-icon-loading'];

  return { class: classes };
};

export const buttonPT = <ButtonPassThroughOptions>{
  root: ({ instance, props }) => {
    return buttonPTRoot({
      block: !isUndefined(instance.$params.attrs.block),
      severity: props.severity,
      link: props.link,
      raised: props.raised,
      rounded: props.rounded,
      text: props.text,
      outlined: props.outlined,
      size: props.size
    });
  },
  label: ({ instance, props }) => {
    return buttonPTLabel({ label: props.label });
  },
  icon: ({ instance, props }) => {
    return buttonPTIcon({ iconPos: props.iconPos });
  },
  loadingIcon: ({ instance, props }) => {
    return buttonPTLoadingIcon();
  }
};
