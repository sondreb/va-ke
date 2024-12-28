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

    <section class="info-section">
      <div class="info-header">
        <h2>Understanding Head Lice</h2>
        <p class="subtitle">A Common Challenge Affecting Millions</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <h3>6-12 Million</h3>
          <p>Cases annually in children 3-11 years old in developed nations</p>
        </div>
        <div class="stat-card">
          <h3>All Ages</h3>
          <p>Can affect anyone regardless of hygiene or socioeconomic status</p>
        </div>
        <div class="stat-card">
          <h3>30%</h3>
          <p>
            Of household members typically require treatment when one is
            affected
          </p>
        </div>
      </div>

      <div class="info-content">
        <div class="info-grid">
          <div class="info-text">
            <h3>Why Professional Treatment Matters</h3>
            <p>
              Head lice have become increasingly resistant to over-the-counter
              treatments, making professional intervention more important than
              ever. Our specialized approach ensures complete elimination of
              both lice and nits (eggs), preventing recurring infestations.
            </p>

            <h3>Early Detection is Key</h3>
            <p>Common signs of head lice include:</p>
            <ul>
              <li>Itching and tickling sensation</li>
              <li>Visible lice or eggs, especially around the neck and ears</li>
              <li>Difficulty sleeping (lice are more active in the dark)</li>
              <li>Small red bumps on the scalp, neck, and shoulders</li>
            </ul>
          </div>

          <div class="info-image">
            <img src="images/photo1.jpg" alt="Head lice example" />
            <p class="image-caption">
              Close-up view of head lice on human hair
            </p>
            <img src="images/photo2.jpg" alt="Head lice example" />
            <p class="image-caption">
              Itchy papular lesions may occur on the nape of the neck and behind
              the ears
            </p>
            <p class="image-caption smaller">
              Image Rights - Thanks to Dermatoweb, DermQuest (Galderma), and
              others who have contributed images. All named individuals and
              organisations maintain copyright for the relevant images.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .smaller {
        font-size: 0.6em !important;
    }
      .hero {
        text-align: center;
        padding: 6rem 1rem;
        background: linear-gradient(135deg, #2b8bc6 0%, #5ba4e6 100%);
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
        background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
        pointer-events: none;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 1.343 3 3 3z' fill='rgba(255,255,255,.1)' fill-rule='evenodd'/%3E%3C/svg%3E");
        opacity: 0.5;
        z-index: 0;
      }

      .hero h1 {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        color: var(--white);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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

      .info-section {
        margin-top: 4rem;
        padding: 2rem;
        background: var(--card-bg);
        border-radius: var(--border-radius);
        border: 1px solid rgba(255, 255, 255, 0.8);
      }

      .info-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .subtitle {
        color: var(--text-light);
        font-size: 1.2rem;
        margin-top: 0.5rem;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .stat-card {
        text-align: center;
        padding: 2rem;
        background: var(--white);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-sm);
        transition: transform 0.3s ease;
      }

      .stat-card:hover {
        transform: translateY(-5px);
      }

      .stat-card h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .info-content {
        background: var(--white);
        padding: 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-sm);
      }

      .info-grid {
        display: grid;
        grid-template-columns: 1fr 400px;
        gap: 2rem;
        align-items: start;
      }

      .info-image {
        position: relative;
      }

      .info-image img {
        width: 100%;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-md);
      }

      .image-caption {
        text-align: center;
        color: var(--text-light);
        font-size: 0.9rem;
        margin-top: 0.5rem;
      }

      .info-text h3 {
        margin: 1.5rem 0 1rem;
      }

      .info-text h3:first-child {
        margin-top: 0;
      }

      .info-text ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
      }

      .info-text li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
      }

      .info-text li::before {
        content: '•';
        color: var(--primary-color);
        font-weight: bold;
        position: absolute;
        left: 0;
      }

      @media (max-width: 768px) {
        .info-section {
          padding: 1rem;
        }

        .info-grid {
          grid-template-columns: 1fr;
        }

        .info-image {
          order: -1;
          margin-bottom: 1rem;
        }
      }
    `,
  ],
})
export class HomeComponent {}
