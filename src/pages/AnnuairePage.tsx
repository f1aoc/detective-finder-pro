import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getVilles, getDepartements, getRegions } from "@/data/detectives";
import { MapPin } from "lucide-react";

const AnnuairePage = () => {
  const villes = getVilles();
  const departements = getDepartements();
  const regions = getRegions();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Annuaire des détectives privés en France</h1>
          <p className="text-muted-foreground mb-10">Trouvez un détective privé agréé par ville, département ou région.</p>

          <h2 className="font-display text-2xl font-bold mb-4">Par ville</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
            {villes.map((v) => (
              <Link key={v.slug} to={`/detective-prive/${v.slug}`} className="card-elevated rounded-lg p-3 flex items-center gap-2 text-sm">
                <MapPin className="h-3.5 w-3.5 text-secondary shrink-0" />
                <span className="font-medium">{v.nom}</span>
                <span className="text-xs text-muted-foreground ml-auto">{v.count}</span>
              </Link>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mb-4">Par département</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {departements.map((d) => (
              <Link key={d.code} to={`/detective-prive/${d.code}`} className="card-elevated rounded-lg px-3 py-2 text-sm hover:text-secondary transition-colors">
                {d.code} – {d.nom} ({d.count})
              </Link>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mb-4">Par région</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {regions.map((r) => (
              <Link key={r.slug} to={`/detective-prive/${r.slug}`} className="card-elevated rounded-lg p-4">
                <span className="font-display font-semibold">{r.nom}</span>
                <span className="text-sm text-muted-foreground ml-2">{r.count} détective{r.count > 1 ? "s" : ""}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnnuairePage;
