import { getSiteLanguage } from "@/lib/siteLanguage";
import FindCasesClient from "./FindCasesClient";

export default async function FindCasesPage() {
  const lang = await getSiteLanguage();
  return <FindCasesClient lang={lang} />;
}
