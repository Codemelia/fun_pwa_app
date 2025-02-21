import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LOTTIE } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  index = 0
  
  // lottie file options
  options: AnimationOptions = {
    path: LOTTIE[this.index], // loads lottie animation based on index
    renderer: 'svg' // enforce svg renderer
  }

  width = '80vw'

  share = false

  // init function
  ngOnInit(): void {

    // get index from local storage
    const v = localStorage.getItem('idx')

    // parses v to int, defaults to 0 if null
    this.index = parseInt(v || '0')
    console.info('>>> this.index: ', this.index)

    // sets animation options based on index
    this.options = { path: LOTTIE[this.index] }

    console.info('>>> share: ', navigator.share)
    this.share = !!navigator.share // check if navig.share avail
    console.info('>>> share: ', this.share)

  }

  // share function
  shareContent() {
    
    navigator.share({
      title: 'Fun Angular App', // title for sharing link
      text: 'Check out my first PWA', // text for sharing link
      url: window.location.origin // goes to origin url
    })

  }

  // click for next animation function
  nextAnimation() {

    // incr idx, loop back if exceed array length
    this.index = (this.index + 1) % LOTTIE.length

    // recreate options for change detection
    this.options = { path: LOTTIE[this.index] }

    // save index and timestamp to localStorage
    localStorage.setItem('idx', `${this.index}`)
    localStorage.setItem('updated', (new Date()).toISOString())

  }

}
