# Project name: Event management

- Live website link : https://event-management-699c8.web.app


# MCQ 
<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: {}

<i>greeting and greetign are two different valiables.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: "12"

<i>here the value of a is a number but the value of b is a string . and we can't sum between a number and a string . They get concatenated</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.

<i>here Food is an array and info is a an object.they can't be replaced or redeclared</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The value of params is not declared or defined .</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>




# Project Features
- It's a single Page Application(SPA) firebase based event management website.
- There are 6 section on the home page , Navbar, banner(carousel), services cards, team, FAQs, and Footer section.
- IN the navbar there is a logo and  four Routes where "Home", "Register", "About" "Gallery". and the is a button "Log out"/Log In"
- In the banner section there is carousel banner seciton with 6 banner releted to event management.
- In the Services section there are six card with distinguished events and data with a button . After clicking on the button it will take to another page is called details. the details regarding to the event will be visible there.
- then there is a team section with multiple data and about their bio , occupations , experiences.
- Then there is a section of FAQs with answers

- then in the resigter page there is a form for registration 
- then another routes is about us 
- The next route is "Gallery and pictures are gathered /stored.
- and a simple footer section
- The website is responsible for  mobile(L), tablet, and dekstop.
