# 🚀 DevStack – Exploring Development Technologies

A beautiful, single-page technology explorer built with React.js, TypeScript, and Tailwind CSS. DevStack allows users to discover popular development technologies, explore their details, and build their own personalized technology stack.

## ✨ Features

- **Explore Popular Technologies:** Browse a collection of popular technologies across different development categories.
- **Build Your Own Stack:** Select your favorite technologies and add them to your personal stack in the sidebar.
- **Manage Your Stack:** Easily remove selected technologies whenever you want to update your stack.

## 🛠️ Technologies Used

- **React.js** – Building interactive and reusable user interface components.
- **TypeScript** – Adding static typing to make the code more reliable and maintainable.
- **HTML5** – Structuring the web application.
- **CSS3** – Styling and customizing the user interface.
- **Tailwind CSS** – Creating a responsive and modern design using utility classes.

## 📚 React Concepts I Practiced

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JavaScript code.

React uses JSX to describe what the user interface should look like, making components easier to write, read, and maintain.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. They are read-only from the receiving component's perspective.

**State** is data managed by a component that can change over time. When state is updated, React can re-render the component to reflect the changes in the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows a functional component to store and update state. When the state changes, React re-renders the component to display the updated UI.

In this project, I used `useState` to manage the selected technologies in the sidebar. It allows users to add technologies to their stack and remove them when needed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook allows developers to synchronize a component with external systems, such as APIs or browser features.

I used `useEffect` to fetch the technology data from a JSON source when the component mounts. After receiving the data, I update the component's state so the technologies can be displayed in the UI.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify individual elements in a list between renders. Unique keys help React determine which items have been added, removed, or changed, allowing it to update the UI correctly and efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition.

In this project, I used conditional rendering in the TechnologyCard component to display UI elements based on specific conditions. I also use it to show an empty-stack message when no technologies have been selected.

### 7. How do you pass data from a parent component to a child, and how does a child send something back to the parent?

In React, a parent component passes data to a child component through props.

To communicate back to the parent, the parent can pass a callback function as a prop. The child calls that function and can provide data as an argument.

In DevStack, this approach allows a child component to notify the parent when a user selects a technology, while the parent manages the selected stack.

---

## 🎯 Project Goal

The goal of DevStack is to practice building a modern React application while learning about components, props, state management, event handling, conditional rendering, and working with JSON data.

This project is part of my journey toward becoming a Full-Stack Web Developer.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS.**