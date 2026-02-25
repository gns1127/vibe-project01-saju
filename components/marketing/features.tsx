import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Star, Share2, Users, Sparkles, BookOpen } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "정밀한 사주 계산",
    description:
      "음력 변환과 절기(입춘, 경칩 등)를 정확히 반영합니다. 1~2월생의 경우 입춘 전/후를 구분해 오차 없는 사주팔자를 산출합니다.",
  },
  {
    icon: Star,
    title: "60가지 전생 유형",
    description:
      "60갑자(甲子)를 기반으로 용맹한 장군, 지혜로운 학자, 신비로운 무당, 따뜻한 의원 등 다양한 전생 캐릭터를 제공합니다.",
  },
  {
    icon: BookOpen,
    title: "상세한 전생 스토리",
    description:
      "전생의 직업·신분, 성격, 살았던 환경, 그리고 이번 생에서 완성해야 할 사명까지 서사적으로 풀어드립니다.",
  },
  {
    icon: Share2,
    title: "결과 공유",
    description:
      "카카오톡, X(트위터)로 결과를 공유하거나 예쁜 결과 카드를 이미지로 저장할 수 있습니다. 인스타그램에도 바로 올려보세요!",
  },
  {
    icon: Users,
    title: "친구와 전생 비교",
    description:
      "\"우리 전생에도 인연이었을까?\" 친구의 전생 결과와 함께 비교해보세요. URL 하나로 간편하게 공유할 수 있습니다.",
  },
  {
    icon: Sparkles,
    title: "오행 분석",
    description:
      "목·화·토·금·수 오행의 분포를 시각적으로 확인하세요. 어떤 기운이 강한지, 어떤 균형이 필요한지 한눈에 알 수 있습니다.",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            사주로 풀어보는 전생의 비밀
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            수천 년의 동양 철학 사주팔자를 현대적으로 해석했습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
