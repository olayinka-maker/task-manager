"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);

    // Clear error when user starts typing
    // if (errors[name]) {
    //   setErrors((prev) => ({
    //     ...prev,
    //     [name]: "",
    //   }));
    // }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      // Simulate API call
      const signInUser = await signInWithEmailAndPassword(
        auth,
        formData.email, // Using email as email
        formData.password
      );
      const user = signInUser.user;
      const userId = user.uid;
      console.log(signInUser);
      console.log(userId);

      // Update profile with email
      // await updateProfile(userCredential.user, {
      //   displayName: formData.email,
      // });

      // Redirect to dashboard or home page
      router.push("/");
      alert("User Logged In successfully!"); // Simple alert instead of toast
    } catch (error) {
      alert("Something went wrong. Please try again."); // Simple alert instead of toast
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/todobg.jpeg')`,
        backgroundColor: "primaryGold",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen bg-primaryGold flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-md bg-amber-400">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-3xl font-bold text-white">
            To-Do App
          </CardTitle>
          <p className="text-white text-sm">
            Start organizing your life day by day
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                name="email"
                placeholder="email"
                className="bg-white text-gray-700"
                disabled={isLoading}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm text-red-700">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-white text-gray-700 pr-10"
                  disabled={isLoading}
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  type="button"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-700">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  sign in...{" "}
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-white text-sm">
              Don't have an account?{" "}
              <Button
                className="text-white bg-non border-none underline hover:text-amber-800 p-0"
                disabled={isLoading}
              >
                <Link href={"/sign-up"}>
                  Create <span>here</span>
                </Link>
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
