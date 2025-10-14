import { RegisterForm } from "@/components/register-Form";

export default function page() {
  return (
    <section className="px-8 container mx-auto max-w-screen-lg py-2">
      <div className="space-y-8">
        <RegisterForm />
      </div>
    </section>
  );
}
