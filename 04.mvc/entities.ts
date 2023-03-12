// A Subject Interface
export interface IDataView {
  notify(data: number[]): void;
  draw(data: number[]): void;
  delete(): void;
}

// A Subject Interface
export interface IDataModel {
  subscribe(observer: IDataView): number;
  unsubscribe(observerId: number): void;
  notify(data: number[]): void;
}

// A Subject Interface
export interface IDataController {
  subscribe(observer: IDataModel): void;
  unsubscribe(observer: IDataModel): void;
  notify(data: number[]): void;
}
