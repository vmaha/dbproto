import * as React from "react";

import "./ResizeConfig.scss";

import { SizePicker } from "./SizePicker";

import { SampleData } from "../stores/SampleData";

export interface Props {
    variant: string;
}

export var ResizeConfig: React.StatelessComponent<Props> = (props: Props) => {
    let sampleData = new SampleData();
    let resize = null;
    if (props.variant) {
        switch(props.variant) {
            case "1":
                resize = <SizePicker className={`size-picker-${props.variant}`} options={sampleData.get2DSizeOptions()} />
                break;
            case "2":
                resize = 
                    <div className={`size-picker-${props.variant}`}>
                        <SizePicker className={`size-picker-${props.variant}-1`} options={sampleData.get1DSizeOptions()} />
                        <span>x</span>
                        <SizePicker className={`size-picker-${props.variant}-2`} options={sampleData.get1DSizeOptions()} />
                    </div>
                break;
            case "3":
                resize = 
                    <div className={`size-picker-${props.variant}`}>
                        <span>Width</span>
                        <SizePicker className={`size-picker-${props.variant}-1`} options={sampleData.get1DSizeOptions()} />
                        <span>Height</span>
                        <SizePicker className={`size-picker-${props.variant}-2`} options={sampleData.get1DSizeOptions()} />
                    </div>
                break;
            case "4":
                resize = 
                    <div className={`size-picker-${props.variant}`}>
                        <SizePicker className={`size-picker-${props.variant}-1`} options={sampleData.get1DSizeOptions()} />
                        <span>w</span>
                        <SizePicker className={`size-picker-${props.variant}-2`} options={sampleData.get1DSizeOptions()} />
                        <span>h</span>
                    </div>
                break;
            case "5":
                resize = 
                    <div className={`size-picker-${props.variant}`}>
                        <div>
                            <span>Width</span>
                            <SizePicker className={`size-picker-${props.variant}-1`} options={sampleData.get1DSizeOptions()} />
                        </div>
                        <div>
                            <span>Height</span>
                            <SizePicker className={`size-picker-${props.variant}-2`} options={sampleData.get1DSizeOptions()} />
                        </div>
                    </div>
                break;
        }
    }

    return (
        <div>
            <div className="overlay"/>
            <div className="resize-config">
                <img className="config1" src="/src/assets/config1.png"/>
                <div className="size-picker-container">{ resize }</div>
                <img className="config2" src="/src/assets/config2.png"/>
                <img className="config3" src="/src/assets/config3.png"/>
            </div>
        </div>
    );
}