import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import DetectiveCard from "@/components/DetectiveCard";
import {
  getVilles, getDepartements, getRegions,
  getDetectivesByVille, getDetectivesByDepartement, getDetectivesByRegion,
} from "@/data/detectives";
import { ChevronRight } from "lucide-react";

const ListingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return null;

  const villes = getVilles();
  const departements = getDepartements();
  const regions = getRegions();

  const ville = villes.find((v) => v.slug === slug);
  const dept = departements.find((d) => d.code === slug);
  const region = regions.find((r) => r.slug === slug);

  let results = ville
    ? getDetectivesByVille(slug)
    : dept
    ? getDetectivesByDepartement(slug)
    : region
    ? getDetectivesByRegion(slug)
    : [];

  let title = "";
  let description = "";

  if (ville) {
    title = `Détective privé ${ville.nom}`;
    description = `${results.length} détectives privés agréés à ${ville.nom} (${ville.departementCode}). SIRET vérifiés, données INSEE officielles.`;
  } else if (dept) {
    title = `Détective privé ${dept.nom} (${dept.code})`;
    description = `${results.length} détectives privés dans le département ${dept.nom} (${dept.code}).`;
  } else if (region) {
    title = `Détective privé ${region.nom}`;
    description = `${results.length} détectives privés en ${region.nom}.`;
  } else {
    return <NotFoundFallback />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/detective-prive" className="hover:text-foreground">Annuaire</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{title}</span>
          </nav>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground mb-8">{description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {results.map((d) => (
                <DetectiveCard key={d.id} detective={d} />
              ))}
              {results.length === 0 && (
                <p className="text-muted-foreground py-12 text-center">Aucun détective trouvé pour cette recherche.</p>
              )}
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

const NotFoundFallback = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-2xl font-bold mb-2">Page non trouvée</h1>
        <Link to="/detective-prive" className="text-secondary hover:underline">Retour à l'annuaire</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default ListingPage;
