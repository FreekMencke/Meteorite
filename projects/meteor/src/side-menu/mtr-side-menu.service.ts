import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MeteorSideMenuService {

  private isOpen: BehaviorSubject<boolean> = new BehaviorSubject(true);
  get isOpen$(): Observable<boolean> {
    return this.isOpen.asObservable();
  }

  open(): void {
    this.isOpen.next(true);
  }

  close(): void {
    this.isOpen.next(false);
  }

  toggle(): void {
    this.isOpen.next(!this.isOpen.value);
  }

}
