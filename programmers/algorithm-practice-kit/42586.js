//* 기능 개발 https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    let answer = [];
    let leftDays = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i])); // 각 기능별 남은 작업 일수
    let queue = [];

    for (let day of leftDays) {
        if (queue.length === 0 || queue[0] >= day) {
            queue.push(day);
        } else {
            answer.push(queue.length);
            queue = [day];
        }
    }
    
    answer.push(queue.length);
    return answer;
}

// 총 시간복잡도 O(N) : N은 progresses 배열의 길이