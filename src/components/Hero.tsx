
import { ArrowRight, BarChart2, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-20 pb-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Business with
            <span className="text-blue-600"> Intelligent Automation</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Streamline your operations, boost productivity, and drive growth with our 
            all-in-one business automation platform. Perfect for modern businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-full bg-blue-600 px-8 py-3 text-white shadow-lg hover:bg-blue-700 flex items-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="rounded-full px-8 py-3 text-gray-700 hover:text-blue-600">
              Learn More
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
            {[
              { icon: <Zap className="text-blue-600" size={24} />, title: '10x Faster', description: 'Automate repetitive tasks' },
              { icon: <Shield className="text-blue-600" size={24} />, title: 'Enterprise Security', description: 'Bank-grade protection' },
              { icon: <BarChart2 className="text-blue-600" size={24} />, title: 'Real-time Analytics', description: 'Data-driven insights' }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                {feature.icon}
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}