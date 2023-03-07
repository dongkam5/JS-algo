//프로그래머스 문자열 뒤집기
function solution(my_string) {
    var answer = '';
    for (let i=my_string.length-1;i>=0;i--){
        answer+=my_string[i]
    }
    return answer;
}