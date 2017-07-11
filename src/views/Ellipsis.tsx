import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Dashboard } from "../components/Dashboard";
import { SampleData } from "../stores/SampleData";

export var Ellipsis = (props: RouteComponentProps<any>) => {
    
    let id = props.match.params.id;

    let data = new SampleData();
    let widgets = data.getWidgetsData(1);

    return <Dashboard widgets={widgets} />;
}