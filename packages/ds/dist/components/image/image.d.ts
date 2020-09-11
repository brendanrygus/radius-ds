import { SpaceProps, LayoutProps, FlexboxProps, BorderProps, PositionProps } from 'styled-system';
export declare type ImageProps = {
    variant?: 'default' | 'avatar';
} & SpaceProps & LayoutProps & FlexboxProps & BorderProps & PositionProps;
export declare const Image: import("styled-components").StyledComponent<"img", any, ImageProps, never>;
