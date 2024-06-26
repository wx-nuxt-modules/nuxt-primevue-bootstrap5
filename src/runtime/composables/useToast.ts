import type { BPVToastServiceMethods } from '../types';
import { useToast } from 'primevue/usetoast';

export function useBpvToast() {
  return useToast() as BPVToastServiceMethods;
}
