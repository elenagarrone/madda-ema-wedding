import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliListaViaggioComponent } from './dettagli-lista-viaggio.component';

describe('DettagliListaViaggioComponent', () => {
  let component: DettagliListaViaggioComponent;
  let fixture: ComponentFixture<DettagliListaViaggioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliListaViaggioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliListaViaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
