const Update = () => {
    return(
        <div className="update">
            <div className="update__breadcumb">barang {">"} update</div>
            <div className="update__title">Update Barang 1</div>

            <form>
                <div className="input-container">
                    <label>Nama Barang</label>
                    <input type="text" placeholder="Nama Barang"/>
                </div>

                <div className="input-container">
                    <label>Satun Barang</label>
                    <input type="text" placeholder="Satuan Barang"/>
                </div>

                <div className="input-container">
                    <label>Harga Barang</label>
                    <input type="number" placeholder="Rp.0"/>
                </div>

                <div className="button-container">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default Update