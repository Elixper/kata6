function nbYear(p0, percent, aug, p) {
  let newPop = (pop) => Math.floor(pop * (1 + percent / 100)) + aug;
  let newP = newPop(p0);
  let i = 0;
  while (newP < p) {
    i++;
    newP = newPop(newP);
  }
  return i + 1;
}
console.log(nbYear(1000, 2, 50, 1200)); //-> 15
console.log(nbYear(1500, 5, 100, 5000)); //-> 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); //-> 10
