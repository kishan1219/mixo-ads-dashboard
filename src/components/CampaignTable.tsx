import type { Campaign } from "../types/campaign";

export const CampaignTable = ({ campaigns }: { campaigns: Campaign[] }) => (
  <table className="w-full border">
    <thead className="bg-gray-100">
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Budget</th>
        <th>Daily</th>
        <th>Platform</th>
      </tr>
    </thead>
    <tbody>
      {campaigns.map((c) => (
        <tr key={c.id} className="border-t text-center">
          <td>{c.name}</td>
          <td>{c.status}</td>
          <td>${c.budget}</td>
          <td>${c.daily_budget}</td>
          <td>{c.platforms.join(", ")}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
