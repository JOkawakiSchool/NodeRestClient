import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IBike {
  id?: number;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  cars = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    this.cars = await this.getCars('car');
    //  this.createCar('car', { make: 'Tesla', model: 'X'});
  }

  // getCar('car');
  async getCars(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getCars() ', resp);
    return resp;
  }

  async createCar(path: string, payload: any) {
    const resp = await this.http.post(path, payload);
    console.log('from createCar resp: ', resp);
  }

}
