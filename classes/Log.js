// maak een class met 3 parametres sport, distance(km's), duration(mins)

class Log {
  #sport;
  #distance;
  #duration;
  constructor(sport, distance, duration) {
    this.#sport = sport;
    this.#distance = distance;
    this.#duration = duration;
  }
  get distance() {
    return this.#distance;
  }
}

export default Log;
