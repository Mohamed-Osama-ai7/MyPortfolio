import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featuredProjects = [
    {
      name: 'PhysioMentor',
      category: 'AI • Healthcare Education',
      description: 'An AI-powered physiotherapy learning platform designed to support students in understanding clinical concepts, anatomy, rehabilitation, and physiotherapy knowledge.',
      image: 'images/projects/physiomentor.png'
    },
    {
      name: 'InvoiceGuard AI',
      category: 'AI • Machine Learning',
      description: 'An intelligent invoice payment risk prediction and cash-flow protection system designed to identify late-payment risk and support receivables decisions.',
      image: 'images/projects/invoiceguard.png',
      demo: 'https://inovice-guard-ai-17.streamlit.app/',
      github: 'https://github.com/Mohamed-Osama-ai7/Inovice-Guard-ai'
    }
  ];
}