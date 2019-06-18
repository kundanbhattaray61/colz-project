import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-help',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

    faqsFiltered = [
        {
            'question': '',
            'answer': ''
        },
        {
            'question': '',
            'answer': ''
        },
        {
            'question': '',
            'answer': ''
        },
        {
            'question': '',
            'answer': ''
        },
        {
            'question': '',
            'answer': ''
        },
        {
            'question': '',
            'answer': ''
        },
        {
            'question': '',
            'answer': ''
        },
        {
            'question': '',
            'answer': ''
        }
        ];

    constructor() {
        this.openMenu();
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
