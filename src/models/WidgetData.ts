import { WidgetLoadType } from "./WidgetLoadType";
import { WidgetButtonType } from "./WidgetButtonType";

export class WidgetData {
    height: number;
    width: number;
    left: number;
    top: number;
    showLightbox?: boolean;
    pretendToLoad?: boolean;    
    loadType?: WidgetLoadType;
    buttonType?: WidgetButtonType;
}