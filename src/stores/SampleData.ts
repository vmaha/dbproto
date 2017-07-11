

export class WidgetData {
    height: number;
    width: number;
    left: number;
    top: number;
    showLightbox?: boolean;
    pretendToLoad?: boolean;
}

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
}