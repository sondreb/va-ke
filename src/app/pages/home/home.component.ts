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
      padding: 6rem 1rem;
      background: var(--gradient-primary);
      border-radius: var(--border-radius);
      margin-bottom: 3rem;
      position: relative;
      overflow: hidden;
    }

    .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255,255,255,0.1), transparent);
      pointer-events: none;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      color: var(--white);
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .hero p {
      font-size: 1.4rem;
      margin-bottom: 2.5rem;
      color: var(--white);
      opacity: 0.9;
    }

    .hero button {
      background: var(--white);
      color: var(--primary-color);
      font-size: 1.2rem;
      padding: 15px 40px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .hero button:hover {
      background: var(--white);
      color: var(--primary-dark);
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
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: visible;
    }

    .feature::before,
    .feature::after {
      content: '';
      position: absolute;
      border-radius: 8px;
      inset: 0;
      background: var(--primary-color);
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
      z-index: -1;
    }

    .feature::before {
      transform: rotate(-3deg) translateY(5px);
    }

    .feature::after {
      transform: rotate(3deg) translateY(5px);
    }

    .feature:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .feature:hover::before {
      opacity: 0.1;
      transform: rotate(-3deg) translateY(10px);
    }

    .feature:hover::after {
      opacity: 0.05;
      transform: rotate(3deg) translateY(10px);
    }

    .feature h3 {
      margin-bottom: 1rem;
      position: relative;
      transition: transform 0.3s ease;
    }

    .feature:hover h3 {
      transform: scale(1.05);
    }

    .feature p {
      position: relative;
      transition: transform 0.3s ease;
    }

    .feature:hover p {
      transform: translateY(2px);
    }
  `]
})
export class HomeComponent {}
