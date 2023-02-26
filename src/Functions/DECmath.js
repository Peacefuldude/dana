export const DECmath = (temperature, humidity, baze) => {

    const result = {};

    if (temperature) {
        // G6 => WBT [°C]
        result.first = temperature * Math.atan(0.151977 * Math.pow((humidity + 8.313659), (1 / 2))) + Math.atan(temperature + humidity) - Math.atan(humidity - 1.676331) + (0.00391838 * Math.pow(humidity, (3 / 2))) * Math.atan(0.023101 * humidity) - 4.686035;
        // G19 => DBT_out [°C]
        result.fourth = temperature - baze * (temperature - result.first)
        // G17 => Water con. [g/kg air
        result.tenth = 0.24 * (temperature - result.fourth) / 1.8 / (1062 + 0.44 * (temperature + result.fourth) / 2 * 1.8) * 1000
        // G22 => dewT_in/out[°C]
        result.seventh = 243.04 * (Math.log(humidity / 100) + 17.625 * temperature / (243.04 + humidity)) / (17.625 - Math.log(humidity / 100) - 17.625 * temperature / (243.04 + temperature))
        // G7 => X [g/kg air]
        result.third = 621.9907 * 6.116441 * Math.pow(10, (7.591386 * result.seventh / (240.7263 + result.seventh))) / (998 - 6.116441 * Math.pow(10, (7.591386 * result.seventh / (240.7263 + result.seventh))))
        // G20 => RH_out
        result.fifth = Math.exp(-2501000 / 461.5 / (result.fourth + 273.15) / (result.seventh + 273.15) * (result.fourth - result.seventh)) * 100
        // G21 => WBT_out [°C]
        result.sixth = result.fourth * Math.atan(0.151977 * Math.pow((result.fifth + 8.313659), (1/2))) + Math.atan(result.fourth + result.fifth) - Math.atan(result.fifth - 1.676331) + 0.00391838 * Math.pow(result.fifth, (3 / 2)) * Math.atan(0.023101 * result.fifth) - 4.686035
        // G23 => X [g/kg air]
        result.eighth = 621.9907 * 6.116441 * Math.pow(10, 7.591386 * result.seventh / (240.7263 + result.seventh)) / (998 - 6.116441 * Math.pow(10, 7.591386 * result.seventh / (240.7263 + result.seventh)))
        // G24 => Water [g/kg air]
        result.ninth = result.eighth - result.third + result.tenth
    }

    return result;

}