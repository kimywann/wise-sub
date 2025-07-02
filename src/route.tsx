import { createBrowserRouter } from "react-router";
import HomePage from "./features/home/home-page";
import Layout from "./layout";
import SignInPage from "./common/components/Sign/Sign-in-page";
import SignUpPage from "./common/components/Sign/Sign-up-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/signin",
    element: (
      <Layout>
        <SignInPage />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <SignUpPage />
      </Layout>
    ),
  },
]);

export default router;
