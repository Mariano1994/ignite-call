"user client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "@phosphor-icons/react";

function UserRegisterForm() {
  return (
    <Card className="bg-gray-700 border-none w-[425px] py-6 mt-6 rounded-sm">
      <CardContent>
        <form>
          <Label htmlFor="username" className="text-white text-xs font-light">
            Nome de usuãrio
          </Label>
          <Input
            prefix="cal.com/"
            id="username"
            className="w-full bg-gray-900 text-white border-none mt-2 mb-4"
          />
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
          />

          <Button className="bg-green-300 hover:bg-brightness-50 w-full">
            Próximo passso
            <ArrowRight />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default UserRegisterForm;
