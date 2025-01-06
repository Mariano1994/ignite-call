"use client";
import MultiStepComponent from "@/app/components/multi-step-component";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "@phosphor-icons/react";

function Page() {
  return (
    <div className=" flex justify-center mt-24">
      <div className="flex flex-col items-center max-w-[540px] px-4 gap-1">
        <div className="max-w-[400px]">
          <h2 className="text-xl font-bold">Conecte sua agenda!</h2>
          <p className="text-sm text-gray-200 leading-5">
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </p>
          <MultiStepComponent totalSteps={4} currentStep={2} />
        </div>
        <Card className="bg-gray-700 border-none w-[425px] pt-6 mt-6 rounded-sm">
          <CardContent>
            <div className="bg-gray-700 w-full flex items-center justify-between p-3  border-gray-300/55 border-[0.1px] rounded-sm text-white">
              <span className="text-sm font-bold">Google Agenda</span>
              <Button className="text-green-300 border-green-300 border">
                Conectar
                <ArrowRight />
              </Button>
            </div>
            <Button className="bg-gray-200 hover:bg-brightness-50 mt-3 w-full">
              Próximo passso
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Page;
