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
                <Variant url="/ellipsis/kanban" name="A" description="Kanban board design"/>
                <Variant url="/ellipsis/kanban-no-spaces" name="B" description="Same as ☝️ with a touch of polish"/>
                <Variant url="/ellipsis/ibiza" name="C" description="Ibiza design"/>
                <h2>Loading</h2>
                <p>Loading animations could do with some 💙</p>
                <Variant url="/loading/spinner" name="A" description="Using fabric spinner"/>
                <Variant url="/loading/spinner-with-name" name="B" description="Spinner and user given name"/>
                <Variant url="/loading/spinner-with-catalog-name" name="C" description="Spinner and catalog name"/>
                <Variant url="/loading/spinner-with-mixed-name" name="D" description="Spinner and user given name, or catalog name if title isn't configurable"/>
                <Variant url="/loading/fixed-image" name="E" description="Using a small fixed image"/>
                <Variant url="/loading/fixed-image-with-name" name="F" description="Fixed image and user given name"/>
                <Variant url="/loading/fixed-image-with-catalog-name" name="G" description="Fixed image and catalog name"/>
                <Variant url="/loading/fixed-image-with-mixed-name" name="H" description="Fixed image and user given name, or catalog name if title isn't configurable"/>
                <h2>Resize</h2>
                <p>🍔 Super size me! 🍟</p>
                <Variant url="/resize/1" name="A" description="Original"/>
                <Variant url="/resize/2" name="B" description="2 pickers separated by 'x'"/>
                <Variant url="/resize/5" name="C" description="2 pickers stacked"/>                
                <Variant url="/resize/3" name="D" description="2 pickers with labels"/>
                <Variant url="/resize/4" name="E" description="2 pickers with alt labels"/>
                <Variant url="/resize/6" name="F" description="Grid"/>
                <Variant url="/resize/6-no-invalid" name="G" description="Same as ☝️ without invalid sizes"/>
                <Variant url="/resize/6-preview-box" name="H" description="Grid with preview box"/>
                <Variant url="/resize/6-no-invalid-preview-box" name="I" description="Same as ☝️ without invalid sizes"/>
            </main>
        );
    }
}