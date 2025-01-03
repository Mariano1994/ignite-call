"use client";
import UserRegisterForm from "../components/user-register-form";
import MultiStepComponent from "../components/multi-step-component";

function RegisterPage() {
  return (
    <div className=" flex justify-center mt-24">
      <div className="flex flex-col items-center max-w-[540px] px-4 gap-1">
        <div className="max-w-[400px]">
          <h2 className="text-xl font-bold">Bem-vindo ao Ignite Call!</h2>
          <p className="text-sm text-gray-200 leading-5">
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </p>
          <MultiStepComponent />
        </div>
        <UserRegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
