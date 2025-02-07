function solution(priorities, location) {
    // 큐에 (우선순위, 원래 위치) 형태로 저장
    const queue = priorities.map((priority, idx) => ({ priority, idx }));
    let result = [];

    while (queue.length > 0) {
        const current = queue.shift();  // 큐에서 첫 번째 항목 꺼냄
        
        // 큐에 남은 프로세스 중 우선순위가 더 높은 프로세스가 있는지 확인
        if (queue.some(item => item.priority > current.priority)) {
            // 우선순위가 더 높은 프로세스가 있으면 다시 큐에 넣기
            queue.push(current);
        } else {
            // 우선순위가 가장 높으면 실행
            result.push(current); // 실행된 프로세스를 result 배열에 추가
        }
    }
    
    // result 배열에서 location에 해당하는 프로세스의 실행 순서를 찾음
    return result.findIndex(({ idx }) => idx === location) + 1; // 순서는 1부터 시작
}