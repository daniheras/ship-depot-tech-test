import { Button } from "@/app/_shared/components/Button/Button";
import { Card } from "@/app/_shared/components/Card/Card";
import { Input } from "@/app/_shared/components/Input";
import { signIn } from "@/app/(auth)";
import { StickyNote } from "./components/StickyNote";

export default function LoginPage() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const plainFormData = Object.fromEntries(formData.entries());
        await signIn("credentials", {...plainFormData, redirectTo: "/"});
      }}
    >
      <StickyNote />
      <Card>
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
      </Card>
    </form>
  );
}
