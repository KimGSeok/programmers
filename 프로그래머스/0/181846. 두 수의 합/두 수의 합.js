const toNumber = (str) => BigInt(str);

function solution(a, b) {
    return `${toNumber(a)+toNumber(b)}`;
}