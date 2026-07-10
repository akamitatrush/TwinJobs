"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { Alert, Button, Card, Input, Label } from "@/components/ui";
import { Logo } from "@/components/Logo";

export default function CadastroPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!isSupabaseConfigured()) {
      setError(
        "Supabase não configurado. Copie .env.example para .env.local e preencha as chaves do projeto."
      );
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;

      const { data, error: signError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${appUrl}/auth/callback`,
        },
      });

      if (signError) {
        setError(signError.message);
        return;
      }

      // Se confirmação de e-mail estiver desabilitada, já há sessão
      if (data.session) {
        router.push("/dashboard");
        router.refresh();
        return;
      }

      setInfo(
        "Conta criada. Se a confirmação de e-mail estiver ativa no Supabase, verifique sua caixa de entrada antes de entrar."
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar conta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-[#faf9f7] px-4 py-12">
      <div className="mb-8">
        <Logo href="/" size="md" priority />
      </div>

      <Card variant="elevated" padding="lg" className="w-full max-w-md">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          Criar conta
        </h1>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          Comece sua primeira análise de posicionamento profissional.
        </p>

        <form onSubmit={onSubmit} className="mt-7 space-y-4">
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Seu nome"
              autoComplete="name"
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              autoComplete="email"
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              autoComplete="new-password"
            />
          </div>

          {error && (
            <Alert tone="danger" title="Não foi possível criar a conta">
              {error}
            </Alert>
          )}
          {info && <Alert tone="success">{info}</Alert>}

          <Button type="submit" className="w-full" loading={loading}>
            {loading ? "Criando…" : "Criar conta"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Já tem conta?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline underline-offset-2"
          >
            Entrar
          </Link>
        </p>
      </Card>
    </div>
  );
}
