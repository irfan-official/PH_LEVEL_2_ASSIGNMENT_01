

## Q2. What is the use of the keyof keyword in TypeScript? Provide an example.
`Ans`:

keyof ব্যবহারের উদ্দেশ্য হলো কোনো অবজেক্ট টাইপের key গুলোকে একটি ইউনিয়ন টাইপ হিসেবে পাওয়া।

```ts
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type User_Keys = keyof User; // "id" | "name" | "age" | "email"

function getValue(obj: User, key: User_Keys) {
  return obj[key];
}

const person: User = {
  id: 1,
  name: "Irfan",
  age: 23;
  email: "irfan@example.com",
};

console.log(getValue(person, "email")); // ঠিকমতো কাজ করবে

// console.log(getValue(person, "isActive")); // // ভুল কারণ "isActive" UserKeys এ নেই
```

## Q4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
`Ans`:

Enum ব্যবহার করা হয় একটি মানের নির্দিষ্ট সেট বর্ণনা করতে। এটি কোডকে আরও গুছাতে এবং সুন্দর করে। 

`Numeric Enum:`

```ts
enum Number {
  zero,      // 0
  one,    // 1
  two,    // 2
  three    // 3
}

let check_number = Number.zero; // 0
```
<br/>

`String Enum:`

```ts
enum Status {
  SUCCESS = "success",
  FAILED = "failed",
  PENDING = "pending"
}

let currentStatus = Status.SUCCESS; // "success"
```