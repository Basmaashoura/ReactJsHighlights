# Why Front-End Frameworks Exist

## 1. The Rise of Single-Page Applications (SPAs)

### Before 2010

- Most websites were built using tools like WordPress.
- Websites were rendered on the server.
- The backend assembled the HTML, CSS, and JavaScript, then sent it to the browser.
- The browser simply displayed the final result.
- These were called web pages.
- jQuery was commonly used to make JavaScript work more consistently across browsers.

### After 2010

- Applications started being built as web apps rather than simple web pages.
- Front-end frameworks helped developers build faster and more efficiently.
- Applications fetch data from APIs and render the UI on the client side.
- This shifted much of the app logic to the front-end.
- JavaScript became the main tool for building interactive interfaces.

---

## 2. SPAs with Vanilla JavaScript

Frontend apps are mainly about two things:

- handling data
- displaying that data in the user interface

A big challenge is keeping the data and UI in sync.

---

## 3. Why Not Just Keep Using jQuery?

jQuery was useful, but it has major limitations for modern app development:

- it requires a lot of direct DOM manipulation
- developers have to traverse and update the DOM manually
- data (state) is often stored in the DOM itself
- state is shared across the app, which makes it harder to reason about
- this often leads to bugs and messy code

---

## 4. Why Front-End Frameworks Exist

Front-end frameworks exist because keeping a user interface in sync with data is difficult and time-consuming.

They help by:

1. making UI updates easier and more predictable
2. enforcing a cleaner and more structured way of writing code
3. reducing "spaghetti code" problems
4. giving teams a consistent approach to building applications

In short, frameworks make front-end development more scalable and maintainable.

---

## 5. What Is React?

React is an extremely popular, declarative, component-based, state-driven JavaScript library for building user interfaces.

It was created by Facebook.

### Based on Components

- Components are the building blocks of a React app.
- A complex UI is made by combining many smaller components.
- Each component can manage its own logic and presentation.

### Declarative

- React lets us describe how the UI should look based on the current data or state.
- Instead of manually changing the DOM, we declare the result we want.
- React handles the updates behind the scenes.
- JSX is the syntax used to write this UI. It combines HTML, CSS, and JavaScript in a component.

### State-Driven

- React reacts to state changes by re-rendering the UI.
- When data changes, the UI updates automatically.

### JavaScript Library

- React is only the view layer.
- It does not include everything needed for a full application.
- We often use additional libraries for routing, state management, styling, and API handling.
- Frameworks built on top of React, such as Next.js and Remix, provide a more complete app structure.

### Popularity

- React is widely used in the industry because it is efficient, flexible, and scalable.

---

## Final Summary

React helps developers build modern user interfaces by:

- breaking the UI into reusable components
- using a declarative approach
- updating the UI automatically when state changes
- making it easier to build complex front-end applications

React is not a full framework by itself, but it is a powerful foundation for building modern web apps.
