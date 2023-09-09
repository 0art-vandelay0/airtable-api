import AgeCalc from '../src/js/ageCalc.js';

describe('AgeCalc', () => {

    let ageCalc;

    test('Should correctly create an ageCalc object with earthAge property', () => {
        // const ageCalc = new AgeCalc(25);
        expect(ageCalc.earthAge).toEqual(25);
    });

    beforeEach(() => {
        ageCalc = new AgeCalc(25);
    });

    test('Should correctly create an ageCalc object with solarPlanetYears property', () => {
        // const ageCalc = new AgeCalc(25);
        expect(ageCalc.solarPlanetYears).toEqual({
            mercury: 0.24,
            venus: 0.62,
            mars: 1.88,
            jupiter: 11.86
        });
    });

    test('Should calculate age in Mercury years from earth years', () => {
        // const ageCalc = new AgeCalc(25);
        expect(ageCalc.getMercuryAge()).toEqual(104.17);
    });

    test('Should calculate age in Venus years from earth years', () => {
        // const ageCalc = new AgeCalc(25);
        expect(ageCalc.getVenusAge()).toEqual(40.32);
    });

    test('Should calculate age in Mars years from earth years', () => {
        // const ageCalc = new AgeCalc(25);
        expect(ageCalc.getMarsAge()).toEqual(13.30);
    });

    test('Should calculate age in Jupiter years from earth years', () => {
        // const ageCalc = new AgeCalc(25);
        expect(ageCalc.getJupiterAge()).toEqual(2.11);
    });

});