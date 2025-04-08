//* 가장 많이 받은 선물 https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
    const n = friends.length;
    const giftMap = new Map();  // 친구별 선물 기록 저장
    const giftIndex = {};       // 친구 이름 → 인덱스 변환
    const giftTable = Array.from({ length: n }, () => Array(n).fill(0));
    const giftScore = new Array(n).fill(0);
    const nextGifts = new Array(n).fill(0);

    // 친구별 인덱스 매핑
    friends.forEach((friend, index) => {
        giftMap.set(friend, index);
    });

    // 주고받은 선물 기록 저장
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(" ");
        const giverIdx = giftMap.get(giver);
        const receiverIdx = giftMap.get(receiver);
        giftTable[giverIdx][receiverIdx]++;  // 선물 개수 저장
    });

    // 선물 지수 계산
    for (let i = 0; i < n; i++) {
        let given = 0, received = 0;
        for (let j = 0; j < n; j++) {
            given += giftTable[i][j];      // 준 선물 개수
            received += giftTable[j][i];   // 받은 선물 개수
        }
        giftScore[i] = given - received;  // 선물 지수 계산
    }

    // 다음 달 선물 계산
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (i === j) continue;
            if (giftTable[i][j] > giftTable[j][i]) {
                nextGifts[i]++; // i가 j에게 더 많이 줬다면 i가 선물 받음
            } else if (giftTable[i][j] < giftTable[j][i]) {
                nextGifts[j]++; // j가 i에게 더 많이 줬다면 j가 선물 받음
            } else {
                if (giftScore[i] > giftScore[j]) {
                    nextGifts[i]++; // 선물 지수가 높으면 i가 선물 받음
                } else if (giftScore[i] < giftScore[j]) {
                    nextGifts[j]++; // 선물 지수가 높으면 j가 선물 받음
                }
            }
        }
    }

    return Math.max(...nextGifts); // 가장 많이 받은 선물 개수 반환
}