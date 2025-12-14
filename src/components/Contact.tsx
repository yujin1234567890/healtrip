import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              문의하기
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              궁금한 점이 있으시면 언제든지 연락주세요.<br />
              친절하게 상담해드리겠습니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1 text-sm sm:text-base">전화 상담</div>
                  <div className="text-xl sm:text-2xl text-emerald-600">1588-0000</div>
                  <div className="text-gray-600 text-xs sm:text-sm mt-1">통화료 무료</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1 text-sm sm:text-base">이메일</div>
                  <div className="text-lg sm:text-xl text-emerald-600 break-all">info@healtrip.co.kr</div>
                  <div className="text-gray-600 text-xs sm:text-sm mt-1">24시간 이내 답변</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1 text-sm sm:text-base">상담 시간</div>
                  <div className="text-gray-700 text-sm sm:text-base">평일 09:00 - 18:00</div>
                  <div className="text-gray-600 text-xs sm:text-sm mt-1">주말 및 공휴일 휴무</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1 text-sm sm:text-base">방문 상담</div>
                  <div className="text-gray-700 text-sm sm:text-base">서울시 강남구 테헤란로 123</div>
                  <div className="text-gray-600 text-xs sm:text-sm mt-1">힐트립 빌딩 5층 (예약 필수)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl text-gray-900 mb-6">상담 신청</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">이름</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
                  placeholder="이름을 입력하세요"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">연락처</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
                  placeholder="010-0000-0000"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">이메일</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">관심 여행지</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base">
                  <option>선택해주세요</option>
                  <option>제주도</option>
                  <option>강원도</option>
                  <option>경주</option>
                  <option>부산</option>
                  <option>기타</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">문의 내용</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
                  placeholder="문의하실 내용을 입력해주세요"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 sm:py-4 rounded-lg hover:bg-emerald-700 hover:scale-[0.98] transition-all text-base sm:text-lg"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}