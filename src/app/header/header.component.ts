import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public loggedIn = false;

    constructor() { }

    ngOnInit() {
        this.loggedIn = !!localStorage.getItem('userId');
    }

    public logout() {
        localStorage.clear();
        window.location.reload();
    }
}