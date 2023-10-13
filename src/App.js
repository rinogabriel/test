import logo from "./mark.jpg";
import "./App.css";
import  React, {useState} from 'react';

const App = () => {
  const [isiCircle, setIsiCircle] = useState(true);

  const toggleShape = () => {
    setIsiCircle(!isiCircle);
  };

  const imageClassName = isiCircle ? 'circle' : 'square';

  return React.createElement('div', { className: 'App' },
          React.createElement('header', { className: 'App-header' },
          React.createElement( 'div', { className: 'fotopalingatas' },
          React.createElement('img', {src: logo, className: imageClassName, alt: 'logo', }),
          React.createElement('div', { className: 'tulisandibawahfoto' },
          React.createElement('ul', null,
          React.createElement('li', null, 'Gender: Male'),
          React.createElement('li', null, 'Carer: Mahasiswa')
          )
        )
      ),
      React.createElement( 'div', { className: 'tulisandisampingfoto' },
      React.createElement( 'div', null,
      React.createElement('h2', null, 'Rino Gabriel Pandelaki'),
      React.createElement('hr', null)
     ),
      React.createElement('div',{ className: 'tulisandibawahgaris' },
      React.createElement( 'ul', null,
      React.createElement('li', null, 'Angkatan: 2022'),
      React.createElement('li', null, 'Major: Informatics'),
      React.createElement('li', null, 'Jalur Sukses: Startup'),
      React.createElement('li', null, 'Hobby: Gaming')
          )
        )
      )
    ),
    React.createElement('div',{ className: 'right-bottom' },
    React.createElement('button', { className: 'button', onClick: toggleShape }, 'Ubah')
    ),
    React.createElement( 'div', { className: 'deskripsi' },
    React.createElement('hr', null),
    React.createElement('p', null, 'Riwayat Organisasi :'),
    React.createElement('ul', null,
    React.createElement('li', null, 'Ga ada')
      )
    )
  );
};

export default App;
