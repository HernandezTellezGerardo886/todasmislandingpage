import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // inicia parte de burger
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
    
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    
    });
    // (function () {
    //     var burger = document.querySelector('.burger');
    //     var menu = document.querySelector('#' + burger.dataset.target);
    //     burger.addEventListener('click', function () {
    //         burger.classList.toggle('is-active');
    //         menu.classList.toggle('is-active');
    //     });
    // })();
    // (function () {
    //     var burger = document.querySelector('.hotdog');
    //     var menu = document.querySelector('#' + burger.dataset.target);
    //         burger.addEventListener('click', function () {
    //         burger.classList.toggle('is-active');
    //         menu.classList.toggle('is-active');
    //     });
    // })()
    // termina parte de burger
  }

}
