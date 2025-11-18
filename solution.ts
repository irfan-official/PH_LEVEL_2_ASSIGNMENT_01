// problem 01

type Param = string | number | boolean;

function formatValue(param: Param): Param {
  if (typeof param === "string") {
    return param.toUpperCase();
  } else if (typeof param === "number") {
    return param * 10;
  } else if (typeof param === "boolean") {
    return !param;
  }
  return param;
}

// problem 02

const getLength = (param: string | any[]): number => {
  if (typeof param === "string") {
    return param.length;
  } else if (Array.isArray(param)) {
    return param.length;
  }

  return 0;
};

// problem 03

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// problem 04

interface Item {
  title: string;
  rating: number;
}
function filterByRating(arr: Item[]): Item[] {
  let newArr: Item[] = JSON.parse(JSON.stringify(arr));
  const filterArr: Item[] = newArr.filter(
    (item: Item) => item.rating >= 4 && item.rating <= 5
  );

  return filterArr;
}

// problem 05

interface UserObj {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

interface OnlyActiveUser {
  id: number;
  name: string;
  email: string;
  isActive: true;
}

function isActiveUser(user: UserObj): user is OnlyActiveUser {
  return user.isActive === true;
}

function filterActiveUsers(userArray: UserObj[]): OnlyActiveUser[] {
  let newUserArray: UserObj[] = JSON.parse(JSON.stringify(userArray));

  return newUserArray.filter(isActiveUser);
}


// Problem no 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(bookObj: Book) {
  console.log(
    `Title: ${bookObj.title}, Author: ${bookObj.author}, Published: ${
      bookObj.publishedYear
    }, Available: ${bookObj.isAvailable ? "Yes" : "No"}`
  );
}

// problem 07

const getUniqueValues = <T extends string | number>(
  arr1: Array<T>,
  arr2: Array<T>
): Array<T> => {
  let finalArr: Array<T> = [];

  const exists = (value: T, array: Array<T>): boolean => {
    for (let i = 0; i < array.length; i++) {

      if (array[i] === value) {
        return true
      };
    }
    return false;
  };

  for (let i = 0, arr_Length_1 =  arr1.length; i <arr_Length_1; i++) {

    if (!exists(arr1[i], finalArr)) {

      finalArr[finalArr.length] = arr1[i];
    }
  }

  for (let i = 0, arr_Length_2 = arr2.length; i < arr_Length_2; i++) {

    if (!exists(arr2[i], finalArr)) {

      finalArr[finalArr.length] = arr2[i];
    }
  }

  return finalArr;
};

// problem 08

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }
  const totalPrice: number = products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;

    const finalPrice =
      product.discount && product.discount >= 0 && product.discount <= 100
        ? basePrice - (basePrice * product.discount) / 100
        : basePrice;

    return total + finalPrice;
  }, 0);

  return totalPrice;
}



