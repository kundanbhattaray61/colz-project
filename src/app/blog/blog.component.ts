import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';



@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    constructor() {
        this.openMenu();

    }

    ngOnInit() {
    }

    openMenu(){
        $('body').removeClass('noScroll');
        if ($('.collapse').hasClass('collapse-active')) {
            $('.collapse').removeClass('collapse-active');
        }
        else {
            $('.collapse').addClass('collapse-active');
        }
    }
}