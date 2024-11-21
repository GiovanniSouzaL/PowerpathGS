import { NextRequest, NextResponse } from "next/server";

// Simulação de autenticação para demonstração
const VALID_EMAIL = "admin@powerpath.com";
const VALID_PASSWORD = "123456";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Validação do email e password
    if (!email || !password) {
      return NextResponse.json(
        { message: "E-mail e senha são obrigatórios." },
        { status: 400 }
      );
    }

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return NextResponse.json(
        { message: "Login bem-sucedido.", token: "valid_token" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "E-mail ou senha inválidos." },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Erro no servidor:", error); 
    return NextResponse.json(
      { message: "Erro no servidor." },
      { status: 500 }
    );
  }
}
