import { Component, ReactNode, createElement } from "react";

import { SpeedometerContainerProps } from "../typings/SpeedometerProps";
import { SpeedometerInput } from "./components/SpeedometerInput";
import "./ui/Speedometer.css";

enum Transition {
    easeLinear = "easeLinear",
    easeQuadIn = "easeQuadIn",
    easeQuadOut = "easeQuadOut",
    easeQuadInOut = "easeQuadInOut",
    easeCubicIn = "easeCubicIn",
    easeCubicOut = "easeCubicOut",
    easeCubicInOut = "easeCubicInOut",
    easePolyIn = "easePolyIn",
    easePolyOut = "easePolyOut",
    easePolyInOut = "easePolyInOut",
    easeSinIn = "easeSinIn",
    easeSinOut = "easeSinOut",
    easeSinInOut = "easeSinInOut",
    easeExpIn = "easeExpIn",
    easeExpOut = "easeExpOut",
    easeExpInOut = "easeExpInOut",
    easeCircleIn = "easeCircleIn",
    easeCircleOut = "easeCircleOut",
    easeCircleInOut = "easeCircleInOut",
    easeBounceIn = "easeBounceIn",
    easeBounceOut = "easeBounceOut",
    easeBounceInOut = "easeBounceInOut",
    easeBackIn = "easeBackIn",
    easeBackOut = "easeBackOut",
    easeBackInOut = "easeBackInOut",
    easeElasticIn = "easeElasticIn",
    easeElasticOut = "easeElasticOut",
    easeElasticInOut = "easeElasticInOut",
    easeElastic = "easeElastic"
}
enum CustomSegmentLabelPosition {
    Outside = "OUTSIDE",
    Inside = "INSIDE"
}

type CustomSegmentLabel = {
    text?: string;
    position?: CustomSegmentLabelPosition;
    fontSize?: string;
    color?: string;
};

