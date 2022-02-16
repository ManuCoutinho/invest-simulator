import Chart from "react-apexcharts"
import { Row } from "../Foundation/Row";

const options = {
  chart: {
    type:"bar",
    width: '100%',
    height: '100%',
    stacked: true,    
    fontFamily: "Roboto",
    foreColor: "#000",    
    toolbar: {
      show:false
    },
    zoom: {
      enabled: false,
    }     
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
    enabled: false
  },
  title: {
    text: 'Projeção de Valores',   
    style: {
      fontSize:  '20px',
      fontWeight:  500,
      fontFamily: 'Roboto',
      color:  '#000'
    },
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  stroke: {
    show: false,
    color: 'transparent',
    width: 5,    
  },
  grid: {
    show: false   
  },  
  tooltip: {
    enabled: false,
  },
  legend:{
    show: true,    
    onItemClick: {
      toggleDataSeries: false
    },
    onItemHover: {
      highlightDataSeries: true
    },
    markers: {      
      radius: 12,
    },
    itemMargin: {
      horizontal: 15,
      vertical: 20
    }
  },
  xaxis: {
    type: 'category',   
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'],
    labels: {
      show: true,    
    },
  title: {
    text: 'Tempo (em meses)'
    },
  },
  yaxis: {
    title: {
      text: 'Valor (R$)'
    },
    labels: {
      show: false
    },
  },
  fill: {
    colors: ['#000', '#ED8E53'],
    opacity: 1,
    type: 'solid',   
  }  
}

const series = [
  { name: 'Sem aporte', data:[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]},
  { name: 'Com aporte', data:[20, 25, 30, 35, 40, 45, 50, 55, 60, 68, 70, 75, 80, 87, 91, 95, 100]},
]

export default function ChartComponent() {
  return(
    <Row justify="flex-start">
      <Chart type="bar" height="400" width="650px" options={options} series={series} />
    </Row>
  )
}
