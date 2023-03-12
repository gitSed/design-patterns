class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => observer !== obs);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  update(data) {
    this.fn(data);
  }
}

const subject1 = new Subject();

const observer1 = new Observer((data) => {
  const listEl = document.querySelector("#ob1");
  listEl.innerHTML = data;
});
const observer2 = new Observer((data) => {
  const listEl = document.querySelector("#ob2");
  listEl.innerHTML = data;
});

subject1.subscribe(observer1);
subject1.subscribe(observer2);

function change(inputEl) {
  const { value } = inputEl;

  subject1.notify(value);
}
