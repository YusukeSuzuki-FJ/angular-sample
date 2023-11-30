import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValueSharedService } from 'src/value-shared.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css'],
})
export class SecondpageComponent {
  title = 'figma_site_yusuke';
  infoId: any;
  infoName: any;
  form!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.pipe().subscribe((params) => {
      console.log(params);
      this.infoId = params['id'];
      this.infoName = params['name'];
    });
  }
}
