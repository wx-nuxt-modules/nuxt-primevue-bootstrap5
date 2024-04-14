import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { BPVInputTextProps } from './types';
interface CreateRootClassesOptions {
    variant?: BPVInputTextProps['variant'];
    state?: BPVInputTextProps['state'];
    size?: BPVInputTextProps['size'];
    plainText?: BPVInputTextProps['plainText'];
}
export declare const createRootClasses: (options?: CreateRootClassesOptions) => any[];
export declare const inputTextPT: InputTextPassThroughOptions<any>;
export {};
