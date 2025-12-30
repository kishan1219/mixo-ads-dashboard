interface Props {
  label: string;
  value: string | number;
}

export const DashboardCard = ({ label, value }: Props) => (
  <div className="bg-white shadow rounded p-4">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);
