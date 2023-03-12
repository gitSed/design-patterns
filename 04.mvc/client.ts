// Observer Design Pattern Concept

import { DataController } from "./controllers";
import { DataModel } from "./models";
import { BarGraphView, PieGraphView, TableView } from "./views";

// A local data view that the hypothetical external controller updates
const dataModel = new DataModel();

// Add some visualisation that use the dataview
const pieGraphView = new PieGraphView(dataModel);
const barGraphView = new BarGraphView(dataModel);
const tableView = new TableView(dataModel);

// A hypothetical data controller running in a different process
const dataController = new DataController(); // (Singleton)

// The hypothetical external data controller updates some data
dataController.notify([1, 2, 3]);

// Client now removes a local BAR_GRAPH
barGraphView.delete();

// The hypothetical external data controller updates the data again
dataController.notify([4, 5, 6]);
