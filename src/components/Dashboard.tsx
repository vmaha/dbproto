import * as React from "react";

import { SampleData } from "../stores/SampleData";
import { Header } from "../components/Header";
import { Widget } from "../components/Widget";
import { ResizeConfig } from "../components/ResizeConfig";

import { WidgetData } from "../models/WidgetData";

import "./Dashboard.scss";

export interface Props {
    widgets: WidgetData[];
    useConfig?: boolean;
    resizeVariant?: string;
}

export var Dashboard: React.StatelessComponent<Props> = (props: Props) => {

    let widgetsElements = props.widgets.map(widgetProps => <Widget {...widgetProps}/>);
    let config = (props.useConfig) ? <ResizeConfig variant={props.resizeVariant}/> : null;
    let edit = (!props.useConfig) ? <img className="edit-button" src="/src/assets/dashboard-edit.png"/> : null;

    return (
        <div>
            <Header/>
            <main>
                { config }
                { widgetsElements }
                { edit }
            </main>
        </div>
    );
}