import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoInfoComponent } from './contato-info.component';

describe('ContatoInfoComponent', () => {
  let component: ContatoInfoComponent;
  let fixture: ComponentFixture<ContatoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
