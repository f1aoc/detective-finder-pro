import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nom: "", telephone: "", email: "", ville: "", besoin: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Demande envoyée !", description: "Un détective vous contactera sous 24h. 100% confidentiel." });
      setForm({ nom: "", telephone: "", email: "", ville: "", besoin: "", message: "" });
    }, 1200);
  };

  return (
    <motion.div
      id="devis"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-elevated rounded-xl p-6 md:p-8"
    >
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-5 w-5 text-secondary" />
        <h3 className="font-display text-xl font-bold text-foreground">Besoin d'un détective privé ?</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Recevez un devis gratuit et confidentiel sous 24h.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            required
            placeholder="Votre nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            required
            type="tel"
            placeholder="Téléphone"
            value={form.telephone}
            onChange={(e) => setForm({ ...form, telephone: e.target.value })}
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            placeholder="Ville"
            value={form.ville}
            onChange={(e) => setForm({ ...form, ville: e.target.value })}
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            required
            value={form.besoin}
            onChange={(e) => setForm({ ...form, besoin: e.target.value })}
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Type de besoin</option>
            <option value="adultere">Adultère / Infidélité</option>
            <option value="surveillance">Surveillance</option>
            <option value="entreprise">Enquête entreprise</option>
            <option value="personne">Recherche de personne</option>
            <option value="pension">Pension alimentaire</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <textarea
          placeholder="Décrivez brièvement votre situation (facultatif)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-gold py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {loading ? "Envoi en cours..." : "Recevoir mon devis gratuit"}
        </button>
      </form>

      <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
        <Lock className="h-3.5 w-3.5" />
        <span>Votre demande reste 100% confidentielle. Aucune information n'est partagée sans votre accord.</span>
      </div>
    </motion.div>
  );
};

export default LeadForm;
