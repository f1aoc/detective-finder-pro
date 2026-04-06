import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-secondary" />
          <span className="font-display text-xl font-bold text-primary">
            Détective<span className="text-secondary">France</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/detective-prive" className="text-muted-foreground hover:text-foreground transition-colors">
            Annuaire
          </Link>
          <a href="#besoins" className="text-muted-foreground hover:text-foreground transition-colors">
            Besoins
          </a>
          <a href="#devis" className="text-muted-foreground hover:text-foreground transition-colors">
            Devis gratuit
          </a>
          <Link to="/detective-prive" className="btn-gold px-5 py-2 rounded-lg text-sm">
            Trouver un détective
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-3">
          <Link to="/detective-prive" className="block text-sm font-medium" onClick={() => setOpen(false)}>Annuaire</Link>
          <a href="#besoins" className="block text-sm font-medium" onClick={() => setOpen(false)}>Besoins</a>
          <a href="#devis" className="block text-sm font-medium" onClick={() => setOpen(false)}>Devis gratuit</a>
          <Link to="/detective-prive" className="block btn-gold px-5 py-2 rounded-lg text-sm text-center" onClick={() => setOpen(false)}>
            Trouver un détective
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
