//* A+B

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on("line", (line) => {
    lines.push(line.split(" "));
}).on("close", () => {
    const n = lines.slice(0, 1);
    const numbers = lines.slice(1)
    for (let i = 0; i < numbers.length; i++) {
        let [A, B] = numbers[i];
        console.log(`Case #${i + 1}: ${solution(parseInt(A), parseInt(B))}`);
    }
});

function solution(A, B) {
    return A + B;
}
