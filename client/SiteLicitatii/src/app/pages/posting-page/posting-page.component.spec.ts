import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingPageComponent } from './posting-page.component';

describe('PostingPageComponent', () => {
  let component: PostingPageComponent;
  let fixture: ComponentFixture<PostingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
