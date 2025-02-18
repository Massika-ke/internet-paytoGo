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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage = () => {
  // Previous data constants remain the same
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80 pointer-events-none"></div>
      
      <div className="relative p-4 md:p-8 lg:p-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Monitor your network performance and revenue</p>
        </header>

        {/* Revenue Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 mb-8 transition-all hover:shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Revenue Overview
            </h2>
            <div className="h-72 md:h-80">
              <Line data={revenueData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Network Traffic Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 mb-8 transition-all hover:shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
              Network Traffic
            </h2>
            <div className="h-72 md:h-80">
              <Line data={trafficData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Internet Packages Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 transition-all hover:shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Internet Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm bg-gray-50/80 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                    <span>{pkg.users} Active Users</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;