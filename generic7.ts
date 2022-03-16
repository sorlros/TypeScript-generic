interface Iperson {
  name: string
  age: number
}

const person: Iperson = {
  name: "Mark",
  age: 39
}

// type Keys = keyof Iperson
// const Keys: Keys = "name"


// Iperson[keyof Iperson] 
// => Iperson["name" | "age"] 
// => Iperson["name"] | Iperson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
// union 타입이 아닌 정확하게 지정된 타입이 나오는 장점 오류발생 확률 감소
getProp(person, "name")


function setProp<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): void {
  obj[key] = value
}

setProp(person, "name", "Anna")