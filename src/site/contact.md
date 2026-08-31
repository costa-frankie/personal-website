---
title: Contact
layout: layouts/layout-site.html
topics:
  - name: Product strategy
    category: product
  - name: UX prototyping
    category: design
  - name: Agile
    category: product
  - name: Scrum
    category: product
  - name: B2B SaaS
    category: product
  - name: Interaction design
    category: design
  - name: Wireframing
    category: design
  - name: HTML
    category: technical
  - name: CSS
    category: technical
  - name: Javascript
    category: technical
  - name: Node.js
    category: technical
  - name: Roadmap planning
    category: product
  - name: Enterprise software
    category: product
  - name: Figma
    category: design
  - name: APIs
    category: technical
  - name: User research
    category: design
  - name: OKRs
    category: product
  - name: Data visualization
    category: product
---
<section class="flex-column gap-md flex-align-center page-max-width">
    <h1 class="content-title">{{ title }}</h1>
    <div class="contact-card-stack relative">
        <article class="contact-card card card--surface flex-column flex-align-center gap-lg padding-xl">
            <div class="flex-row gap-lg flex-wrap justify-center">
                <img src="/assets/avatar-fc.png" class="avatar shadow-sm circular" alt="Personal photo" />
                <div class="flex-column justify-center gap-sm">
                    <div class="flex-column">
                        <h4 class="text-h4">Frankie Costa</h4>
                        <span class="text-p muted">Product Manager</span>
                    </div>
                    <a href="https://www.linkedin.com/in/frankie-j-costa/" target="_blank" rel="noopener noreferrer" class="connect-btn flex-row flex-align-center gap-sm padding-horizon-md padding-vert-sm"><img src="/assets/In-White.png" width="20px" height="20px" eleventy:ignore><p>Connect on LinkedIn</p></a>
                </div>
            </div>
            <div class="flex-column flex-align-start gap-sm">
                <div class="muted">
                    <p class="text-p flex-row flex-align-center gap-sm"><span class="material-symbols-outlined text-info">location_on</span>Based in Vancouver, WA</p>
                </div>
                <div class="muted">
                    <p class="text-p flex-row flex-align-center gap-sm"><span class="material-symbols-outlined text-info">trip</span>Currently seeking opportunities</p>
                </div>
                <div class="muted">
                    <p class="text-p flex-row flex-align-center gap-sm"><span class="material-symbols-outlined text-info">home_work</span>Open to remote or hybrid roles</p>
                </div>
            </div>
            <div class="cluster justify-center max-w-40-ch border-top-subtle padding-top-lg">
                {% for topic in topics %}<span class="tag tag--{{ topic.category }}">{{ topic.name }}</span>{% endfor %}
            </div>
        </article>
        {% for n in (1..10) %}<div class="paper absolute" data-paper="{{ n }}"></div>{% endfor %}
    </div>
</section>
