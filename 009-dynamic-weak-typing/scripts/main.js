let foo = 42 // foo is now a number
console.log("Foo is 42 - ", foo)

foo = "bar" // foo is now a string
console.log("Foo is bar - ", foo)

foo = true // foo is now a boolean
console.log("Foo is is true - ", foo)

foo = 42 // foo is a number
const result = foo + "1" // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log("result is 42 + 1 ... ", result) // 421