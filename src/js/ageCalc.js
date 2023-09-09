export default class AgeCalc {
    constructor(earthAge) {
        this.earthAge = earthAge;
        this.solarPlanetYears = {
            mercury: 0.24,
            venus: 0.62,
            mars: 1.88,
            jupiter: 11.86
        };
    }

    getMercuryAge() {
        const mercuryAge = this.earthAge / this.solarPlanetYears.mercury;
        return Number(mercuryAge.toFixed(2));
    }

    getVenusAge () {
        const venusAge = this.earthAge / this.solarPlanetYears.venus;
        return Number(venusAge.toFixed(2));
    }

    getMarsAge () {
        const marsAge = this.earthAge / this.solarPlanetYears.mars;
        return Number(marsAge.toFixed(2));
    }

    getJupiterAge () {
        const jupiterAge = this.earthAge / this.solarPlanetYears.jupiter;
        return Number(jupiterAge.toFixed(2));
    }

}