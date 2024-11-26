import { Button } from "@/app/_shared/components/Button/Button";
import { Input } from "@/app/_shared/components/Input";
import { signIn } from "@/app/(auth)";
import { StickyNote } from "./components/StickyNote";

export default function LoginPage() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const plainFormData = Object.fromEntries(formData.entries());
        await signIn("credentials", { ...plainFormData, redirectTo: "/" });
      }}
    >
      <StickyNote />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative mx-auto w-full max-w-[24rem] rounded-xl overflow-hidden shadow-sm dark:border dark:border-taupe-200">
          <div className="relative flex flex-col bg-white dark:bg-taupe-300">
            <div className="flex flex-col gap-4 p-6">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Your email"
              ></Input>
              <Input
                label="Password"
                type="password"
                placeholder="Your password"
                name="password"
              />
              <Input label="Remember me" type="checkbox" name="remember" />
            </div>
            <div className="p-6 pt-0">
              <Button type="submit">Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
