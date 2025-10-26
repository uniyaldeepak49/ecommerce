import { Injectable, signal } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTerm = signal('');
  private searchSubject = new Subject<string>();

  searchTerm$ = this.searchTerm.asReadonly();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => this.searchTerm.set(term));
  }

  search(term: string) {
    this.searchSubject.next(term);
  }

  clearSearch() {
    this.searchTerm.set('');
  }

  getSearchSuggestions(term: string): string[] {
    const suggestions = [
      'iPhone 15 Pro',
      'MacBook Air',
      'AirPods Pro',
      'iPad Pro',
      'Samsung Galaxy',
      'Dell XPS',
      'Sony Headphones',
      'Nintendo Switch',
    ];
    return suggestions.filter((s) => s.toLowerCase().includes(term.toLowerCase()));
  }
}
