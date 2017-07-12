import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Dashboard } from "../components/Dashboard";
import { SampleData } from "../stores/SampleData";
import { WidgetButtonType } from "../models/WidgetButtonType";

export var Ellipsis = (props: RouteComponentProps<any>) => {
    
    let id = props.match.params.id as string;

    let idToButtonType: {[index:string]: WidgetButtonType } = {
        'kanban': WidgetButtonType.Kanban,
        'ibiza':  WidgetButtonType.Ibiza,
    };
    let buttonType = idToButtonType[id];

    let data = new SampleData();
    let widgets = data.getWidgetsData(1);
    widgets.forEach(widget => widget.buttonType = buttonType);

    return <Dashboard widgets={widgets} />;
}