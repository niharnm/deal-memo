import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function LoginPage({
  searchParams,
}: {
  readonly searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-8 bg-background px-4 pb-[10vh] text-foreground">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-medium text-5xl tracking-tighter">Deal Memo</h1>
        <p className="text-muted-foreground">Enter the password to continue.</p>
      </div>
      <form action="/api/login" className="flex w-full max-w-sm flex-col gap-3" method="post">
        <Input
          aria-invalid={error ? true : undefined}
          aria-label="Password"
          autoComplete="current-password"
          autoFocus
          name="password"
          placeholder="Password"
          required
          type="password"
        />
        {error ? (
          <p className="text-destructive text-sm" role="alert">
            Wrong password. Try again.
          </p>
        ) : null}
        <Button type="submit">Enter</Button>
      </form>
    </main>
  );
}
