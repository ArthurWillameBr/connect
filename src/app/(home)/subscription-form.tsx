"use client";

import { ArrowRight, Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "../components/input";
import { Button } from "../components/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriptionSchema = z.object({
  email: z.string().email("Digite um E-mail inválido"),
  name: z.string().min(3, "Digite um nome válido"),
});

type FormValues = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(subscriptionSchema),
  });

  function onSubscription(data: FormValues) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscription)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              {...register("name")}
              type="text"
              placeholder="Nome completo"
            />
          </InputRoot>
          {errors.name && (
            <span className="text-danger text-xs">{errors.name.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              {...register("email")}
              type="text"
              placeholder="E-mail"
            />
          </InputRoot>
          {errors.email && (
            <span className="text-danger text-xs">{errors.email.message}</span>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  );
}
