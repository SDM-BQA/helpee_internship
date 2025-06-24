# Helpee Internship Documentation

## DAY 1

Today, I brushed up on my JavaScript fundamentals and built a simple interactive component that fetches a random image from [Lorem Picsum](https://picsum.photos/) every time a button is clicked. This helped reinforce my understanding of:

- DOM manipulation  
- Handling image loading and error events  

### 📸 Image Generator Component

Below is the sample code I created:

```html
<!-- HTML -->
<button id="btn">Generate Image</button>
<div id="loader" class="hidden">Loading...</div>
<div id="info"></div>
<p id="text">Click the button to generate a new image.</p>
<img id="image" style="display: none;" width="400" height="300" />
```

```js
// JavaScript
btn.addEventListener("click", () => {
  btn.disabled = true;
  console.log("clicked");
  text.classList.add("hidden");
  loader.classList.remove("hidden");

  const imgUrl = `https://picsum.photos/400?random=${Date.now()}`;

  const loadImg = new Promise((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = imgUrl;
  });

  loadImg
    .then(() => {
      img.style.display = "block";
      info.textContent = "";
    })
    .catch(() => {
      info.textContent = "Something Went Wrong!";
      img.style.display = "none";
    })
    .finally(() => {
      text.classList.remove("hidden");
      loader.classList.add("hidden");
      btn.disabled = false;
      btn.textContent = "Generate Image";
    });
});

```

### ✅ Key Learnings - Day 1

- Brushed up JavaScript basics and DOM manipulation techniques.
- Revised different types of JavaScript functions (regular, arrow functions).
- Implemented image fetching without using `async/await`, handled using Promises.

### ⚠️ Problem Faced - Day 1

- spinner on the button only loading once -> Not Resolved
- on first click it's not generating -> Not Resolved

------

## DAY 2

Today, I worked on building a basic login flow for a web application. I designed two pages:

1. **Login Page** – A simple login form with basic validation.
2. **Home Page** – The landing page users see after a successful login.

The login form redirects to the home page upon submission. This exercise helped me understand the flow between multiple pages in a web app.

### 🔐 Login to Home Page Flow

- Created a login page with email and password inputs.
- Performed simple form validation (e.g., required fields, valid email format).
- On successful login, redirected to the home page using JavaScript.

### 📷 Screenshot (Login Page UI)

![Login Page](./day%202/src/login.png)

### 📷 Screenshot (Home Page UI)

![Home Page](./day%202/src/home.png)

### ✅ Key Learnings

- Brushed up on designing responsive pages using HTML and CSS.
- Improved understanding of CSS styling for layout and UI.
- Implemented basic client-side form validation using JavaScript.
- Managed redirection from login to home page using simple logic.

### ⚠️ Problem Faced - Day 2

- css alignment
  
------

## DAY 3

Today, I made improvements to the home page of the application. I focused on personalizing the user experience by fetching and displaying the user's name stored in `localStorage`.

In addition, I spent time watching JavaScript tutorials to strengthen my understanding of core concepts.

### 🔧 Updates Made

- Retrieved and displayed the logged-in user's name using `localStorage`.
- Made minor content or layout improvements on the home page.
- Tested the login → home flow to ensure data persistence worked smoothly.

### 🖼️ Screenshot

![Home Page Update](./day%202/src/updated_home.png)

### ✅ Key Learnings -Day 3

- How to store and retrieve data using `localStorage`.
- Enhanced understanding of how front-end data persists across pages.
- Reinforced JavaScript fundamentals through tutorial videos.

> 📌 No major issues faced during implementation today.

------

## DAY 4

Today, I built a simple **To-Do App** and integrated it with the login component I created on Day 2. The username is fetched from `localStorage` and displayed on the to-do screen for a personalized experience.

The app allows users to add tasks, mark them as complete, and (intended) edit them — though I faced issues with the edit functionality.

### 📝 Features Implemented

- User login reused from Day 2 to personalize the app.
- Add new to-do tasks with input validation.
- Mark tasks as completed or pending.
- Display the logged-in user's name from `localStorage`.

### ⚠️ Problem Faced - day 4

- Faced challenges with **editing existing tasks** — changes were either not reflected or overwritten incorrectly.
- Need to revisit DOM element tracking and state update logic for better control over task edits.

### 🖼️ Screenshots

![Home Page Update](/day%204/public/home%20page.png)

![Todo List Page](/day%204/public/toto_page.png)

### ✅ Key Learnings - day 4

- Reusing login components and data across pages.
- Better grasp of working with dynamic lists in JavaScript.
- Need more clarity on DOM updates for editable elements.

------

## DAY 5

Today, I attended a 30-minute introductory session on **TypeScript**. The class covered the basics such as:

- `interface`
- `type`
- Static typing fundamentals

After the session, I explored TypeScript further by creating a small number guessing game. This helped me understand how functions and type annotations work in TypeScript.

### 🎮 Small Guessing Game in TypeScript

```ts
const btn = document.getElementById("btn") as HTMLInputElement;
const numInput = document.getElementById("num") as HTMLInputElement;
const result = document.getElementById("result") as HTMLInputElement;

