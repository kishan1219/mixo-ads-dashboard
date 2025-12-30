import { apiClient } from "./client";
import type { Campaign, CampaignInsights } from "../types/campaign";

export const getCampaigns = async () => {
  const res = await apiClient.get("/campaigns");
  return res.data;
};

export const getCampaignInsights = async (): Promise<CampaignInsights> => {
  const res = await apiClient.get("/campaigns/insights");
  return res.data.insights as CampaignInsights;
};
