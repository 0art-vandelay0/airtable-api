import BirthdayYears from '../src/js/birthdayYears.js';
import AgeCalc from '../src/js/ageCalc.js';

describe('BirthdayYears', () => {
    test('Should create a birthdayYears object with mercuryYear, venusYear, marsYear, jupiterYear, pastBirthday, and futureBirthday properties', () => {
        const ageCalc = new AgeCalc(25);
        const pastBirthday = 20;
        const futureBirthday = 30;
        const birthdayYears = new BirthdayYears(ageCalc, pastBirthday, futureBirthday);
    
        expect(birthdayYears.mercuryYear).toEqual(ageCalc.solarPlanetYears.mercury);
        expect(birthdayYears.mercuryYear).toEqual(0.24);
        expect(birthdayYears.venusYear).toEqual(ageCalc.solarPlanetYears.venus);
        expect(birthdayYears.venusYear).toEqual(0.62);
        expect(birthdayYears.marsYear).toEqual(ageCalc.solarPlanetYears.mars);
        expect(birthdayYears.marsYear).toEqual(1.88);
        expect(birthdayYears.jupiterYear).toEqual(ageCalc.solarPlanetYears.jupiter);
        expect(birthdayYears.jupiterYear).toEqual(11.86);
        expect(birthdayYears.pastBirthday).toEqual(pastBirthday);
        expect(birthdayYears.futureBirthday).toEqual(futureBirthday);
    });

    let ageCalc;
    let pastBirthday;
    let futureBirthday;
    let birthdayYears;

    beforeEach(() => {
        ageCalc = new AgeCalc(56);
        pastBirthday = 43;
        futureBirthday = 61;
        birthdayYears = new BirthdayYears(ageCalc, pastBirthday, futureBirthday);
    });

    test('Should return the number of mercury years from past birthday', () => {
        const mercuryBirthdays = birthdayYears.getYearsSincePastBirthday().mercuryYearsPassed;
        expect(mercuryBirthdays).toEqual(54.17);
    });

    test('Should return the number of mars years from past birthday', () => {
        const marsBirthdays = birthdayYears.getYearsSincePastBirthday().marsYearsPassed;
        expect(marsBirthdays).toEqual(6.91);
    });

    test('Should return the number of venus years to future birthday', () => {
        const venusBirthdays = birthdayYears.getYearsToFutureBirthday().venusYearsToFuture;
        expect(venusBirthdays).toEqual(8.06);
    });

    test('Should return the number of jupiter years to future birthday', () => {
        const jupiterBirthdays = birthdayYears.getYearsToFutureBirthday().jupiterYearsToFuture;
        expect(jupiterBirthdays).toEqual(0.42);
    });

});