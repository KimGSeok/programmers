function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    const sortedDic = dic.map((item) => [...item].sort().join(''));
    return sortedDic.includes(sortedSpell) ? 1 : 2;
}