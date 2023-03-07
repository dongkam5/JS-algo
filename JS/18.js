//프로그래머스 피자 나눠 먹기(3)
function solution(slice, n) {
    var answer = (parseInt((n-1)/slice)+1);
    return answer;
}