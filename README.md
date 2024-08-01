## d3 speedometer

Used for showing speedometer like gauge using d3.

## Features
### General:
#### •	Value - 
Make sure your value is between your minValue and maxValue. Default is 0
#### •	minValue - 
Min Value. Default is 0
#### •	maxValue -
Max Value. Default is 1000
#### •	forceRender - 
After initial rendering/mounting, when props change, only the value is changed and animated to maintain smooth visualization. But, if you want to force rerender the whole component like change in segments, colors, dimensions etc, you can use this option to force rerender of the whole component on props change. Default is true.
#### •	currentValueText - 
Should be provided a string which should have ${value} placeholder which will be replaced with current value. By default, current value is shown (formatted with valueFormat). For example, if current Value is 333 if you would like to show Current Value: 333, you should provide a string Current Value: ${value}
#### •	currentValuePlaceholderStyle - 
Should be provided a placeholder string which will be replaced with current value
#### •	svgAriaLabel - 
SVG aria-label property for Accessibility purposes. Default is "React d3 speedometer"
### Dimensions:
#### •	Width - 
diameter of the speedometer and the width of the svg element. Default is 300.
#### •	Height -
height of the svg element. The height of the speedometer is always half the width since it is a semi-circle. Default is 300.
#### •	dimension Unit - 
Possible values - "em" , "ex" , "px" , "in" , "cm" , "mm" , "pt" , ,"pc". Default is "px" for width/height.
#### •	fluidWidth - 
If true takes the width of the parent component. Default is false.
#### •	paddingHorizontal -
Provides right/left space for the label text. Takes a number (without explicit unit, unit will be taken from dimension Unit config which defaults to px). Helpful when using a bigger font size for label texts. Default is 0.
#### •	paddingVertical -
Provides top/bottom space for the current value label text below the needle. Takes a number (without explicit unit, unit will be taken from dimensionUnit config which defaults to px). Helpful when using a bigger font size for label texts. Default is 0.
#### •	ringWidth - 
Width of the speedometer ring. Default is 60.
### Segments:
#### •	segments -
Number of segments in the speedometer.
#### •	maxSegmentLabels -
Limit the number of segment labels displayed.
#### •	segmentColors - 
Custom segment colors can be given with this option. Should be an array of valid color codes. If this option is given startColor and endColor options will be ignored.
#### •	customSegmentStops - 
Array of values starting at min value and ending at max value. This configuration is useful if you would like to split the segments at custom points or have unequal segments at preferred values. If the values do not begin and end with min and max value respectively, an error will be thrown. This configuration will override segments prop, since total number of segments will be length – 1
#### •	customSegmentLabels - 
Takes an array of CustomSegmentLabel objects. Each object has the following keys for custom rendering of labels - text, fontSize, color, position: OUTSIDE/INSIDE.
### Colors:
#### •	needleColor - 
Should be a valid color code - colorname, hexadecimal name or rgb value. Default is "steelblue"
#### •	startColor - 
Should be a valid color code - colorname, hexadecimal name or rgb value. Default is "#FF471A"
#### •	endColor - 
Should be a valid color code - colorname, hexadecimal name or rgb value. Default is "#33CC33"
### Needle:
#### •	needleTransition -
easeLinear, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubicIn, easeCubicOut, easeCubicInOut, easePolyIn, easePolyOut, easePolyInOut, easeSinIn, easeSinOut, easeSinInOut, easeExpIn, easeExpOut, easeExpInOut, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounceIn, easeBounceOut, easeBounceInOut, easeBackIn, easeBackOut, easeBackInOut, easeElasticIn, easeElasticOut, easeElasticInOut, easeElastic. Default is "easeQuadInOut"
#### •	needleTransitionDuration - 
Time in milliseconds. Default is 500.
#### •	needleHeightRatio -
Control the height of the needle by giving a decimal between 0 and 1. Default height ratio is 0.9.
### Labels:
#### •	textColor - 
Should be a valid color code - color name, hexadecimal name or rgb value. Used for both showing the current value and the segment values. Default is #666
#### •	valueFormat - 
should be a valid format for d3-format. By default, no formatter is used. You can use a valid d3 format identifier (for eg: d to convert float to integers), to format the values. Note: This formatter affects all the values (current value, segment values) displayed in the speedometer
#### •	labelFontSize -
Font size for segment labels/legends. Default is 14px
#### •	valueTextFontSize - 
Font size for current value text. Default is 16px
#### •	valueTextFontWeight - 
Font weight for current value text. Any valid font weight identifier (500, bold etc.) can be used. Default is bold

## Dependencies:
•	Mendix modeler 9.12.4.

## Demo URL:
https://d3-speedometer-sandbox.mxapps.io/login.html?profile=Responsive

demo_administrator

VKrsc19rRtwY


## Issues, suggestions and feature requests
https://github.com/bharathidas/d3_speedometer/issues

## Screenshots:
![Screenshot_1](https://github.com/user-attachments/assets/0043703a-990a-42bc-824d-4bd045e7f6a2)
![Screenshot_2](https://github.com/user-attachments/assets/214a817f-52f4-4b07-875e-bb79d3dc7a87)
![Screenshot_3](https://github.com/user-attachments/assets/e6a45a8b-af47-4dc3-94c7-3f794aa8af72)
![Screenshot_4](https://github.com/user-attachments/assets/6386dead-cf8f-40e8-9e92-95c1fc4d2d74)
![Screenshot_5](https://github.com/user-attachments/assets/424c70db-fc94-449c-ad56-202121b21417)
![Screenshot_6](https://github.com/user-attachments/assets/32ad0ec8-16f6-4e30-a8b2-365773540589)
![Screenshot_7](https://github.com/user-attachments/assets/d2436558-2e07-4692-ba3b-65fcbfbdb31d)
