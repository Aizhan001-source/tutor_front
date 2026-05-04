import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { AppWithProviders } from "./providers/AppWithProviders";

const App = () => {
  return (
    <>
      <AppWithProviders />
      <RouterProvider router={router} />
    </>
  );
};

export default App;