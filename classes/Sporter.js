import Log from "./Log.js";

class Sporter {
  #name;
  #age;
  #list;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
    this.#list = [];
  }
  train(sport, distance, duration) {
    this.#list.push(new Log(sport, distance, duration));
  }
  getTotalDistance() {
    return this.#list.reduce(function (acc, log) {
      return acc + log.distance;
    }, 0);
  }
  get list() {
    return this.#list;
  }
}

export default Sporter;
