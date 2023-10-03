import logo from "./mark.jpg";
import "./App.css";
import  React, {useState} from 'react';

function App() {
  const [isiCircle, setIsiCircle] = useState(true);

  const toggleShape  = () => {setIsiCircle(!isiCircle);
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="fotopalingatas">
          <img src={logo} className={isiCircle? 'circle': 'square' } alt="logo" />
          <div className="tulisandibawahfoto">
            <ul>
              <li>Gender: Male</li>
              <li>Carer: Mahasiswa</li>
            </ul>
          </div>
        </div>

        <div className="tulisandisampingfoto">
          <div>
            <h2>Rino Gabriel Pandelaki</h2>
            <hr></hr>
          </div>
          <div className="tulisandibawahgaris">
            <ul>
              <li>Angkatan : 2022</li>
              <li>Major : Informatics</li>
              <li>Jalur Sukses : Startup</li>
              <li>Hobby : Gaming</li>
            </ul>
          </div>
        </div>
      </header>

      <div className="right-bottom">
        <button className='button' onClick={toggleShape}>Ubah</button>
      </div>

      <div className="deskripsi">
        <hr></hr>
        <p>Riwayat Organisasi : </p>
        <ul>
         <li> Ga ada</li>

        </ul>
        </div>

    </div>
  );
}

export default App;
