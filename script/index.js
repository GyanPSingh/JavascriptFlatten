const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]];

const obj = {
  name: "Gyan",
  age: "30",
  Address: { flatNo: 201, city: "Hyderabad" },
};

const input = {
  a: 10,
  b: "foo",
  c: {
    d: "bar",
    e: false,
    f: {
      g: "random",
    },
  },
  d: "test",
};

//using javascript function
//console.log(arr.flat(1));//

const flattenArray = (arr) => {
  const newArr = [];
  const getFlattenArr = (arr) => {
    arr.forEach((dt) => {
      if (Array.isArray(dt)) {
        getFlattenArr(dt);
      } else {
        newArr.push(dt);
      }
    });
  };
  getFlattenArr(arr);
  return newArr;
};

//console.log(flattenArray(arr));

//console.log(Object.keys(obj));

const newObj = [];

const getFlattenObj = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == "object") {
      getFlattenObj(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
};
//getFlattenObj(obj);
//console.log(newObj);

const newInput1 = [];
const getFlatten1 = (input, parentKey = "") => {
  Object.keys(input).forEach((key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof input[key] === "object" && input[key] !== null) {
      getFlatten1(input[key], newKey);
    } else {
      newInput1[newKey] = input[key];
    }
  });
};
getFlatten1(input);
console.log(newInput1);

const newInput = {};
const getFlatten = (input, parentKey = "") => {
  Object.keys(input).forEach((key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof input[key] === "object" && input[key] !== null) {
      getFlatten(input[key], newKey);
    } else {
      newInput[newKey] = input[key];
    }
  });
};
getFlatten(input);
console.log(newInput);
