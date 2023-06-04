import { Component, OnInit } from '@angular/core';
import { UniversityDetailModalComponent } from '@components/modals/university-detail-modal/university-detail-modal.component';
import { University } from '@models/university.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { UniversitiesService } from '@services/universities/universities.service';
import { selectUniversitiesList, selectUniversitiesLoading, selectUniversitySearchTerm } from '@states/universities/universities.selectors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  universities$: Observable<Array<University>> = this.store.select(selectUniversitiesList);
  searching$: Observable<boolean> = this.store.select(selectUniversitiesLoading);
  searchTerm$: Observable<string | undefined> = this.store.select(selectUniversitySearchTerm);

  constructor(
    public universityService: UniversitiesService,
    private store: Store,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  public openUniversityModalDetail(university: University): void {
    const modalRef = this.modalService.open(UniversityDetailModalComponent);
    modalRef.componentInstance.university = university;
  }

}
