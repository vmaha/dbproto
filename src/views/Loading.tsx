import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Dashboard } from "../components/Dashboard";
import { SampleData } from "../stores/SampleData";
import { WidgetLoadType } from "../models/WidgetLoadType";

export var Loading = (props: RouteComponentProps<any>) => {
    
    let loaderName: string = props.match.params.loader;
    
    let loader: WidgetLoadType = 
        loaderName == "spinner" ? WidgetLoadType.Spinner : 
        loaderName == "fixed-image" ? WidgetLoadType.FixedImage :
        loaderName == "scaled-image" ? WidgetLoadType.ScaledImage :
        null;
    
    let data = new SampleData();
    let widgets = data.getWidgetsData(1);
    let widgetsToLoad = [ 0, 2, 4, 5, 9, 11, 12];
    widgetsToLoad.forEach(i => widgets[i].pretendToLoad = true);    
    widgets.forEach(widget => widget.loadType = loader);
    
    return <Dashboard widgets={widgets} />;
}






