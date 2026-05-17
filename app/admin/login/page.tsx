import { Suspense } from "react";
import AdminLoginClient from "./AdminLoginClient";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<main className="min-h-screen" />}>
      <AdminLoginClient />
    </Suspense>
  );
}
