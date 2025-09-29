// 1. express 모듈 가져오기 (import 사용)
import express from 'express';

// 2. express 앱 생성
const app = express();

// 3. 포트 번호 설정
const port = 3000;

// 4. GET 요청 처리 (루트 경로: '/')
app.get('/', (req, res) => {
  res.send('Hello World with ES Modules!');
});

// 5. 서버 실행 및 대기
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});