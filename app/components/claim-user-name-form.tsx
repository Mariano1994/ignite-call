"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUserNameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 3 letras" })
    .regex(/^([a-z\\-]+)$/i, { message: "O nome não pode conter números" })
    .transform((username) => username.toLocaleLowerCase()),
});

type ClaimuserNameFormData = z.infer<typeof claimUserNameFormSchema>;

function ClaimUserNameForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ClaimuserNameFormData>({
    resolver: zodResolver(claimUserNameFormSchema),
  });

  const handleClaimUsername = (data: ClaimuserNameFormData) => {
    console.log(data);
    reset();
  };
  return (
    <Card className="bg-gray-700 border-none flex mt-3">
      <div className="w-full">
        <CardContent className="flex flex-1 mt-6">
          <form
            className="flex gap-2 flex-1"
            onSubmit={handleSubmit(handleClaimUsername)}
          >
            <Input
              prefix="ignite.com/"
              placeholder="seu-usuário"
              className="bg-gray-900 text-white"
              {...register("username")}
            />
            <Button
              className="bg-green-300 hover:bg-brightness-50"
              disabled={isSubmitting}
            >
              Reservar
              <ArrowRight />
            </Button>
          </form>
        </CardContent>
        {/* Error Message */}
        <div className="text-xs text-red-400 -mt-3 mb-2 pl-6">
          {errors.username?.message}
        </div>
      </div>
    </Card>
  );
}

export default ClaimUserNameForm;
