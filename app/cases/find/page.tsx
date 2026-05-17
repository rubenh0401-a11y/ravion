import { cookies } from "next/headers";
import FindCasesClient from "./FindCasesClient";

export default async function FindCasesPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";
  return <FindCasesClient lang={lang} />;
}
