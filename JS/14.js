//프로그래머스 배열 자르기
function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1,num2+1);
    return answer;
}