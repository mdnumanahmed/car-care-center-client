const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layouts/MainLayout");

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default router;
