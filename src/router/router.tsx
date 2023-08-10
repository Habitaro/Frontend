import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
]);
