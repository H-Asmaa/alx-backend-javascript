export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  representationStr() {
    return `[Object ${this._code}]`;
  }
}
