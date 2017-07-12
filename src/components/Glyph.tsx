import * as React from "react";

import "./Glyph.scss";

export interface Props {
    name: string;
}

export var Glyph: React.StatelessComponent<Props> = (props: Props) => {    
    let map: {[ index:string ]: string } = {
        "bowtie-view-full-screen": "",
        "bowtie-ellipsis": "",
    };
    let content = map[props.name];    
        
    return <div className="glyph">{ content }</div>
}