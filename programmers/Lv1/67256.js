//* 키패드 누르기 https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    const keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#']
    ];

    let left = [3, 0], right = [3, 2]; // 왼손, 오른손 초기 위치
    let result = '';

    // 숫자 위치 찾기 함수 [행, 열]
    function getPosition(num) {
        for (let row = 0; row < 4; row++) {
            const col = keypad[row].indexOf(num);
            if (col !== -1) return [row, col];
        }
    }

    // 숫자 누를 때마다 처리
    for (const num of numbers) {
        let target = getPosition(num);

        // 왼쪽 열 (1, 4, 7)
        if (target[1] === 0) {
            result += 'L';
            left = target;
        }
        // 오른쪽 열 (3, 6, 9)
        else if (target[1] === 2) {
            result += 'R';
            right = target;
        }
        // 가운데 열 (2, 5, 8, 0)
        else {
            const leftDist = Math.abs(left[0] - target[0]) + Math.abs(left[1] - target[1]);
            const rightDist = Math.abs(right[0] - target[0]) + Math.abs(right[1] - target[1]);

            if (leftDist < rightDist || (leftDist === rightDist && hand === 'left')) {
                result += 'L';
                left = target;
            } else {
                result += 'R';
                right = target;
            }
        }
    }

    return result;
}
