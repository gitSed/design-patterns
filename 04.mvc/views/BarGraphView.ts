import { IDataModel, IDataView } from "../entities";

class BarGraphView implements IDataView {
  // A concrete observer
  private observable: IDataModel;
  private id: number;

  constructor(observable: IDataModel) {
    this.observable = observable;
    this.id = this.observable.subscribe(this);
  }

  notify(data: number[]): void {
    this.draw(data);
  }

  draw(data: number[]): void {
    console.log(`Drawing a Bar graph using data: ${JSON.stringify(data)}`);
  }

  delete(): void {
    this.observable.unsubscribe(this.id);
  }
}

export default BarGraphView;
