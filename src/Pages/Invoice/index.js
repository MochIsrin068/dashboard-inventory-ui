
import {useState} from 'react'
import IconFilter from  '../../Assets/Images/filter.png'
import IconSearch from  '../../Assets/Images/search-table.png'
import Table from '../../Components/Table'
import ModalFilter from '../../Components/ModalFilter'
import {ReactComponent as IconMore} from '../../Assets/Images/more.svg'
import {ReactComponent as IconClose} from '../../Assets/Images/close.svg'
import {ReactComponent as IconEdit} from '../../Assets/Images/edit.svg'
import {TABLE_NAME} from '../../Types'


const data = [
    {
        id : 1, 
        no_bbm : "BM/08/001/00062",
        no_faktur : "FP/08/OTX/00062",
        tanggal_masuk : 1,
        no_pbsb : "BP/07/001/00031",
        no_po : "-",
        tanggal_keluar : "21/12/2020",
        kode : "KGK001",
        no_kode : "C9.12.4B7",
        nama_suplier : "Surya Gemilang",
        nama_barang : "Bantal Besar",
        satuan : "Buah",
        harga : 100000,
        discount : 0,
        nilai_bruto : 65000,
        jumlah : {
            qty : 1,
            ongkos : 0,
            netto : 65000
        }
    },
    {
        id : 2, 
        no_bbm : "BM/08/001/00062",
        no_faktur : "FP/08/OTX/00062",
        tanggal_masuk : 1,
        no_pbsb : "BP/07/001/00031",
        no_po : "-",
        tanggal_keluar : "21/12/2020",
        kode : "KGK001",
        no_kode : "C9.12.4B7",
        nama_suplier : "Surya Gemilang",
        nama_barang : "Bantal Besar",
        satuan : "Buah",
        harga : 100000,
        discount : 0,
        nilai_bruto : 65000,
        jumlah : {
            qty : 1,
            ongkos : 0,
            netto : 65000
        }
    },
]


const Invoice = () => {
    const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)
    const [modalItemOpenID, setModalItemOpenID] = useState(null)

    const onCloseModalFilter = () => setIsOpenModalFilter(false)
    const onCloseModalAction = () => setModalItemOpenID(null)
    return(
        <>
            <div className="invoice">
                <div className="invoice__title">Table Invoice Barang</div>
                <div className="invoice__tableWrapper">
                    <div className="invoice__tableWrapper__action">
                        <div onClick={() => setIsOpenModalFilter(true)}>
                            <img src={IconFilter} alt=""/>
                            <span>Filter</span>
                        </div>
                        <div>
                            <img src={IconSearch} alt=""/>
                            <input type="text" placeholder="Search Barang by Name, Satuan or Kode"/>
                        </div>
                    </div>
                    <div className="invoice__tableWrapper__table">
                        <Table tableName={TABLE_NAME.INVOICE}>
                            {data.map((item, index) => {
                                return(
                                    <tr key={item.id} className="item">
                                        <td>{index + 1}</td>
                                        <td>{item.no_bbm} / {item.no_faktur}</td>
                                        <td>{item.tanggal_masuk}</td>
                                        <td>{item.no_pbsb} / {item.no_po}</td>
                                        <td>{item.tanggal_keluar}</td>
                                        <td>{item.kode} / {item.no_kode}</td>
                                        <td>{item.nama_suplier} - {item.nama_barang}</td>
                                        <td>{item.satuan}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.discount}</td>
                                        <td>{item.nilai_bruto}</td>
                                        <td>{item.jumlah.qty}</td>
                                        <td>{item.jumlah.ongkos}</td>
                                        <td>{item.jumlah.netto}</td>
                                        <td><IconMore /></td>
                                    </tr>
                                )
                            })}
                        </Table>
                    </div>
                </div>
            </div>
            <ModalFilter isOpen={isOpenModalFilter} onCLose={onCloseModalFilter} title="Modal Filter Invoice"/>
        </>
    )
}   

export default Invoice