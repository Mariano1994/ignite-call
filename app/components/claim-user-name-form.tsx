"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "@phosphor-icons/react";

function ClaimUserNameForm() {
  return (
    <Card className="bg-gray-700 border-none flex">
      <CardContent className="flex flex-1 mt-6">
        <form className="flex gap-2 flex-1">
          <Input
            prefix="ignite.com/"
            placeholder="seu-usuário"
            className="bg-gray-900 text-white"
          />
          <Button className="bg-green-300 hover:bg-brightness-50">
            Reservar
            <ArrowRight />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ClaimUserNameForm;
