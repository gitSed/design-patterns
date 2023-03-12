import { IDataController, IDataModel } from "../entities";

// A Subject (a.k.a Observable)
class DataController implements IDataController {
  static instance: DataController;
  private observers: Set<IDataModel> = new Set();

  constructor() {
    if (DataController.instance) {
      return DataController.instance;
    }
    DataController.instance = this;
  }

  subscribe(observer: IDataModel): void {
    this.observers.add(observer);
  }

  unsubscribe(observer: IDataModel): void {
    this.observers.delete(observer);
  }

  notify(data: number[]): void {
    this.observers.forEach((observer) => {
      observer.notify(data);
    });
  }
}

export default DataController;
