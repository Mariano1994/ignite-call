function MultiStepComponent() {
  return (
    <div className="flex flex-col mt-4 gap-2">
      <span className="text-xs font-thin text-gray-200">1 de 4</span>
      <div className="flex gap-2 items-center">
        <div className="h-1 w-28 bg-slate-50 rounded-sm"></div>
        <div className="h-1 w-28 bg-slate-200/25 rounded-sm"></div>
        <div className="h-1 w-28 bg-slate-200/25 rounded-sm"></div>
        <div className="h-1 w-28 bg-slate-200/25 rounded-sm"></div>
      </div>
    </div>
  );
}

export default MultiStepComponent;
