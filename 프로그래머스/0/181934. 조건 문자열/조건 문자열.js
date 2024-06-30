const operation = {
    ">=": (n) => (m) => n >= m,
    "<=": (n) => (m) => n <= m,
    ">!": (n) => (m) => n > m,
    "<!": (n) => (m) => n < m
};

const getOperation = (ineq, eq) => operation[`${ineq}${eq}`];

function solution(ineq, eq, n, m) {
    return Number(getOperation(ineq, eq)(n)(m)) ? 1 : 0;
}