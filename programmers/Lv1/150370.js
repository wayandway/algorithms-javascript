//* 개인정보 수집 유효기간 https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
    // 날짜를 'YYYY.MM.DD' → 총 일(day) 단위로 변환하는 함수
    function convertDateToDays(dateStr) {
        let [year, month, day] = dateStr.split('.').map(Number);
        return (year * 12 * 28) + (month * 28) + day;
    }

    // 약관별 유효기간 저장 (예: { A: 6, B: 12, C: 3 })
    let termMap = {};
    for (let term of terms) {
        let [type, duration] = term.split(' ');
        termMap[type] = Number(duration);
    }

    let todayDays = convertDateToDays(today);
    let result = [];

    // 개인정보 별로 만료일 계산 후 파기 여부 판단
    privacies.forEach((privacy, index) => {
        let [date, type] = privacy.split(' ');
        let collectedDays = convertDateToDays(date); // 수집일 → 총 일(day) 변환
        let expirationDays = collectedDays + termMap[type] * 28; // 만료일 계산

        if (expirationDays <= todayDays) {
            result.push(index + 1);
        }
    });

    return result;
}


// terms 배열 순회: O(T)
// privacies 배열 순회: O(P)
// 날짜 변환 연산: O(1)
// 최종 시간 복잡도는 O(T + P) ≈ O(N)