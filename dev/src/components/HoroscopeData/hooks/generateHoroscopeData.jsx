import zodiacSigns from './zodiacSigns.json';

const generateHoroscopeData = (e) => {
    let horoscope;
    const birthdateMonth = new Date(e.target.value).getMonth()+1;
    const birthdateDay = new Date(e.target.value).getUTCDate();
    zodiacSigns.map( async (obj)  => {
            const startDay = new Date(obj.date[0]).getUTCDate();
            const startMonth = new Date(obj.date[0]).getMonth()+1;
            const endDay = new Date(obj.date[1]).getUTCDate();
            const endMonth = new Date(obj.date[1]).getMonth()+1;
            if(birthdateMonth == startMonth){
                if(birthdateDay >= startDay){
                  horoscope = obj;
                };
            }
            else if(birthdateMonth > startMonth){
                if(birthdateMonth <= endMonth && birthdateDay <= endDay){
                  horoscope = obj;
                };
            }
            else if(birthdateMonth < startMonth){
                if(birthdateMonth == endMonth && birthdateDay <= endDay){
                  horoscope = obj;
                };
              };
            });
    return horoscope
};

export default generateHoroscopeData;