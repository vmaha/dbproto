import * as React from "react";

import "./Header.scss";

export interface Props {
}

export var Header: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <header>
            <div className="band l1"/>
            <div className="band l2"/>
            <img className="snip left" src="/src/assets/l1-l2-left.png"/>
            <img className="snip right" src="/src/assets/l1-l2-right.png"/>
        </header>
    );
}