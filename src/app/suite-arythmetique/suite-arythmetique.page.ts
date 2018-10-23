import {Component, OnInit} from '@angular/core';
import {Form, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-suite-arythmetique',
    templateUrl: './suite-arythmetique.page.html',
    styleUrls: ['./suite-arythmetique.page.scss'],
})

export class SuiteArythmetiquePage implements OnInit {

    suite = {};
    public r;
    public n;
    public n2;
    public elem_rechercher = 0;
    public U0;
    public u = [];
    public list = [];
    public ELEMENTS = [{}];


    constructor() {

    }


    ngOnInit() {
    }

    logForm(id) {


        for (let i = 0; i <= this.n; i++) {
            this.ELEMENTS[i] = +this.U0 + +(this.r * i);
            this.u[i] = 'U' + i;
        }

        if (document.getElementById(id).style.display = 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
        console.log(this.ELEMENTS);

        return this.ELEMENTS;
    }

    show() {
        if (this.ELEMENTS.length > 15) {
            return false;
        } else {
            return true;
        }
    }

    Search(id) {

        this.ELEMENTS[this.n2] = +this.U0 + +(this.r * this.n2);
        this.elem_rechercher = <number>this.ELEMENTS[this.n2];
        if (document.getElementById(id).style.display = 'none') {
            document.getElementById(id).style.display = 'block';
            document.getElementById('elements').style.display = 'none';
        } else {
            document.getElementById(id).style.display = 'none';
        }
        return this.elem_rechercher;
    }

    clear() {
        this.ELEMENTS = [];
        this.elem_rechercher = 0;
        this.U0 = null;
        this.n = null;
        this.r = null;
        document.getElementById('elements').style.display = 'none';
        document.getElementById('elements2').style.display = 'none';

    }
}
