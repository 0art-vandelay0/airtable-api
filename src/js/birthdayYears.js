export default class BirthdayYears {
    constructor(ageCalc, pastBirthday, futureBirthday) {
        this.ageCalc = ageCalc;
        this.mercuryYear = ageCalc.solarPlanetYears.mercury;
        this.venusYear = ageCalc.solarPlanetYears.venus;
        this.marsYear = ageCalc.solarPlanetYears.mars;
        this.jupiterYear = ageCalc.solarPlanetYears.jupiter;
        this.pastBirthday = pastBirthday;
        this.futureBirthday = futureBirthday;
    }

    getYearsSincePastBirthday() {
        const earthYP = this.ageCalc.earthAge - this.pastBirthday;
        const earthYearsPassed = Number(earthYP.toFixed(2));
        const mercuryYP = earthYearsPassed / this.mercuryYear;
        const mercuryYearsPassed = Number(mercuryYP.toFixed(2));
        const venusYP = earthYearsPassed / this.venusYear;
        const venusYearsPassed = Number(venusYP.toFixed(2));
        const marsYP = earthYearsPassed / this.marsYear;
        const marsYearsPassed = Number(marsYP.toFixed(2));
        const jupiterYP = earthYearsPassed / this.jupiterYear;
        const jupiterYearsPassed = Number(jupiterYP.toFixed(2));
    
        return {
            earthYearsPassed,
            mercuryYearsPassed,
            venusYearsPassed,
            marsYearsPassed,
            jupiterYearsPassed,
        };
    }

    getYearsToFutureBirthday() {
        const earthYTF = this.futureBirthday - this.ageCalc.earthAge;
        const earthYearsToFuture  = Number(earthYTF.toFixed(2));
        const mercuryYTF = earthYearsToFuture / this.mercuryYear;
        const mercuryYearsToFuture = Number(mercuryYTF.toFixed(2));
        const venusYTF = earthYearsToFuture / this.venusYear;
        const venusYearsToFuture = Number(venusYTF.toFixed(2));
        const marsYTF = earthYearsToFuture / this.marsYear;
        const marsYearsToFuture = Number(marsYTF.toFixed(2));
        const jupiterYTF = earthYearsToFuture / this.jupiterYear;
        const jupiterYearsToFuture = Number(jupiterYTF.toFixed(2));
    
        return {
            earthYearsToFuture,
            mercuryYearsToFuture,
            venusYearsToFuture,
            marsYearsToFuture,
            jupiterYearsToFuture,
        };
    }
}