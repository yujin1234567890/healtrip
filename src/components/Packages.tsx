import { MapPin, Calendar, Users, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Packages() {
  const packages = [
    {
      id: 1,
      title: '제주도 힐링 3박 4일',
      location: '제주도',
      duration: '3박 4일',
      people: '12명',
      price: '680,000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1759067397647-4d8e3b0920cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2NTcxNTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['천천히 즐기는 올레길', '프리미엄 리조트 숙박', '건강식 제공']
    },
    {
      id: 2,
      title: '설악산 단풍 여행 2박 3일',
      location: '강원도',
      duration: '2박 3일',
      people: '15명',
      price: '490,000',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1724167934723-6ca990cb8a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHdlbGxuZXNzJTIwcmV0cmVhdHxlbnwxfHx8fDE3NjU3MTUzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['케이블카 이용', '온천 힐링', '여유로운 일정']
    },
    {
      id: 3,
      title: '경주 역사 문화 탐방',
      location: '경주',
      duration: '2박 3일',
      people: '10명',
      price: '520,000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1696857674757-185edd346e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGhlcml0YWdlJTIwdGVtcGxlfGVufDF8fHx8MTc2NTYxMTkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['문화 해설사 동행', '편안한 도보 코스', '한옥 스테이']
    },
    {
      id: 4,
      title: '부산 온천 & 휴양',
      location: '부산',
      duration: '3박 4일',
      people: '12명',
      price: '720,000',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjU3MDA5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['스파 & 온천', '해운대 산책', '신선한 해산물']
    }
  ];

  return (
    <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            인기 여행 패키지
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            시니어 여러분을 위해 특별히 준비한 맞춤 여행 상품
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48 sm:h-64">
                <ImageWithFallback 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-900 text-sm">{pkg.rating}</span>
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl text-gray-900 mb-4">{pkg.title}</h3>
                
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 text-gray-600 text-sm sm:text-base">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>정원 {pkg.people}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-600 mb-2 text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-gray-500 text-sm">1인 기준</div>
                    <div className="text-xl sm:text-2xl text-emerald-600">
                      {pkg.price}원
                    </div>
                  </div>
                  <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 hover:scale-[0.98] transition-all">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <button className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-emerald-50 hover:scale-[0.98] transition-all text-base sm:text-lg">
            모든 여행 상품 보기
          </button>
        </div>
      </div>
    </section>
  );
}