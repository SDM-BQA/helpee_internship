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

## DAY 7

Today, I focused on understanding **Redux**, which initially felt a bit confusing. I watched two videos to understand the basic flow of how Redux works with React, and things started to make more sense by the end of the day.

Later, our sir gave us a **Redux demo**, and with its help, I was able to create a simple component that shows a counter and updates it using two buttons (increment and decrement). I followed the official Redux documentation to guide my implementation.

------

### 🧠 Topics Covered

- What is Redux and why it's used in large-scale React applications.
- Concept of `store`, `actions`, `reducers`, and `dispatch`.
- How to connect Redux with React using `useSelector` and `useDispatch`.
- Created a small working example of a counter app using Redux.

------

### 🧪 Redux Counter Component (Demo Code)

```tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  decrementounter,
  incrementCounter,
} from "../features/counter/counterSlice";

const Counter = () => {
  const state = useSelector((root: RootState) => root.counter);
  const { counter } = state;
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCounter());
  };
  const decrement = () => {
    dispatch(decrementounter());
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
```

✅ Key Learnings - Day 7
Understood the core concepts of Redux and its purpose in state management.

Learned how to use useSelector to access the store state.

Used useDispatch to trigger actions and update the store.

Gained confidence reading and understanding Redux documentation.

Started getting comfortable with TypeScript in Redux setup.

🖼️ Screenshot

![Redux Demo](/day%206/public/redux_home.png)

------

## DAY 8

Today, I converted the **Login Page (from Day 2)** into a **React + TypeScript** project and styled it using **Tailwind CSS**. This was my first hands-on project using Tailwind, and although I faced some initial difficulty understanding the utility classes, the final result turned out well.

Now, I feel confident building websites using Tailwind CSS.

------

### 🔧 What I Did

- Rebuilt the login component in a React TypeScript project.
- Used **Tailwind CSS** for styling instead of traditional CSS.
- Improved the UI appearance with consistent spacing, colors, and layout.
- Faced some initial challenges with layout alignment and spacing in Tailwind.
- Still need to test and improve the **responsiveness** of the layout.

------

### ✅ Key Learnings day 8

- Got hands-on experience with **Tailwind CSS** for utility-first styling.
- Improved understanding of **React + TypeScript** project structure.
- Practiced using **Tailwind utility classes** for layout, spacing, typography, and buttons.
- Gained confidence in converting vanilla HTML/CSS to modern tech stacks.
- Realized the importance of **responsive design**, planning to explore media queries and Tailwind breakpoints.

------

### ⚠️ Problems Faced - day 8

- Faced confusion in the beginning with **Tailwind class combinations** for padding, margin, and centering elements.
- Struggled with **alignment issues**, especially with form layout and button placement.
- Initially forgot to configure **Tailwind correctly** with React + TypeScript (postcss setup).
- Need more clarity on handling **responsive design** using Tailwind’s `sm`, `md`, `lg` breakpoints.

------

### 🖼️ Screenshot - day 8

![Login Page Tailwind](./day%208i/src/assets/login.png)

------

## Day 9

Today, I learned how to use **Redux** with **Redux Thunk** and implemented it in the login flow of my project. I used Redux to store the email and password entered on the login page and displayed the user's name on the home page. Additionally, I made an API request using **Redux Thunk** to fetch and display a list of users.

------

- 🔧 What I Did

- Integrated **Redux** into the login page to manage user credentials (email and password).
- Passed the stored user data to the **Home Page** using Redux state.
- Used **Redux Thunk** to make an asynchronous API call to fetch user names.
- Displayed the fetched user list on the home page.
- Practiced combining Redux with components and handling state updates smoothly.

------

### ✅ Key Learnings - day 9

- Deepened understanding of Redux state management in a React + TypeScript setup.
- Learned how to write **actions**, **reducers**, and configure **Redux store**.
- Gained practical experience with **Redux Thunk** for asynchronous actions (API calls).
- Improved ability to share global state (e.g., user info) across components.
- Understood how to debug and monitor Redux actions and state changes effectively.

