import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Shield, BadgeCheck, Lock, ChevronRight, Users, Building2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import DetectiveCard from "@/components/DetectiveCard";
import { getVilles, getDepartements, besoins, detectives, slugify } from "@/data/detectives";

const Index = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const villes = getVilles();
  const departements = getDepartements();
  const featured = detectives.filter((d) => d.premium).slice(0, 6);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      const slug = slugify(search.trim());
      const ville = villes.find((v) => v.slug === slug);
      if (ville) {
        navigate(`/detective-prive/${ville.slug}`);
      } else {
        navigate(`/detective-prive`);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-hero text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 badge-verified px-3 py-1 rounded-full text-xs font-medium mb-6">
              <BadgeCheck className="h-3.5 w-3.5" />
              Données officielles INSEE · SIRET vérifiés
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trouvez un <span className="text-gradient-gold">détective privé</span> près de chez vous
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              L'annuaire n°1 des détectives privés agréés en France. {detectives.length}+ professionnels vérifiés, devis gratuit et confidentiel sous 24h.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ville, département..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg text-foreground text-sm bg-card focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button type="submit" className="btn-gold px-6 py-3.5 rounded-lg text-sm font-semibold whitespace-nowrap">
                Rechercher
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-4 text-xs opacity-60">
              <Lock className="h-3 w-3" />
              Recherche anonyme et confidentielle
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-border bg-card py-6">
        <div className="container flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-secondary" />
            <span>100% Confidentiel</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-secondary" />
            <span>SIRET vérifiés INSEE</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-secondary" />
            <span>{detectives.length}+ détectives</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-secondary" />
            <span>Code APE 80.30Z</span>
          </div>
        </div>
      </section>

      {/* Villes populaires */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-center mb-2">Détective privé par ville</h2>
            <p className="text-muted-foreground text-center mb-10">Trouvez un professionnel agréé dans votre ville</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {villes.slice(0, 15).map((ville, i) => (
              <motion.div
                key={ville.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  to={`/detective-prive/${ville.slug}`}
                  className="card-elevated rounded-lg p-4 flex flex-col items-center text-center group"
                >
                  <MapPin className="h-5 w-5 text-secondary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-display font-semibold text-sm">{ville.nom}</span>
                  <span className="text-xs text-muted-foreground">{ville.count} détective{ville.count > 1 ? "s" : ""}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/detective-prive" className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline">
              Voir toutes les villes <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured detectives */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-2">Détectives premium</h2>
          <p className="text-muted-foreground text-center mb-10">Professionnels mis en avant pour leur expertise</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((d) => (
              <DetectiveCard key={d.id} detective={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Besoins */}
      <section id="besoins" className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-2">Par type de besoin</h2>
          <p className="text-muted-foreground text-center mb-10">Des détectives spécialisés pour chaque situation</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {besoins.map((b) => (
              <Link
                key={b.slug}
                to={`/detective-prive/besoin/${b.slug}`}
                className="card-elevated rounded-xl p-6 group"
              >
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-secondary transition-colors">{b.titre}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-secondary">
                  Voir les détectives <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Départements */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-2">Par département</h2>
          <p className="text-muted-foreground text-center mb-10">Recherchez par numéro de département</p>

          <div className="flex flex-wrap justify-center gap-2">
            {departements.map((d) => (
              <Link
                key={d.code}
                to={`/detective-prive/${d.code}`}
                className="card-elevated rounded-lg px-4 py-2 text-sm font-medium hover:text-secondary transition-colors"
              >
                {d.code} · {d.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <LeadForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
