import Head from 'next/head';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import { 
  MessageSquare, 
  ShoppingCart, 
  FileText, 
  TestTube, 
  BookOpen, 
  Users 
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: MessageSquare,
      title: 'Consult with a doctor',
      description: 'Get expert medical advice'
    },
    {
      icon: ShoppingCart,
      title: 'Order Medicines',
      description: 'Get medicines delivered'
    },
    {
      icon: FileText,
      title: 'View medical records',
      description: 'Access your health records'
    },
    {
      icon: TestTube,
      title: 'Book test',
      badge: 'New',
      description: 'Book diagnostic tests'
    },
    {
      icon: BookOpen,
      title: 'Read articles',
      description: 'Stay informed about health'
    },
    {
      icon: Users,
      title: 'For healthcare providers',
      description: 'Join our network'
    }
  ];

  return (
    <>
      <Head>
        <title>Practo - Your home for health</title>
        <meta name="description" content="Find and book appointments with verified doctors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="gradient-bg relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute top-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-10 left-20 w-12 h-12 bg-orange-400 rounded-full opacity-25"></div>
            <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-green-400 rounded-full opacity-20"></div>
            
            {/* Illustration elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-800 to-transparent opacity-50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your home for health
              </h1>
              <div className="text-xl md:text-2xl text-white mb-8">
                Find and Book
              </div>
            </div>

            <SearchForm />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="relative inline-block mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      {service.badge && (
                        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 hidden md:block">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600">
              © 2024 Practo. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}