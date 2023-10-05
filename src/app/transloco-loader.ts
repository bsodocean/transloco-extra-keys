import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TranslocoLoader } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(langPath: string) {
    return this.http.get(`./assets/i18n/${langPath}.json`);
  }
}
