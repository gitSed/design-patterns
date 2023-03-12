interface IObserver<T> {
  update(value: T): void;
}

interface ISubject<T> {
  observers: Array<IObserver<T>>;

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: Array<IObserver<T>> = [];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T): void {
    this.observers.forEach((observer) => observer.update(value));
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  update(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>((value) =>
  console.log(`Observer 1: ${value}`)
);

subject.subscribe(observer1);
subject.notify(1);
subject.notify(20);

const subject2 = new Subject<string>();
const observer2 = new Observer<string>((value) =>
  console.log(`Observer 2: ${value}`)
);

subject2.subscribe(observer2);
subject2.notify("Hello");
subject2.notify("World");
