import type { ComponentProps, CSSProperties } from "react";

type TVariant = "primary" | "secondary" | "danger" | "success" | "warning";

type TButton = ComponentProps<"button"> & {
    variant: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
    return (
        <button {...rest} style={{ ...checkVariant(variant), ...style }}>
            {children}
        </button>
    );
}

export default Button;

function checkVariant(variant: TVariant): CSSProperties {
    switch (variant) {
        case "primary":
            return { backgroundColor: "blue", color: "white" };
        case "secondary":
            return { backgroundColor: "gray", color: "black" };
        case "danger":
            return { backgroundColor: "red", color: "white" };
        case "success":
            return { backgroundColor: "green", color: "white" };
        case "warning":
            return { backgroundColor: "orange", color: "black" };
        default:
            return {};
    }
}