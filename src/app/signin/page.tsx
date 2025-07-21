import Signin from "@/components/Auth/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | NAC Tax Center",
};

export default function SigninPage() {
  return (
    <section className="bg-gray-2 pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="container">
        <div className="mx-auto w-full max-w-[520px] rounded-lg bg-white px-6 py-10 shadow-card dark:bg-black dark:shadow-card-2 sm:px-8">
          <Signin />
        </div>
      </div>
    </section>
  );
}
