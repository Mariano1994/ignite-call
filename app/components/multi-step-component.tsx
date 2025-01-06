interface MultiStepComponentProps {
  totalSteps: number;
  currentStep: number;
}
function MultiStepComponent({
  totalSteps,
  currentStep,
}: MultiStepComponentProps) {
  // Create an array of steps from 1 to totalSteps
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);
  console.log(steps);

  return (
    <div className="flex flex-col mt-4 gap-2">
      {/* Display the current step and total steps */}
      <span className="text-xs font-thin text-gray-200">
        {currentStep} de {totalSteps}
      </span>
      <div className="flex gap-2 items-center">
        {steps.map((step) => (
          // Each step is represented by a div with different styles based on the current step
          <div
            key={step}
            className={`h-1 w-28 ${
              step <= currentStep ? "bg-slate-50" : "bg-slate-200/25"
            } rounded-sm`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MultiStepComponent;
