import { Component, ReactNode, createElement } from "react";
import ReactSpeedometer from "react-d3-speedometer";

export interface SpeedometerProps {
    value: number;
    minValue?: number;
    maxValue?: number;
    segments?: number;
    maxSegmentLabels?: number;
    forceRender?: boolean;
    width?: number;
    height?: number;
    dimensionUnit?: string;
    fluidWidth?: boolean;
    needleColor?: string;
    startColor?: string;
    endColor?: string;
    segmentColors?: string[];
    needleTransition?: Transition;
    needleTransitionDuration?: number;
    needleHeightRatio?: number;
    ringWidth?: number;
    textColor?: string;
    valueFormat?: string;
    currentValueText?: string;
    currentValuePlaceholderStyle?: string;
    customSegmentStops?: number[];
    customSegmentLabels?: CustomSegmentLabel[];
    labelFontSize?: string;
    valueTextFontSize?: string;
    valueTextFontWeight?: string;
    paddingHorizontal?: number;
    paddingVertical?: number;
    svgAriaLabel?: string;
}

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

export class SpeedometerInput extends Component<SpeedometerProps> {
    render(): ReactNode {
        return (
            <div>
                <ReactSpeedometer
                    value={this.props.value}
                    minValue={this.props.minValue}
                    maxValue={this.props.maxValue}
                    segments={this.props.segments}
                    maxSegmentLabels={this.props.maxSegmentLabels}
                    forceRender={this.props.forceRender}
                    width={this.props.width}
                    height={this.props.height}
                    dimensionUnit={this.props.dimensionUnit}
                    fluidWidth={this.props.fluidWidth}
                    needleColor={this.props.needleColor}
                    startColor={this.props.startColor}
                    endColor={this.props.endColor}
                    segmentColors={this.props.segmentColors}
                    needleTransition={this.props.needleTransition}
                    needleTransitionDuration={this.props.needleTransitionDuration}
                    needleHeightRatio={this.props.needleHeightRatio}
                    ringWidth={this.props.ringWidth}
                    textColor={this.props.textColor}
                    valueFormat={this.props.valueFormat}
                    currentValueText={this.props.currentValueText}
                    currentValuePlaceholderStyle={this.props.currentValuePlaceholderStyle}
                    customSegmentStops={this.props.customSegmentStops}
                    customSegmentLabels={this.props.customSegmentLabels}
                    labelFontSize={this.props.labelFontSize}
                    valueTextFontSize={this.props.valueTextFontSize}
                    valueTextFontWeight={this.props.valueTextFontWeight}
                    paddingHorizontal={this.props.paddingHorizontal}
                    paddingVertical={this.props.paddingVertical}
                    svgAriaLabel={this.props.svgAriaLabel}
                />
            </div>
        );
    }
}
