import { createBrowserRouter } from "react-router";

import Layout from "./common/components/layout/layout";

import HomePage from "./features/home/home-page";

import SignInPage from "./features/auth/sign-in-page";
import SignUpPage from "./features/auth/sign-up-page";

import MySubscriptionsPage from "./features/subscriptions/my-subscriptions-page";
import AddSubscriptionPage from "./features/subscriptions/add-subscription-page";

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
  {
    path: "/subscription",
    element: (
      <Layout>
        <MySubscriptionsPage />
      </Layout>
    ),
  },
  {
    path: "/subscription/add",
    element: (
      <Layout>
        <AddSubscriptionPage />
      </Layout>
    ),
  },
]);

export default router;
