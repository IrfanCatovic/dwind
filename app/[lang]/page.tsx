import { EuropeSection } from "@/components/home/EuropeSection";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SpecializationSection } from "@/components/home/SpecializationSection";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      <HeroSlider locale={lang} dictionary={dictionary} />
      <SpecializationSection dictionary={dictionary} />
      <ServicesSection dictionary={dictionary} />
      <EuropeSection dictionary={dictionary} />
    </>
  );
}
