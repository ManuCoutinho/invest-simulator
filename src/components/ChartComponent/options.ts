export const options = {
  chart: {
    type: 'bar',
    width: '100%',
    height: '100%',
    stacked: true,
    fontFamily: 'Roboto',
    foreColor: '#000',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ['#000', '#ED8E53'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '100%',
      rangeBarOverlap: false,
      hideOverflowingLabels: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: 'Projeção de Valores',
    style: {
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: 'Roboto',
      color: '#000',
    },
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: '500px',
        },
      },
    },
    {
      breakpoint: 1280,
      options: {
        chart: {
          width: '400px',
        },
      },
    },
    {
      breakpoint: 1150,
      options: {
        chart: {
          width: '350px',
        },
      },
    },
    {
      breakpoint: 400,
      options: {
        chart: {
          width: '300px',
        },
      },
    },
  ],
  stroke: {
    show: false,
    color: 'transparent',
    width: 5,
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  legend: {
    show: true,
    onItemClick: {
      toggleDataSeries: false,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
    markers: {
      radius: 12,
    },
    itemMargin: {
      horizontal: 15,
      vertical: 20,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
    ],
    labels: {
      show: true,
    },
    title: {
      text: 'Tempo (em meses)',
    },
  },
  yaxis: {
    title: {
      text: 'Valor (R$)',
    },
    labels: {
      show: false,
    },
  },
  fill: {
    colors: ['#000', '#ED8E53'],
    opacity: 1,
    type: 'solid',
  },
}
