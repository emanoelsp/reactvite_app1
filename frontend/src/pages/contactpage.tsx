import ContactForm from "./forms/contactform";

export default function ContactPage() {

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <h1 className="font-bold text-shadow-lg text-3xl">
          Entre em contato conosco
        </h1>
        <p className="text-sm mt-10">Será um prazer responder suas perguntas</p>
        <hr className="border-1 w-full"></hr>
        <ContactForm />
      </div>
    </div>
  );
}
