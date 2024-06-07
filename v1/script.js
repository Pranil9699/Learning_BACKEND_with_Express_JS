var arr = [1, 2, 3, 4];

//basic's

//forEach
// arr.forEach(e => console.log(e))
// arr.map(e=> e+12).forEach(out => console.log(out))
// arr.filter(e => e%2==0).forEach(out => console.log(out))
// var first = arr.find((e) => e === 5);
// console.log(first);
// var first = arr.indexOf(5);
// console.log(first);

// objects

// var object = {
//   name: "Pranil Takawane",
//   age: 20,
//   gender: "Male",
// };
// Object.freeze(object);
// var check = Object.isFrozen(object);
// object.age = 45;
// console.log(check, object);

// async function
async function abcd() {
  var blob = await fetch(`https://randomuser.me/api/`);
  var ans = await blob.json();

  console.log(ans.results[0].name);
};
abcd();
