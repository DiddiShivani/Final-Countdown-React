# The Almost Final Countdown

I built this React application to test user reflexes while practicing advanced DOM manipulation and synchronization. The goal is to stop the countdown timer as close to the target time as possible without the time running out.

---

## 🚀 Features
* **Timer Challenges:** I created four difficulty levels with different target times.
* **Precision Tracking:** I used `setInterval` to track and display time remaining in milliseconds.
* **Scoring System:** I developed a calculation to give the user a score based on their accuracy.
* **Dracula Theme:** I styled the app using the Dracula Pro color palette for a professional developer look.

---

## 🧠 Key React Concepts
In this project, I focused on using React "Escape Hatches" to interact with the DOM directly:

### 1. Refs (`useRef`)
* **Timer Persistence:** I used a ref to store the `setInterval` ID so it persists across re-renders without triggering new ones.
* **Component API:** I used `forwardRef` and `useImperativeHandle` to let the parent component trigger the modal's `.showModal()` method.

### 2. Portals (`createPortal`)
* **DOM Teleportation:** I used Portals to render the modal into a separate `div` in the HTML body.
* **CSS Fixes:** This ensures the modal is never clipped by the parent container's styling (like `overflow: hidden`) and stays on top of the UI.

---

## 🛠️ Technical Stack
* **React:** (Hooks: `useState`, `useRef`, `useImperativeHandle`, `useEffect`)
* **Vite:** For fast development and building.
* **CSS3:** Flexbox for alignment and custom animations for active states.

---
