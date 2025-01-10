

export default function DashboardHome() {
    const cards = [
        { title: 'Total Users', value: 1200, icon: '👤', bgColor: 'bg-blue-500' },
        { title: 'Total Products', value: 350, icon: '🛋️', bgColor: 'bg-green-500' },
        { title: 'Total Orders', value: 450, icon: '🛒', bgColor: 'bg-yellow-500' },
        { title: 'Admins', value: 5, icon: '🛡️', bgColor: 'bg-red-500' },
        { title: 'Pending Orders', value: 20, icon: '⌛', bgColor: 'bg-purple-500' },
        { title: 'Revenue', value: '৳ 1,200,000', icon: '💰', bgColor: 'bg-indigo-500' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-800">RoyalBD Admin Dashboard</h1>
                <div>
                    <p className="text-gray-600">January 10, 2025</p>
                    <p className="font-semibold">Welcome, Admin!</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-md text-white ${card.bgColor}`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">{card.title}</h2>
                                <p className="text-2xl font-bold mt-2">{card.value}</p>
                            </div>
                            <div className="text-4xl">{card.icon}</div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="mt-12 text-center text-gray-600">
                © 2025 RoyalBD | Admin Dashboard
            </footer>
        </div>
    )
}
