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

class ItemsSubject extends Subject {
  constructor() {
    super();

    this.data = [];
  }

  addItem(item) {
    this.data.push(item);
    this.notify(item);
  }
}

class ListElementObserver {
  constructor(observerEl) {
    this.observerEl = observerEl;
  }

  update(data) {
    const listEl = this.observerEl.querySelector("ul");
    const listItem = document.createElement("li");
    listItem.innerHTML = data;

    listEl.appendChild(listItem);
  }

  setSubscribeFn(fn) {
    const button = this.observerEl.querySelector(
      "button[aria-label='subscribe']"
    );

    if (button && fn) {
      button.addEventListener("click", () => fn(this));
    }
  }

  setUnsubscribeFn(fn) {
    const button = this.observerEl.querySelector(
      "button[aria-label='unsubscribe']"
    );

    if (button && fn) {
      button.addEventListener("click", () => fn(this));
    }
  }
}
