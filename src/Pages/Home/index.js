
import InfoBackgroundPink from '../../Assets/Images/bg-first.png'
import InfoBackgroundOrange from '../../Assets/Images/bg-secound.png'
import InfoBackgroundBlue from '../../Assets/Images/bg-third.png'
import {ReactComponent as IconArrowUp} from '../../Assets/Images/arrow-top-border.svg'
import LineChart from '../../Components/LineChart'

const itemsInformation = [
    {
        title : "Total Barang",
        count : "180",
        image : InfoBackgroundPink
    },
    {
        title : "Jenis Barang",
        count : "80",
        image : InfoBackgroundOrange
    },
    {
        title : "Total Invoice",
        count : "100",
        image : InfoBackgroundBlue
    }
]


const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
        {
            label: '# December',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
}

const Home = () => {
    return(
        <div className="home">
            <div className="home__informasi">
                <h3>Informasi</h3>
                <div>
                    {itemsInformation.map((item, index) => {
                        return (
                            <div key={index} style={{background : `url(${item.image})`}}>
                                <h4>{item.title}</h4>
                                <div>
                                    <h3>{item.count}</h3>
                                    <IconArrowUp/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="home__statistik">
                <h3>Statistik Harga</h3>
                <div>
                    <LineChart 
                        data={data}
                        size={{height : 90}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home