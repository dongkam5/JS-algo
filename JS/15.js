//프로그래머스 배열 원소의 길이
function solution(strlist) {
    var answer = [];
    for (str of strlist){
        answer.push(str.length)
    }
    return answer;
}