const person1 = { age: 15, name: 'Andr', city: 'Moscow', authorized: true }
const person2 = { age: 14, name: 'Bori', city: 'Pskov', authorized: false }
const person3 = { age: 10, name: 'Den', city: 'Tver', authorized: true }
const person4 = { age: 25, name: 'Ed', city: 'Moscow', authorized: false }
const person5 = { age: 17, name: 'Fin', city: 'Tula', authorized: true }
const person6 = { age: 49, name: 'Gor', city: 'Tver', authorized: false }

const clients = [person1, person2, person3, person4, person5, person6]
// "../Array/ArrayMultiplier.mjs"
const getArrayWhithMultipliedParameter = (
  array,
  multiplier,
  parameter = 'age'
) => {
  const arrayResult = array.map(({ ...item }) => {
    item[parameter] *= multiplier
    return item
  })
  return arrayResult
}
export { getArrayWhithMultipliedParameter }
const arrayMultiplied = getArrayWhithMultipliedParameter(clients, 2, 'age')
const arrayMultipliedWithoutParameter = getArrayWhithMultipliedParameter(
  clients,
  2
)

console.table(arrayMultiplied)

console.table(arrayMultipliedWithoutParameter)
