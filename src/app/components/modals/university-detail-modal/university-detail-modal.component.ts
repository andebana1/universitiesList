import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { University } from '@models/university.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UniversitiesService } from '@services/universities/universities.service';

@Component({
  selector: 'app-university-detail-modal',
  templateUrl: './university-detail-modal.component.html',
  styleUrls: ['./university-detail-modal.component.scss']
})
export class UniversityDetailModalComponent implements OnInit {

  @Input() public university!: University;

  public universityForm!: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private universityService: UniversitiesService
  ) { }

  ngOnInit(): void {
    this.universityForm = this.initForm();
  }

  private initForm(): FormGroup {
    return new FormGroup({
      country: new FormControl(this.university.country),
      alpha_two_code: new FormControl(this.university.alpha_two_code),
      name: new FormControl(this.university.name),
      domains: new FormControl(this.universityService.getUniversityDomains(this.university)),
      web_pages: new FormControl(this.universityService.getUniversityLinks(this.university)),
    });
  }

}
