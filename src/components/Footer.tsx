import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-6 w-6 text-secondary" />
          <span className="font-display text-lg font-bold">DétectiveFrance</span>
        </div>
        <p className="text-sm opacity-70">
          L'annuaire n°1 des détectives privés en France. Données officielles INSEE, SIRET vérifiés.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Villes populaires</h4>
        <ul className="space-y-1.5 text-sm opacity-70">
          {["paris", "marseille", "lyon", "toulouse", "nice"].map((v) => (
            <li key={v}>
              <Link to={`/detective-prive/${v}`} className="hover:opacity-100 transition-opacity capitalize">
                {v}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Par besoin</h4>
        <ul className="space-y-1.5 text-sm opacity-70">
          <li><Link to="/detective-prive/besoin/adultere" className="hover:opacity-100">Adultère</Link></li>
          <li><Link to="/detective-prive/besoin/surveillance" className="hover:opacity-100">Surveillance</Link></li>
          <li><Link to="/detective-prive/besoin/entreprise" className="hover:opacity-100">Entreprise</Link></li>
          <li><Link to="/detective-prive/besoin/recherche-de-personne" className="hover:opacity-100">Recherche de personne</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Informations</h4>
        <ul className="space-y-1.5 text-sm opacity-70">
          <li>Données publiques INSEE</li>
          <li>Code APE 80.30Z</li>
          <li>100% confidentiel</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4">
      <p className="container text-xs opacity-50 text-center">
        © {new Date().getFullYear()} DétectiveFrance — Annuaire des détectives privés agréés. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
