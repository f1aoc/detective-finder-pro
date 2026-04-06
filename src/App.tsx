import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AnnuairePage from "./pages/AnnuairePage.tsx";
import ListingPage from "./pages/ListingPage.tsx";
import BesoinPage from "./pages/BesoinPage.tsx";
import AgencePage from "./pages/AgencePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/detective-prive" element={<AnnuairePage />} />
          <Route path="/detective-prive/besoin/:slug" element={<BesoinPage />} />
          <Route path="/detective-prive/:slug" element={<ListingPage />} />
          <Route path="/agence/:slug" element={<AgencePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
