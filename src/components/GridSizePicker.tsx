import * as React from "react";
import { Size } from "../models/Size";

import "./GridSizePicker.scss";

export interface Props {
    validSizes: Size[];
    usePreviewBox?: boolean;
    useInivibleTiles?: boolean;
}

export interface State {
    value: string;
    showTable: boolean;
    hoverValue?: string;
}

export class GridSizePicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: this.sizeToString(this.props.validSizes[0]), showTable: false };        
    }

    private stringToSize(value: string): Size {
        let parts = value.split("x");

        return {
            width: parseInt(parts[0]),
            height: parseInt(parts[1])
        };
    }

    private sizeToString(value: Size): string {
        return `${value.width}x${value.height}`;
    }


    private getBestFit(value: Size) {
        let bestFit = this.props.validSizes[0];
        this.props.validSizes.forEach(validSize => {
            let getArea = (size: Size) => {
                return size.height * size.width;
            };
            if (getArea(validSize) > getArea(bestFit) &&
                validSize.width <= value.width &&
                validSize.height <= value.height
                ) 
            {
                bestFit = validSize;
            }
        });
        return bestFit;
    }

    public render() {
        let maxWidth = 10;

        let maxHeight = 10;

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
        let gridCellPaddingPx = 2;
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

        // Somewhere deep in the code we mixed up width and height... reversing it here 
        let sizeAsStringWxH = `${size.height}x${size.width}`;

        return (
            <div className={className}>
                <input
                    value={ sizeAsStringWxH }
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