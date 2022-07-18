-설치
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack

-화면 전환
navigation.navigate() or navigation.push() 사용
1.navigate(): 새로 이동할 화면이 현재 화면과 같으면 새로운 화면을 쌓지않고 파라미터만 변경한다.
2.push(): navigate()와 반대 / 전환효과 O
`push(): 직접 지정 `pop(): 뒤로가기(이전화면)
`popToTop(): 뒤로가기(첫화면 = initialRouteName)

-헤더 변경
Stack.Screen의 options props로 변경해줌
+Android상의 '<-'와 같은 좌측 화살표 없앨 때
headerBackVisible:false

참고 : https://code-masterjung.tistory.com/126
