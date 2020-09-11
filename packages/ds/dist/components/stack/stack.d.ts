import { FlexProps } from '../flex';
declare type align = 'start' | 'end' | 'center';
export declare type StackProps = {
    axis?: 'horizontal' | 'vertical';
    space?: number | number[];
    alignment?: align;
    distribution?: align;
} & FlexProps;
export declare const Stack: import("styled-components").StyledComponent<"div", any, import("styled-system").SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & import("styled-system").ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<string | number>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<string | number>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<string | number>>, string | number> & import("styled-system").PositionProps<Required<import("styled-system").Theme<string | number>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & import("styled-system").ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<string | number>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<string | number>>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<string | number>>, string | number> & import("styled-system").PositionProps<Required<import("styled-system").Theme<string | number>>> & {
    axis?: "horizontal" | "vertical" | undefined;
    space?: number | number[] | undefined;
    alignment?: "start" | "end" | "center" | undefined;
    distribution?: "start" | "end" | "center" | undefined;
}, never>;
export {};
