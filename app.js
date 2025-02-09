// .map()

const nums = [2 , 3 , 4]
const squares= nums.map(squareFunc);
function square(elemet){
  return math.pow(elemt,2)
};

console.log(squares);


// .filter()

const nums2= [2, -2, 3, 1, 4]

const filtered = nums2.filter(function(value) {
  return value >= 2;
});

console.log(filtered);


//.reduce()

const nums3 = [9, 8, 5, 25, 70];
const total = nums3.reduce(sumFunc);

function sum(previous, next){
return previous + next;
};

console.log('$${total.tofixed(4)}');





