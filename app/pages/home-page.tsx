import Image from "next/image";
import previewImage from "../assets/appPreview.png";
function HomePage() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center gap-20 ml-auto mr-0 ">
      <div className="max-w-[480px] py-0 px-10 flex flex-col gap-3">
        <h1 className=" text-4xl font-extrabold">Agendamento descomplicado</h1>
        <p className="text-lg mt-2 text-gray-200">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>
      </div>
      <div>
        <Image
          src={previewImage}
          alt="ilustrative calendar image as application preview "
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

export default HomePage;
