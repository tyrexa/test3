import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="shell">
      <h1>Hello, World!</h1>
      <p>This Angular app replaces the original Python script.</p>
    </main>
  `
})
class AppComponent {}

bootstrapApplication(AppComponent).catch((error: unknown) => {
  console.error(error);
});
