//iterative
function fibs(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

fibs(8);

//Recursive
function fibsRec(n, a = 0, b = 1) {
  if (n === 0) return;

  console.log(a);
  fibsRec(n - 1, b, a + b);
}

fibsRec(8);
