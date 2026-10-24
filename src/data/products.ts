// 쿠팡 파트너스에서 가져온 실상품 (품목 검색어 → 쿠팡 랭킹순 상위, 리뷰 100개 이상, 품절 제외 3개).
// 가격·평점·리뷰 수는 아래 날짜 기준. 다시 뽑을 때는 이 파일만 바꾸면 된다.
import type { Product } from './episodes';

export const PRODUCTS_AS_OF = '2026-10-24';

export const PRODUCTS: Record<string, Record<string, Product[]>> = {
 "first-room": {
  "bedding": [
   {
    "name": "[비염케어 진드기차단] 퓨어젠 3세대항균 이불세트",
    "url": "https://link.coupang.com/a/h6mZqi17VA",
    "image": "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/c2c9/8fc1fb00f80e74b5f24f325984a7dc4efce432221099d95743e7c25dbd7d.jpg",
    "price": 49860,
    "rating": 5.0,
    "reviews": 344,
    "rocket": false
   },
   {
    "name": "씨엠베드 1인용 이불 풀세트 차렵이불+카페트+베개커버+베개솜(4종풀세트) 국내생산",
    "url": "https://link.coupang.com/a/h6mZwRCgay",
    "image": "https://thumbnail3.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/62dc/ef3a396a6bd715f2c4750d038ee2ed52b83ce01b0dc72e7b37084ce8b3d4.jpg",
    "price": 37000,
    "rating": 4.5,
    "reviews": 5679,
    "rocket": false
   },
   {
    "name": "코멧 홈 차렵이불+패드+베개커버 세트",
    "url": "https://link.coupang.com/a/h6mZBvASM8",
    "image": "https://t4c.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/4874602596880575-8e93357f-3844-43c7-8b0b-e2dd8883224d.jpg",
    "price": 20890,
    "rating": 5.0,
    "reviews": 24168,
    "rocket": true
   }
  ],
  "topper": [
   {
    "name": "리보아 침대 바닥 메모리폼 토퍼 매트리스 5cm/7cm/11cm 커버 탈부착",
    "url": "https://link.coupang.com/a/h6mZMVWiI0",
    "image": "https://thumbnail1.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/5375/524e7056bd9cd649e3379521ef04699716edbf3e2999e1a2abbb45e73bb6.jpg",
    "price": 36800,
    "rating": 5.0,
    "reviews": 2352,
    "rocket": false
   },
   {
    "name": "리보아 침대 메모리폼 매트리스 토퍼 7cm",
    "url": "https://link.coupang.com/a/h6mZTUoKyq",
    "image": "https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/49df/e2aa2ff58a10ef0ec9640d797c76881aece34aa61016546d41aad1d69996.jpg",
    "price": 46300,
    "rating": 5.0,
    "reviews": 3003,
    "rocket": false
   },
   {
    "name": "지누스 베이직 메모리폼 토퍼, 화이트, 5cm",
    "url": "https://link.coupang.com/a/h6mZYnsVVI",
    "image": "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/be21/e59f7bb561a7d43c5d847f86168755e28a522986be000923ff418b6d0439.jpg",
    "price": 66400,
    "rating": 4.5,
    "reviews": 3429,
    "rocket": true
   }
  ],
  "shower": [
   {
    "name": "코멧 정수 필터 샤워기 + 리필 필터 12p 세트, 1개",
    "url": "https://link.coupang.com/a/h6m0aTx5y0",
    "image": "https://t4a.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/251322840204580-6355230b-cfa6-4480-af3a-e61a0964599c.jpg",
    "price": 11780,
    "rating": 5.0,
    "reviews": 5344,
    "rocket": true
   },
   {
    "name": "k-filter 녹물제거 케이필터 알뜰형 k-3, 반투명, 10개",
    "url": "https://link.coupang.com/a/h6m0gwLpv2",
    "image": "https://t4c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/a629/813e68e18e4eabacdfd5032f794d28a3f312c583c2fee5828145b6ff95df.jpg",
    "price": 15590,
    "rating": 4.5,
    "reviews": 270,
    "rocket": false
   },
   {
    "name": "코멧 홈 3단 조절 파워수압 필터 샤워기 헤드 + 리필 12p 세트, 화이트, 1세트",
    "url": "https://link.coupang.com/a/h6m0lxM364",
    "image": "https://thumbnail13.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/339090253420201-c773c3c1-5127-4b84-ba39-5f5998a3c7a6.jpg",
    "price": 7750,
    "rating": 4.5,
    "reviews": 1060,
    "rocket": true
   }
  ],
  "cleaning": [
   {
    "name": "예밀 스텔라 회전걸레 세척 탈수통 + 밀대봉 + 극세사 걸레 4p, 1세트",
    "url": "https://link.coupang.com/a/h6m0xu9Nqm",
    "image": "https://t4a.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/a691/8104b24d7cb3fbe8a743c873660be70e1c3afff8530d0baa3c620b841370.jpg",
    "price": 17860,
    "rating": 4.5,
    "reviews": 5545,
    "rocket": true
   },
   {
    "name": "월드크린 스텐 마포대 + 청사 걸레 350g 2p, 1세트, 혼합색상",
    "url": "https://link.coupang.com/a/h6m0Ds2OkK",
    "image": "https://t2c.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/121293080782169-88fbb751-f3e9-4424-b289-81cf886769f1.jpg",
    "price": 10500,
    "rating": 4.5,
    "reviews": 4027,
    "rocket": true
   },
   {
    "name": "코멧 스프레이 밀대걸레 + 극세사 패드 5개 + 다용도 클리너 1개",
    "url": "https://link.coupang.com/a/h6m0H2AoQS",
    "image": "https://thumbnail2.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/252614527151735-ea5f3371-e0ec-46ae-83d8-7f1b99f20faa.jpg",
    "price": 9990,
    "rating": 5.0,
    "reviews": 40859,
    "rocket": true
   }
  ],
  "plug": [
   {
    "name": "파워존 자동소화 4000W 고용량 웨이브 개별스위치 과부하차단 6구 멀티탭",
    "url": "https://link.coupang.com/a/h6m0VbOmqa",
    "image": "https://thumbnail1.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/59fe8e73-a7c9-4615-a9a1-f900aadbffc6_fixing_v2.png",
    "price": 41000,
    "rating": 5.0,
    "reviews": 2365,
    "rocket": false
   },
   {
    "name": "고용량 과부하차단 6구 멀티탭 4000w 개별스위치 멀티콘센트, 화이트, 2m",
    "url": "https://link.coupang.com/a/h6m00OITIG",
    "image": "https://thumbnail15.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/stage/manual/25540ce5-e8bd-429a-84bf-7f6e55447a26_1753691658386.jpeg",
    "price": 16670,
    "rating": 4.5,
    "reviews": 1021,
    "rocket": false
   },
   {
    "name": "개별스위치 6구 과부하차단 멀티탭 국내생산, 화이트",
    "url": "https://link.coupang.com/a/h6m04WgAKq",
    "image": "https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/stage/manual/4dcb7376-edef-4d89-97fb-4590c71b31c4_1753689576041.jpeg",
    "price": 13550,
    "rating": 4.5,
    "reviews": 1021,
    "rocket": false
   }
  ],
  "rack": [
   {
    "name": "ZOES HOMEWARE 빨래건조대 튼튼한 접이식 건조대, 화이트",
    "url": "https://link.coupang.com/a/h6m1gWHSW4",
    "image": "https://thumbnail2.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/856c/036b48b0460d1cb864e6ad624131768ce4360c1d64e6456dd291067468e4.jpg",
    "price": 19510,
    "rating": 5.0,
    "reviews": 101,
    "rocket": false
   },
   {
    "name": "튼튼한 접이식 빨래건조대 대용량 이불건조대 다용도 실내 옷걸이 행거, 건메탈 그레이",
    "url": "https://link.coupang.com/a/h6m1nhyIYm",
    "image": "https://thumbnail1.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/5770/3be97cbd084b6104511b8c9285447583acd2716cff6964f79f3792f6c964.png",
    "price": 37800,
    "rating": 4.5,
    "reviews": 1110,
    "rocket": false
   },
   {
    "name": "코멧 국내생산 홈 접이식 빨래건조대, 화이트",
    "url": "https://link.coupang.com/a/h6m1rN0pt6",
    "image": "https://t2c.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/3489526487532774-48c65ea4-8298-463b-89c1-7c4f092d620d.jpg",
    "price": 13560,
    "rating": 4.5,
    "reviews": 14326,
    "rocket": true
   }
  ],
  "hanger": [
   {
    "name": "모던홈 간편설치 철제 스탠드 행거 옷걸이, 블랙",
    "url": "https://link.coupang.com/a/h6m1DmLoVV",
    "image": "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/6bd3/cf0d0971a3454b4c685bfb0b3a55f151c6b0109980a677ce73345b1c9c97.png",
    "price": 9900,
    "rating": 4.0,
    "reviews": 515,
    "rocket": false
   },
   {
    "name": "헤르티만 공간활용 간단한 설치 금속 스탠드 옷걸이, 블랙 트리",
    "url": "https://link.coupang.com/a/h6m1KavNMy",
    "image": "https://thumbnail2.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b343/82140bed8558a778c4e44914b8aa30188464e49cc60ef8b95ad2873b8488.png",
    "price": 12900,
    "rating": 4.5,
    "reviews": 3107,
    "rocket": false
   },
   {
    "name": "스탠드 행거 침실 수납 원목 행거 바닥 행거, 호두색",
    "url": "https://link.coupang.com/a/h6m1OQDw8O",
    "image": "https://thumbnail14.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/e8ac/df9d8b3eeaab87ebf3b9c175756e983a010cc839d453ecd22bc81b9f0a51.jpeg",
    "price": 258000,
    "rating": 5.0,
    "reviews": 192,
    "rocket": false
   }
  ],
  "vacuum": [
   {
    "name": "웰스톰 무선청소기 BLDC 진공청소기+물걸레 VC310, 다크블랙",
    "url": "https://link.coupang.com/a/h6m10OBiI8",
    "image": "https://thumbnail14.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/e2ee/a6f37fa0a7d1bcb912742b73195c2b94ea3f0ed6d9844e94c731d89e5484.jpg",
    "price": 134000,
    "rating": 4.5,
    "reviews": 230,
    "rocket": false
   },
   {
    "name": "디에스가추몰 충전식 무선 멀티 핸디 청소기 초경량 진공청소기, YQ-669, 화이트",
    "url": "https://link.coupang.com/a/h6m163lchU",
    "image": "https://t1a.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/650b/79ec61ae07b1646a354e91f38d68f2c0e30750b54f1e79d6002d0840c05d.jpg",
    "price": 15000,
    "rating": 5.0,
    "reviews": 998,
    "rocket": false
   },
   {
    "name": "클래파 DC모터 다용도 미니 핸디형 무선청소기, 그레이, BVC-H10",
    "url": "https://link.coupang.com/a/h6m2bDEIDY",
    "image": "https://thumbnail14.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/3639/ea5fa8ffecb7dd80693a5e90db3c6a8a0ec430028ea7158871c126419a09.jpg",
    "price": 39800,
    "rating": 4.5,
    "reviews": 28094,
    "rocket": true
   }
  ],
  "shelf": [
   {
    "name": "워촹스 다용도 욕실 선반 레이어드 코너선반, 블랙, 1개",
    "url": "https://link.coupang.com/a/h6m2m5zuXk",
    "image": "https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1689/ef4d039414926e33f46eab030590dfed878e6490e9a635462667e6371d44.jpg",
    "price": 27900,
    "rating": 4.5,
    "reviews": 644,
    "rocket": false
   },
   {
    "name": "리치덕 안떨어지는 초강력 무타공 욕실일자선반 2단, 1세트, 실버",
    "url": "https://link.coupang.com/a/h6m2pkcipo",
    "image": "https://thumbnail15.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/f8f1/f56116c336358043175cef051bda803a7d505e1f518491610c271313c02d.jpg",
    "price": 7900,
    "rating": 4.0,
    "reviews": 515,
    "rocket": false
   },
   {
    "name": "로렌드 초강력 흡착식 무타공 욕실선반, 1개, 다크 그레이",
    "url": "https://link.coupang.com/a/h6m2t04qLQ",
    "image": "https://t4a.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/987d/8287fee506e37f96225d7dbfa895da181deb3963a62ec9f8a213c1e9f097.png",
    "price": 13900,
    "rating": 4.5,
    "reviews": 601,
    "rocket": false
   }
  ],
  "cookware": [
   {
    "name": "키친아트 프리미엄 핑크 컬렉션 3종 냄비프라이팬 세트 (편수냄비 18cm + 양수냄비 20cm + 프라이팬)",
    "url": "https://link.coupang.com/a/h6m2F8GpbM",
    "image": "https://t5c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/c31d/ebf1540078ee025e1e1586f050a929e2ea72537818c26c129902f38d98b3.png",
    "price": 57060,
    "rating": 4.5,
    "reviews": 163,
    "rocket": false
   },
   {
    "name": "OYEAH 5종 세트 다기능 탈착식 손잡이 냄비 세트, 흰색",
    "url": "https://link.coupang.com/a/h6m2MbV684",
    "image": "https://t5a.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/4cc4/8affecdecd539f3c71df0eba337991306d270a7d4877016058f30a1162ad.jpg",
    "price": 35900,
    "rating": 5.0,
    "reviews": 1813,
    "rocket": false
   },
   {
    "name": "유피트 인덕션용 쿡웨어 냄비 프라이팬 세트",
    "url": "https://link.coupang.com/a/h6m2QNMa72",
    "image": "https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/3237/860300028354076ee7fa11430a675c5a7d66465ada23f90b52758c5f04dd.jpg",
    "price": 137800,
    "rating": 5.0,
    "reviews": 103,
    "rocket": false
   }
  ],
  "ricecooker": [
   {
    "name": "루니엘 그레인 전기압력밥솥 1~4인용 솥밥 누룽지 밥솥, 오트 화이트",
    "url": "https://link.coupang.com/a/h6m22Cnbqe",
    "image": "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/06f8/fb5d10f7994399ceecc58bb3d6ae58b75869bec326182b853decee7a7bf3.png",
    "price": 129000,
    "rating": 5.0,
    "reviews": 239,
    "rocket": false
   },
   {
    "name": "크루거 스마트 만능 전기압력밥솥 3~4인용 2L, 세라믹 화이트, KRPC-4133",
    "url": "https://link.coupang.com/a/h6m29hWJWe",
    "image": "https://t5c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1891/43200d8c9a8780447feb4b51c23a0dc7ca750b1929e83c7cd4fd92347282.jpg",
    "price": 129000,
    "rating": 5.0,
    "reviews": 211,
    "rocket": false
   },
   {
    "name": "쿠쿠 전기보온밥솥 3인용, CR-0365FR, 레드",
    "url": "https://link.coupang.com/a/h6m3dOwEQS",
    "image": "https://thumbnail13.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/fa407c6e-9eb0-4b23-a23e-4c3857af9ec3_fixing_v2.png",
    "price": 69000,
    "rating": 4.5,
    "reviews": 4655,
    "rocket": false
   }
  ],
  "kettle": [
   {
    "name": "키친아트 스텐 무선 전기포트 1.7L, KAEP-6517",
    "url": "https://link.coupang.com/a/h6nco955Cm",
    "image": "https://thumbnail15.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2026/07/24/16/1/a8606d1b-090b-4b68-9ae2-e4d6c0b0f5b9.jpg",
    "price": 8400,
    "rating": 4.5,
    "reviews": 509,
    "rocket": true
   },
   {
    "name": "필립스 3000 시리즈 무선 전기 주전자, HD9318/20",
    "url": "https://link.coupang.com/a/h6ncr4zrUa",
    "image": "https://t4a.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/7ee2/189c2a945b4cf40229b71a9b0fad53a8e1b874a7548600a6ab13664002ce.jpg",
    "price": 25080,
    "rating": 5.0,
    "reviews": 47379,
    "rocket": true
   },
   {
    "name": "키친아트 솔리드 전기주전자, KAEK-B1500FT",
    "url": "https://link.coupang.com/a/h6m3AIhvvU",
    "image": "https://t5c.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/879141756526888-61bbb606-8352-4a23-b2b0-2e4980984f62.jpg",
    "price": 10400,
    "rating": 4.5,
    "reviews": 23227,
    "rocket": true
   }
  ],
  "airfryer": [
   {
    "name": "히커 소형 에어프라이어 미니 1인용 1.5L, 블랙",
    "url": "https://link.coupang.com/a/h6m3MtMBNI",
    "image": "https://thumbnail3.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/e46a/aaf44154ce49734d9e04ad6fe61723f38f7c80f4e7910d1d5c2efc2c0bbe.jpg",
    "price": 36060,
    "rating": 5.0,
    "reviews": 470,
    "rocket": false
   },
   {
    "name": "닌자 크리스피 올인원 유리 에어프라이어 3.8L + 1.4L 세트, FN100KRSD1, 스톤",
    "url": "https://link.coupang.com/a/h6m3S1lSeG",
    "image": "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2026/06/02/17/5/e4d7b71c-5f59-4709-a068-fc133c561c80.jpg",
    "price": 197620,
    "rating": 5.0,
    "reviews": 317,
    "rocket": true
   },
   {
    "name": "이놀 투명창 에어프라이어 2L 1인용 소형, 화이트, EW043",
    "url": "https://link.coupang.com/a/h6m3XsGMpg",
    "image": "https://thumbnail4.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/9b5f/cd9f5f51f339fc94148284725a7c7d0595c056d25c2072685ba1ff7793c8.png",
    "price": 30900,
    "rating": 4.5,
    "reviews": 451,
    "rocket": false
   }
  ],
  "fridge": [
   {
    "name": "갈란츠 미니 93L 1도어 냉장고, 실버, BC-93-63H",
    "url": "https://link.coupang.com/a/h6m4a1sDGm",
    "image": "https://thumbnail15.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2024/01/09/10/5/3de2bc52-4ead-472e-9037-eba8a8761539.jpg",
    "price": 149000,
    "rating": 4.5,
    "reviews": 101,
    "rocket": true
   },
   {
    "name": "TCL 86L 2도어 냉장고, F85TMW",
    "url": "https://link.coupang.com/a/h6m4fLfti8",
    "image": "https://t2c.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/824730525326913-edaafbd3-a618-4574-b1d9-ac25d34c0c92.jpg",
    "price": 189050,
    "rating": 4.5,
    "reviews": 219,
    "rocket": true
   },
   {
    "name": "마이디어 미니 냉장고 44L, 블랙, MDRD86FGO30",
    "url": "https://link.coupang.com/a/h6m4kHES3F",
    "image": "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/321127250626065-79b4f452-971c-4657-b12a-0196eb8a344e.jpg",
    "price": 84550,
    "rating": 4.5,
    "reviews": 3874,
    "rocket": true
   }
  ],
  "bin": [
   {
    "name": "지엔베르그 음식물 쓰레기통 3L 스텐 밀폐 진공 냄새차단",
    "url": "https://link.coupang.com/a/h6ncFP7f2a",
    "image": "https://thumbnail11.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/7fd7/913f663022be1eccc7007622cd790f3602a940ed4f99ea93f9cfa4f34f41.png",
    "price": 27830,
    "rating": 5.0,
    "reviews": 1377,
    "rocket": false
   },
   {
    "name": "락앤락 음식물 쓰레기통, 그레이, 1개",
    "url": "https://link.coupang.com/a/h6ncKpJ3pQ",
    "image": "https://thumbnail15.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/4804/c23efd90450b3563886e931b5bfe862ebd926f211df903e4e1251d2926c4.jpg",
    "price": 13690,
    "rating": 4.5,
    "reviews": 33970,
    "rocket": true
   },
   {
    "name": "튤리 진공 음식물 쓰레기통, 블랙, 1개",
    "url": "https://link.coupang.com/a/h6ncOUQseW",
    "image": "https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/7d0a/cff203de696aec479faa0b93c5b17646716b13a3bccf281df69f8d378d97.png",
    "price": 12800,
    "rating": 4.5,
    "reviews": 1036,
    "rocket": false
   }
  ]
 },
 "first-puppy": {
  "kennel": [
   {
    "name": "트윙클펫 반려동물 캐리어, 블랙, 1개",
    "url": "https://link.coupang.com/a/h6m4Ukdaa4",
    "image": "https://thumbnail1.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/cb48/9c8691ef4b7091d71a5ebbd448d4c297ecb14333f49e940d8ffa2f8a7348.jpg",
    "price": 59030,
    "rating": 4.5,
    "reviews": 374,
    "rocket": false
   },
   {
    "name": "푸르미 반려동물 전용 하드형 이동장, 인디핑크, 1개",
    "url": "https://link.coupang.com/a/h6m4ZMxkNE",
    "image": "https://t3c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/0f96/ddb74618ad04c719921a70538d3582c268ad761c8792335caf61c4525919.jpg",
    "price": 15100,
    "rating": 4.5,
    "reviews": 7177,
    "rocket": true
   },
   {
    "name": "마마쇼 세이프락 강아지 고양이 켄넬 이동장 캐리어, 브라운, 1개",
    "url": "https://link.coupang.com/a/h6m439VxzE",
    "image": "https://t1c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/e136/2f46b610c2ed8a122068df72c465e7fd22f6ae721bcf6da1edb53f188440.jpg",
    "price": 13300,
    "rating": 4.5,
    "reviews": 1092,
    "rocket": false
   }
  ],
  "pad": [
   {
    "name": "뽀시래기 강아지 든든한 배변패드, 100개입, 4개",
    "url": "https://link.coupang.com/a/h6m5gyHPMW",
    "image": "https://thumbnail14.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2025/12/29/17/5/a50b049c-2319-4571-ac5b-bdd0eee81d62.jpg",
    "price": 40500,
    "rating": 5.0,
    "reviews": 4964,
    "rocket": true
   },
   {
    "name": "닥터파파 프리미엄 배변패드 29g, 100개입, 2개",
    "url": "https://link.coupang.com/a/h6m5mEekMK",
    "image": "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/477164666376003-87603447-f36c-49bb-8b69-2cc1ca5ea296.jpg",
    "price": 25750,
    "rating": 4.5,
    "reviews": 3725,
    "rocket": true
   },
   {
    "name": "탐사 실속형 배변패드, 100개입, 2개",
    "url": "https://link.coupang.com/a/h6m5q8pefY",
    "image": "https://thumbnail4.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/66271985880224-454d223c-d331-40e3-8f4b-91d0739d81b0.jpg",
    "price": 12000,
    "rating": 5.0,
    "reviews": 175213,
    "rocket": true
   }
  ],
  "deodorizer": [
   {
    "name": "펫케아 강아지 탈취제 피톤치드 편백수 천연 스프레이 오줌냄새 제거 + 공병",
    "url": "https://link.coupang.com/a/h6m5CJB3TM",
    "image": "https://thumbnail11.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/05d4/138385dea1d751ccc023b1a49cf2ad19e6b25a6204adaaa828ddda691407.jpg",
    "price": 12200,
    "rating": 4.5,
    "reviews": 2401,
    "rocket": false
   },
   {
    "name": "코코브라운 반려동물 베이킹소다 탈취제 베이비파우더향, 550ml, 2개",
    "url": "https://link.coupang.com/a/h6m5JJhCc8",
    "image": "https://t2c.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/279177958229935-97413c24-3d0f-4ec0-9f3e-71f66bbae421.jpg",
    "price": 8900,
    "rating": 4.5,
    "reviews": 22192,
    "rocket": true
   },
   {
    "name": "유한락스 반려동물 냄새얼룩 제거제, 750ml, 1개",
    "url": "https://link.coupang.com/a/h6m5NW1syW",
    "image": "https://thumbnail13.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/84532198622701-97b6f38b-dd8d-4dd7-8ae9-9d2e7aaf318c.jpg",
    "price": 9900,
    "rating": 5.0,
    "reviews": 6938,
    "rocket": true
   }
  ],
  "cushion": [
   {
    "name": "BUNIO 메모리폼 강아지방석 반려동물 침대 사계절용 생활방수",
    "url": "https://link.coupang.com/a/h6m5Z9A0bs",
    "image": "https://t5c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/34f8/a2ea0b9df75ff4b3828b448bc65c6db59eab8e1301021d1e9617a9566484.png",
    "price": 34720,
    "rating": 5.0,
    "reviews": 256,
    "rocket": false
   },
   {
    "name": "BangPang 사계절 반려동물 푹신한 강아지 방석 쿠션, 그린",
    "url": "https://link.coupang.com/a/h6m56nyK7w",
    "image": "https://thumbnail15.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/98a6/493b472d1a2a6256e168da8d6a5a22a4d48b3c675e7c3a1f131dc32ecf5b.jpg",
    "price": 10240,
    "rating": 4.5,
    "reviews": 1334,
    "rocket": false
   },
   {
    "name": "펫루미 푹신푹신 반려동물 꿀잠 방석, 루미그레이",
    "url": "https://link.coupang.com/a/h6m6aOAd88",
    "image": "https://t5c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/7a20/f363be7f97a688a2145d384da68497ffbb3b8c1d2876c4b71c79676e1a73.jpg",
    "price": 19900,
    "rating": 4.5,
    "reviews": 1484,
    "rocket": false
   }
  ],
  "fence": [
   {
    "name": "확장형 강아지 울타리 애견펜스 세트, 화이트",
    "url": "https://link.coupang.com/a/h6m6mr6SmO",
    "image": "https://thumbnail14.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/4976/073f131dfb188282f80f9824b6f440a03f9ebdf0a43b76f74c7c878f120f.jpg",
    "price": 169290,
    "rating": 5.0,
    "reviews": 376,
    "rocket": false
   },
   {
    "name": "강아지울타리 철제 대형 개우리 울타리, 검은색",
    "url": "https://link.coupang.com/a/h6m6s8OPo4",
    "image": "https://t4a.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/58e4/7279a3911702ad448fd9e0aaf4c772d058c5176c299876d588be955d6944.png",
    "price": 57630,
    "rating": 5.0,
    "reviews": 976,
    "rocket": false
   },
   {
    "name": "탐사 반려동물 분리형 울타리 펜스 12pcs, 아이보리",
    "url": "https://link.coupang.com/a/h6m6xTShW1",
    "image": "https://thumbnail1.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/87e7/31ef0c6917af45ac36b1b6b95cde0758b844b19120d18ca613cfd134bc47.jpg",
    "price": 10440,
    "rating": 4.5,
    "reviews": 2027,
    "rocket": true
   }
  ],
  "harness": [
   {
    "name": "펫펫펫 강아지 하네스 + 리드줄 세트, 레드",
    "url": "https://link.coupang.com/a/h6m6LgEhNI",
    "image": "https://thumbnail3.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/9563/bdb1d56eb055509910ef8531caf6812abc4e058273014ebf34d8a49f984e.jpg",
    "price": 39800,
    "rating": 5.0,
    "reviews": 843,
    "rocket": false
   },
   {
    "name": "아미토 꼬임방지 강아지 자동 리드줄, 핑크",
    "url": "https://link.coupang.com/a/h6m6Qdc4ho",
    "image": "https://t3a.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/prod/9d07b295-4e59-4fe7-8c06-cf3c9ce1af6a_fixing_v2.png",
    "price": 10900,
    "rating": 4.5,
    "reviews": 726,
    "rocket": false
   },
   {
    "name": "파스텔펫 반려동물 곰돌이 하네스 + 리드줄 세트, 베이지",
    "url": "https://link.coupang.com/a/h6m6UBduQS",
    "image": "https://t4a.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/nvcud6qm/206f33034de4423eb6788f6b7b2adc43.jpg",
    "price": 5690,
    "rating": 4.5,
    "reviews": 1917,
    "rocket": true
   }
  ],
  "grooming": [
   {
    "name": "타이니무무 강아지 슬리커 브러쉬 전문가용 빗, 우드",
    "url": "https://link.coupang.com/a/h6m66iFvl6",
    "image": "https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1c5f/9387a379673e2ea504faa18a89464fe9c76ed002390ccf5afcc74f045c3c.png",
    "price": 28800,
    "rating": 5.0,
    "reviews": 163,
    "rocket": false
   },
   {
    "name": "플러쉬퍼피 반려동물 슬리커 소프트 브러쉬, 블루",
    "url": "https://link.coupang.com/a/h6m7cVcbo4",
    "image": "https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/522956789463767-e8f29446-d80d-403a-96a4-ebdaa91fe1f9.jpg",
    "price": 32850,
    "rating": 5.0,
    "reviews": 2099,
    "rocket": true
   },
   {
    "name": "토마고 슬리커 브러쉬, 혼합색상",
    "url": "https://link.coupang.com/a/h6m7hvd6C4",
    "image": "https://thumbnail2.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/617e/e0bb01285c3f779e7d652cfaa58394791a80c1e04c56d74b94d42c1aa5bf.jpg",
    "price": 9190,
    "rating": 4.5,
    "reviews": 2036,
    "rocket": true
   }
  ],
  "food": [
   {
    "name": "now 퍼피 그레인프리 스몰브리드 건식사료, 칠면조, 2kg",
    "url": "https://link.coupang.com/a/h6m7tQ2a8O",
    "image": "https://t2a.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/f5a0/04c76b9d3487f8f875dde2c8f82c6eae738330bc880966b6278c575eee76.jpg",
    "price": 30660,
    "rating": 5.0,
    "reviews": 10599,
    "rocket": true
   },
   {
    "name": "탐사 퍼피 도그푸드, 연어, 2.5kg",
    "url": "https://link.coupang.com/a/h6m7zP5qAm",
    "image": "https://t2c.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/a614/9c62ece38b4970e03562b6e1b294307330b044f334059b6fb6142da75df2.jpg",
    "price": 9490,
    "rating": 5.0,
    "reviews": 3500,
    "rocket": true
   },
   {
    "name": "로얄캐닌 퍼피 미니 인도어 사료, 닭+오리, 3kg",
    "url": "https://link.coupang.com/a/h6m7ErAmZ2",
    "image": "https://thumbnail13.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/91e1/868b9f29cf96a1bd3019a5f7f9bf5e151590b2f5b87e293ff8e099ff1a2b.jpg",
    "price": 39220,
    "rating": 5.0,
    "reviews": 15378,
    "rocket": false
   }
  ],
  "bowls": [
   {
    "name": "독스랩 반려동물 식기 밥그릇 물그릇, 2개, 머스타드 옐로우",
    "url": "https://link.coupang.com/a/h6m7QjsSya",
    "image": "https://thumbnail12.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/images/067f1b59-db64-4780-a314-d77df58d370813738810100215940898.jpg",
    "price": 95900,
    "rating": 5.0,
    "reviews": 118,
    "rocket": false
   },
   {
    "name": "트바웃 스텐 애견 밥그릇 1+1 세트, L+L",
    "url": "https://link.coupang.com/a/h6m7WOaX92",
    "image": "https://thumbnail11.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/stage/manual/a0b50135ea2f2e4a9b030eccf54ad932188e0735e97ced4c0ac875bfe09f_1791786806177.jpg",
    "price": 9590,
    "rating": 4.5,
    "reviews": 387,
    "rocket": false
   },
   {
    "name": "티티펫 스텐 펫 식기 15.5cm, 2개",
    "url": "https://link.coupang.com/a/h6m71hteea",
    "image": "https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/adaa/2b6d247914eea42594f1d8a38cc8713627a0414edaed4201d172e9366700.jpg",
    "price": 4790,
    "rating": 4.5,
    "reviews": 1098,
    "rocket": true
   }
  ],
  "toys": [
   {
    "name": "강아지특공대 카페마데라 강아지장난감 커피나무스틱, 2개",
    "url": "https://link.coupang.com/a/h6m8cNVACy",
    "image": "https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/image_audit/advertiser/1760332234479/ee45319e-45c8-4007-9b58-c65535aca7ad.png",
    "price": 14200,
    "rating": 4.5,
    "reviews": 2972,
    "rocket": false
   },
   {
    "name": "스니피즈 강아지 우드스틱 장난감, 5개",
    "url": "https://link.coupang.com/a/h6m8eY2Exg",
    "image": "https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/e3aa/2bb033724de93dd45995a46f7d4e08701b68d79b93d773b9551b6e02e93f.png",
    "price": 16800,
    "rating": 4.5,
    "reviews": 1996,
    "rocket": false
   },
   {
    "name": "딩동펫 커피나무 스틱 강아지 장난감, 1개",
    "url": "https://link.coupang.com/a/h6m8j4oZ2W",
    "image": "https://thumbnail5.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/ig8bqt3w/c7fc368172ee436aa4506b408b052e04.jpg",
    "price": 3400,
    "rating": 4.5,
    "reviews": 3897,
    "rocket": true
   }
  ],
  "treats": [
   {
    "name": "더스탠다드 강아지저키 국내산 노즈워크간식 생육져키, 1kg, 북어",
    "url": "https://link.coupang.com/a/h6m8wsfMUm",
    "image": "https://thumbnail3.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b5ef/7bb4b817e4c7eb5705f003d678721de7a0e90f13a17510ae4cb2c0b606f1.jpg",
    "price": 16900,
    "rating": 4.5,
    "reviews": 991,
    "rocket": false
   },
   {
    "name": "벨버드 져키킹 강아지 간식 S 혼합맛, 1kg, 2개",
    "url": "https://link.coupang.com/a/h6m8CwmifQ",
    "image": "https://thumbnail4.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/279721890205452-d3f5575d-a9e4-46ce-9edc-7d22ed09e64e.jpg",
    "price": 15650,
    "rating": 4.5,
    "reviews": 8598,
    "rocket": true
   },
   {
    "name": "목우촌 펫9단 노즈워크 훈련용 촉촉 큐브 트릿 대용량 간식, 1kg",
    "url": "https://link.coupang.com/a/h6m8Gxwz1g",
    "image": "https://thumbnail11.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/183e/cef8704132f3b2c8e0565d00ce65ef4bc4598f467518df6a2009f5c5d593.jpg",
    "price": 11980,
    "rating": 5.0,
    "reviews": 1976,
    "rocket": false
   }
  ],
  "waterer": [
   {
    "name": "코지스 강아지 고양이 자동급수기 정수기, 화이트, W9-N",
    "url": "https://link.coupang.com/a/h6m8RPQwlE",
    "image": "https://thumbnail3.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/9998/73c84bdf0c1f456a0e05eba48eadde9557d777e354359294a83910679591.jpg",
    "price": 28900,
    "rating": 5.0,
    "reviews": 248,
    "rocket": false
   },
   {
    "name": "푸푸펫츠 반려동물 스마트 자동 급수기, 그레이",
    "url": "https://link.coupang.com/a/h6m8UssPRI",
    "image": "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/vizh0tol/0323d78441f2464d8ad21059debb1b2a.jpg",
    "price": 54900,
    "rating": 5.0,
    "reviews": 1278,
    "rocket": true
   },
   {
    "name": "페블펫 3중여과 대용량 워터슬라이드 자동급수기 IPW200",
    "url": "https://link.coupang.com/a/h6m8YNWIhw",
    "image": "https://t3c.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1d1e/d62c3e618e72caa4efbf74278a8be6eb1089631c0442902497ac686eaa8f.jpg",
    "price": 19900,
    "rating": 4.5,
    "reviews": 1306,
    "rocket": false
   }
  ]
 }
};
