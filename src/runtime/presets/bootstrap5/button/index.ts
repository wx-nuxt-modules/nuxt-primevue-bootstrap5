import type { ButtonPassThroughOptions, BPVButtonProps } from './types';

import { BPV_BUTTON_SIZE, BPV_SEVERITY } from '../../../constants';
import { inArrayValidator, isUndefined } from '../../../utils/validators';
import type { BPVSeverity } from '../../../types';

export const buttonPTRoot = ({
  block,
  severity,
  link,
  raised,
  rounded,
  text,
  outlined,
  size,
  disabled
}: {
  block?: BPVButtonProps['block'];
  severity?: BPVButtonProps['severity'];
  link?: BPVButtonProps['link'];
  raised?: BPVButtonProps['raised'];
  rounded?: BPVButtonProps['rounded'];
  text?: BPVButtonProps['text'];
  outlined?: BPVButtonProps['outlined'];
  size?: BPVButtonProps['size'];
  disabled?: BPVButtonProps['disabled'];
}) => {
  const isDisabled = !isUndefined(disabled) && [true, 'true', ''].includes(disabled);

  return {
    class: [
      'btn',
      'bpv-btn',
      severity && !link && !text && !outlined && `btn-${severity}`,
      severity && text && `bpv-btn-text-${severity}`,
      severity && outlined && `btn-outline-${severity}`,
      link && !severity && 'btn-link',
      !isUndefined(block) && block && 'bpv-btn-block',
      raised && 'bpv-btn-shadow',
      rounded && 'bpv-btn-pill',
      size && `btn-${size}`,
      isDisabled && 'disabled'
    ]
  };
};

export const buttonPTLabel = ({ label }: { label: BPVButtonProps['label'] }) => {
  return { class: ['bpv-btn-label', !label && 'bpv-btn-label-hidden'] };
};

export const buttonPTIcon = ({ iconPos }: { iconPos: BPVButtonProps['iconPos'] }) => {
  return {
    class: ['bpv-btn-icon', iconPos === 'left' && 'bpv-btn-icon-left', iconPos === 'right' && 'bpv-btn-icon-right']
  };
};

export const buttonPTLoadingIcon = () => {
  return { class: ['bpv-btn-icon', 'bpv-btn-icon-loading'] };
};

export const buttonPT = <ButtonPassThroughOptions>{
  root: ({ instance, props }) => {
    return buttonPTRoot({
      block: !isUndefined(instance.$params.attrs.block),
      severity: props.severity as BPVSeverity,
      link: props.link,
      raised: props.raised,
      rounded: props.rounded,
      text: props.text,
      outlined: props.outlined,
      size: inArrayValidator(props.size, BPV_BUTTON_SIZE, undefined),
      disabled: props.disabled
    });
  },
  label: ({ props }) => {
    return buttonPTLabel({ label: props.label });
  },
  icon: ({ props }) => {
    return buttonPTIcon({ iconPos: props.iconPos });
  },
  loadingIcon: buttonPTLoadingIcon()
};
