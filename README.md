![title 755eeb22](https://user-images.githubusercontent.com/59819898/103851867-16ce7600-50ee-11eb-8968-1f3a743f1ef1.png)
# Portfolio	
- 개인 프로젝트 호텔사이트
- 개발기간 :  2020/09 ~ 2020/12

# 설치 및 시작
  in the main folder
  ```
  npm install
  ```
  in the Client folder
  ```
  npm install
  ```
  To start the development Client, run this command:
  ```
  npm start
  ```
  To start the development server, run this command:
  ```
  npm run dev
  ```
# 기술 스택
- MERN Stack 사용

- 언어
  - Javascript / node.js
  
 - etc. 
   - React
   - redux (react-redux),redux-Saga
   - styled-components
   - express

 - API
    - kakao map
    
- 클라우드 서버
   - AWS EC2
   
- DATABASE 
  - mongoDB / mongoose
  
- 개발환경
  - MAC OS
 
 
 # 설명
![diagram 2ec3431b](https://user-images.githubusercontent.com/59819898/103851797-e981c800-50ed-11eb-87d8-fc5cc88fb3e5.png)
 
 ### front-end
  - 중복되는 css code는 styled components를 적극사용 코드재사용율을 높였습니다.
  - **덕스패턴**으로 modules폴더에 연관된 action-types, action-creater, reducer 를 하나의 파일에 작성.
  - 중복되는 action-type은 유틸함수를 만들어 리팩토링하였습니다.
  - 사용자 정보를 **localStorage**에 저장하여 새로고침하여도 사용자정보를 유지할수있게했습니다.
  - 프레젠테이션 컴포넌트와 컨테이너 컴포넌트를 분리하여 앱(기능)과 UI 에 대한 구분을 이해하기가 더 수월게하고 재사용성을 높였습니다.
  
 #### Back-end
  - AWS 무료 라이센스 사용하여 운영체제 Ubuntu에서 서버를 pm2로 작동하였습니다.
  - 사용자가 사이트내에서 회원가입,로그인 가능합니다.
  - 사용자가 예약시 mongoose 쿼리를 이용하여 예약내역을 가져옵니다.
  - bcrypt모듈을 사용하여 회원가입시 해쉬함수를 더해 비밀번호를 암호화해서 데이터베이스에 저장.  
  - 데이터 요청시 jsonwebtoken모듈을 사용하여 토큰기반인증을구현.
  

   
  
  

  
