import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';


//componentes


const routes: Routes = [
  { path: '', component: ListarProductosComponent }, 
  { path: 'crear-producto', component: CrearProductoComponent },
  {path:'crear-producto/:id',component:CrearProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
