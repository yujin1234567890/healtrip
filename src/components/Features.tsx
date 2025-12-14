import { Heart, Shield, Users, Clock, Stethoscope, Coffee } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Heart,
      title: '건강 맞춤 일정',
      description: '무리하지 않는 여유로운 일정으로 편안한 여행을 즐기세요',
      color: 'bg-rose-100 text-rose-600'
    },
    {
      icon: Shield,
      title: '안전 보장',
      description: '여행자 보험과 24시간 긴급 지원 서비스를 제공합니다',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: '소규모 그룹',
      description: '10-15명의 소규모 그룹으로 편안하고 친밀한 여행',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Stethoscope,
      title: '의료 서비스',
      description: '전문 간호사가 동행하여 건강 상태를 체크합니다',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Coffee,
      title: '편안한 숙소',
      description: '접근성이 좋은 프리미엄 호텔과 리조트를 선별합니다',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Clock,
      title: '여유로운 시간',
      description: '충분한 휴식 시간과 자유 시간을 보장합니다',
      color: 'bg-cyan-100 text-cyan-600'
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            왜 <span className="text-emerald-600">힐트립</span>일까요?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            시니어 여행 전문가가 설계한 안전하고 편안한 여행 서비스
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}