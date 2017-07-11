import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Header } from "../components/Header";
import { Widget } from "../components/Widget";
import { SampleData } from "../stores/SampleData";

import "./Loading.scss";
import "file-loader!../assets/l1-l2-left.png";
import "file-loader!../assets/l1-l2-right.png";
import "file-loader!../assets/dashboard-01.png";
import "file-loader!../assets/dashboard-edit.png";

export var Loading = (props: RouteComponentProps<any>) => {
    
    let id = props.match.params.id;

    let data = new SampleData();
    let widgetsData = data.getWidgetsData(1);
    let widgetsToLoad = [ 0, 2, 4, 5, 9, 11, 12];
    widgetsToLoad.every(i => widgetsData[i].pretendToLoad = true);    
    let widgets = widgetsData.map(widgetData => <Widget {...widgetData}/>);

    return (
        <div>
            <Header/>
            <main>
                <img src="/src/assets/dashboard-01.png"/>
                { widgets }
                <img className="edit-button" src="/src/assets/dashboard-edit.png"/>
            </main>
        </div>
    );
}






