import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void
  {
    let slider = <HTMLElement>document.querySelector(".slider-contenedor")
    let sliderIndividual = document.querySelectorAll(".contenido-slider")
    let contador = 1;
    let width = sliderIndividual[0].clientWidth;
    let intervalo = 3000;

    window.addEventListener("resize", function ()
    {
        width = sliderIndividual[0].clientWidth;
    })

    setInterval(function ()
    {
        slides();
    },intervalo);



    function slides()
    {
        slider.style.transform = "translate("+(-width*contador)+"px)";
        slider.style.transition = "transform .8s";
        contador++;

      if (contador == sliderIndividual.length)
      {
        setTimeout(function ()
        {
          slider.style.transform = "translate(0px)";
          slider.style.transition = "transform 0s";
          contador=1;
        },2000)
      }
    }
  }
}