// components/ProtectedRoute.tsx
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
