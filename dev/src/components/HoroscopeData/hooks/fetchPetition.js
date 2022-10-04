let data;

function fetchHoroscopeData(sign){
    return fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
    {
    	method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch(error => console.warn(error));
}

export default fetch