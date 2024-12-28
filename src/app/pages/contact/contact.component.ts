import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Contact Us</h1>

    <div class="contact-container">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <!-- <p>📞 Phone: (555) 123-4567</p>-->
        <p>📧 Email: butatiana&#64;gmail.com</p>
        <p>📍 Location: Bar, Montenegro</p>
        <p>⏰ Hours: Mon-Fri: 9am-6pm</p>
      </div>

      <form class="contact-form" (ngSubmit)="onSubmit($event)">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            [(ngModel)]="formData.name"
            name="name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            [(ngModel)]="formData.email"
            name="email"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            [(ngModel)]="formData.message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  `,
  styles: [
    `
      .contact-container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
      }

      .contact-info {
        background: var(--white);
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .contact-form {
        background: var(--white);
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-color);
      }

      input,
      textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }

      @media (max-width: 768px) {
        .contact-container {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(event: Event) {
    event.preventDefault();

    const subject = `Contact from ${this.formData.name}`;
    const body = `Name: ${this.formData.name}
Email: ${this.formData.email}

Message:
${this.formData.message}`;

    const mailtoLink = `mailto:butatiana@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}
