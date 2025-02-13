import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface RadioButtonProps {
    id?: string;
    inputId?: string;
    name?: string;
    value?: any;
    checked?: boolean;
    style?: object;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onChange(e: {originalEvent: Event, value: any, checked: boolean}): void;
}

export class RadioButton extends React.Component<RadioButtonProps,any> {}
