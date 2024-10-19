//* K번째수 https://school.programmers.co.kr/learn/courses/30/lessons/42748 

function solution(array, commands) {
    return commands.map(command => {
        const [start, end, k] = command;  // command 배열의 요소를 분해할당
        const sortedArray = array.slice(start - 1, end).sort((a, b) => a - b);
        return sortedArray[k - 1];  // K번째 숫자 반환
    });
}
