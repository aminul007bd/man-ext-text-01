import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToolbarComponent } from './menu-toolbar.component';

describe('MenuToolbarComponent', () => {
  let component: MenuToolbarComponent;
  let fixture: ComponentFixture<MenuToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
