import {Link} from 'react-router-dom'
import {ReactComponent as IconArrowBottom} from '../../../Assets/Images/arrow-chevron-bottom.svg' 
import {ReactComponent as IconArrowTop} from '../../../Assets/Images/arrow-chevron-top.svg' 
import LineChart from '../../../Components/LineChart'


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

const Detail = () => {
    return(
        <div className="detail">
            <div className="detail__breadcumb">barang {">"} KD001</div>
            <div className="detail__header">
                <div className="detail__header__title">Detail Barang 1</div>
                <Link to="/barang/1/update" className="detail__header__button">
                    <button>Edit</button>
                </Link>
            </div>

            <div className="detail__content">
                <div className="detail__content__info"> 
                    <label>#KD001</label>
                    <div className="detail__content__info__oneLine">
                        <label>Satuan</label>
                        <label>Meter ( M )</label>
                    </div>

                    <div className="detail__content__info__oneLine">
                        <label>Saldo Awal</label>
                        <label>Rp. 200.000</label>
                    </div>

                    <div className="detail__content__info__mutasi">
                        <label>Mutasi</label>
                        <div>
                            <div>
                                <label>200 ( In )</label>
                                <IconArrowBottom />
                            </div>

                            <div>
                                <label>50 ( Out )</label>
                                <IconArrowTop />
                            </div>
                        </div>
                    </div>

                    <div className="detail__content__info__saldo">  
                        <label>Saldo Akhir</label>
                        <div>
                            <label>400 ( Unit )</label>
                            <label>Rp. 20.000</label>
                            <div>
                                <div /><span>x</span>
                            </div>
                            <p>Rp. 800.000</p>
                        </div>
                    </div>
                </div>

                <div className="detail__content__chart"> 
                    <LineChart data={data} />
                </div>
            </div>
        </div>
    )
}

export default Detail 