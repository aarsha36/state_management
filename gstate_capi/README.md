# Experiment–1: Global State Management Using React Context API

## Aim
To implement global state management in a Single Page Application using the React Context API.

---

## Software Requirements
- Node.js  
- React  
- Code Editor (VS Code)  
- Web Browser  

---

## Theory
In React applications, passing data through multiple components using props can become complex, a problem known as **prop drilling**.  
The **React Context API** provides a way to share global data such as themes, user preferences, or settings across components without passing props manually at every level.

In this experiment, a **global theme (light/dark)** is managed using the Context API and accessed by child components using the `useContext()` hook.

---

## Procedure
1. Create a React application using Vite or Create React App.
2. Create a context using `createContext()`.
3. Wrap the application with a Context Provider.
4. Store and update global state (theme) inside the Provider.
5. Consume the state in child components using `useContext()`.

---

## Implementation
- A **ThemeContext** is created to manage the application theme.
- The `ThemeProvider` stores the current theme and a toggle function.
- The theme value is shared globally across components.
- The UI updates dynamically when the theme is changed.

---

## Output
- The application displays a minimal UI with pastel colors.
- A button allows toggling between **Light** and **Dark** themes.
- Theme changes are reflected across the entire application instantly.

---

## Result
Global state management was successfully implemented using the React Context API.  
The application efficiently shares and updates the theme state without using prop drilling.

---

## Conclusion
The React Context API simplifies global state management in React applications.  
It improves code readability, scalability, and maintainability by avoiding deeply nested prop passing.

---

## Screenshots

 <img width="1919" height="861" alt="Screenshot 2026-02-18 225400" src="https://github.com/user-attachments/assets/1f5e82d0-76da-46cf-9b13-6d9ef48cfb6d" />
 
<img width="1916" height="863" alt="Screenshot 2026-02-18 225348" src="https://github.com/user-attachments/assets/e366224a-57de-4c32-9b38-112dd3a83f28" />

