import { Helmet } from "react-helmet";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from 'react-router-dom';

export interface Props extends RouteComponentProps<any> {
}

export interface State {
}

export class Home extends React.Component<Props, State> {
    public render() {        
        return (
            <main className="body-container">
                <h1>Pebble Prototypes</h1>
                <h2>Ellipsis</h2>
                <p>Buttons that show up on widget hover collide with new widget elements</p>
                <p><Link to="/ellipsis/1">Variant 1</Link>&nbsp;— Kanban board design</p>
                <p><Link to="/ellipsis/2">Variant 2</Link>&nbsp;— Kanban board with a solid background</p>                
                <h2>Loading</h2>
                <p>Loading animations could do with some 💙</p>
                <p><Link to="/loading/1">Using fabric spinners</Link></p>
            </main>
        );
    }
}