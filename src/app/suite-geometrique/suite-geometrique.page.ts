import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-suite-geometrique',
    templateUrl: './suite-geometrique.page.html',
    styleUrls: ['./suite-geometrique.page.scss'],
})
export class SuiteGeometriquePage implements OnInit {

    suite = {};
    public q;
    public n;
    public n2;
    public elem_rechercher = 0;
    public U0;
    public u = [];
    public list = [];
    public ELEMENTS2: {}[] = [{}];


    constructor() {

    }


    ngOnInit() {
    }

    logFormgeo(id) {

        if (this.n === undefined || this.q === undefined || this.U0 === undefined) {
            this.cleargeo();
            this.erreurgeo();
            return;
        }

        this.ELEMENTS2[0] = this.U0;

        for (let i = 0; i <= this.n - 1; i++) {
            if (this.ELEMENTS2.length < this.n) {
                this.ELEMENTS2[i + 1] = <number>this.ELEMENTS2[i] * (this.q);

            }
            this.u[i] = 'U' + i;
        }

        if (document.getElementById(id).style.display = 'none') {
            document.getElementById(id).style.display = 'block';
            document.getElementById('erreur').style.display = 'none';
        } else {
            document.getElementById(id).style.display = 'none';
        }
        console.log(this.ELEMENTS2);

        return this.ELEMENTS2;

    }

    Searchgeo(id) {

        this.ELEMENTS2[this.n2] = <number>this.ELEMENTS2[this.n2 - 1] * (this.q);
        this.elem_rechercher = <number>this.ELEMENTS2[this.n2];
        if (document.getElementById(id).style.display = 'none') {
            document.getElementById(id).style.display = 'block';
            document.getElementById('elements').style.display = 'none';
            document.getElementById('erreur').style.display = 'none';

        } else {
            document.getElementById(id).style.display = 'none';
        }
        return this.elem_rechercher;
    }

    cleargeo() {
        this.ELEMENTS2 = [];
        this.elem_rechercher = 0;
        this.U0 = undefined;
        this.n = undefined;
        this.q = undefined;
        document.getElementById('elements').style.display = 'none';
        document.getElementById('elements2').style.display = 'none';
        document.getElementById('erreur').style.display = 'none';

    }

    erreurgeo() {
        document.getElementById('erreur').style.display = 'block';
    }
}
