import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpFormSchema = z.object({
  email: z.string().email("Format email belum sesuai"),
  username: z.string().min(4, "Username harus 4 karakter atau lebih"),
  password: z.string().min(8, "Password harus 8 karakter atau lebih"),
});

const SignUpPage = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const registerUser = (data) => {
    alert(
      `Data submitted! Email: ${data.email} | Username: ${data.username} | Password: ${data.password}`
    );
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg">Sign up!</CardHeader>
        <Divider />
        <CardBody>
          <form
            onSubmit={form.handleSubmit(registerUser)}
            className="flex flex-col gap-4"
          >
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    type="email"
                    label="Email"
                    size="sm"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    label="Username"
                    size="sm"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    type="password"
                    label="Password"
                    size="sm"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />
            <Button type="submit" color="primary">
              Sign up
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUpPage;
