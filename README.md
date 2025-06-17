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

### ✅ Key Learnings - Day 2

- Designing clean and responsive pages using HTML and CSS.
- Writing custom CSS for layout and form elements.
- Implementing basic form validation using JavaScript.
- Managing page redirection and improving user flow.

### ⚠️ Problem Faced - Day 2

- css alignment issue
