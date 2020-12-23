const Create = () => {
    return(
        <div className="create">
            <div className="create__breadcumb">barang {">"} create</div>
            <div className="create__title">Add New Barang</div>

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
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create