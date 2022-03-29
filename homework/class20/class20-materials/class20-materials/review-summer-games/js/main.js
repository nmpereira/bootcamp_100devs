//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
arr = [5, 5, 2, 10, 2];

const arrayProd = (x) => {
  let prod = 1;
  x.forEach((e) => {
    prod = prod * e;
  });

  return prod;
};

console.log(arrayProd(arr));
