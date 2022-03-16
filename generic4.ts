type HelloFuntionGeneric1 = <T>(message: T) => T 

const helloFunction1: HelloFuntionGeneric1 = <T>(message: T): T => {
  return message
}

interface HelloFunctionGeneric2 {
  <T>(message: T): T
}

const helloFunction: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message
}