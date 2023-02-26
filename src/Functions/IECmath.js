export const IECmath = (temperature, humidity, baze) => {

    const result = {};

    if (temperature) {
        // C6 => WBT [°C]
        result.first = temperature * Math.atan(0.151977 * Math.pow((humidity + 8.313659), (1 / 2))) + Math.atan(temperature + humidity) - Math.atan(humidity - 1.676331) + (0.00391838 * Math.pow(humidity, (3 / 2))) * Math.atan(0.023101 * humidity) - 4.686035;
        // C8 => DewT_in [°C]
        result.second = 243.04 * (Math.log(humidity / 100 ) + 17.625 * temperature / (243.04 + temperature)) / (17.625 - Math.log(humidity / 100) - 17.625 * temperature / (243.04 + temperature))
        // C7 => X [g/kg air]
        result.third = 621.9907 * 6.116441 * Math.pow(10, (7.591386 * result.second / (240.7263 + result.second))) / (998 - 6.116441 * Math.pow(10, (7.591386 * result.second / (240.7263 + result.second))))
        // C17 => Water con. [g/kg air
        result.tenth = 0.00
        // C19 => DBT_out [°C]
        result.fourth = temperature - baze * (temperature - result.first)
        // C20 => RH_out
        result.fifth = (6.112 * Math.exp(17.502 * result.first / (240.97 + result.first)) - 0.00066 * (1 + 0.00115 * result.first) * 1013.25024 * (result.fourth - result.first)) / 6.112 / Math.exp(17.502 * result.fourth / (240.97 + result.fourth)) * 100
        // C21 => WBT_out [°C]
        result.sixth = result.first;
        // C22 => DewT_out [°C]
        result.seventh = 243.04 * (Math.log(result.fifth / 100)+ 17.625 * result.fourth / (243.04 + result.fourth)) / (17.625 - Math.log(result.fifth / 100) - 17.625 * result.fourth / (243.04 + result.fourth))
        // C23 => X [g/kg air]
        result.eighth = 621.9907 * 6.116441 * Math.pow(10, 7.591386 * result.seventh / (240.7263 + result.seventh)) / (998 - 6.116441 * Math.pow(10, 7.591386 * result.seventh / (240.7263 + result.seventh)))
        // C24 => Water [g/kg air]
        result.ninth = result.eighth - result.third
    }


    return result;

}