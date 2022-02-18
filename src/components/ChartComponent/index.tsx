import Chart from 'react-apexcharts'
import { Row } from '../Foundation/Row'
import { options } from './options'

const series = [
  {
    name: 'Sem aporte',
    data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  },
  {
    name: 'Com aporte',
    data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 68, 70, 75, 80, 87, 91, 95, 100],
  },
]

export default function ChartComponent() {
  return (
    <Row justify='flex-start' maxWidth='760px'>
      <Chart
        type='bar'
        height='400'
        width='600px'
        options={options}
        series={series}
      />
    </Row>
  )
}
