# 🎥 YouTube Clone - React + Vite

This is a fully functional YouTube clone built using **React**, **Vite**, **Tailwind CSS**, and **Redux Toolkit**. The application includes search functionality with debouncing, nested comments, dynamic routing, reusable components, and much more.

## 🚀 Features

- ⚛️ Built with **React + Vite**
- 💨 Styled using **Tailwind CSS**
- 🧠 **Redux Toolkit** for global state management
- 🔄 **Redux Slice** to handle menu toggle and other UI states
- 🔍 **Search functionality** with **debouncing** to optimize API calls
- 🔁 **Dynamic routing** and **nested routes** with React Router
- 💬 **Nested comment section** to mimic YouTube's comment threads
- ♻️ Built using **reusable components** and clean component structure

---

## 🧠 React & Routing Hooks Used

Used **React Hooks** and **React Router Hooks** extensively for interactivity, navigation, state management, and API integration:

### 🧩 React Core Hooks

- `useState` – Manage local component state (e.g., search input, UI toggles)
- `useEffect` – Perform side effects like API calls or setting up event listeners
- `useRef` – Reference DOM elements or persist values across renders
- `useCallback` – Prevent unnecessary re-renders by memoizing functions
- `useMemo` – Optimize expensive calculations by caching results

### 📦 Redux Toolkit Hooks

- `useDispatch` – Dispatch Redux actions to modify global state
- `useSelector` – Access Redux store data (e.g., checking menu visibility)

### 🧭 React Router Hooks

- `useNavigate` – Navigate programmatically (e.g., after a search)
- `useParams` – Access dynamic route parameters (e.g., video IDs)
- `useSearchParams` – Handle query parameters (e.g., `?v=abc123`)


---

## 📁 Project Structure

