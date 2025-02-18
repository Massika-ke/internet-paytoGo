import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage = () => {
  // Sample data for revenue and network traffic
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [5000, 7000, 6000, 8000, 9000],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  const trafficData = {
    labels: ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
    datasets: [
      {
        label: 'Network Traffic (Mbps)',
        data: [100, 150, 200, 300, 400, 350, 250, 200],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const packages = [
    { id: 1, name: '10GB Plan', price: 10, users: 150 },
    { id: 2, name: '20GB Plan', price: 20, users: 100 },
    { id: 3, name: '50GB Plan', price: 50, users: 50 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Revenue Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
        <div className="h-64">
          <Line data={revenueData} />
        </div>
      </div>

      {/* Network Traffic Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Network Traffic</h2>
        <div className="h-64">
          <Line data={trafficData} />
        </div>
      </div>

      {/* Internet Packages Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Internet Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{pkg.name}</h3>
              <p className="text-gray-600">${pkg.price}</p>
              <p className="text-gray-600">{pkg.users} Users</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;