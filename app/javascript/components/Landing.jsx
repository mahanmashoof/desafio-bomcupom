import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="">

    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="https://www.bomcupom.com/">
        <img src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/bomcupom-marca.png" width="215" alt=""/>
      </a>
    </nav>

    <div className="container heading">
      <div className="row">
        <div className="col-md-4 heading-img crop">
          <img id="first-img" src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/iconesnovos/bomcupomnotinhamao.png" alt=""/>
        </div>
        <div className="col-md-4 heading-text">
          <h1 id="main">Cupons de de$conto no seu Celular!</h1>
        </div>
        <div className="col-md-4 heading-img">
          <img id="second-img" src="https://www.hwy55.com/sites/default/files/scan.png" alt=""/>
        </div>
      </div>
      <div className="arrow hidden-sm">
        <img className="arrow-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-zLUuIdfGIBDZLCFF-20bvNI8wnhIz5k_Eabmd4CYDhYbsymn" alt=""/>
      </div>
    </div>

    <div className="video">
      <h1 className="video-text">Como Funciona</h1>
      <iframe className="video-img" src="https://www.youtube.com/embed/YIbRs-XZBjU"></iframe>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6 heading-text">
          <h1 id="main">Cadastre-se e saiba mais o que é o Bomcupom!</h1>
        </div>
        <form className="col-md-6 form">
          <div className="form-group">
            <input type="text" className="form-control" id="inputName" placeholder="Nome" required/>
          </div>
          <br/>
          <div className="form-group">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" required/>
          </div>
          <br/>
          <div className="form-group">
            <input type="password" className="form-control" id="inputPassword" placeholder="Senha" required/>
          </div>
          <br/>
          <div className="form-group">
            <label for="inputBirthday">Data de nascimento:</label>
            <input type="date" className="form-control" id="inputBirthday" required/>
          </div>
          <br/>
          <div className="form-group">
            <select id="inputState" className="form-control">
              <option selected>Sexo...</option>
              <option>feminino</option>
              <option>masculino</option>
              <option>terceiro</option>
            </select>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary btn-block">Cadastre-se</button>
        </form>
      </div>
    </div>

    <div className="clientesBC">
      <div className="container">
        <div>
          <img className="brands-img" src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/marcas-c.png" alt=""/>
        </div>
      </div>
    </div>

  </div>
);
