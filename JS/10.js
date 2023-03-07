//프로그래머스 짝수의 합
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i
    }
  }
  return answer;
}