import { Component, OnInit } from '@angular/core';

interface UserInfo {
  userName?: string;
  address?: string;
  card?: number;
  orderPrice?: number;
}

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent implements OnInit {
  constructor() {}

  userInfo: UserInfo = {};

  ngOnInit(): void {}

  updateUserInfo(val: UserInfo) {
    console.log({ val });

    this.userInfo = val;
  }
}
