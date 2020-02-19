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
          <h1 id="main">Cupons de de$conto no seu Celular! </h1>
        </div>
        <div className="col-md-4 heading-img">
          <img id="second-img" src="https://www.hwy55.com/sites/default/files/scan.png" alt=""/>
        </div>
      </div>
      <div className="arrow">
        <img className="arrow-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-zLUuIdfGIBDZLCFF-20bvNI8wnhIz5k_Eabmd4CYDhYbsymn" alt=""/>
      </div>
    </div>

    <div class="video">
      <h1 class="video-text">Como Funciona</h1>
      <iframe width="640" height="360" src="https://www.youtube.com/embed/YIbRs-XZBjU"></iframe>
    </div>

    <div className="form">
      <form>
        <div class="form-group">
          <input type="text" class="form-control" id="inputName" placeholder="Nome"/>
        </div>
        <br/>
        <div class="form-group">
          <input type="email" class="form-control" id="inputEmail" placeholder="email"/>
        </div>
        <br/>
        <div class="form-group">
          <input type="password" class="form-control" id="inputPassword" placeholder="senha"/>
        </div>
        <br/>
        <div class="form-group">
          <label for="inputBirthday">Data de nascimento:</label>
          <input type="date" class="form-control" id="inputBirthday"/>
        </div>
        <br/>
        <div class="form-group">
          <select id="inputState" class="form-control">
            <option selected>sexo...</option>
            <option>feminino</option>
            <option>masculino</option>
            <option>terceiro</option>
          </select>
        </div>
        <br/>
        <button type="submit" class="btn-lg btn-primary">Sign in</button>
      </form>
    </div>

  </div>
);
