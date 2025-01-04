"user client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../lib/axios";

const RegiterUserFromSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Usuario tem que ter no minimo 3 letras" })
    .transform((username) => username.toLocaleLowerCase()),
  userfullname: z
    .string()
    .min(5, { message: "Seu nome tem que ter no minimo 5 letras " })
    .transform((fullname) => fullname.toLocaleLowerCase()),
});

type regiterUserFormData = z.infer<typeof RegiterUserFromSchema>;

function UserRegisterForm() {
  let defaultUserName = useSearchParams().get("username");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<regiterUserFormData>({
    resolver: zodResolver(RegiterUserFromSchema),
    defaultValues: {
      username: defaultUserName || "",
    },
  });

  async function handlerRegisterNewUser(data: regiterUserFormData) {
    try {
      await api.post("/users", {
        username: data.username,
        fullname: data.userfullname,
      });
      reset();
    } catch (error) {
      console.log();
    }
  }

  return (
    <Card className="bg-gray-700 border-none w-[425px] py-6 mt-6 rounded-sm">
      <CardContent>
        <form onSubmit={handleSubmit(handlerRegisterNewUser)}>
          <Label htmlFor="username" className="text-white text-xs font-light">
            Nome de usuário
          </Label>
          <Input
            prefix="cal.com/"
            id="username"
            className="w-full bg-gray-900 text-white border-none mt-2 mb-7"
            {...register("username")}
          />

          {/* Error Message */}
          <div className="text-xs text-red-400 -mt-3 mb-2 ">
            {errors.username?.message}
          </div>
          <Label
            htmlFor="userfullname"
            className="text-white text-xs font-light"
          >
            Nome completo
          </Label>
          <Input
            prefix="cal.com/"
            id="userfullname"
            className="w-full bg-gray-900 text-white border-none mt-2 mb-4"
            {...register("userfullname")}
          />

          {/* Error Message */}
          <div className="text-xs text-red-400 -mt-3 mb-2 ">
            {errors.userfullname?.message}
          </div>

          <Button
            type="submit"
            className="bg-green-300 hover:bg-brightness-50 mt-3 w-full"
            disabled={isSubmitting}
          >
            Próximo passso
            <ArrowRight />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default UserRegisterForm;
