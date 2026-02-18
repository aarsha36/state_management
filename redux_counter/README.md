# Experiment–2: State Management Using Redux (Counter Application)

## Aim
To implement centralized state management using Redux in a React application.

---

## Software Requirements
- Node.js  
- React  
- Redux Toolkit  
- React-Redux  
- Code Editor (VS Code)  
- Web Browser  

---

## Theory
Redux is a predictable state container for JavaScript applications.  
It stores the entire application state in a **single global store** and updates it using **actions** and **reducers**.

Redux Toolkit simplifies Redux development by reducing boilerplate code and providing built-in best practices.  
In this experiment, Redux is used to manage a **counter state** globally across the application.

---

## Procedure
1. Install Redux Toolkit and React-Redux.
2. Create a Redux store.
3. Define a slice with state, actions, and reducers.
4. Provide the store to the React application using the `Provider`.
5. Access and update the state using Redux hooks.

---

## Implementation
- A Redux store is created using `configureStore()`.
- A counter slice is defined using `createSlice()`.
- Actions such as increment and decrement update the global state.
- Components access state using `useSelector()` and dispatch actions using `useDispatch()`.

---

## Output
- The application displays a counter value.
- Buttons allow incrementing and decrementing the counter.
- State updates are reflected instantly across the application.

---

## Result
Centralized state management was successfully implemented using Redux Toolkit.  
The counter state is stored and managed globally using a Redux store.

---

## Conclusion
Redux provides a structured and predictable approach to state management in React applications.  
Using Redux Toolkit simplifies development and improves scalability and maintainability.

---

## Screenshots

<img width="1911" height="856" alt="Screenshot 2026-02-18 230037" src="https://github.com/user-attachments/assets/b8cbb334-e38a-4a8d-b337-5f0efc18ca55" />

<img width="1919" height="860" alt="Screenshot 2026-02-18 230052" src="https://github.com/user-attachments/assets/c1ea5d9f-33e9-4029-b4a7-01d1b5785401" />



