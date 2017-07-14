import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Dashboard } from "../components/Dashboard";
import { SampleData } from "../stores/SampleData";
import { WidgetButtonType } from "../models/WidgetButtonType";

export var Ellipsis = (props: RouteComponentProps<any>) => {
    
    let id = props.match.params.id as string;
    let outlineColor = props.match.params.outlineColor as string;

    let parallelogramIndex = id.indexOf("-parallelogram");
    let useParallelogramForIbiza = false;
    if (parallelogramIndex >= 0) {
        id = id.substr(0, parallelogramIndex);
        useParallelogramForIbiza = true;
    }

    let idToButtonType: {[index:string]: WidgetButtonType } = {
        'kanban': WidgetButtonType.Kanban,
        'kanban-no-spaces': WidgetButtonType.KanbanNoSpaces,
        'ibiza':  WidgetButtonType.Ibiza,
        'ibiza-thick-outline':  WidgetButtonType.IbizaThickOutline,
        'ibiza-super-thick-outline':  WidgetButtonType.IbizaSuperThickOutline,
        'ibiza-no-outline':  WidgetButtonType.IbizaNoOutline,
    };
    let buttonType = idToButtonType[id];

    let data = new SampleData();
    let widgets = data.getWidgetsData(1);
    widgets.forEach(widget => {
        widget.buttonType = buttonType;
        widget.useParallelogramForIbiza = useParallelogramForIbiza;
        widget.outlineColor = outlineColor;
    });

    return <Dashboard widgets={widgets} />;
}