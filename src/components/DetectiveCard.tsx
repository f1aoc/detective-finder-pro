import { Link } from "react-router-dom";
import { MapPin, Star, BadgeCheck, Crown } from "lucide-react";
import { Detective, slugifyDetective } from "@/data/detectives";

const DetectiveCard = ({ detective }: { detective: Detective }) => {
  const slug = slugifyDetective(detective);

  return (
    <Link
      to={`/agence/${slug}`}
      className="block card-elevated rounded-xl p-5 relative"
    >
      {detective.premium && (
        <div className="absolute top-3 right-3 badge-verified px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
          <Crown className="h-3 w-3" />
          Premium
        </div>
      )}

      <h3 className="font-display text-lg font-bold text-foreground pr-20 leading-tight">{detective.nom}</h3>

      <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" />
        <span>{detective.ville} ({detective.departementCode})</span>
      </div>

      <div className="flex items-center gap-1.5 mt-1.5">
        <Star className="h-3.5 w-3.5 text-secondary fill-secondary" />
        <span className="text-sm font-medium">{detective.note}/5</span>
        <span className="text-xs text-muted-foreground">({detective.avis} avis)</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {detective.specialites.slice(0, 3).map((s) => (
          <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-md text-muted-foreground">
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
        <BadgeCheck className="h-3.5 w-3.5 text-secondary" />
        <span>SIRET vérifié · Code APE 80.30Z · Données INSEE</span>
      </div>
    </Link>
  );
};

export default DetectiveCard;
