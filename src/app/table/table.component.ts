import { Component, OnInit } from '@angular/core';
import { Send } from '../models/send.model';
import { SendService } from './../service/send.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  transferencias: Send[] = [];
  exclude!: Send;
  constructor(private sendData: SendService) { }

  ngOnInit(): void {
    this.get();

  }
  get() {
    this.sendData.getData().subscribe((transferencia: Send[]) => {
      console.table(transferencia)
      this.transferencias = transferencia;
    },
      (error) => console.log(error)
    )
  }
  // delete():void {
  //   this.sendData.delData(transferencia.id: Send[]).subscribe();
  // }
  confirmDelete(open: Send) {
    open.drop = !open.drop;
  }
  cancel(open: Send) {
    open.drop = false;
  }
  exclusion(id: number) {
    this.sendData.delData(id).subscribe();
    window.location.reload();
  }
}
