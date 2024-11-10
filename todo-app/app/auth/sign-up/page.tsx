"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors = {
      username: "",
      password: "",
    };

    if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain at least one letter and one number";
    }

    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //     // Clear error when user starts typing
  //     if (errors[name]) {
  //       setErrors((prev) => ({
  //         ...prev,
  //         [name]: "",
  //       }));
  //     }
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!validateForm()) {
  //       return;
  //     }

  //     try {
  //       setIsLoading(true);
  //       // Simulate API call
  //       await new Promise((resolve) => setTimeout(resolve, 1500));
  //       console.log("Form data:", formData);
  //       alert("Account created successfully!"); // Simple alert instead of toast
  //     } catch (error) {
  //       alert("Something went wrong. Please try again."); // Simple alert instead of toast
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

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
          <form onSubmit={() => {}} className="space-y-4">
            <div className="space-y-2">
              <Input
                name="username"
                placeholder="Username"
                className="bg-white"
                disabled={isLoading}
                value={formData.username}
                onChange={() => {}}
              />
              {errors.username && (
                <p className="text-sm text-red-700">{errors.username}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-white pr-10"
                  disabled={isLoading}
                  value={formData.password}
                  onChange={() => {}}
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
                  Creating account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-white text-sm">
              Already have an account?{" "}
              <Button
                className="text-white underline hover:text-amber-800 p-0"
                disabled={isLoading}
              >
                Sign in here
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
