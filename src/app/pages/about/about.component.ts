import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>About Us</h1>

    <div class="about-content">
      <div class="mission">
        <h2>Our Mission</h2>
        <p>
          At Vaške Removal Service, we're dedicated to providing effective,
          professional head lice treatment in a comfortable and caring environment.
          We use the latest techniques and natural
          methods to ensure complete lice elimination.
        </p>
      </div>

      <div class="specialist">
        <div class="specialist-info">
          <img src="images/tania.jpg" alt="Tatiana Bugrova" class="profile-photo">
          <div class="specialist-details">
            <h2>Meet Our Specialist</h2>
            <h3>Tatiana Bugrova</h3>
            <p>
              With years of experience in head lice treatment,
              Tatiana is our lead specialist and founder. Her gentle approach and
              expertise make the treatment process comfortable and effective for
              clients of all ages.
            </p>
            <ul>
              <li>Head Lice Removal Specialist</li>
              <li>Expert in Natural Treatment Methods</li>
              <li>English, Russian, French and Norwegian</li>
            </ul>
          </div>
        </div>
      </div>

      
      <div class="why-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Natural, chemical-free treatments</li>
          <li>Experienced specialists</li>
          <li>Guaranteed results</li>
          <li>Comfortable, private setting</li>
        </ul>
      </div>

    </div>
  `,
  styles: [`
    .about-content {
      display: grid;
      gap: 2rem;
    }

    .mission, .why-us {
      background: var(--white);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .why-us ul {
      list-style: none;
      padding: 0;
    }

    .why-us li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }

    .why-us li:last-child {
      border-bottom: none;
    }

    .specialist {
      background: var(--white);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-top: 2rem;
    }

    .specialist-info {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 2rem;
      align-items: start;
    }

    .profile-photo {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .specialist-details h3 {
      color: var(--text-color);
      margin: 0.5rem 0 1rem 0;
    }

    .specialist-details ul {
      list-style: none;
      padding: 0;
      margin-top: 1rem;
    }

    .specialist-details li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }

    .specialist-details li:last-child {
      border-bottom: none;
    }

    @media (max-width: 768px) {
      .specialist-info {
        grid-template-columns: 1fr;
      }

      .profile-photo {
        max-width: 300px;
        margin: 0 auto;
      }
    }
  `]
})
export class AboutComponent {}
