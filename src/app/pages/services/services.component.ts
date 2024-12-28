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
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .price {
      font-size: 1.5rem;
      color: var(--primary-color);
      font-weight: bold;
      margin-top: 1rem;
    }
  `]
})
export class ServicesComponent {}
