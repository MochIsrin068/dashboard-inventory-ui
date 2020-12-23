import {ReactComponent as IconMore} from '../Assets/Images/more.svg'
import {TABLE_NAME} from '../Types'

const Table = ({children, tableName = TABLE_NAME.BARANG}) => {

    const renderTableComponent = ()  => {
        switch(tableName){
            case TABLE_NAME.BARANG :
                return(
                    <table>
                        <tr className="title">
                            <td rowSpan="2">No</td>
                            <td colSpan="2">Barang</td>
                            <td rowSpan="2">Satuan</td>
                            <td rowSpan="2">Saldo Awal</td>
                            <td colSpan="2">Mutasi</td>
                            <td colSpan="3">Saldo Akhir</td>
                            <td rowSpan="2"><IconMore/></td>
                        </tr>
                        <tr className="title">
                            <td>Kode</td>
                            <td>Name</td>
                            <td>Masuk</td>
                            <td>Keluar</td>
                            <td>Unit</td>
                            <td>Harga ( Rp )</td>
                            <td>Jumlah ( Rp )</td>
                        </tr>
                        {children}
                    </table>
                )
            case TABLE_NAME.INVOICE :
                return(
                    <table>
                        <tr className="title">
                            <td rowSpan="2">No</td>
                            <td rowSpan="2">NO BBM / NO Faktur</td>
                            <td rowSpan="2">Tanggal</td>
                            <td rowSpan="2">NO PBSB / NO PO</td>
                            <td rowSpan="2">Tanggal</td>
                            <td rowSpan="2">Kode / No Kode</td>
                            <td rowSpan="2">Nama Supler - Nama Barang</td>
                            <td rowSpan="2">Satuan</td>
                            <td rowSpan="2">Harga</td>
                            <td rowSpan="2">%Disc</td>
                            <td rowSpan="2">Nilai Bruto</td>
                            <td colSpan="3">Jumlah</td>
                            <td rowSpan="2"><IconMore/></td>
                        </tr>
                        <tr className="title">
                            <td>Qty</td>
                            <td>Ongkos</td>
                            <td>Netto</td>
                        </tr>
                        {children}
                    </table>
                )
        }
    }

    return(
        <div className="table">
            {renderTableComponent()}
        </div>
    )
}

export default Table