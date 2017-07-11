import * as React from "react";

import "./Widget.scss";
import "file-loader!../assets/widget-hover-ellipsis-kanban.png";
import "file-loader!../assets/widget-hover-view-full-screen-kanban.png";

export interface Props {
    height: number,
    width: number,
    left: number,
    top: number,
    showLightbox: boolean
}

export var Widget: React.StatelessComponent<Props> = (props: Props) => {
    const cellLengthPx = 160;
    const cellSpacingPx = 10;
    const dashboardTopPx = 21;
    const dashboardLeftPx = 24;
    let getLengthPx = (i: number) => (cellSpacingPx + cellLengthPx) * i - cellSpacingPx;
    let leftPx = dashboardLeftPx + getLengthPx(props.left) + cellSpacingPx;
    let topPx =  dashboardTopPx + getLengthPx(props.top) + cellSpacingPx;
    let heightPx = getLengthPx(props.height);    
    let widthPx = getLengthPx(props.width);
    let style = {
        top: topPx,
        left: leftPx,
        height: heightPx,
        width: widthPx
    };
    let lightbox = (!props.showLightbox) ? null  : <img src="/src/assets/widget-hover-view-full-screen-kanban.png"/>;
    return (        
        <div className="widget" style={style}>
            <div className="hover-commands">
                { lightbox }
                <img src="/src/assets/widget-hover-ellipsis-kanban.png"/>
            </div>
        </div>
    );
}