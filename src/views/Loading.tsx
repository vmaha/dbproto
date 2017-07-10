import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Header } from "../components/Header";

import "./Loading.scss";
import "file-loader!../assets/l1-l2-left.png";
import "file-loader!../assets/l1-l2-right.png";
import "file-loader!../assets/dashboard-01.png";

export var Loading = (props: RouteComponentProps<any>) => {
    
    let id = props.match.params.id;
    
    return (
        <div>
            <Header/>
            <main>
                <img src="/src/assets/dashboard-01.png"/>
            </main>
        </div>
    );
}