------

### ⚠️ Problems Faced - day 9

- Initial confusion about where to place the async logic for API calls in Redux.
- Faced issues with properly dispatching the thunk action from the component.
- Minor trouble with displaying fetched data due to incorrect state structure.

------

### 🧱 Redux Store Configuration

```ts
// store.ts
import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "../features/login/authSlice";
import user_reducer from "../features/users/userInfoSlice";

export const store = configureStore({
  reducer: {
    auth: auth_reducer,
    user: user_reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

- AuthSlice

```ts
// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logOut: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
```

- Users Slice
  
```ts
// userInfoSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default userInfoSlice.reducer;

```

### 🖼️ Screenshot - day 9

![Login Page Tailwind](./day%2010/src/assets/login.png)

------

## DAY 10

Today, I brushed up on my **React skills** by building four small but useful UI components. This helped reinforce core concepts like `useState`, conditional rendering, event handling, and component structure.

------

### 🔧 What I Built

1. **⭐ Star Rating Component**
2. **⬇️ Dropdown Menu**
3. **🔍 Autocomplete Input**
4. **🧮 Simple Calculator**

------

### ✅ Key Learnings - day 10

- Strengthened understanding of `useState` and props.
- Practiced event handling and conditional UI rendering.
- Understood how to structure reusable and independent components.
- Got more comfortable managing component-level logic and state updates.

------

### ⚠️ Problems Faced - day 10

- Initially struggled with the **logic behind each component**, especially in handling events and managing state updates cleanly.
- Took time to decide **where and how to apply styles** with Tailwind CSS.
- Faced some issues while handling edge cases like empty input or backspace in the calculator.

------

## ⭐ Star Rating Component

```tsx
// Stars.tsx
import { useState } from "react";
import Star from './Star';
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Stars = () => {
  const [num, setNum] = useState<number>(0);
  const [color, setColor] = useState<string>("");

  const handleClick = (e: number) => {
    setNum(e);
    setColor("yellow");
  };

  const ids = [1, 2, 3, 4, 5];
  const { width, height } = useWindowSize();

  return (
    <div className="bg-black h-dvh flex items-center justify-center flex-col gap-5">
      {num >= 3 && <Confetti width={width} height={height} />}
      <div className="flex items-center justify-center gap-5">
        {ids.map((id) => (
          <Star
            key={id}
            id={id}
            handleClick={handleClick}
            color={color}
            num={num}
          />
        ))}
      </div>
      {num && <p className="text-slate-400">Thank you for rating {num} star</p>}
    </div>
  );
};

