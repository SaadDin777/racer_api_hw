function getRacerData(season, round) {

const url = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`

axios.get(url)

.then(function (response) {
    document.getElementById('positionOne').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position}`
    document.getElementById('positionTwo').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position}`
    document.getElementById('positionThree').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position}`
    document.getElementById('positionFour').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position}`
    document.getElementById('positionFive').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position}`
    document.getElementById('positionSix').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position}`
    document.getElementById('positionSeven').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position}`

    document.getElementById('nameOne').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName} ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}`
    document.getElementById('nameTwo').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName} ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName}`
    document.getElementById('nameThree').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName} ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName}`
    document.getElementById('nameFour').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName} ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName}`
    document.getElementById('nameFive').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName} ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName}`
    document.getElementById('nameSix').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName} ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName}`
    document.getElementById('nameSeven').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName} ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName}`
    
    document.getElementById('nationalityOne').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality}`
    document.getElementById('nationalityTwo').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality}`
    document.getElementById('nationalityThree').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality}`
    document.getElementById('nationalityFour').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality}`
    document.getElementById('nationalityFive').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality}`
    document.getElementById('nationalitySix').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality}`
    document.getElementById('nationalitySeven').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality}`

    document.getElementById('sponsorOne').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name}`
    document.getElementById('sponsorTwo').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name}`
    document.getElementById('sponsorThree').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name}`
    document.getElementById('sponsorFour').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name}`
    document.getElementById('sponsorFive').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name}`
    document.getElementById('sponsorSix').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name}`
    document.getElementById('sponsorSeven').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name}`

    document.getElementById('pointsOne').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points}`
    document.getElementById('pointsTwo').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points}`
    document.getElementById('pointsThree').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points}`
    document.getElementById('pointsFour').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points}`
    document.getElementById('pointsFive').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points}`
    document.getElementById('pointsSix').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points}`
    document.getElementById('pointsSeven').innerText = `${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points}`

    console.log(response);
})

.catch(function (error) {
    document.getElementById('getButton').innerText = error;
    console.log(error);
})

}

window.onload = function() {
    document.getElementById('getButton').onclick = function() {
        const getSeason = document.getElementById('season').value;
        const getRound = document.getElementById('round').value;

        getRacerData(getSeason, getRound);
        
    }
}




