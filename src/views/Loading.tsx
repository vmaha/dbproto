import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Header } from "../components/Header";
import { Widget } from "../components/Widget";

import "./Loading.scss";
import "file-loader!../assets/l1-l2-left.png";
import "file-loader!../assets/l1-l2-right.png";
import "file-loader!../assets/dashboard-01.png";
import "file-loader!../assets/dashboard-edit.png";

export var Loading = (props: RouteComponentProps<any>) => {
    
    let id = props.match.params.id;
    
    return (
        <div>
            <Header/>
            <main>
                <img src="/src/assets/dashboard-01.png"/>
                <Widget height={2} width={2} left={0} top={0} showLightbox={true} pretendToLoad></Widget>
                <Widget height={1} width={1} left={2} top={0} showLightbox={false}></Widget>
                <Widget height={1} width={1} left={3} top={0} showLightbox={false} pretendToLoad></Widget>
                <Widget height={1} width={1} left={4} top={0} showLightbox={false}></Widget>
                <Widget height={1} width={1} left={2} top={1} showLightbox={false}></Widget>
                <Widget height={1} width={1} left={3} top={1} showLightbox={false} pretendToLoad></Widget>
                <Widget height={1} width={1} left={4} top={1} showLightbox={false}></Widget>
                <Widget height={2} width={3} left={5} top={0} showLightbox={true}></Widget>
                <Widget height={1} width={2} left={0} top={2} showLightbox={true}></Widget>
                <Widget height={1} width={2} left={0} top={3} showLightbox={true} pretendToLoad></Widget>
                <Widget height={2} width={3} left={2} top={2} showLightbox={true}></Widget>
                <Widget height={2} width={3} left={5} top={2} showLightbox={true}></Widget>
                <Widget height={2} width={3} left={0} top={4} showLightbox={true} pretendToLoad></Widget>
                <Widget height={1} width={1} left={3} top={4} showLightbox={true}></Widget>
                <img className="edit-button" src="/src/assets/dashboard-edit.png"/>
            </main>
        </div>
    );
}