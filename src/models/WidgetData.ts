import { WidgetLoadType } from "./WidgetLoadType";

export class WidgetData {
    height: number;
    width: number;
    left: number;
    top: number;
    showLightbox?: boolean;
    pretendToLoad?: boolean;    
    loadType?: WidgetLoadType
}