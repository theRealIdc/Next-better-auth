import { LoginForm } from "@/components/Login";
import { RegisterForm } from "@/components/register-Form";
import Returnbutton from "@/components/return-button";

export default function page() {
  return (
    <section className="px-8 container mx-auto max-w-screen-lg py-2">
      <div className="space-y-8">
        <Returnbutton href={"/"} label={"Back to Home"} />
      </div>
      <LoginForm />
    </section>
  );
}
