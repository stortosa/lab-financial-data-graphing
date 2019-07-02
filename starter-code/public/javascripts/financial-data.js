axios
  .get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(datos => {
    console.log(datos.data.bpi)
    const date = Object.keys(datos.data.bpi);
    const value = Object.values(datos.data.bpi);

    printTheChart(date, value);

  }).catch(error => console.log(error));



const printTheChart = ((date, value) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: date,
      datasets: [{
        label: "Bitcoin Price Index",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: value,
      }]
    }
  });
});

document.getElementById('check').onclick = () => {
  let ini = document.getElementById('from').value
  let end = document.getElementById('to').value

  axios
    .get('https://api.coindesk.com/v1/bpi/historical/close.json?start=${ini}&end=${end}')
    .then(datos => {
      console.log(datos.data.bpi)
      const date = Object.keys(datos.data.bpi);
      const value = Object.values(datos.data.bpi);

      printTheChart(date, value);

    }).catch(error => console.log(error));



  const printTheChart = ((date, value) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [{
          label: "Bitcoin Price Index",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: value,
        }]
      }
    });
  });
}