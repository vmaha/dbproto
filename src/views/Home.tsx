import { Helmet } from "react-helmet";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from 'react-router-dom';

export interface Props extends RouteComponentProps<any> {
}

export interface State {
}

class VariantProps {
    url: string;
    description: string;
    name: string;
}

var Variant = (props: VariantProps) => {
    return <p><Link to={props.url}>Variant {props.name}</Link>&nbsp;— {props.description}</p>;
}


export class Home extends React.Component<Props, State> {
    public render() {        
        return (
            <main className="body-container">
                <h1>Compass Prototypes</h1>
                <h2>Ellipsis</h2>
                <p>Buttons that show up on widget hover collide with new widget elements</p>
                <Variant url="/ellipsis/1" name="A" description="Kanban board design"/>
                <Variant url="/ellipsis/2" name="B" description="Ibiza design"/>
                <h2>Loading</h2>
                <p>Loading animations could do with some 💙</p>
                <Variant url="/loading/spinner" name="A" description="Using fabric spinner"/>
                <Variant url="/loading/fixed-image" name="B" description="Using a small fixed image"/>
                <Variant url="/loading/scaled-image" name="C" description="Using a scaled image"/>
            </main>
        );
    }
}