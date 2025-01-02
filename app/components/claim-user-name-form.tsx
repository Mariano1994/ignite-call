"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUserNameFormSchema = z.object({
  username: z.string(),
});

type ClaimuserNameFormData = z.infer<typeof claimUserNameFormSchema>;

function ClaimUserNameForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ClaimuserNameFormData>();

  const handleClaimUsername = (data: ClaimuserNameFormData) => {
    console.log(data);
    reset();
  };
  return (
    <Card className="bg-gray-700 border-none flex mt-3">
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
    </Card>
  );
}

export default ClaimUserNameForm;
