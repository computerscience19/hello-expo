import { StyleSheet, SafeAreaView, Dimensions, } from 'react-native';
import { Box, Center, GluestackUIProvider, Image, ScrollView, Text, VStack, View } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import MySwiper from "./components/MySwiper";
import LargeView from "./components/Card/LargeView";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import MediumCard from "./components/Card/MediumCard";



const queryClient = new QueryClient();

export default function App() {
  
  return (
    <QueryClientProvider client = {queryClient}>
      <GluestackUIProvider config={config}>
          <ScrollView flex={1} bg = '$backgroundDark900' >
            <Center width="100%" height = {355} >
              <MySwiper />
            </Center>

            <VStack  gap='$0' >
            <MediumCard
              webtoon = {{
                title:"이번 생은 가주가 되겠습니다",
                webtoonId: 2000000002473,
                author: "ANTSTUDIO, 몬(ANTSTUDIO)",
                img: "https://kr-a.kakaopagecdn.com/P/C/2473/c1/2x/1edc518c-f131-41fd-b94c-431eb719ff00.png",
                fancount: 124
              }}
            />

            <MediumCard
              webtoon = {{
                title:"세이렌: 악당과 계약 가족이 되었다",
                webtoonId: 2000000002745,
                author: "생얌,포야",
                img: "https://kr-a.kakaopagecdn.com/P/C/2745/c1/2x/c93c4e73-5d7e-41b1-83dc-a61e23ddaf85.png",
                fancount: 86
              }}
            />

            <MediumCard
              webtoon = {{
                title: "묵향 다크레이디",
                webtoonId: 2000000002341,
                author: "이재헌,구깃",
                img: "https://kr-a.kakaopagecdn.com/P/C/2341/c1/2x/fdd550fe-2bee-4aa3-8efc-6f86913841c4.png",
                fancount: 76
              }}
            />

            <MediumCard
              webtoon = {{
                title: "불패검선",
                webtoonId:2000000001985,
                author: "FIST CAT,김찬영",
                img: "https://kr-a.kakaopagecdn.com/P/C/1985/c1/2x/8b22a32c-5948-40df-953e-c2af422a7b5c.png",
                fancount: 62
              }}
            />

            <MediumCard
              webtoon = {{
                title: "그녀와 야수",
                webtoonId:  2000000002760,
                author: "홍슬",
                img: "https://kr-a.kakaopagecdn.com/P/C/2760/c1/2x/0230f331-f937-4a93-bb85-c8543f806512.png",
                fancount: 57
              }}
            />

            <MediumCard
              webtoon = {{
                title: "레벨업 못하는 플레이어",
                webtoonId: 2000000002477,
                author: "앵무새,스튜디오 크힛",
                img: "https://kr-a.kakaopagecdn.com/P/C/2477/c1/2x/a914e6cb-e5c1-4375-85c6-cc14ef12f3ec.png",
                fancount: 38
              }}
            />

            <MediumCard
              webtoon = {{
                title: "8클래스 마법사의 회귀",
                webtoonId: 2000000002514,
                author: ",테스",
                img: "https://kr-a.kakaopagecdn.com/P/C/2514/c1/2x/041d160d-ef4c-49e5-ba71-0055041025da.png",
                fancount: 30
              }}
            />
            
            <MediumCard
              webtoon = {{
                title: "남편은 됐고, 돈이나 벌렵니다",
                webtoonId: 2000000003067,
                author: "몰코",
                img: "https://kr-a.kakaopagecdn.com/P/C/3067/c1/2x/e867a65d-4903-439a-ab76-9f2e688bc5c9.png",
                fancount: 27
              }}
            />

            <MediumCard
              webtoon = {{
                title: "뽑기로 강해진 SSS급 헌터",
                webtoonId: 2000000002727,
                author: "개작가,윤석준",
                img: "https://kr-a.kakaopagecdn.com/P/C/2727/c1/2x/9a0dafdc-3b44-4389-b70a-fdc3e241947f.png",
                fancount: 10
              }}
            />

            <MediumCard
              webtoon = {{
                title: "망향무사",
                webtoonId: 2000000003045,
                author: "범버엄,후연",
                img: "https://kr-a.kakaopagecdn.com/P/C/3045/c1/2x/82d1909e-ba9f-4901-8571-265ef25719df.png",
                fancount: 3
              }}
            />

            </VStack>
          </ScrollView>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

