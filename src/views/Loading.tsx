import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Dashboard } from "../components/Dashboard";
import { SampleData } from "../stores/SampleData";

export var Loading = (props: RouteComponentProps<any>) => {
    
    let id = props.match.params.id;

    let data = new SampleData();
    let widgets = data.getWidgetsData(1);
    let widgetsToLoad = [ 0, 2, 4, 5, 9, 11, 12];
    widgetsToLoad.every(i => widgets[i].pretendToLoad = true);

    return <Dashboard widgets={widgets} />;
}






