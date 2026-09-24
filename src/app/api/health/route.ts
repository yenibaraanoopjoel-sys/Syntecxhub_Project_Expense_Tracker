import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ status: "ok", service: "pocket-ledger-api", timestamp: new Date().toISOString() });
}