let randomNum: number = Math.floor(Math.random() * 100) + 1;

function checkNumber(userNum: number, actualNum: number): void {
  if (userNum > actualNum) {
    result.textContent = "Guess low number";
  } else if (userNum < actualNum) {
    result.textContent = "Guess High number";
  } else {
    result.textContent = "You Guessed it right";
  }
}

btn.addEventListener("click", () => {
  if (numInput.value) {
    const userGuess = parseInt(numInput.value);
    if (!isNaN(userGuess)) {
      checkNumber(userGuess, randomNum);
    } else {
      result.textContent = "Please enter a valid number.";
    }
    numInput.value = "";
  }
});

```

### ✅ Key Learnings - day 5

- Understood basic TypeScript syntax and types.

- Learned how to define and use number types in functions.

- Practiced writing simple logic with typed parameters.

- Reinforced understanding of control flow using if/else.

------

## DAY 6

Today, I followed a React crash course and created a small project by watching a tutorial on building a job listing website. The tutorial was from **Traversy Media** on YouTube. This helped me get a practical understanding of modern React concepts.

------

### 🚀 Topics Covered

- **React**
  – Component-based architecture using functional components.
- **State**
  – Used to store and manage dynamic data with `useState`.
- **Hooks**
  – Introduction to `useState` and `useEffect`.
- **JSX (JavaScript Syntax Extension)**
  – Syntax to write HTML-like code inside JavaScript.
- **SPA, SSR, SSG**
  – Concepts of single-page applications and rendering strategies.
- **Vite**
  – Fast development server and bundler for React apps.
- **React Router DOM**
  – For navigation and routing between pages.
- **Data Loader**
  – Loading and passing API data to components.
- **Hosting Local Data**
  – Simulated backend using local files.
- **Component Reusability**
  – Creating reusable UI components for cleaner and scalable code.
- **Props**
  – Passing data from parent to child components for dynamic content.
- **Conditional Rendering**
  – Showing different UI based on conditions using ternary and logical operators.
- **List Rendering**
  – Using `.map()` to render lists of items dynamically.
- **Inline Styling & Class-based Styling**
  – Combining CSS classes with inline styles in JSX.
- **Basic Folder Structure**
 – Understanding the organization of React apps (components, pages, assets, etc.).
- **Debugging with Console**
 – Practiced debugging through `console.log` and browser dev tools.

------

### 🖼️ Screenshot Placeholder

![Home Page](/day%206/public/home.png)

![Browse Jobs Page](/day%206/public/browse_jobs.png)

![View Job Page](/day%206/public/view_job.png)

![Add Job Page](/day%206/public/add_job.png)

### 🧪 JSX Overview

```jsx
const App = () => {
  const names = ["allice", "john", "bob", "roy"];
  const loggedIn = false;
  const styles = {
    color: 'red',
    fontSize: '55px'
  };

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles}>Color Red</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
```

### ✅ Key Learnings - day 6

- Learned how to use useState and useEffect hooks in functional components.

- Understood routing in React using react-router-dom.

- Explored how to load and pass data using React Router's data loader.

- Learned how to simulate and host data on a local server using Vite.

- Got comfortable writing clean JSX and using conditional rendering.

- Practiced prop passing and component structuring.

### ⚠️ Problem Faced - day 6

- Faced issues while using data loader – especially in understanding where and how to fetch and pass the data.

- Had minor confusion around passing props between nested components.

## Day 7