export class Speedometer extends Component<SpeedometerContainerProps> {
    render(): ReactNode {
        let value = 0;
        if (this.props.valueKey != null && this.props.valueKey?.value?.gt(0)) {
            value = Number(this.props.valueKey?.value);
        }
        let minValue = 0;
        if (this.props.minValueKey != null && this.props.minValueKey?.value?.gt(0)) {
            minValue = Number(this.props.minValueKey?.value);
        }
        let maxValue = 1000;
        if (this.props.maxValueKey != null && this.props.maxValueKey?.value?.gt(0)) {
            maxValue = Number(this.props.maxValueKey?.value);
        }
        let segments = 5;
        if (this.props.segmentsKey != null && this.props.segmentsKey?.value?.gt(0)) {
            segments = Number(this.props.segmentsKey?.value);
        }
        let maxSegmentLabels = 0;
        if (this.props.maxSegmentLabelsKey != null && this.props.maxSegmentLabelsKey?.value?.gt(0)) {
            maxSegmentLabels = Number(this.props.maxSegmentLabelsKey?.value);
        }
        let forceRender = true;
        if (this.props.forceRenderKey?.value != null) {
            forceRender = this.props.forceRenderKey.value;
        }
        let width = 300;
        if (this.props.widthKey != null && this.props.widthKey?.value?.gt(0)) {
            width = Number(this.props.widthKey?.value);
        }
        let height = 300;
        if (this.props.heightKey != null && this.props.heightKey?.value?.gt(0)) {
            height = Number(this.props.heightKey?.value);
        }
        const dimensionUnit = this.props.dimensionUnitKey?.value || "px";
        const fluidWidth = this.props.fluidWidthKey?.value || false;
        const needleColor = this.props.needleColorKey?.value || "steelblue";
        const startColor = this.props.startColorKey?.value || "#FF471A";
        const endColor = this.props.endColorKey?.value || "#33CC33";

        const segmentColors = this.props.segmentColorsKey?.value || undefined;

        let segmentColorsArray: string[] = [];

        if (segmentColors != null) {
            segmentColorsArray = this.convertStringToArray(segmentColors);
        }

        const needleTransition = this.props.needleTransitionKey?.value || "easeQuadInOut";
        const needleTransitionValue = this.convertStringToTransition(needleTransition);

        let needleTransitionDuration = 500;
        if (this.props.needleTransitionDurationKey != null && this.props.needleTransitionDurationKey?.value?.gt(0)) {
            needleTransitionDuration = Number(this.props.needleTransitionDurationKey?.value);
        }

        let needleHeightRatio = 0.9;
        if (this.props.needleHeightRatioKey != null && this.props.needleHeightRatioKey?.value?.gt(0)) {
            needleHeightRatio = Number(this.props.needleHeightRatioKey?.value);
        }
        let ringWidth = 60;
        if (this.props.ringWidthKey != null && this.props.ringWidthKey?.value?.gt(0)) {
            ringWidth = Number(this.props.ringWidthKey?.value);
        }
        const textColor = this.props.textColorKey?.value || "#666";
        const valueFormat = this.props.valueFormatKey?.value || "";

        let currentValueText = "";
        if (this.props.currentValueTextKey?.value != null) {
            currentValueText = this.props.currentValueTextKey?.value;
        } else if (value > 0) {
            currentValueText = value.toString();
        } else {
            currentValueText = "";
        }

        let currentValuePlaceholderStyle = "";

        if (this.props.currentValuePlaceholderStyleKey?.value != null) {
            currentValuePlaceholderStyle = this.props.currentValuePlaceholderStyleKey?.value;
        } else if (value > 0) {
            currentValuePlaceholderStyle = value.toString();
        } else {
            currentValuePlaceholderStyle = "";
        }
        const customSegmentStops = this.props.customSegmentStopsKey?.value || "";
        const customSegmentStopsArray = this.convertStringToNumberArray(customSegmentStops);

        const customSegmentLabels = this.props.customSegmentLabelsKey?.value || "";
        const customSegmentLabelsArray = this.convertStringToCustomSegmentLabels(customSegmentLabels);

        const labelFontSize = this.props.labelFontSizeKey?.value || "14px";
        const valueTextFontSize = this.props.valueTextFontSizeKey?.value || "16px";
        const valueTextFontWeight = this.props.valueTextFontWeightKey?.value || "bold";

        let paddingHorizontal = 0;
        if (this.props.paddingHorizontalKey != null && this.props.paddingHorizontalKey?.value?.gt(0)) {
            paddingHorizontal = Number(this.props.paddingHorizontalKey?.value);
        }
        let paddingVertical = 0;
        if (this.props.paddingVerticalKey != null && this.props.paddingVerticalKey?.value?.gt(0)) {
            paddingVertical = Number(this.props.paddingVerticalKey?.value);
        }

        const svgAriaLabel = this.props.svgAriaLabelKey?.value || "React d3 speedometer";

        return (
            <SpeedometerInput
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                segments={segments}
                maxSegmentLabels={maxSegmentLabels}
                forceRender={forceRender}
                width={width}
                height={height}
                dimensionUnit={dimensionUnit}
                fluidWidth={fluidWidth}
                needleColor={needleColor}
                startColor={startColor}
                endColor={endColor}
                segmentColors={segmentColorsArray}
                needleTransition={needleTransitionValue}
                needleTransitionDuration={needleTransitionDuration}
                needleHeightRatio={needleHeightRatio}
                ringWidth={ringWidth}
                textColor={textColor}
                valueFormat={valueFormat}
                currentValueText={currentValueText}
                currentValuePlaceholderStyle={currentValuePlaceholderStyle}
                customSegmentStops={customSegmentStopsArray}
                customSegmentLabels={customSegmentLabelsArray}
                labelFontSize={labelFontSize}
                valueTextFontSize={valueTextFontSize}
                valueTextFontWeight={valueTextFontWeight}
                paddingHorizontal={paddingHorizontal}
                paddingVertical={paddingVertical}
                svgAriaLabel={svgAriaLabel}
            />
        );
    }

    // Function to convert string to string array
    private convertStringToArray = (input: string): string[] => {
        return input.split(",");
    };

    // Function to convert string to Number array
    private convertStringToNumberArray = (input: string): number[] => {
        return input
            .split(",")
            .map(item => parseFloat(item.trim()))
            .filter(item => !isNaN(item));
    };

    // Function to convert string to string array
    private isTransition = (value: string): value is Transition => {
        return Object.values(Transition).includes(value as Transition);
    };

    private convertStringToTransition = (input: string): Transition => {
        const inputValue = input || "easeQuadInOut";
        if (this.isTransition(inputValue)) {
            return inputValue;
        }
        return Transition.easeQuadInOut;
    };

    convertStringToCustomSegmentLabels(input: string): CustomSegmentLabel[] {
        if (input !== "") {
            try {
                const parsedInput = JSON.parse(input);
                if (Array.isArray(parsedInput)) {
                    return parsedInput.map(item => ({
                        text: item.text,
                        position: CustomSegmentLabelPosition[item.position as keyof typeof CustomSegmentLabelPosition],
                        fontSize: item.fontSize,
                        color: item.color
                    }));
                }
            } catch (e) {
                console.error("Invalid JSON input");
            }
        }
        return [];
    }
}
