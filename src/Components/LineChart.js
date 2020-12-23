import {Line} from '@reactchartjs/react-chart.js'

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

const LineChart = ({data, size = {}}) => (
    <>
        <Line data={data} options={options} height={size.height} width={size.width}/>
    </>
)

export default LineChart