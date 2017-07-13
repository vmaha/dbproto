import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Dashboard } from "../components/Dashboard";
import { WidgetProps } from "../components/Widget";
import { SampleData } from "../stores/SampleData";
import { WidgetLoadType } from "../models/WidgetLoadType";

export var Loading = (props: RouteComponentProps<any>) => {
    
    let loaderName: string = props.match.params.loader;
    
    let loader: WidgetLoadType = 
        loaderName.indexOf("spinner") >= 0 ? WidgetLoadType.Spinner : 
        loaderName.indexOf("fixed-image") >= 0 ? WidgetLoadType.FixedImage :
        null;
    
    let data = new SampleData();
    let widgetData = data.getWidgetsData(1);
    let widgetsToLoad = [ 0, 2, 4, 5, 7, 9, 11, 12];
    widgetsToLoad.forEach(i => widgetData[i].pretendToLoad = true);
    widgetData.forEach(widget => widget.loadType = loader);

    if (loaderName.indexOf("with-name") >= 0) {
        widgetData.forEach(data => {
            let widgetProps = data as WidgetProps;
            widgetProps.loadingName = data.name;
        });
    }

    if (loaderName.indexOf("with-catalog-name") >= 0) {
        widgetData.forEach(data => {
            let widgetProps = data as WidgetProps;
            widgetProps.loadingName = data.type;
        });
    }

    if (loaderName.indexOf("with-mixed-name") >= 0) {
        widgetData.forEach(data => {
            let widgetProps = data as WidgetProps;
            widgetProps.loadingName = data.name ? data.name : data.type;
        });
    }
    
    return <Dashboard widgets={widgetData} />;
}






