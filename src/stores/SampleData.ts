import { WidgetData } from "../models/WidgetData";
import { Size } from "../models/Size";


export class SampleData {
    getWidgetsData(sampleDashboard: number) : WidgetData[] {
        if (sampleDashboard === 1) {
            return [ 
                { height: 2, width: 2, left: 0, top: 0, showLightbox: true,                                     type: "Markdown",               fixedLoadingImage: "/src/assets/fixed-loading-markdown.png",        backgroundImage: "/src/assets/widget-markdown.png" },
                { height: 1, width: 1, left: 2, top: 0,                     name: "Untriaged Bugs",             type: "Query Tile",             fixedLoadingImage: "/src/assets/fixed-loading-query-tile.png",      backgroundImage: "/src/assets/widget-scalar-01.png" },
                { height: 1, width: 1, left: 3, top: 0,                     name: "Active Bugs",                type: "Query Tile",             fixedLoadingImage: "/src/assets/fixed-loading-query-tile.png",      backgroundImage: "/src/assets/widget-scalar-02.png" },
                { height: 1, width: 1, left: 4, top: 0,                     name: "Active A11y Bugs",           type: "Query Tile",             fixedLoadingImage: "/src/assets/fixed-loading-query-tile.png",      backgroundImage: "/src/assets/widget-scalar-03.png" },
                { height: 1, width: 1, left: 2, top: 1,                     name: "P0 + P1 Bugs",               type: "Query Tile",             fixedLoadingImage: "/src/assets/fixed-loading-query-tile.png",      backgroundImage: "/src/assets/widget-scalar-04.png" },
                { height: 1, width: 1, left: 3, top: 1,                     name: "!A11y Bugs",                 type: "Query Tile",             fixedLoadingImage: "/src/assets/fixed-loading-query-tile.png",      backgroundImage: "/src/assets/widget-scalar-05.png" },
                { height: 1, width: 1, left: 4, top: 1,                     name: "Active DTS",                 type: "Query Tile",             fixedLoadingImage: "/src/assets/fixed-loading-query-tile.png",      backgroundImage: "/src/assets/widget-scalar-06.png" },
                { height: 2, width: 3, left: 5, top: 0, showLightbox: true, name: "Pull Requests",              type: "Pull Requests",          fixedLoadingImage: "/src/assets/fixed-loading-pull-requests.png",   backgroundImage: "/src/assets/widget-pr.png" },
                { height: 1, width: 2, left: 0, top: 2, showLightbox: true,                                     type: "Markdown",               fixedLoadingImage: "/src/assets/fixed-loading-markdown.png",        backgroundImage: "/src/assets/widget-team-links.png" },
                { height: 1, width: 2, left: 0, top: 3, showLightbox: true, name: "Analytics Extension",        type: "3rd Party Thingy",       fixedLoadingImage: "/src/assets/fixed-loading-markdown.png",        backgroundImage: "/src/assets/widget-3rd-party-thingy.png" },
                { height: 2, width: 3, left: 2, top: 2, showLightbox: true, name: "Compass Cycle Time",         type: "Cycle Time",             fixedLoadingImage: "/src/assets/fixed-loading-chart.png",           backgroundImage: "/src/assets/widget-cycle-time.png" },
                { height: 2, width: 3, left: 5, top: 2, showLightbox: true, name: "Active Bugs by Area Path",   type: "Chart for Work Items",   fixedLoadingImage: "/src/assets/fixed-loading-chart.png",           backgroundImage: "/src/assets/widget-chart.png" },
                { height: 2, width: 3, left: 0, top: 4, showLightbox: true, name: "Compass Velocity",           type: "Velocity",               fixedLoadingImage: "/src/assets/fixed-loading-chart.png",           backgroundImage: "/src/assets/widget-velocity.png" },
                { height: 1, width: 1, left: 3, top: 4, showLightbox: true, name: "Compass Velocity",           type: "Velocity",               fixedLoadingImage: "/src/assets/fixed-loading-chart.png",           backgroundImage: "/src/assets/widget-velocity-tile.png" },
            ];
        }
        return null;
    }

    getValidSizes(): Size[] {
        return [
            { width: 2, height: 2 }, 
            { width: 2, height: 3 }, 
            { width: 2, height: 4 },
            { width: 3, height: 2 }, 
            { width: 3, height: 3 }, 
            { width: 3, height: 4 }, 
            { width: 4, height: 2 }, 
            { width: 4, height: 3 }, 
            { width: 4, height: 4 },            
        ];
    }

    getAllValidSizes(): Size[] {
        let sizes: Size[] = [];
        for (let i = 1; i <=10; i++) {
            for (let j = 1; j <=10; j++) {
                sizes.push({
                    width: i,
                    height: j
                });
            }
        }
        return sizes;
    }

    get1DSizeOptions(): string[] {
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    }

    get2DSizeOptions(): string[] {
        return this.getValidSizes().map(size => `${size.width}x${size.height}`);
    }
}