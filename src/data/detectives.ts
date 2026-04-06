export interface Detective {
  id: string;
  nom: string;
  siret: string;
  siren: string;
  codeAPE: string;
  adresse: string;
  codePostal: string;
  ville: string;
  villeSlug: string;
  departement: string;
  departementCode: string;
  region: string;
  regionSlug: string;
  telephone: string;
  email: string;
  siteWeb?: string;
  dateCreation: string;
  statut: "active" | "inactive";
  specialites: string[];
  description: string;
  note: number;
  avis: number;
  premium: boolean;
}

export interface Ville {
  nom: string;
  slug: string;
  departementCode: string;
  departement: string;
  region: string;
  regionSlug: string;
  population: number;
  count: number;
}

export interface Departement {
  code: string;
  nom: string;
  region: string;
  regionSlug: string;
  count: number;
}

export interface Region {
  nom: string;
  slug: string;
  count: number;
}

export interface Besoin {
  slug: string;
  titre: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const specialites = [
  "Adultère & infidélité",
  "Surveillance",
  "Enquête entreprise",
  "Recherche de personne",
  "Concurrence déloyale",
  "Pension alimentaire",
  "Fraude à l'assurance",
  "Vérification de CV",
  "Contre-espionnage",
  "Droit de garde",
];

export const besoins: Besoin[] = [
  {
    slug: "adultere",
    titre: "Détective privé adultère",
    description: "Faites appel à un détective privé spécialisé dans les enquêtes d'adultère et d'infidélité. Preuves recevables en justice.",
    metaTitle: "Détective Privé Adultère – Enquête Infidélité Confidentielle",
    metaDescription: "Trouvez un détective privé spécialisé en enquête d'adultère. Preuves légales, rapport confidentiel. Devis gratuit sous 24h.",
  },
  {
    slug: "surveillance",
    titre: "Détective privé surveillance",
    description: "Services de surveillance professionnelle par des détectives agréés. Filature, observation, rapports détaillés.",
    metaTitle: "Détective Privé Surveillance – Filature Professionnelle",
    metaDescription: "Détective privé pour surveillance et filature. Agents expérimentés, résultats rapides. Devis confidentiel gratuit.",
  },
  {
    slug: "entreprise",
    titre: "Détective privé entreprise",
    description: "Enquêtes pour entreprises : concurrence déloyale, vol, fraude interne, vérification de partenaires commerciaux.",
    metaTitle: "Détective Privé Entreprise – Enquête Professionnelle",
    metaDescription: "Détective privé pour entreprises. Concurrence déloyale, fraude, vol interne. Rapport juridiquement recevable.",
  },
  {
    slug: "recherche-de-personne",
    titre: "Détective privé recherche de personne",
    description: "Retrouvez une personne disparue, un débiteur ou un témoin grâce à nos détectives spécialisés en recherche.",
    metaTitle: "Recherche de Personne – Détective Privé Spécialisé",
    metaDescription: "Détective privé pour recherche de personne. Retrouvez un proche, débiteur ou témoin. Discrétion garantie.",
  },
  {
    slug: "pension-alimentaire",
    titre: "Détective privé pension alimentaire",
    description: "Enquête sur les revenus réels pour révision de pension alimentaire. Preuves recevables devant le juge.",
    metaTitle: "Pension Alimentaire – Détective Privé Enquête Revenus",
    metaDescription: "Détective privé pour enquête pension alimentaire. Vérification revenus, train de vie. Preuves juridiques.",
  },
  {
    slug: "concurrence-deloyale",
    titre: "Détective privé concurrence déloyale",
    description: "Enquête sur la concurrence déloyale : clause de non-concurrence, détournement de clientèle, espionnage industriel.",
    metaTitle: "Concurrence Déloyale – Détective Privé Entreprise",
    metaDescription: "Enquête concurrence déloyale par détective privé agréé. Preuves légales pour action en justice.",
  },
];

const villes: string[] = [
  "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg",
  "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre",
  "Saint-Étienne", "Toulon", "Grenoble", "Dijon", "Angers", "Nîmes",
  "Aix-en-Provence", "Clermont-Ferrand", "Le Mans", "Brest", "Tours",
  "Amiens", "Limoges", "Perpignan", "Metz", "Besançon", "Orléans",
];

const villeData: Record<string, { cp: string; dept: string; deptCode: string; region: string; regionSlug: string; pop: number }> = {
  "Paris": { cp: "75001", dept: "Paris", deptCode: "75", region: "Île-de-France", regionSlug: "ile-de-france", pop: 2161000 },
  "Marseille": { cp: "13001", dept: "Bouches-du-Rhône", deptCode: "13", region: "Provence-Alpes-Côte d'Azur", regionSlug: "provence-alpes-cote-d-azur", pop: 870731 },
  "Lyon": { cp: "69001", dept: "Rhône", deptCode: "69", region: "Auvergne-Rhône-Alpes", regionSlug: "auvergne-rhone-alpes", pop: 516092 },
  "Toulouse": { cp: "31000", dept: "Haute-Garonne", deptCode: "31", region: "Occitanie", regionSlug: "occitanie", pop: 479553 },
  "Nice": { cp: "06000", dept: "Alpes-Maritimes", deptCode: "06", region: "Provence-Alpes-Côte d'Azur", regionSlug: "provence-alpes-cote-d-azur", pop: 342637 },
  "Nantes": { cp: "44000", dept: "Loire-Atlantique", deptCode: "44", region: "Pays de la Loire", regionSlug: "pays-de-la-loire", pop: 309346 },
  "Strasbourg": { cp: "67000", dept: "Bas-Rhin", deptCode: "67", region: "Grand Est", regionSlug: "grand-est", pop: 284677 },
  "Montpellier": { cp: "34000", dept: "Hérault", deptCode: "34", region: "Occitanie", regionSlug: "occitanie", pop: 285121 },
  "Bordeaux": { cp: "33000", dept: "Gironde", deptCode: "33", region: "Nouvelle-Aquitaine", regionSlug: "nouvelle-aquitaine", pop: 257068 },
  "Lille": { cp: "59000", dept: "Nord", deptCode: "59", region: "Hauts-de-France", regionSlug: "hauts-de-france", pop: 232787 },
  "Rennes": { cp: "35000", dept: "Ille-et-Vilaine", deptCode: "35", region: "Bretagne", regionSlug: "bretagne", pop: 216815 },
  "Reims": { cp: "51100", dept: "Marne", deptCode: "51", region: "Grand Est", regionSlug: "grand-est", pop: 182460 },
  "Le Havre": { cp: "76600", dept: "Seine-Maritime", deptCode: "76", region: "Normandie", regionSlug: "normandie", pop: 172074 },
  "Saint-Étienne": { cp: "42000", dept: "Loire", deptCode: "42", region: "Auvergne-Rhône-Alpes", regionSlug: "auvergne-rhone-alpes", pop: 172565 },
  "Toulon": { cp: "83000", dept: "Var", deptCode: "83", region: "Provence-Alpes-Côte d'Azur", regionSlug: "provence-alpes-cote-d-azur", pop: 171953 },
  "Grenoble": { cp: "38000", dept: "Isère", deptCode: "38", region: "Auvergne-Rhône-Alpes", regionSlug: "auvergne-rhone-alpes", pop: 158454 },
  "Dijon": { cp: "21000", dept: "Côte-d'Or", deptCode: "21", region: "Bourgogne-Franche-Comté", regionSlug: "bourgogne-franche-comte", pop: 155090 },
  "Angers": { cp: "49000", dept: "Maine-et-Loire", deptCode: "49", region: "Pays de la Loire", regionSlug: "pays-de-la-loire", pop: 152960 },
  "Nîmes": { cp: "30000", dept: "Gard", deptCode: "30", region: "Occitanie", regionSlug: "occitanie", pop: 151001 },
  "Aix-en-Provence": { cp: "13100", dept: "Bouches-du-Rhône", deptCode: "13", region: "Provence-Alpes-Côte d'Azur", regionSlug: "provence-alpes-cote-d-azur", pop: 143006 },
  "Clermont-Ferrand": { cp: "63000", dept: "Puy-de-Dôme", deptCode: "63", region: "Auvergne-Rhône-Alpes", regionSlug: "auvergne-rhone-alpes", pop: 143886 },
  "Le Mans": { cp: "72000", dept: "Sarthe", deptCode: "72", region: "Pays de la Loire", regionSlug: "pays-de-la-loire", pop: 143813 },
  "Brest": { cp: "29200", dept: "Finistère", deptCode: "29", region: "Bretagne", regionSlug: "bretagne", pop: 139386 },
  "Tours": { cp: "37000", dept: "Indre-et-Loire", deptCode: "37", region: "Centre-Val de Loire", regionSlug: "centre-val-de-loire", pop: 136252 },
  "Amiens": { cp: "80000", dept: "Somme", deptCode: "80", region: "Hauts-de-France", regionSlug: "hauts-de-france", pop: 133891 },
  "Limoges": { cp: "87000", dept: "Haute-Vienne", deptCode: "87", region: "Nouvelle-Aquitaine", regionSlug: "nouvelle-aquitaine", pop: 132175 },
  "Perpignan": { cp: "66000", dept: "Pyrénées-Orientales", deptCode: "66", region: "Occitanie", regionSlug: "occitanie", pop: 121875 },
  "Metz": { cp: "57000", dept: "Moselle", deptCode: "57", region: "Grand Est", regionSlug: "grand-est", pop: 117890 },
  "Besançon": { cp: "25000", dept: "Doubs", deptCode: "25", region: "Bourgogne-Franche-Comté", regionSlug: "bourgogne-franche-comte", pop: 116690 },
  "Orléans": { cp: "45000", dept: "Loiret", deptCode: "45", region: "Centre-Val de Loire", regionSlug: "centre-val-de-loire", pop: 114782 },
};

const nomsAgence = [
  "Investigations Privées", "Cabinet d'Enquêtes", "Agence de Recherches",
  "Détective Conseil", "Bureau d'Investigations", "Solutions Enquêtes",
  "Investigations & Sécurité", "Cabinet de Recherches", "Agence Confidentielle",
  "Enquêtes Professionnelles",
];

const prenoms = ["Jean", "Pierre", "Michel", "Laurent", "Philippe", "Alain", "Marc", "Patrick", "Christophe", "Nicolas", "Stéphane", "Éric", "David", "Franck", "Olivier", "Thomas", "Antoine", "Julien", "Sébastien", "Guillaume"];
const noms = ["Martin", "Bernard", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Lefebvre", "Leroy", "Roux", "David", "Bertrand", "Morel", "Fournier", "Girard", "Bonnet", "Dupont", "Lambert", "Fontaine", "Rousseau"];

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateDetectives(): Detective[] {
  const detectives: Detective[] = [];
  const rand = seededRandom(42);

  villes.forEach((ville, vi) => {
    const data = villeData[ville];
    const count = ville === "Paris" ? 8 : ville === "Marseille" || ville === "Lyon" ? 5 : Math.floor(rand() * 3) + 2;

    for (let i = 0; i < count; i++) {
      const prenom = prenoms[Math.floor(rand() * prenoms.length)];
      const nom = noms[Math.floor(rand() * noms.length)];
      const agenceType = nomsAgence[Math.floor(rand() * nomsAgence.length)];
      const nomComplet = `${agenceType} ${nom}`;
      const siret = `${String(vi * 100 + i + 10000).padStart(9, "0")}${String(Math.floor(rand() * 99999)).padStart(5, "0")}`;
      const siren = siret.slice(0, 9);

      const numSpecs = Math.floor(rand() * 3) + 2;
      const specs: string[] = [];
      const availableSpecs = [...specialites];
      for (let s = 0; s < numSpecs; s++) {
        const idx = Math.floor(rand() * availableSpecs.length);
        specs.push(availableSpecs.splice(idx, 1)[0]);
      }

      detectives.push({
        id: `det-${vi}-${i}`,
        nom: nomComplet,
        siret,
        siren,
        codeAPE: "80.30Z",
        adresse: `${Math.floor(rand() * 200) + 1} rue ${["de la République", "Victor Hugo", "du Général de Gaulle", "Jean Jaurès", "Pasteur", "Gambetta"][Math.floor(rand() * 6)]}`,
        codePostal: data.cp,
        ville,
        villeSlug: slugify(ville),
        departement: data.dept,
        departementCode: data.deptCode,
        region: data.region,
        regionSlug: data.regionSlug,
        telephone: `0${Math.floor(rand() * 5) + 1} ${String(Math.floor(rand() * 100)).padStart(2, "0")} ${String(Math.floor(rand() * 100)).padStart(2, "0")} ${String(Math.floor(rand() * 100)).padStart(2, "0")} ${String(Math.floor(rand() * 100)).padStart(2, "0")}`,
        email: `contact@${slugify(nomComplet)}.fr`,
        dateCreation: `${2005 + Math.floor(rand() * 18)}-${String(Math.floor(rand() * 12) + 1).padStart(2, "0")}-01`,
        statut: "active",
        specialites: specs,
        description: `${nomComplet}, dirigé par ${prenom} ${nom}, est un cabinet de détectives privés basé à ${ville}. Fort de plusieurs années d'expérience, nous intervenons dans toute la France pour des missions de ${specs.slice(0, 2).join(", ").toLowerCase()}. Nos enquêtes sont menées dans le strict respect de la législation et nos rapports sont recevables en justice.`,
        note: Math.round((3.5 + rand() * 1.5) * 10) / 10,
        avis: Math.floor(rand() * 50) + 5,
        premium: rand() > 0.7,
      });
    }
  });

  return detectives;
}

export const detectives = generateDetectives();

export function getVilles(): Ville[] {
  const villeMap = new Map<string, Ville>();
  detectives.forEach((d) => {
    const existing = villeMap.get(d.villeSlug);
    if (existing) {
      existing.count++;
    } else {
      const data = villeData[d.ville];
      villeMap.set(d.villeSlug, {
        nom: d.ville,
        slug: d.villeSlug,
        departementCode: d.departementCode,
        departement: d.departement,
        region: d.region,
        regionSlug: d.regionSlug,
        population: data?.pop ?? 0,
        count: 1,
      });
    }
  });
  return Array.from(villeMap.values()).sort((a, b) => b.population - a.population);
}

export function getDepartements(): Departement[] {
  const deptMap = new Map<string, Departement>();
  detectives.forEach((d) => {
    const existing = deptMap.get(d.departementCode);
    if (existing) {
      existing.count++;
    } else {
      deptMap.set(d.departementCode, {
        code: d.departementCode,
        nom: d.departement,
        region: d.region,
        regionSlug: d.regionSlug,
        count: 1,
      });
    }
  });
  return Array.from(deptMap.values()).sort((a, b) => a.code.localeCompare(b.code));
}

export function getRegions(): Region[] {
  const regionMap = new Map<string, Region>();
  detectives.forEach((d) => {
    const existing = regionMap.get(d.regionSlug);
    if (existing) {
      existing.count++;
    } else {
      regionMap.set(d.regionSlug, {
        nom: d.region,
        slug: d.regionSlug,
        count: 1,
      });
    }
  });
  return Array.from(regionMap.values()).sort((a, b) => b.count - a.count);
}

export function getDetectivesByVille(villeSlug: string): Detective[] {
  return detectives.filter((d) => d.villeSlug === villeSlug).sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0));
}

export function getDetectivesByDepartement(deptCode: string): Detective[] {
  return detectives.filter((d) => d.departementCode === deptCode).sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0));
}

export function getDetectivesByRegion(regionSlug: string): Detective[] {
  return detectives.filter((d) => d.regionSlug === regionSlug).sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0));
}

export function getDetectivesBySpecialite(specSlug: string): Detective[] {
  const besoin = besoins.find((b) => b.slug === specSlug);
  if (!besoin) return [];
  const keyword = besoin.titre.toLowerCase();
  return detectives.filter((d) =>
    d.specialites.some((s) => keyword.includes(s.toLowerCase().split(" ")[0]) || s.toLowerCase().includes(specSlug.replace(/-/g, " ")))
  );
}

export function getDetectiveById(id: string): Detective | undefined {
  return detectives.find((d) => d.id === id);
}

export function getDetectiveBySlug(slug: string): Detective | undefined {
  return detectives.find((d) => slugify(d.nom) + "-" + d.siret === slug || d.id === slug);
}

export function slugifyDetective(d: Detective): string {
  return slugify(d.nom) + "-" + d.siret;
}

export { slugify };
