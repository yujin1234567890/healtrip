import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <h1 className="text-emerald-700">힐트립</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">
              특징
            </a>
            <a href="#packages" className="text-gray-700 hover:text-emerald-600 transition-colors">
              여행 패키지
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">
              고객 후기
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              문의하기
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:1588-0000" className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-emerald-600">
              <Phone className="w-5 h-5" />
              <span>1588-0000</span>
            </a>
            <button className="hidden sm:block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 hover:scale-[0.98] transition-all">
              상담 신청
            </button>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                특징
              </a>
              <a 
                href="#packages" 
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                여행 패키지
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                고객 후기
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </a>
              <a href="tel:1588-0000" className="flex items-center space-x-2 text-emerald-600 py-2">
                <Phone className="w-5 h-5" />
                <span>1588-0000</span>
              </a>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 hover:scale-[0.98] transition-all">
                상담 신청
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}