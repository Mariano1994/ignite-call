import MultiStepComponent from "@/app/components/multi-step-component";

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
        {/* <UserRegisterForm /> */}
      </div>
    </div>
  );
}

export default Page;
