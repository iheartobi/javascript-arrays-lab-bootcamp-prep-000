var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
 return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

<<<<<<< HEAD
function removeLastKitten() {
 return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}





=======
function 
>>>>>>> 61e4b886e6dfa06f2e70402f72c747d6d6ca415f
