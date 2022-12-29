import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  Heroes:string[] = ['SpiderMan','Hulk','CapitanAmerica','IronMan','Thor'];
  // mi mamnera HeroeEli:string[] = [];
  HeroeEli:string = '';
  
  borrarHeroe(){
    const Eliminado = this.Heroes.shift() || "";
    // this.HeroeEli.push(Eliminado);
    this.HeroeEli =Eliminado;
    console.log(this.HeroeEli);
    
  }
  

}
