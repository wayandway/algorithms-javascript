function solution(number, k) {
    const stack = [];

    for (let digit of number) {
        // 현재 숫자보다 작거나 같은 숫자는 제거 (k가 남아있을 때만)
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // 아직 제거할 숫자가 남아있다면 뒤에서 자르기
    return stack.slice(0, stack.length - k).join('');
}

// 시간복잡도 : O(n) - n은 number의 길이