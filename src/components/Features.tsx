
import { 
  BarChart, Clock, Cloud, Code2, Database, Lock,
  MessageSquare, Settings, Users
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Cloud className="text-blue-600" size={24} />,
      title: 'Cloud-Native',
      description: 'Built for the modern cloud infrastructure with scalability in mind'
    },
    {
      icon: <Lock className="text-blue-600" size={24} />,
      title: 'Enterprise Security',
      description: 'Advanced encryption and security protocols to protect your data'
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with built-in collaboration tools'
    },
    {
      icon: <Database className="text-blue-600" size={24} />,
      title: 'Data Integration',
      description: 'Connect with your existing tools and databases effortlessly'
    },
    {
      icon: <BarChart className="text-blue-600" size={24} />,
      title: 'Advanced Analytics',
      description: 'Gain insights with powerful reporting and analytics'
    },
    {
      icon: <MessageSquare className="text-blue-600" size={24} />,
      title: 'AI-Powered Support',
      description: '24/7 intelligent customer support and assistance'
    },
    {
      icon: <Clock className="text-blue-600" size={24} />,
      title: 'Automation',
      description: 'Automate routine tasks and workflows'
    },
    {
      icon: <Settings className="text-blue-600" size={24} />,
      title: 'Customization',
      description: 'Tailor the platform to your specific needs'
    },
    {
      icon: <Code2 className="text-blue-600" size={24} />,
      title: 'API Access',
      description: 'Full API access for custom integrations'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Modern Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your operations and scale your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}