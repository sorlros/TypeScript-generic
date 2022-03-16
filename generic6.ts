class PersonExtends<T extends string | number> {
  private _name: T

  constructor(name: T) {
    this._name = name
  }
}

new PersonExtends("Mark")
new PersonExtends(29)
//new PersonExtends(true)