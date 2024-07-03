import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-feature',
  templateUrl: './blog-feature.component.html',
  styleUrl: './blog-feature.component.scss',
})
export class BlogFeatureComponent {
  @Output() backToDashboardRequested: EventEmitter<void> =
    new EventEmitter<void>();

  posts = [
    {
      title: 'The Future of Artificial Intelligence',
      content:
        'Discover what lies ahead in the ever-evolving world of AI and its impact on technology and society.',
    },
    {
      title: 'Mastering Productivity: Tips for Success',
      content:
        'Boost your productivity with these essential strategies and tools for achieving your goals efficiently.',
    },
    {
      title: 'Exploring the World of Quantum Computing',
      content:
        'Dive into the fascinating realm of quantum computing and its potential to revolutionize data processing.',
    },
  ];

  requestBackToDashboard(): void {
    this.backToDashboardRequested.emit();
  }
}
