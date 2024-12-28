import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  template: `
    <header>
      <div class="header-content">
        <div class="logo-container">
          <a routerLink="/" class="logo-link">
            <img src="/icons/icon-1024x1024.png" alt="Vaške Logo" class="logo" />
            <h1>Vaške Removal Service</h1>
          </a>
        </div>
        <nav>
          <!-- <a routerLink="/">Home</a> -->
          <a routerLink="/services">Our Services</a>
          <a routerLink="/about">About Us</a>
          <a routerLink="/contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <router-outlet />
    </main>

    <footer>
      <p>&copy; 2024 Vaške Removal Service. Professional Head Lice Treatment.</p>
    </footer>

    <button
      *ngIf="showInstallButton"
      (click)="installPwa()"
      class="install-button"
    >
      Install App
    </button>
  `,
  styles: [`
    header {
      background-color: var(--white);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem;
    }

    .header-content {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo {
      height: 50px;
      width: auto;
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      color: inherit;
    }

    nav {
      display: flex;
      gap: 2rem;
    }

    nav a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    nav a:hover {
      color: var(--primary-color);
    }

    main {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 0 1rem;
      min-height: calc(100vh - 200px);
    }

    footer {
      background-color: var(--white);
      padding: 1rem;
      text-align: center;
      border-top: 1px solid #eee;
    }

    .install-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 1rem;
      }

      nav {
        gap: 1rem;
      }
    }
  `],
})
export class AppComponent implements OnInit {
  deferredPrompt: any;
  showInstallButton = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton = true;
    });
  }

  async installPwa() {
    if (!this.deferredPrompt) return;

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      this.showInstallButton = false;
    }
    this.deferredPrompt = null;
  }
}
