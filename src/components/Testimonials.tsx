import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '김영희',
      age: 68,
      location: '서울',
      rating: 5,
      text: '제주도 여행이 정말 편안하고 좋았습니다. 무리하지 않는 일정으로 천천히 구경할 수 있어서 좋았어요. 간호사님도 함께 해주셔서 안심이 되었습니다.',
      trip: '제주도 힐링 3박 4일'
    },
    {
      id: 2,
      name: '박철수',
      age: 72,
      location: '부산',
      rating: 5,
      text: '단풍 구경하러 설악산에 다녀왔는데 케이블카를 타고 편하게 구경했습니다. 온천도 좋았고, 식사도 맛있었어요. 다음엔 부인과 함께 또 가고 싶습니다.',
      trip: '설악산 단풍 여행 2박 3일'
    },
    {
      id: 3,
      name: '이순자',
      age: 65,
      location: '대구',
      rating: 5,
      text: '경주 역사 여행에서 문화 해설사님의 설명을 들으며 새로운 것들을 많이 배웠습니다. 한옥에서의 하룻밤도 특별한 경험이었어요.',
      trip: '경주 역사 문화 탐방'
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            고객 후기
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            힐트립과 함께한 시니어 여행자들의 생생한 이야기
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 sm:p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 sm:w-12 sm:h-12 text-emerald-200" />
              
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 relative z-10 text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 border-t border-emerald-100">
                <div className="text-gray-900 mb-1 text-sm sm:text-base">
                  {testimonial.name} ({testimonial.age}세)
                </div>
                <div className="text-gray-600 text-xs sm:text-sm mb-2">{testimonial.location}</div>
                <div className="text-emerald-600 text-xs sm:text-sm">{testimonial.trip}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl mb-4">지금 바로 힐트립과 함께하세요!</h3>
          <p className="text-lg sm:text-xl mb-8 text-emerald-100">
            건강하고 행복한 여행의 첫 걸음을 시작하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-emerald-50 hover:scale-[0.98] transition-all text-base sm:text-lg">
              무료 상담 신청
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-emerald-600 hover:scale-[0.98] transition-all text-base sm:text-lg">
              카탈로그 다운로드
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}