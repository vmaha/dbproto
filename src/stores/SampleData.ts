import { WidgetData } from "../models/WidgetData";
import { Size } from "../models/Size";


export class SampleData {
    getWidgetsData(sampleDashboard: number) : WidgetData[] {
        if (sampleDashboard == 1) {
            return [ 
                { height: 2, width: 2, left: 0, top: 0, showLightbox: true },
                { height: 1, width: 1, left: 2, top: 0 },
                { height: 1, width: 1, left: 3, top: 0 },
                { height: 1, width: 1, left: 4, top: 0 },
                { height: 1, width: 1, left: 2, top: 1 },
                { height: 1, width: 1, left: 3, top: 1 },
                { height: 1, width: 1, left: 4, top: 1 },
                { height: 2, width: 3, left: 5, top: 0, showLightbox: true },
                { height: 1, width: 2, left: 0, top: 2, showLightbox: true },
                { height: 1, width: 2, left: 0, top: 3, showLightbox: true },
                { height: 2, width: 3, left: 2, top: 2, showLightbox: true },
                { height: 2, width: 3, left: 5, top: 2, showLightbox: true },
                { height: 2, width: 3, left: 0, top: 4, showLightbox: true },
                { height: 1, width: 1, left: 3, top: 4, showLightbox: true },
            ];
        }
        return null;
    }

    getValidSizes(): Size[] {
        return [{
                width: 1,
                height: 1
            }, {
                width: 2,
                height: 2
            }, {
                width: 3,
                height: 2
            }, {
                width: 4,
                height: 4
            }
        ];
    }

    get1DSizeOptions(): string[] {
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    }

    get2DSizeOptions(): string[] {
        return [
            "1x1",
            "1x2",
            "1x3",
            "1x4",
            "1x5",
            "1x6",
            "1x7",
            "1x8",
            "1x9",
            "1x10",
            "2x1",
            "2x2",
            "2x3",
            "2x4",
            "2x5",
            "2x6",
            "2x7",
            "2x8",
            "2x9",
            "2x10",
            "3x1",
            "3x2",
            "3x3",
            "3x4",
            "3x5",
            "3x6",
            "3x7",
            "3x8",
            "3x9",
            "3x10",
            "4x1",
            "4x2",
            "4x3",
            "4x4",
            "4x5",
            "4x6",
            "4x7",
            "4x8",
            "4x9",
            "4x10",
            "5x1",
            "5x2",
            "5x3",
            "5x4",
            "5x5",
            "5x6",
            "5x7",
            "5x8",
            "5x9",
            "5x10",
            "6x1",
            "6x2",
            "6x3",
            "6x4",
            "6x5",
            "6x6",
            "6x7",
            "6x8",
            "6x9",
            "6x10",
            "7x1",
            "7x2",
            "7x3",
            "7x4",
            "7x5",
            "7x6",
            "7x7",
            "7x8",
            "7x9",
            "7x10",
            "8x1",
            "8x2",
            "8x3",
            "8x4",
            "8x5",
            "8x6",
            "8x7",
            "8x8",
            "8x9",
            "8x10",
            "9x1",
            "9x2",
            "9x3",
            "9x4",
            "9x5",
            "9x6",
            "9x7",
            "9x8",
            "9x9",
            "9x10",
            "10x1",
            "10x2",
            "10x3",
            "10x4",
            "10x5",
            "10x6",
            "10x7",
            "10x8",
            "10x9",
            "10x10",
        ];
    }
}