export default Stars;
```

### 🖼️ Screenshot - Star

![Star Rating Component](./day%2010/src/assets/star.png)

------

## ⬇️ Dropdown Menu Component

```tsx
// Dropdown.tsx
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Dropdown = () => {
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const jobRoles = [
    { id: 1, label: "Software Engineer" },
    { id: 2, label: "Data Analyst" },
    { id: 3, label: "Project Manager" },
    { id: 4, label: "UX Designer" },
    { id: 5, label: "Marketing Specialist" },
  ];

  const handleDropDown = () => setShowDrop(!showDrop);

  const handleSelected = (label: string) => {
    setSelected(label);
    setShowDrop(false);
  };

  return (
    <div className="flex items-center justify-center gap-2 flex-col relative">
      <div className="text-2xl font-bold mb-2">Dropdown Component</div>
      <div
        className="flex items-center justify-between w-full p-3 cursor-pointer border rounded-lg"
        onClick={handleDropDown}
      >
        <span className="font-semibold">{selected || "Select an Option"}</span>
        <span>{showDrop ? <FaCaretUp /> : <FaCaretDown />}</span>
      </div>
      {showDrop && (
        <div className="border w-full p-2 text-center rounded-lg flex gap-1 flex-col absolute top-26">
          {jobRoles.map((role) => (
            <p
              key={role.id}
              className="rounded-lg cursor-pointer p-2 hover:bg-slate-200"
              onClick={() => handleSelected(role.label)}
            >
              {role.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
```

### 🖼️ Screenshot - Dropdown Menu

![Dropdown Menu](./day%2010/src/assets/dropdown.png)

------

## 🔍 Autocomplete Input Component

```tsx
// AutoComplete.tsx
import { useState } from "react";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const suggestions = [
    { id: 1, label: "Apple" },
    { id: 2, label: "Banana" },
    { id: 3, label: "Blueberry" },
    { id: 4, label: "Cherry" },
    { id: 5, label: "Grapes" },
    { id: 6, label: "Mango" },
    { id: 7, label: "Orange" },
    { id: 8, label: "Peach" },
    { id: 9, label: "Pineapple" },
    { id: 10, label: "Strawberry" },
    { id: 11, label: "Watermelon" },
  ];

  const handleChange = (userInput: string) => {
    if (!userInput) return setItems([]);
    const filtered = suggestions.filter((s) =>
      s.label.toLowerCase().includes(userInput.toLowerCase())
    );
    setItems(filtered);
  };

  const handleSelect = (label: string) => {
    setQuery(label);
    setItems([]);
  };

  return (
    <div className="w-90 flex flex-col gap-5">
      <div className="text-center text-2xl font-bold">Autocomplete Component</div>
      <input
        value={query}
        type="text"
        placeholder="Enter your query"
        className="w-full p-3 font-semibold border-b border-slate-400 outline-none"
        onChange={(e) => {
          const input = e.target.value;
          setQuery(input);
          handleChange(input);
        }}
      />
      <div>
        {items.length === 0 ? (
          <div className="text-slate-500 p-2 text-center italic">Nothing to show</div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="border-b border-slate-400 p-2 cursor-pointer"
              onClick={() => handleSelect(item.label)}
            >
              {item.label}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
```

### 🖼️ Screenshot - Auto-complete Input

![Auto-complete Input](./day%2010/src/assets/autocomplete.png)

------

## 🧮 Simple Calculator Component

```tsx
// Calculator.tsx
import { useState } from "react";

const Calculator = () => {
  interface Ops {
    name: string;
    value: string;
  }

  const ops: Ops[] = [
    { name: "C", value: "clear" },
    { name: "Back", value: "back" },
    { name: "%", value: "%" },
    { name: "/", value: "/" },
    { name: "7", value: "7" },
    { name: "8", value: "8" },
    { name: "9", value: "9" },
    { name: "X", value: "*" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
    { name: "6", value: "6" },
    { name: "-", value: "-" },
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "+", value: "+" },
    { name: "+/-", value: "toggle-sign" },
    { name: "0", value: "0" },
    { name: ".", value: "." },
    { name: "=", value: "equals" },
  ];

  const [userInput, setUserInput] = useState<string>("");
  const [showValues, setShowValues] = useState<string>("");

  const handleClick = (op: Ops) => {
    if (op.value === "back") {
      setUserInput((prev) => prev.slice(0, -1));
      setShowValues((prev) => prev.slice(0, -1));
      return;
    }

    if (op.value === "clear") {
      setUserInput("");
      setShowValues("");
      return;
    }

    if (op.value === "equals") {
      try {
        const ans = eval(userInput);
        setUserInput(ans);
        setShowValues(ans);
      } catch (error) {
        setUserInput("Illegal Expression");
      }
      return;
    }

    setUserInput((prev) => prev + op.value);
    setShowValues((prev) =>
      op.value === "*" ? prev + "X" : prev + op.name
    );
  };

  return (
    <div className="w-100">
      <div className="font-bold text-3xl mb-5 text-center text-white">Calculator</div>
      <div className="bg-slate-300 flex flex-col gap-1 w-full border rounded-lg py-4 px-2">
        <div className="overflow-x-scroll screen text-right px-2 py-4 bg-slate-100 rounded-lg text-xl">
          {showValues || <p className="text-gray-400">Enter Something...</p>}
        </div>
        <div className="p-2 grid grid-cols-4 gap-4 text-center">
          {ops.map((op) => (
            <div
              key={op.value}
              className="odd:bg-black odd:text-white text-md flex items-center justify-center p-2 bg-slate-100 cursor-pointer rounded-lg"
              onClick={() => handleClick(op)}
            >
              {op.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
```

### 🖼️ Screenshot - Simple Calculator

![Simple Calculator](./day%2010/src/assets/calculator.png)

------

## DAY 11

Today, I improved the **Calculator Component** by handling edge cases and making the logic more robust. Additionally, I explored **React Charting** using the **ApexCharts** library to visualize data in a modern and interactive way.

------

### 🔧 What I Did - day 11

- ✅ Handled edge cases in the calculator (e.g., division by zero, invalid expressions).
- ✅ Prevented invalid consecutive operators like `++`, `**`, etc.
- ✅ Added basic error handling and input sanitation.
- 📊 Installed and explored `react-apexcharts` for rendering charts.
- 📈 Created basic line, bar, and pie charts using sample data.

------

### ✅ Key Learnings - day 11

- Improved JavaScript expression handling within controlled components.
- Learned to manage user input sanitation before running `eval()`.
- Understood the basics of integrating **ApexCharts** in React.
- Gained experience in configuring chart types and styles dynamically.
- Realized the power of charts in enhancing frontend UI/UX.

------

### ⚠️ Problems Faced - day 11

- Conflicts while using `eval()` with edge cases like multiple operators.
- ApexCharts documentation was slightly complex at first.
- Faced responsiveness issues in initial chart layout.

------

### 🧮 Updated Calculator Screenshot

![Updated Calculator Screenshot](./day%2010/src/assets/cal.png)

------

### 📊 ApexCharts Sample Chart Screenshot

![ApexCharts Screenshot](./day%2011/src/assets/chart.png)

------

### 📦 Installed Dependencies

```bash
npm install react-apexcharts apexcharts
```

------

## DAY 12

Today, I created a new **ToDo App** using **React**, **Tailwind CSS**, and a new state management library called **Zustand**. It was my first time exploring Zustand, and I found it lightweight and easy to integrate compared to Redux.

------

### 🔧 What I Did - day 12

- ✅ Built a fully functional **ToDo App**.
- ✅ Used **Tailwind CSS** for responsive and clean UI.
- ✅ Integrated **Zustand** for managing global state (tasks list, input, updates).
- ✅ Added functionality to **add**, **delete**, and **toggle** task status.

------

### ✅ Key Learnings - day 12

- Understood the basics of **Zustand** store creation and usage.
- Learned to manage application state globally without boilerplate code.
- Improved knowledge of **Tailwind utility classes** for quick UI styling.
- Built a clear separation between state logic and UI components.

------

### ⚠️ Problems Faced

- Initially confused about how Zustand works compared to Redux or useContext.
- Faced issues updating and persisting tasks correctly on multiple re-renders.
- Styling responsiveness using Tailwind took a few extra iterations.

------

### 🖼️ Screenshot Todo App

![Zustand Todo App](./day%2012/src/assets/todo.png)

------

### TodoStore

```ts
import { create } from "zustand";

interface Tasks {
  id: string,
  name:string,
  description:string,
  tag:string,
  priority:{
    name:string,
    value:string,
    priorityNum:number
  },
  time:string,
  status:string
}

const todoStore = (set, get) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],

  filterType: "all",
  addTask: (task:Tasks) => {
    const newTask = {
      ...task,
      status: "active",
      time: new Date().toLocaleString(),
    };

    const updatedTodos = [...get().todos, newTask];

    set({ todos: updatedTodos });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },

  taskStatus: (id:string) => {
    const todos = get().todos;
    const updatedTodos = todos.map((todo:Tasks) => {
      if (todo.id === id && todo.status === "active") {
        return {
          ...todo,
          status: "completed",
        };
      } else if (todo.id === id && todo.status === "completed") {
        return {
          ...todo,
          status: "active",
        };
      } else {
        return todo;
      }
    });
    set((state) => ({
      todos: updatedTodos,
    }));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },

  deleteTask: (id:string) => {
    const todos = get().todos;
    const updatedTodos = todos.filter((todo:Tasks) => todo.id !== id);

    set((state) => ({
      todos: updatedTodos,
    }));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },
  setFilterType: (type:string) => {
    set({ filterType: type });
  },
});

const useTodoStore = create(todoStore);

export default useTodoStore;

```

### 📦 Installed Dependencies - day 12

```bash
npm install zustand
```

------

## DAY 13

Today, I **converted the UI** of my existing **ToDo App** (from Day 12) from **Tailwind CSS** to **Ant Design**. Alongside the design overhaul, I also **refactored the progress bar logic** to work dynamically based on selected task tags.

------

### 🔧 What I Did - day 13

- ✅ Replaced all **Tailwind components** with clean, ready-made **Ant Design components**.
- ✅ Updated forms, buttons, layout, and task cards using Ant Design.
- ✅ Refined the **progress bar** to reflect completion status **based on selected tag only** instead of all tasks.
- ✅ Ensured consistent design and responsiveness with Ant Design grid system.

------

### ✅ Key Learnings - day 13

- Gained hands-on experience with **Ant Design components** like:
  - `Form`, `Input`, `Select`, `Button`, `Card`, `Progress`, `Tag`, `Row`, `Col`.
- Learned to **conditionally render** progress based on selected filter/tag.
- Understood Ant Design's **grid layout system** and styling customization.
- Realized how Ant Design accelerates UI development with consistency.

------

### ⚠️ Problems Faced - day 13

- Faced some difficulty replacing Tailwind layout with Ant Design’s grid system.
- Needed extra logic to dynamically calculate **tag-specific progress**.
- Encountered styling overrides while mixing custom CSS with Ant Design classes.

------

### 🖼️ Screenshot Todo App using Ant Design

![Ant Design Todo App](./day%2013/src/assets/todonew.png)

------

### 📦 Installed Dependencies - day 13

```bash
npm install antd
```

------

## DAY 14

Today, I built a **custom calendar component** using **React** and **Ant Design**. I focused on manually rendering dates, handling month/year navigation, and applying **custom styles for weekends (Saturday and Sunday)**. This component was styled using both Ant Design and custom CSS.

------

### 🔧 What I Did - day 14

- ✅ Created a custom calendar layout using **Ant Design's** `Flex`, `Button`, and other components.
- ✅ Highlighted the current date with a special color.
- ✅ Applied custom text colors for:
  - **Sunday** → Red
  - **Saturday** → Blue
- ✅ Implemented navigation:
  - Switch months and years using arrow buttons.
  - Jump to **Today** with a dedicated button.
- ✅ Handled blank cells for start-of-month alignment.

------

### ✅ Key Learnings -day 14

- Improved skills using **Ant Design’s Flex layout** for building structured UIs.
- Learned to calculate:
  - First day of the month
  - Number of days in a month
  - Day alignment in a calendar grid
- Applied **conditional styling** based on `weekDay` and `isToday`.
- Understood the importance of date manipulation using native **JavaScript Date API**.

------

### ⚠️ Problems Faced - day 14

- Handling the offset for the first day (start alignment) required careful date logic.
- Customizing weekend styles without affecting weekday layout.
- Managing responsive design within fixed column widths (14.28%).

------

### 📷 Screenshot Calender

![Calendar Component](./day%2014/src/assets/calender.png)

------

## DAY 15

Today, I designed a **dashboard layout** using **React with TypeScript** and **Tailwind CSS**. Though the dashboard is currently non-functional, I populated it with **dummy data** to simulate real UI behavior. I also explored **Nivo Charts** for rendering beautiful, customizable charts.

------

### 🔧 What I Did - day 15

- ✅ Created a multi-panel **dashboard UI** with `LeftPanel` and `RightPanel` layout.
- ✅ Used **Tailwind CSS** to style sections, components, and layout.
- ✅ Created reusable components like:
  - `Navbar`
  - `Profile`
  - `ProfileStats`
  - `ProfileTracker`
- ✅ Implemented **Nivo Charts** to visualize task tracking using dummy data.
- ✅ Applied **glassmorphism effect**, shadows, and soft gradients to the layout.

------

### ✅ Key Learnings - day 15

- Understood how to:
  - Align components using Tailwind’s `flex`, `gap`, `h-dvh`, and `w-*` utilities.
  - Create **glass-effect UI** using semi-transparent backgrounds and blur.
  - Use **Nivo Charts** for clean, responsive data visualization.
- Learned to **overlap divs** effectively using positioning, `z-index`, and Tailwind's layout utilities.
- Got hands-on practice with **component composition** in React.

------

### ⚠️ Problems Faced - day 15

- Initial layout alignment was tricky—especially making it responsive.
- Overlapping divs correctly with layered design needed careful styling.
- Customizing Nivo Chart appearance with gradients and legends required extra effort.

------

### 🖼️ Dashboard Screenshot - day 15

![Dashboard UI Preview](/day%2015/src/assets/dash.png)

------

### 📦 Installed Dependencies - day 15

```bash
npm install @nivo/core @nivo/bar
```

------

## DAY 16

Today, I upgraded the **custom calendar component** (from Day 14) by adding the ability to **add and view events or notes** on individual dates. I also implemented **right-click (context menu)** and **left-click handling** without relying on any pre-built context menu libraries.

------

### 🔧 What I Did - day 16

- ✅ Added feature to **add events and notes** to specific calendar dates.
- ✅ If an event or note exists for a day, a small **icon appears** on the respective date cell.
- ✅ Implemented **left-click vs. right-click** handling using native `mousedown` logic.
  - **Left-click** → Shows event/note list for that day.
  - **Right-click** → Opens context menu to add event or note.
- ✅ Tracked and filtered events/notes using the date string like `23 June, 2025`.
- ✅ Stored notes and events separately but displayed based on matching `dayId`.
- ✅ Used a custom **`useEffect` hook** to track clicks and update the UI accordingly.

------

### ✅ Key Learnings - day 16

- Learned how to:
  - Detect **mouse click types** using `e.button === 0` (left) and `e.button === 2` (right).
  - Dynamically **position a context menu** using `clientX` and `clientY`.
  - Efficiently **filter and map notes/events** based on the selected day.
- Realized the importance of separating logic:
  - Currently, the **entire component is inside one file**, making it hard to maintain.
  - Next step: break it into modular subcomponents.

------

### ⚠️ Problems Faced - day 16

- Mapping the events to the correct calendar day took several attempts to format and compare dates consistently.
- Having the entire calendar, event logic, and context menu in a single file made the code lengthy and difficult to debug.
- Ensuring correct UI updates for both left and right clicks needed multiple state dependencies in the `useEffect`.

------

### 🧠 Code Snippet: Mouse Click Logic

```ts
useEffect(() => {
  const handleMouseDown = (e) => {
    if (e.button === 0 && e.target.id) {
      setVisibleSideBar(true);
      const day = `${e.target.id} ${currentMonth[0].name}, ${currentYear}`;
      setFilterEventTracker(() =>
        eventTracker.filter((eventName) => eventName.dayId === day)
      );
      setFilterNoteTracker(() =>
        noteTracker.filter((noteName) => noteName.dayId === day)
      );
      if (visibleContextMenu) setVisibleContextMenu(false);
    } else if (e.button === 2 && e.target.id) {
      setXPosition(e.clientX);
      setYPosition(e.clientY);
      setDayId(e.target.id);
      if (visibleSideBar) setVisibleSideBar(false);
      setVisibleContextMenu(true);
    }
  };

  window.addEventListener("mousedown", handleMouseDown);
  return () => {
    window.removeEventListener("mousedown", handleMouseDown);
  };
}, [eventTracker, noteTracker, visibleContextMenu, currentMonth, currentYear]);
```

### 🖼️ Calender Screenshot - day 16

![Calender UI Preview](/day%2016/src/assets/cal2.png)
![Calender UI Preview](/day%2016/src/assets/cal3.png)
![Calender UI Preview](/day%2016/src/assets/cal4.png)

------
