
import {useState} from 'react'
import IconFilter from  '../../Assets/Images/filter.png'
import IconSearch from  '../../Assets/Images/search-table.png'
import Table from '../../Components/Table'
import ModalFilter from '../../Components/ModalFilter'
import {Link} from 'react-router-dom'
import {ReactComponent as IconMore} from '../../Assets/Images/more.svg'
import {ReactComponent as IconClose} from '../../Assets/Images/close.svg'
import {ReactComponent as IconEdit} from '../../Assets/Images/edit.svg'
import {TABLE_NAME} from '../../Types'

const data = [
    {
        id : 1, 
        kode : "KD001", 
        nama : "Barang 1", 
        satuan : "Meter", 
        saldo : {
            awal : 200000,
            akhir : {
                unit : 400,
                harga : 100000,
                jumlah : 40000000
            }
        },
        mutasi : {
            masuk : 200,
            keluar : 50
        }
    },
    {
        id : 2, 
        kode : "KD002", 
        nama : "Barang 2", 
        satuan : "Meter", 
        saldo : {
            awal : 200000,
            akhir : {
                unit : 400,
                harga : 100000,
                jumlah : 40000000
            }
        },
        mutasi : {
            masuk : 200,
            keluar : 50
        }
    }
]

const Barang = ({history}) => {
    const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)
    const onCloseModalFilter = () => setIsOpenModalFilter(false)
    return(
        <>
            <div className="barang">
                <div className="barang__title">Table Barang</div>
                <div className="barang__tableWrapper">
                    <div className="barang__tableWrapper__action">
                        <div>
                            <div onClick={() => setIsOpenModalFilter(true)}>
                                <img src={IconFilter} alt=""/>
                                <span>Filter</span>
                            </div>

                            <div>
                                <img src={IconSearch} alt=""/>
                                <input type="text" placeholder="Search Barang by Name, Satuan or Kode"/>
                            </div>
                        </div>
                        <span>
                            <Link to="/barang/create">Add New +</Link>
                        </span>
                    </div>
                    <div className="barang__tableWrapper__table">
                        <Table tableName={TABLE_NAME.BARANG}>
                            {data.map((item, index) => {
                                return(
                                    <tr key={item.id} className="item" onClick={() => history.push(`/barang/${item.id}/detail`)}>
                                        <td>{index + 1}</td>
                                        <td>{item.kode}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.satuan}</td>
                                        <td>{item.saldo.awal}</td>
                                        <td>{item.mutasi.masuk}</td>
                                        <td>{item.mutasi.keluar}</td>
                                        <td>{item.saldo.akhir.unit}</td>
                                        <td>{item.saldo.akhir.harga}</td>
                                        <td>{item.saldo.akhir.jumlah}</td>
                                        <td>
                                            <table>
                                                <tr>
                                                    <td>&nbsp;&nbsp;</td>
                                                    <td><IconEdit />&nbsp;&nbsp;</td>
                                                    <td><IconClose /></td>
                                                    {/* <td><IconMore /></td> */}
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                )
                            })}
                        </Table>
                    </div>
                </div>
            </div>
            <ModalFilter isOpen={isOpenModalFilter} onCLose={onCloseModalFilter} title="Modal Filter Barang"/>
        </>
    )
}   

export default Barang