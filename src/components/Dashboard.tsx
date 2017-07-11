import * as React from "react";

import { SampleData } from "../stores/SampleData";
import { WidgetData } from "../models/WidgetData";
import { Header } from "../components/Header";
import { Widget } from "../components/Widget";

import "./Dashboard.scss";


export interface Props {
    widgets: WidgetData[];
}

export var Dashboard: React.StatelessComponent<Props> = (props: Props) => {

    let widgetsElements = props.widgets.map(widgetData => <Widget {...widgetData}/>);

    return (
        <div>
            <Header/>
            <main>
                <img src="/src/assets/dashboard-01.png"/>
                { widgetsElements }
                <img className="edit-button" src="/src/assets/dashboard-edit.png"/>
            </main>
        </div>
    );
}