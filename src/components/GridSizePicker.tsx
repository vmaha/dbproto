import * as React from "react";
import { Size } from "../models/Size";

import "./ResizeConfig.scss";

export interface Props {
    validSizes: Size[];
}

export interface State {
    value: string;
    showTable: boolean;
    hoverValue?: string;
}

export class GridSizePicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: "1x1", showTable: false };
    }

    private stringToSize(value: string): Size {
        let parts = value.split("x");

        return {
            width: parseInt(parts[0]),
            height: parseInt(parts[1])
        };
    }

    public render() {
        let maxWidth = this.props.validSizes
            .map(size => size.width)
            .reduce((prev, cur) => Math.max(prev, cur));

        let maxHeight = this.props.validSizes
            .map(size => size.height)
            .reduce((prev, cur) => Math.max(prev, cur));

        let rows: JSX.Element[] = [];
        for (let i = 1; i <= maxWidth; ++i) {
            let rowCells: JSX.Element[] = [];

            for (let j = 1; j <= maxHeight; ++j) {
                let validSize = this.props.validSizes.some(size => size.width === i && size.height === j);

                let disabled = validSize ? "" : "disabled";
                
                let selectedSize = this.stringToSize(this.state.value);
                let selected = (selectedSize.width === i && selectedSize.height === j) ? "selected" : "";

                let highlight = "";
                let leftHighlight = "";
                let rightHighlight = "";
                let topHighlight = "";
                let bottomHighlight = "";

                let hoverSize = (this.state.hoverValue != null) ? this.stringToSize(this.state.hoverValue) : undefined;
                if (hoverSize != null) {
                    if (i <= hoverSize.width && j <= hoverSize.height)
                        highlight = "highlight";
                    if (i === 0)
                        leftHighlight = "left-highlight";
                    if (i === hoverSize.width)
                        rightHighlight = "right-highlight";
                    if (j === 0)
                        topHighlight = "top-highlight";
                    if (j === hoverSize.height)
                        bottomHighlight = "bottom-highlight";
                }

                let className = `${disabled} ${selected} ${highlight} ${leftHighlight} ${rightHighlight} ${topHighlight} ${bottomHighlight}`;
                
                let value = `${i}x${j}`;
                rowCells.push(
                    <td key={value}
                        onMouseOver={(e) => {
                            this.setState({
                                value: this.state.value,
                                showTable: this.state.showTable,
                                hoverValue: value
                            });
                        }}
                        className={className}
                        onClick={() => {
                            if (validSize) {
                                this.setState({value: value, showTable: false});
                            }
                        }}
                    >
                        <div />
                    </td>
                );
            }

            rows.push(
                <tr key={i}>
                    {...rowCells}
                </tr>
            );
        }

        let tableClassName = this.state.showTable ? "" : "hide";

        return (
            <div className="grid-size-picker">
                <input
                    value={this.state.value}
                    onClick={() => {
                        this.setState({ value: this.state.value, showTable: !this.state.showTable })}
                    }
                    onChange={(e) => this.setState({ value: e.target.value })}
                />
                <table
                    onMouseLeave={() => {
                        this.setState({
                            value: this.state.value,
                            showTable: this.state.showTable,
                            hoverValue: null
                        });
                    }}
                    className={tableClassName}>
                    <tbody>{...rows}</tbody>
                </table>
            </div>
        );
    }
}