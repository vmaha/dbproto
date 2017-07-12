import * as React from "react";

import "./ResizeConfig.scss";

export interface Props {
    options: string[];
    className?: string;
}

export interface State {
    value: string;
}

export class SizePicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: "1x1" };
    }

    public render() {
        return (
            <select className={`size-picker ${this.props.className}`} defaultValue={this.state.value} onChange={(e) => this.setState({ value: e.target.value })}>
                {...this.props.options.map(option => {
                    return <option value={option} key={option}>{option}</option>
                })}
            </select>
        );
    }
}