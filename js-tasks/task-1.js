function calcBMI(weight, height) {
    const bmi = calcBMI("88,3", "1.75");
    return parseFloat((weight / (height * height)).toFixed(2));
}