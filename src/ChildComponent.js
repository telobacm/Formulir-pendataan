import { Component, Fragment } from "react";

export default class FormPendataan extends Component {
  state = {
    biodata: [],
  };

  componentDidMount() {
    console.log ('Komponen sampun Monting-Monting')
  }

  submit = (event) => {
    event.preventDefault();
    const { nama, namaBapak, TTL, nomorWA, alamatRumah} = event.target;
    const {biodata} = this.state
    biodata.push({
        nama: nama.value,
        namaBapak: namaBapak.value,
        TTL: TTL.value,
        nomorWA: nomorWA.value,
        alamatRumah: alamatRumah.value
    })

    this.setState({biodata})
  };


  render() {
    console.log("render", this.state.biodata)
    return (
      <Fragment>
        <div>
          <form onSubmit={this.submit}>
            <div>
              <h1>Formulir Pendataan Alumni Angkatan 30</h1>
              <input type="text" name="nama" placeholder="Nama" /> <p />
              <input type="text" name="namaBapak" placeholder="Nama Bapak" /> <p />
              <input type="text" name="TTL" placeholder="Tempat, Tanggal Lahir" /> <p />
              <input type="text" name="nomorWA" placeholder="nomor WhatsApp" /> <p />
              <input type="text" name="alamatRumah" placeholder="Alamat Rumah" /> <p />
              <br></br>
              <button type="submit"> SIMPAN </button>
            </div>
          </form>
          <div>
            <h1>Yang Sudah Terdata</h1>
            <table>
              <thead>
                <tr><th>Nama</th><th>Bin</th><th>Tempat, Tanggal Lahir</th><th>nomor WA</th><th>Alamat Rumah</th></tr>
              </thead>
              <tbody>
                {this.state.biodata.map((bio, i) =>
                <tr key={i}><td>{bio.nama}</td><td>{bio.namaBapak}</td><td>{bio.TTL}</td><td>{bio.nomorWA}</td><td>{bio.alamatRumah}</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    )
  }
}