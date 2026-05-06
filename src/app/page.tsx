import AboutSection from "@/components/sections/about-section";
import CtaSection from "@/components/sections/cta-section";
import FeaturesAnalysisSection from "@/components/sections/features-analysis-section";
import FeaturesServicesSection from "@/components/sections/features-services-section";
import FooterSection from "@/components/sections/footer-section";
import HeroSection from "@/components/sections/hero-section";
import TeamSection from "@/components/sections/team-section";

export default function Home() {
  const marqueeRows = [
    ["DNA Sequence", "RNA Strand", "mRNA Expression", "Gene Editing", "Genetic Construct", "Transgene", "Knock-in Model", "Knockout Model"],
    ["CRISPR-Cas9", "Cas9 Nuclease", "Guide RNA", "gRNA Design", "Vector DNA", "Plasmid Construct", "Linear DNA", "Circular DNA", "Genome Integration"],
    ["Allele Modification", "Mutation Targeting", "Lorem ipsum", "Dolor sit amet", "Lorem ipsum", "Dolor sit amet", "Homologous Recombination", "HDR Pathway"],
    ["DNA Sequence", "mRNA Expression", "RNA Strand", "Gene Editing", "Genetic Construct", "Transgene", "Knockout Model", "Knock-in Model"],
    ["Allele Modification", "NHEJ Repair", "Locus Targeting", "Mutation Targeting", "Lorem ipsum", "Dolor sit amet", "Homologous Recombination", "HDR Pathway"],
    ["CRISPR-Cas9", "Cas9 Nuclease", "Circular DNA", "Guide RNA", "gRNA Design", "Vector DNA", "Linear DNA", "Genome Integration", "Plasmid Construct"],
    ["DNA Sequence", "RNA Strand", "Transgene", "mRNA Expression", "Knock-in Model", "Genetic Construct", "Gene Editing", "Knockout Model"],
    ["CRISPR-Cas9", "gRNA Design", "Cas9 Nuclease", "Guide RNA", "Linear DNA", "Vector DNA", "Circular DNA", "Genome Integration", "Plasmid Construct"],
  ];

  return (
    <main>
      <HeroSection />
      <FeaturesServicesSection />
      <AboutSection marqueeRows={marqueeRows} />
      <FeaturesAnalysisSection />
      <TeamSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
