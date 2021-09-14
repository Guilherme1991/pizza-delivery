import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendService } from 'src/app/service/send.service';
import { Send } from './../../models/send.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  nome: string = '';
  pizza: string = '';
  constructor(private routes: Router, private sendData: SendService) { }

  ngOnInit(): void {
  }
  send() {
    console.log(this.nome, this.pizza);
    this.sendData.sendTable(this.nome, this.pizza).subscribe(
      (send: Send) => {
        this.routes.navigateByUrl('table');
      },
      (error) => console.log(error)
    )
  }
}
