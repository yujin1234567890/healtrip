import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <h3 className="text-white text-xl">힐트립</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              시니어 여러분의<br />
              건강하고 행복한 여행을<br />
              함께합니다
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-base sm:text-lg">여행 상품</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">제주도 여행</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">강원도 여행</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">경주 여행</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">부산 여행</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">전체 상품</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-base sm:text-lg">회사 소개</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">회사 소개</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">이용 약관</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">채용 정보</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">제휴 문의</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 text-base sm:text-lg">고객 지원</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">여행 가이드</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">예약 안내</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">환불 규정</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">고객센터</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="text-xs sm:text-sm text-gray-500">
            <p className="mb-2">
              (주)힐트립 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890 | 관광사업자등록번호: 제2024-000001호
            </p>
            <p className="mb-2">
              서울시 강남구 테헤란로 123 힐트립 빌딩 5층 | 이메일: info@healtrip.co.kr | 전화: 1588-0000
            </p>
            <p>
              © 2024 HealTrip. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}