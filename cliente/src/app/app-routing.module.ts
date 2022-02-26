import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';

//componentes


const routes: Routes = [
  { path: '', component: ListarProductosComponent }, 
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'crear-producto/:id', component: CrearProductoComponent },
  { path: 'actualizar-producto', component: ActualizarProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
