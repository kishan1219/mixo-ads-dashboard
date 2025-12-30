import { useEffect, useState } from "react";
import { getCampaigns, getCampaignInsights } from "../api/campaigns";
import type { Campaign, CampaignInsights } from "../types/campaign";
import { DashboardCard } from "../components/DashboardCards";
import { CampaignTable } from "../components/CampaignTable";
import { Loader } from "../components/Loader";

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [insights, setInsights] = useState<CampaignInsights | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const c = await getCampaigns();
        setCampaigns(c.campaigns || []);
        const i = await getCampaignInsights();
        setInsights(i);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <Loader />;
  if (!insights) return <p>Unable to load insights.</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Campaign Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <DashboardCard label="Total Campaigns" value={insights.total_campaigns} />
        <DashboardCard label="Active" value={insights.active_campaigns} />
        <DashboardCard label="Total Spend" value={`$${insights.total_spend}`} />
        <DashboardCard label="Avg CTR" value={`${insights.avg_ctr}%`} />
      </div>

      <CampaignTable campaigns={campaigns} />
    </div>
  );
}
