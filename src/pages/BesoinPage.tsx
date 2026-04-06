import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import DetectiveCard from "@/components/DetectiveCard";
import { besoins, getDetectivesBySpecialite, detectives } from "@/data/detectives";
import { ChevronRight } from "lucide-react";

const BesoinPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const besoin = besoins.find((b) => b.slug === slug);

  if (!besoin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-2">Besoin non trouvé</h1>
            <Link to="/" className="text-secondary hover:underline">Retour à l'accueil</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const results = getDetectivesBySpecialite(besoin.slug);
  // If few results from specialite matching, show some general ones
  const displayed = results.length >= 6 ? results : [...results, ...detectives.filter((d) => !results.includes(d)).slice(0, 6 - results.length)];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{besoin.titre}</span>
          </nav>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{besoin.metaTitle}</h1>
          <p className="text-muted-foreground mb-8 max-w-3xl">{besoin.description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {displayed.map((d) => (
                <DetectiveCard key={d.id} detective={d} />
              ))}
            </div>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <LeadForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BesoinPage;
