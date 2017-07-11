import * as React from "react";

import { Spinner } from "office-ui-fabric-react/lib/Spinner";

import "./Widget.scss";
import "file-loader!../assets/widget-hover-ellipsis-kanban.png";
import "file-loader!../assets/widget-hover-view-full-screen-kanban.png";

export interface Props {
    height: number,
    width: number,
    left: number,
    top: number,
    showLightbox?: boolean,
    pretendToLoad?: boolean,
}

export interface State {
    isLoading: boolean,
}

export class Widget extends React.Component<Props, State> {

    private readonly cellLengthPx = 160;
    private readonly cellSpacingPx = 10;
    private readonly dashboardTopPx = 20;
    private readonly dashboardLeftPx = 25;   

    constructor(props: Props) {
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
            width: widthPx
        };

        let lightbox = (!this.props.showLightbox) ? null  : <img src="/src/assets/widget-hover-view-full-screen-kanban.png"/>;

        let spinner = (!this.state.isLoading) ? null : <Spinner />;

        let className = 'widget';
        if (this.state.isLoading) {
            className += ' loading';
        }

        return (
            <div className={ className } style={ style }>
                <div className="hover-commands">
                    { lightbox }
                    <img src="/src/assets/widget-hover-ellipsis-kanban.png"/>
                </div>
                { spinner }
            </div>
        );
    }
}