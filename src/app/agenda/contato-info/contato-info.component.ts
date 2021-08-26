import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato-info',
  templateUrl: './contato-info.component.html',
  styleUrls: ['./contato-info.component.css']
})
export class ContatoInfoComponent implements OnInit {
  contatoId!: number;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.contatoId = +this.activateRoute.snapshot.paramMap.get;
  }

}
