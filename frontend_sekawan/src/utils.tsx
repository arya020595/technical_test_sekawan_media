// Redirect is a component for declarative navigation, typically used within the rendering logic of Route components to handle conditional redirects.
import { redirect } from "react-router-dom";

export default function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw redirect("/login?message=You must log in first, gan...");
  }

  return null;
}
