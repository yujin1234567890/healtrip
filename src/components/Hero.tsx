import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-12 sm:py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm sm:text-base">
              시니어 맞춤 여행
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900">
              건강하고 행복한<br />
              <span className="text-emerald-600">힐링 여행</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              시니어 여러분의 건강과 안전을 최우선으로 생각하는<br className="hidden sm:block" />
              프리미엄 맞춤 여행 서비스입니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-emerald-700 hover:scale-[0.98] transition-all text-base sm:text-lg">
                여행 상품 보기
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-emerald-50 hover:scale-[0.98] transition-all text-base sm:text-lg">
                무료 상담 받기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-emerald-600 mb-1">1,200+</div>
                <div className="text-sm sm:text-base text-gray-600">만족 고객</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-emerald-600 mb-1">50+</div>
                <div className="text-sm sm:text-base text-gray-600">여행 상품</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-emerald-600 mb-1">98%</div>
                <div className="text-sm sm:text-base text-gray-600">만족도</div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1764816633859-136c97741472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBjb3VwbGUlMjB0cmF2ZWx8ZW58MXx8fHwxNzY1NzE1MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="시니어 여행"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl max-w-[200px] sm:max-w-none">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">✨</span>
                </div>
                <div>
                  <div className="text-gray-900 text-sm sm:text-base">안전한 여행</div>
                  <div className="text-gray-500 text-xs sm:text-sm">24시간 케어 서비스</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}