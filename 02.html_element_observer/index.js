const itemSubject = new ItemsSubject();

const observer1Element = document.querySelector("#observer1");
const observer2Element = document.querySelector("#observer2");

const listObserver1 = new ListElementObserver(observer1Element);
listObserver1.setSubscribeFn(handleSubscribe);
listObserver1.setUnsubscribeFn(handleUnsubscribe);

const listObserver2 = new ListElementObserver(observer2Element);
listObserver2.setSubscribeFn(handleSubscribe);
listObserver2.setUnsubscribeFn(handleUnsubscribe);

itemSubject.subscribe(listObserver1);
itemSubject.subscribe(listObserver2);

function addEntry() {
  const inputEl = document.querySelector("#subject");
  const { value } = inputEl;

  itemSubject.addItem(value);
}

function handleSubscribe(observer) {
  itemSubject.subscribe(observer);
}

function handleUnsubscribe(observer) {
  itemSubject.unsubscribe(observer);
}
