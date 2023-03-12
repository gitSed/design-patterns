import { DataController } from "../controllers";
import { IDataController, IDataModel, IDataView } from "../entities";

// A Subject (a.k.a Observable)
class DataModel implements IDataModel {
  private observers: Record<number, IDataView> = {};
  private dataController: IDataController;
  private counter: number;

  constructor() {
    this.counter = 0;
    this.dataController = new DataController();
    this.dataController.subscribe(this);
  }

  subscribe(observer: IDataView): number {
    this.counter++;
    this.observers[this.counter] = observer;
    return this.counter;
  }

  unsubscribe(observerId: number): void {
    delete this.observers[observerId];
  }

  notify(data: number[]): void {
    Object.keys(this.observers).forEach((observer) => {
      this.observers[parseInt(observer)].notify(data);
    });
  }
}

export default DataModel;
