import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-router-dom';
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact Component={Inicio} />
        <Route path="/productos" exact Component={ProductosLista} />
      </Switch>
    </section>
  )
}

export default Paginas;

