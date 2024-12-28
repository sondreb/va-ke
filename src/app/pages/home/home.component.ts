import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h1>Professional Head Lice Treatment</h1>
      <p>Safe, effective, and gentle solutions for the whole family</p>
      <button routerLink="/contact">Book Treatment</button>
    </section>

    <section class="features">
      <div class="feature">
        <h3>Expert Care</h3>
        <p>Professional treatment by our specialists</p>
      </div>
      <div class="feature">
        <h3>Safe Methods</h3>
        <p>Proven and tested products that is safe for all ages</p>
      </div>
      <div class="feature">
        <h3>Guaranteed Results</h3>
        <p>Complete removal or follow-up treatment free</p>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 4rem 1rem;
      background-color: var(--light-bg);
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: var(--text-color);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }

    .feature {
      text-align: center;
      padding: 2rem;
      background: var(--white);
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .feature h3 {
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {}
