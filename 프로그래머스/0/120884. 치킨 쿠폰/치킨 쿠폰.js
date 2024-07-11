const getServiceChicken = (chicken) => {
    if(chicken < 10) return 0;
    const serviceChicken = Math.floor(chicken / 10);
    return serviceChicken + getServiceChicken(serviceChicken + (chicken % 10));
}

function solution(chicken) {
    return getServiceChicken(chicken);
}