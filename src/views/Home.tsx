import { Helmet } from "react-helmet";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from 'react-router-dom';

import "./Home.scss";

export interface Props extends RouteComponentProps<any> {
}

export class State {
    hideAbandonedExperiments: boolean;
}

class VariantProps {
    url: string;
    description: string;
    name: string;
    isArchived?: boolean;
}

var Variant = (props: VariantProps) => {
    let className = "variant";
    if (props.isArchived) {
        className += " archived";
    }
    return <p className={ className }><Link to={props.url}>Variant {props.name}</Link>&nbsp;— {props.description}</p>;
}


export class Home extends React.Component<Props, State> {

    state = { hideAbandonedExperiments: true };

    public render() {        
        let className = "body-container";
        if (this.state.hideAbandonedExperiments) {
            className += " hide-abandoned";
        }
        return (            
            <main className={className}>
                <h1>Compass Prototypes</h1>
                <h2>Ellipsis</h2>
                <p>Buttons that show up on widget hover collide with new widget elements</p>
                <Variant url="/ellipsis/kanban" name="A1" description="Kanban board design" isArchived={ true }/>
                <Variant url="/ellipsis/kanban-no-spaces" name="A2" description="Kanban board design + some polish"/>
                <Variant url="/ellipsis/ibiza" name="B1" description="Ibiza design"/>
                <Variant url="/ellipsis/ibiza-thick-outline" name="B2" description="Ibiza with thicker outline" isArchived={ true }/>
                <Variant url="/ellipsis/ibiza-super-thick-outline" name="B3" description="Ibiza with super thick outline" isArchived={ true }/>
                <Variant url="/ellipsis/ibiza-no-outline" name="B4" description="Ibiza with no outline" isArchived={ true }/>
                <Variant url="/ellipsis/ibiza-parallelogram" name="C1" description="Ibiza but with a tab-like look"/>
                <Variant url="/ellipsis/ibiza-thick-outline-parallelogram" name="C2" description="Ibiza but with a tab-like look and thicker outline" isArchived={ true }/>
                <Variant url="/ellipsis/ibiza-super-thick-outline-parallelogram" name="C3" description="Ibiza but with a tab-like look and super thick outline" isArchived={ true }/>
                <Variant url="/ellipsis/ibiza-no-outline-parallelogram" name="C4" description="Ibiza but with a tab-like look and no outline" isArchived={ true }/>
                <h2>Loading</h2>
                <p>Loading animations could do with some 💙</p>
                <Variant url="/loading/spinner" name="A1" description="Using fabric spinner"/>
                <Variant url="/loading/spinner-with-name" name="A2" description="Spinner and user given name"/>
                <Variant url="/loading/spinner-with-catalog-name" name="A3" description="Spinner and catalog name" isArchived={ true }/>
                <Variant url="/loading/spinner-with-mixed-name" name="A4" description="Spinner and user given name, or catalog name if title isn't configurable" isArchived={ true }/>
                <Variant url="/loading/fixed-image" name="B1" description="Using a small fixed image" isArchived={ true }/>
                <Variant url="/loading/fixed-image-with-name" name="B2" description="Fixed image and user given name" isArchived={ true }/>
                <Variant url="/loading/fixed-image-with-catalog-name" name="B3" description="Fixed image and catalog name" isArchived={ true }/>
                <Variant url="/loading/fixed-image-with-mixed-name" name="B4" description="Fixed image and user given name, or catalog name if title isn't configurable" isArchived={ true }/>
                <h2>Resize</h2>
                <p>🍔 Super size me! 🍟</p>
                <Variant url="/resize/1" name="A" description="Original" isArchived={ true }/>
                <Variant url="/resize/2" name="B" description="2 pickers separated by 'x'" isArchived={ true }/>
                <Variant url="/resize/5" name="C" description="2 pickers stacked" isArchived={ true }/>                
                <Variant url="/resize/3" name="D" description="2 pickers with labels" isArchived={ true }/>
                <Variant url="/resize/4" name="E" description="2 pickers with alt labels" isArchived={ true }/>
                <Variant url="/resize/6" name="F" description="Grid" isArchived={ true }/>
                <Variant url="/resize/6-no-invalid" name="G" description="Same as ☝️ without invalid sizes" isArchived={ true }/>
                <Variant url="/resize/6-no-invalid-preview-box" name="I" description="Grid with preview box"/>
                <Variant url="/resize/6-preview-box" name="H" description="Same as ☝️ with some invalid sizes"/>
                <div>
                    <input 
                        type="checkbox" 
                        checked={this.state.hideAbandonedExperiments}
                        onChange={() => this.setState({hideAbandonedExperiments: !this.state.hideAbandonedExperiments})}
                    />
                    <label><span>Hide abandoned experiments</span></label>
                </div>
            </main>            
        );
    }
}