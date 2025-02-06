//* 동영상 재생기 https://school.programmers.co.kr/learn/courses/30/lessons/340213

function convertToSec(time) {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let currentPos = convertToSec(pos);
    const videoLenSec = convertToSec(video_len);
    const opStartSec = convertToSec(op_start);
    const opEndSec = convertToSec(op_end);

    // 1. 처음 위치가 오프닝 구간이면 자동 스킵
    if (opStartSec <= currentPos && currentPos <= opEndSec) {
        currentPos = opEndSec;
    }

    // 2. 명령어 처리
    for (const command of commands) {
        if (command === 'next') {
            currentPos = Math.min(currentPos + 10, videoLenSec);
        } else if (command === 'prev') {
            currentPos = Math.max(currentPos - 10, 0);
        }

        // 3. 이동 후 오프닝 구간에 들어가면 자동 스킵
        if (opStartSec <= currentPos && currentPos <= opEndSec) {
            currentPos = opEndSec;
        }
    }

    // 4. 시간 포맷 변환
    const min = String(Math.floor(currentPos / 60)).padStart(2, '0');
    const sec = String(currentPos % 60).padStart(2, '0');

    return `${min}:${sec}`;
}