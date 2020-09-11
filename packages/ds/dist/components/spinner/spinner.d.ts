/// <reference types="react" />
import { BoxProps } from '../box';
export interface SpinnerProps extends BoxProps {
    block: boolean;
    title: string;
    color?: string;
    size?: number;
}
export declare const Spinner: {
    ({ block, title, size, color, ...props }: SpinnerProps): JSX.Element;
    defaultProps: {
        block: boolean;
        title: string;
        color: string;
    };
};
