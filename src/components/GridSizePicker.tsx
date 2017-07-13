import * as React from "react";
import { Size } from "../models/Size";

import "./GridSizePicker.scss";

export interface Props {
    validSizes: Size[];
    usePreviewBox?: boolean;
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

        let sizeAsString = this.state.hoverValue ? this.state.hoverValue : 
                        this.state.value ? this.state.value :
                        undefined;
        let size = this.stringToSize(sizeAsString);

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

                if (size != null) {
                    if (i <= size.width && j <= size.height) {
                        highlight = "highlight";
                    }
                }

                let className = `${disabled} ${selected} ${highlight} ${leftHighlight} ${rightHighlight} ${topHighlight} ${bottomHighlight}`;
                
                let value = `${i}x${j}`;
                rowCells.push(
                    <td key={value}
                        onMouseOver={(e) => {
                            if (validSize) {
                                this.setState({
                                    hoverValue: value
                                });
                            }
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

        let gridCellLengthPx = 15;
        let gridCellPaddingPx = 3;
        let getPreviewLengthPx = (length: number) => {
            let spaceBetween = 2 * gridCellPaddingPx;
            let lengthPx = length * (gridCellLengthPx + spaceBetween) ;
            return `${lengthPx}px`;
        };
        let previewStyle = {
            width: getPreviewLengthPx(size.height),
            height: getPreviewLengthPx(size.width),
        };

        let className = "grid-size-picker";
        let previewElement = null;
        if (this.props.usePreviewBox) {
            className += " preview-box";
            previewElement = <div className="preview" style={previewStyle}></div>;
        }

        return (
            <div className={className}>
                <input
                    value={ sizeAsString }
                    onClick={(ev) => {
                        this.setState({ value: this.state.value, showTable: !this.state.showTable });
                        (ev.target as any).blur();
                    }}
                    onChange={(e) => this.setState({ value: e.target.value })}
                />
                <div className={`table-container ${tableClassName}`}>
                    <table                    
                        onMouseLeave = {() => {
                            this.setState({
                                hoverValue: null
                            });
                        }}
                        className={tableClassName}>
                        <tbody>{...rows}</tbody>
                    </table>
                    { previewElement }
                </div>
            </div>
        );
    }
}