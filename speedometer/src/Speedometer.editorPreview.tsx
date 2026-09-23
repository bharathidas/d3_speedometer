import { Component, ReactNode, createElement } from "react";

import { SpeedometerPreviewProps } from "../typings/SpeedometerProps";

export class preview extends Component<SpeedometerPreviewProps> {
    render(): ReactNode {
        return <div ref={this.parentInline}></div>;
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    // private transformProps(props: SpeedometerPreviewProps): SpeedometerProps {
    //     return {
    //         //value: props.valueKey,
    //         //bootstrapStyle: props.bootstrapStyle,
    //         //className: props.className,
    //         //clickable: false,
    //         //style: parseInlineStyle(props.style),
    //         //defaultValue: props.speedometerValue ? props.speedometerValue : "",
    //         //value: props.valueAttribute
    //     };
    // }
}

export function getPreviewCss(): string {
    return require("./ui/Speedometer.css");
}
