import * as React from "react";

import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import { WidgetData } from "../models/WidgetData";
import { WidgetLoadType } from "../models/WidgetLoadType";
import { WidgetButtonType } from "../models/WidgetButtonType";
import { Glyph } from "./Glyph";

import "./Widget.scss";
import "file-loader!../assets/widget-hover-ellipsis-kanban.png";
import "file-loader!../assets/widget-hover-view-full-screen-kanban.png";

export interface State {
    isLoading: boolean,
}

export class Widget extends React.Component<WidgetData, State> {

    private readonly cellLengthPx = 160;
    private readonly cellSpacingPx = 10;
    private readonly dashboardTopPx = 20;
    private readonly dashboardLeftPx = 25;   

    constructor(props: WidgetData) {
        super(props);
        this.state = { isLoading : props.pretendToLoad };
    }

    public componentDidMount() {
        if (this.props.pretendToLoad) {            
            setTimeout(
                () => {
                    this.setState({
                        isLoading: false
                    });
                },
                Math.random() * 5000
            );
        }
    }

    public render() {        

        let getLengthPx = (i: number) => (this.cellSpacingPx + this.cellLengthPx) * i - this.cellSpacingPx;
        let leftPx = this.dashboardLeftPx + getLengthPx(this.props.left) + this.cellSpacingPx;
        let topPx =  this.dashboardTopPx + getLengthPx(this.props.top) + this.cellSpacingPx;
        let heightPx = getLengthPx(this.props.height);    
        let widthPx = getLengthPx(this.props.width);
        let style = {
            top: topPx,
            left: leftPx,
            height: heightPx,
            width: widthPx,
        };

        let lightbox = (!this.props.showLightbox) ? null : <Glyph name="bowtie-view-full-screen" />

        let loadingElement: JSX.Element = null;
        let loadingName: JSX.Element = null;

        if (this.state.isLoading) {
            switch (this.props.loadType) {
                case WidgetLoadType.Spinner:
                    loadingElement = <Spinner size={ SpinnerSize.large }/>;
                    break;
                case WidgetLoadType.FixedImage:
                    loadingElement = 
                        <img
                            className={this.props.loadingName ? "shift-for-title" : ""}
                            src={this.props.fixedLoadingImage}
                        />
                    break;
            }

            if (this.props.loadingName) {
                loadingName = <span className="loading-name">{this.props.loadingName}</span>
            }
        }

        let className = 'widget';
        if (this.state.isLoading) {
            className += ' loading';
        }
        className += ` ${WidgetButtonType[this.props.buttonType]}`;

        if (this.props.useParallelogramForIbiza) {
            className += " parallelogram";
        }

        let outlineStyle = {
            backgroundColor: `#${this.props.outlineColor}`,
        }

        let widgetMockImageElement: JSX.Element = null;
        if (!this.state.isLoading) {
            widgetMockImageElement = <img className="widget-mock-image" src={ this.props.backgroundImage }/>
        }

        return (
            <div className={ className } style={ style }>
                <div className="outline" style={ outlineStyle }></div>
                { widgetMockImageElement }
                <div className="hover-commands">
                    { lightbox }                    
                    <Glyph name="bowtie-ellipsis" />
                </div>
                { loadingName }
                { loadingElement }
            </div>
        );
    }
}