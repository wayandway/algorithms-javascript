//* 다리를 지나는 트럭 https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0); // 다리 위 트럭 상태 초기화
    let time = 0;  // 경과 시간
    let currentWeight = 0;  // 현재 다리 위의 트럭들의 총 무게
    let truckIndex = 0;  // 대기 중인 트럭의 인덱스
    
    while (truckIndex < truck_weights.length) {
        time++;
        
        // 다리 위에서 트럭이 하나 빠짐
        currentWeight -= bridge.shift();
        
        // 새로 다리에 올릴 트럭이 있는지 확인
        if (currentWeight + truck_weights[truckIndex] <= weight) {
            bridge.push(truck_weights[truckIndex]);  // 다리 위에 트럭 추가
            currentWeight += truck_weights[truckIndex];  // 다리 위의 총 무게 갱신
            truckIndex++;  // 대기 중인 트럭의 인덱스 증가
        } else {
            bridge.push(0);  // 트럭이 다리에 올라가지 못하면 0을 추가
        }
    }
    
    // 마지막 트럭이 다리를 건너는데 걸리는 시간을 포함하여 반환
    return time + bridge_length;
}