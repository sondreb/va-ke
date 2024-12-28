import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <h1>Our Services</h1>
    
    <div class="services-grid">
      <div class="service-card">
        <h2>Initial Consultation</h2>
        <p>Complete head check and treatment plan</p>
        <p class="price">$50</p>
      </div>

      <div class="service-card">
        <h2>Full Treatment</h2>
        <p>Thorough removal and preventive care</p>
        <p class="price">$150</p>
      </div>

      <div class="service-card">
        <h2>Family Package</h2>
        <p>Treatment for up to 4 family members</p>
        <p class="price">$400</p>
      </div>

      <div class="service-card">
        <h2>Follow-up Check</h2>
        <p>Post-treatment verification</p>
        <p class="price">$30</p>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      margin-bottom: 2rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: var(--white);
      padding: 2.5rem;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--gradient-primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .service-card:hover::before {
      transform: scaleX(1);
    }

    .price {
      font-size: 1.8rem;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      margin-top: 1.5rem;
    }
  `]
})
export class ServicesComponent {}
