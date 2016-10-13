function forLoop(array) {
  ary1 = array
  for (let i = 0; i < 25; i++){
    ary1.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n){
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  ary2 = array;
  do {
    ary2.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}
