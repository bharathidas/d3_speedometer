/**
 * This file was generated from Speedometer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface SpeedometerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    valueKey?: EditableValue<Big>;
    minValueKey?: EditableValue<Big>;
    maxValueKey?: EditableValue<Big>;
    forceRenderKey?: EditableValue<boolean>;
    currentValueTextKey?: EditableValue<string>;
    currentValuePlaceholderStyleKey?: EditableValue<string>;
    svgAriaLabelKey?: EditableValue<string>;
    widthKey?: EditableValue<Big>;
    heightKey?: EditableValue<Big>;
    dimensionUnitKey?: EditableValue<string>;
    fluidWidthKey?: EditableValue<boolean>;
    paddingHorizontalKey?: EditableValue<Big>;
    paddingVerticalKey?: EditableValue<Big>;
    ringWidthKey?: EditableValue<Big>;
    segmentsKey?: EditableValue<Big>;
    maxSegmentLabelsKey?: EditableValue<Big>;
    segmentColorsKey?: EditableValue<string>;
    customSegmentStopsKey?: EditableValue<string>;
    customSegmentLabelsKey?: EditableValue<string>;
    needleColorKey?: EditableValue<string>;
    startColorKey?: EditableValue<string>;
    endColorKey?: EditableValue<string>;
    needleTransitionKey?: EditableValue<string>;
    needleTransitionDurationKey?: EditableValue<Big>;
    needleHeightRatioKey?: EditableValue<Big>;
    textColorKey?: EditableValue<string>;
    valueFormatKey?: EditableValue<string>;
    labelFontSizeKey?: EditableValue<string>;
    valueTextFontSizeKey?: EditableValue<string>;
    valueTextFontWeightKey?: EditableValue<string>;
}

export interface SpeedometerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    valueKey: string;
    minValueKey: string;
    maxValueKey: string;
    forceRenderKey: string;
    currentValueTextKey: string;
    currentValuePlaceholderStyleKey: string;
    svgAriaLabelKey: string;
    widthKey: string;
    heightKey: string;
    dimensionUnitKey: string;
    fluidWidthKey: string;
    paddingHorizontalKey: string;
    paddingVerticalKey: string;
    ringWidthKey: string;
    segmentsKey: string;
    maxSegmentLabelsKey: string;
    segmentColorsKey: string;
    customSegmentStopsKey: string;
    customSegmentLabelsKey: string;
    needleColorKey: string;
    startColorKey: string;
    endColorKey: string;
    needleTransitionKey: string;
    needleTransitionDurationKey: string;
    needleHeightRatioKey: string;
    textColorKey: string;
    valueFormatKey: string;
    labelFontSizeKey: string;
    valueTextFontSizeKey: string;
    valueTextFontWeightKey: string;
}
