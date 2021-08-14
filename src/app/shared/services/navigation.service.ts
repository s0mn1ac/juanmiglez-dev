import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private navigationBehavior = new BehaviorSubject<string>('');

    public readonly navigationObservable: Observable<string> = this.navigationBehavior.asObservable();

    public navigateTo(route: string): void {
        this.navigationBehavior.next(route);
    }

}