const chapter = 'https://atomicdesign.bradfrost.com/chapter-1/';
const topics = [
  {
    "id": "pattern-libraries",
    "name": "Pattern libraries",
    "tag": "Reusable interface patterns",
    "mark": "▦",
    "color": "#ded8ff",
    "ink": "#43368b",
    "note": "Pattern libraries are a cornerstone of modern interface design. They document reusable UI patterns and help teams approach interface design as a system.",
    "example": "Code for America",
    "image": "codeforamerica",
    "anchor": "pattern-libraries",
    "links": [],
    "details": [
      [
        "A systematic approach",
        "Think in reusable interface parts and the relationships between them. A pattern library gives those parts a shared home, rather than treating every page as a separate design exercise."
      ],
      [
        "The focus of Atomic Design",
        "Pattern libraries are the main focus of the book. Chapter 1 introduces their role and explores their benefits and challenges; later chapters explain how to establish and maintain them."
      ]
    ]
  },
  {
    "id": "brand-identity",
    "name": "Brand identity",
    "tag": "The assets that identify a brand",
    "mark": "Aa",
    "color": "#ffdbb5",
    "ink": "#753f1c",
    "note": "Brand identity guidelines define the assets and materials that make an organization recognizable. They bring those decisions together in one central place.",
    "example": "West Virginia University",
    "image": "wvu",
    "anchor": "brand-identity",
    "links": [],
    "details": [
      [
        "Assets and materials",
        "Include logos, typography, color palettes, and messaging such as mission statements and taglines. Collateral includes materials such as business cards and PowerPoint templates."
      ],
      [
        "One organization across many channels",
        "Help teams and outside contributors represent the same organization cohesively across media, channels, and touchpoints. The guide answers practical questions about using the brand’s assets and presenting a unified identity."
      ],
      [
        "Where voice fits",
        "Voice is part of brand identity, so brand guidelines often introduce it. A dedicated voice and tone guide adds the detail needed for different situations and audiences."
      ]
    ]
  },
  {
    "id": "writing",
    "name": "Writing",
    "tag": "Conventions for written content",
    "mark": "&",
    "color": "#c4eed0",
    "ink": "#125b35",
    "note": "Writing style guides help an organization maintain a consistent editorial style when many people contribute content to its websites and content management system (CMS).",
    "example": "The Economist",
    "image": "economist",
    "anchor": "writing",
    "links": [
      [
        "Dalhousie University",
        "http://www.dal.ca/webteam/web_style_guide/writing_for_the_web.html",
        "Original chapter link · currently unavailable (404)"
      ]
    ],
    "details": [
      [
        "Shared editorial guardrails",
        "Contributors need common conventions and examples so content reads coherently across authors. These guardrails guide the writing and review process."
      ],
      [
        "How detailed should a guide be?",
        "A guide can specify fine details of punctuation and grammar, or offer a short set of publishing principles. The Economist illustrates detailed editorial guidance; Dalhousie University is the chapter’s example of a concise approach."
      ]
    ]
  },
  {
    "id": "voice-and-tone",
    "name": "Voice & tone",
    "tag": "A consistent voice for changing situations",
    "mark": "“a”",
    "color": "#f8c9df",
    "ink": "#723557",
    "note": "Voice and tone guidance helps a brand communicate consistently while responding appropriately to the situation, content type, and reader’s feelings.",
    "example": "Mailchimp",
    "image": "voiceandtone",
    "anchor": "voice-and-tone",
    "links": [
      [
        "Mailchimp: Voice and Tone",
        "https://styleguide.mailchimp.com/voice-and-tone/",
        "Current destination of the chapter’s voiceandtone.com link"
      ],
      [
        "NN/g: Four Dimensions of Tone of Voice",
        "https://www.nngroup.com/articles/tone-of-voice-dimensions/",
        "Describe tone through formality, humour, respectfulness, and enthusiasm"
      ],
      [
        "NN/g: Tone-of-Voice Words",
        "https://www.nngroup.com/articles/tone-voice-words/",
        "37 tone descriptors for planning content and evaluating readers’ impressions"
      ],
      [
        "Adobe Spectrum: Voice and tone",
        "https://spectrum.adobe.com/content/voice-and-tone",
        "Motivational, helpful, instructive, reassuring, and supportive tones for different situations"
      ],
      [
        "Content Design LMS",
        "https://github.com/Pythonidaer/content-design-lms",
        "Related learning project"
      ],
      [
        "GOV.UK: Use the right tone",
        "https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/right-tone/",
        "Writing guidance for GOV.UK content"
      ],
      [
        "Home Office: Voice and tone",
        "https://design.homeoffice.gov.uk/design-and-content/content/voice-and-tone",
        "Voice and tone within content design"
      ]
    ],
    "details": [
      [
        "Voice stays consistent; tone adapts",
        "Voice expresses the brand’s enduring character. Tone changes with context: a payment error calls for a different delivery from a celebratory message."
      ],
      [
        "Detailed guidance for real situations",
        "Brand identity guidelines may introduce the voice. A dedicated guide explains how to apply it across scenarios and content types. Mailchimp’s declined-payment example shows why a usually playful brand should adopt a serious tone when the reader needs help."
      ],
      [
        "How this fits into content design",
        "Voice and tone are part of content design: they influence how information is understood and how a service responds to someone’s needs. Content design also considers what information people need, its structure, and when they encounter it. GOV.UK’s writing guidance and the Home Office’s content design manual provide useful connections to this topic."
      ],
      [
        "Continue learning",
        "Use the Content Design LMS alongside the GOV.UK resources to study how a consistent voice can adapt to different user situations. Comparing guidance and examples can help inform future content and tone rules."
      ]
    ]
  },
  {
    "id": "code",
    "name": "Code",
    "tag": "Conventions for implementation",
    "mark": "{ }",
    "color": "#c5e7ff",
    "ink": "#1d4966",
    "note": "Code style guides help teams write legible, scalable, maintainable code. They define shared conventions, patterns, and examples so the codebase remains consistent across contributors.",
    "example": "GitHub",
    "image": "github",
    "anchor": "code-style-guides",
    "links": [
      [
        "Clean Code LMS",
        "https://github.com/Pythonidaer/clean-code-lms",
        "Related learning project · future project rules are still to be developed"
      ],
      [
        "MDN JavaScript Guide",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        "Language concepts and examples"
      ],
      [
        "Google JavaScript Style Guide",
        "https://google.github.io/styleguide/jsguide.html",
        "Organizational conventions · no longer updated; Google points readers to its TypeScript guide"
      ],
      [
        "Airbnb JavaScript Style Guide",
        "https://github.com/airbnb/javascript",
        "Organizational conventions and examples"
      ],
      [
        "ESLint documentation",
        "https://eslint.org/docs/latest/use/",
        "Configure and run automated checks for JavaScript"
      ]
    ],
    "details": [
      [
        "Conventions and guardrails",
        "Document naming, organization, and accepted coding patterns, with examples that show how to apply them. Shared guidance reduces inconsistent code and repeated debates about the same decisions."
      ],
      [
        "How rules are enforced",
        "Documentation explains the rules. A linter such as ESLint checks configured rules automatically, while a formatter handles layout choices. Teams can run checks in their editors and continuous integration (CI). Required passing checks can prevent a merge; code review still handles decisions that tools cannot judge."
      ],
      [
        "Clean code and JavaScript guidance",
        "Use the Clean Code LMS to study readability and maintainability while developing project-specific rules. MDN explains the language; Google and Airbnb provide examples of organizational JavaScript conventions. These sources serve different purposes, and their preferences can differ."
      ],
      [
        "Future rules",
        "Compare the sources, choose conventions that suit the project, and document the reasons. Then decide which rules can be checked automatically and which require review. JavaScript rules remain a future study task."
      ]
    ]
  },
  {
    "id": "design-language",
    "name": "Design language",
    "tag": "The principles behind a product’s design",
    "mark": "◒",
    "color": "#e1e8aa",
    "ink": "#465119",
    "note": "A design language expresses the general direction, philosophy, and approach behind a product or family of products. It connects overarching goals and principles to specific design applications.",
    "example": "Google Material Design",
    "image": "material",
    "anchor": "design-language",
    "links": [
      [
        "Material Design",
        "https://www.google.com/design/spec/material-design/introduction.html",
        "Original chapter link"
      ],
      [
        "Material Design 3",
        "https://m3.material.io/",
        "Current reference site"
      ]
    ],
    "details": [
      [
        "From principles to application",
        "The guide explains both the design philosophy and how it appears in practice. Google’s Material Design is the chapter’s example; Material Design 3 is the reference used for this website."
      ],
      [
        "Connections to other guides",
        "Design language guidance often incorporates parts of other style guide categories so abstract principles become more tangible. Its design vocabulary can evolve while the organization’s underlying brand identity remains recognizable."
      ],
      [
        "Future study: extracting design rules",
        "Develop a separate set of rules for Material Design, then compare other visual directions such as Y2K, 1990s grunge, and modern corporate websites. A future extraction method could record recurring typography, color, shape, spacing, texture, imagery, motion, and navigation choices, alongside examples and context."
      ],
      [
        "Keep each direction distinct",
        "The aim is to identify the decisions that create a particular design language and when they apply. Separate rule sets would make it easier to choose a direction deliberately when writing future prompts."
      ]
    ]
  }
];
const icons={menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',home:'<path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9"/>',grid:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',book:'<path d="M5 3h14v18H5zM9 3v8l3-2 3 2V3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',moon:'<path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/>',pause:'<path d="M7 5h3v14H7zM14 5h3v14h-3z"/>',play:'<path d="m8 5 11 7-11 7Z"/>'};
const svg=id=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[id]}</svg>`;
document.querySelectorAll('[data-icon]').forEach(e=>e.innerHTML=svg(e.dataset.icon));
document.querySelectorAll('.menu-toggle').forEach(e=>{if(e.classList.contains('icon-button'))e.innerHTML=svg('menu')});
document.querySelector('.close-drawer').innerHTML=svg('close');
const drawer=document.querySelector('#drawer'),scrim=document.querySelector('.scrim');
let restoreFocus=null;
function setDrawer(open){
 if(open)restoreFocus=document.activeElement;
 drawer.classList.toggle('open',open);drawer.inert=!open;scrim.hidden=!open;
 document.querySelectorAll('[aria-controls="drawer"]').forEach(b=>b.setAttribute('aria-expanded',String(open)));
 document.body.classList.toggle('drawer-open',open);
 if(open)drawer.querySelector('button').focus();else if(restoreFocus)restoreFocus.focus();
}
document.querySelectorAll('.menu-toggle,.guides-toggle').forEach(b=>b.addEventListener('click',()=>setDrawer(!drawer.classList.contains('open'))));
document.querySelector('.close-drawer').onclick=()=>setDrawer(false);scrim.onclick=()=>setDrawer(false);
drawer.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const a=[...drawer.querySelectorAll('a,button')];const first=a[0],last=a.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer.classList.contains('open'))setDrawer(false)});
const safeGet=k=>{try{return localStorage.getItem(k)}catch{return null}};
const safeSet=(k,v)=>{try{localStorage.setItem(k,v)}catch{}};
let theme=safeGet('sg-theme')||'dark';
function applyTheme(){document.documentElement.dataset.theme=theme;document.querySelectorAll('.theme-toggle').forEach(b=>{b.innerHTML=svg(theme==='dark'?'sun':'moon');b.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} mode`)})}
document.querySelectorAll('.theme-toggle').forEach(b=>b.onclick=()=>{theme=theme==='dark'?'light':'dark';safeSet('sg-theme',theme);applyTheme()});applyTheme();
let reduce=safeGet('sg-motion')==='reduce'||matchMedia('(prefers-reduced-motion: reduce)').matches;
function applyMotion(){document.documentElement.classList.toggle('reduce-motion',reduce);const b=document.querySelector('.motion-toggle');b.innerHTML=svg(reduce?'play':'pause');b.setAttribute('aria-pressed',String(reduce));b.setAttribute('aria-label',reduce?'Enable animations':'Reduce motion')}
document.querySelector('.motion-toggle').onclick=()=>{reduce=!reduce;safeSet('sg-motion',reduce?'reduce':'full');applyMotion()};applyMotion();
document.querySelector('#drawer-links').innerHTML=`<a href="#overview">Overview</a>${topics.map((t,i)=>`<a href="#${t.id}"><span class="topic-number">${i+1}</span>${t.name}</a>`).join('')}`;
const main=document.querySelector('main');
let sectionObserver;
function hero(title,subtitle,art){return `<header class="hero"><div class="hero-copy"><h1>${title}</h1><p class="subtitle">${subtitle}</p></div>${art}</header>`}
function tabs(items){return `<nav class="section-tabs" aria-label="Page sections"><span class="tab-indicator" aria-hidden="true"></span>${items.map(([id,label],i)=>`<a href="#${current}/${id}" ${i===0?'aria-current="location"':''}>${label}</a>`).join('')}</nav>`}
function toc(title,items){return `<aside class="toc"><p>On this page</p><h2>${title}</h2><nav aria-label="On this page">${items.map(([id,label],i)=>`<a href="#${current}/${id}" ${i===0?'aria-current="location"':''}>${label}</a>`).join('')}</nav></aside>`}
let current='overview';
function render(id){
 current=id;const t=topics.find(t=>t.id===id);
 const sections=t?[['notes','Notes'],['example','Chapter example'],['resources','Links']]:[['introduction','Overview'],['guide-types','Six guide types'],['source','Source']];
 let body;
 if(!t){
 body=`${hero('Style guides','Six types of guidance for designing and building together.',`<div class="hero-art overview-art" aria-hidden="true"><span>S</span><span>g</span><div class="art-caption">STYLE GUIDES</div></div>`)}${tabs(sections)}<div class="reading-layout"><article><section id="introduction"><p class="intro">Explore six categories of style guides and what each one covers.</p><p class="muted">Choose a topic for condensed notes, the chapter’s example, and links back to the source.</p></section><section id="guide-types"><h2>Six guide types</h2><div class="topic-grid">${topics.map((t,i)=>`<a class="topic-card" href="#${t.id}"><div class="topic-art art-${t.id}" style="--art:${t.color};--ink:${t.ink}" aria-hidden="true">${t.mark}</div><div class="topic-card-copy"><span class="index">${i+1}</span><h3>${t.name}</h3><span class="arrow" aria-hidden="true">↗</span></div><p>${t.tag}</p></a>`).join('')}</div></section><section id="source"><h2>Source</h2><a class="resource" href="${chapter}"><span>Atomic Design: Designing Systems<small>Brad Frost · Chapter 1</small></span><span aria-hidden="true">↗</span></a><p class="muted">This first edition covers the six categories only. Benefits, challenges, and further notes can be added after review.</p></section></article>${toc('Style guides',sections)}</div>`;
 }else{
 const n=topics.indexOf(t),prev=topics[n-1],next=topics[n+1];
 body=`${hero(t.name,t.tag,`<div class="hero-art art-${t.id}" style="--art:${t.color};--ink:${t.ink}" aria-hidden="true"><span>${t.mark}</span><div class="art-caption">${n+1} / 6</div></div>`)}${tabs(sections)}<div class="reading-layout"><article><section id="notes"><p class="eyebrow">Guide notes</p><h2>${t.name}</h2><p class="intro">${t.note}</p>${t.id==='pattern-libraries'?'<div class="alias-table"><span>Other names</span><p>Front-end style guides<br>UI libraries<br>Component libraries</p></div>':''}${t.details.map(([heading,text])=>`<div class="note-detail"><h3>${heading}</h3><p>${text}</p></div>`).join('')}</section><section id="example"><h2>Chapter example</h2><div class="example-row"><div><h3>${t.example}</h3><p class="muted">Historical example shown in Chapter 1.</p><a href="${chapter}#${t.anchor}">View in the chapter ↗</a></div><figure><a href="https://atomicdesign.bradfrost.com/images/content/styleguide-${t.image}.png" class="example-image-link" aria-label="View ${t.example} screenshot"><img src="https://atomicdesign.bradfrost.com/images/content/styleguide-${t.image}.png" alt="${t.example} style guide, as pictured in Atomic Design Chapter 1" loading="lazy" width="1000" height="650"></a><figcaption>${t.example} · Image from Atomic Design by Brad Frost</figcaption></figure></div></section><section id="resources"><h2>Links</h2><a class="resource" href="${chapter}#${t.anchor}"><span>Read the original section<small>Atomic Design · ${t.name}</small></span><span aria-hidden="true">↗</span></a>${t.links.map(([label,url,detail])=>`<a class="resource" href="${url}"><span>${label}<small>${detail}</small></span><span aria-hidden="true">↗</span></a>`).join('')}</section><nav class="page-pagination" aria-label="Previous and next topics"><a href="#${prev?prev.id:'overview'}"><small>Previous</small>${prev?prev.name:'Overview'}<span aria-hidden="true">←</span></a>${next?`<a href="#${next.id}"><small>Up next</small>${next.name}<span aria-hidden="true">→</span></a>`:`<a href="#overview"><small>Return to</small>Overview<span aria-hidden="true">→</span></a>`}</nav></article>${toc(t.name,sections)}</div>`;
 }
 main.innerHTML=body;
 const imgLink=main.querySelector('.example-image-link');if(imgLink)imgLink.href=imgLink.querySelector('img').src;
 document.title=`${t?t.name:'Overview'} · Style guides`;
 document.querySelectorAll('#drawer-links a').forEach(a=>a.toggleAttribute('aria-current',a.hash===`#${id}`));
 document.querySelectorAll('#drawer-links a[aria-current]').forEach(a=>a.setAttribute('aria-current','page'));
 if(sectionObserver)sectionObserver.disconnect();
 sectionObserver=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(visible.length)setActive(visible[0].target.id)},{rootMargin:'-15% 0px -55% 0px',threshold:0});
 main.querySelectorAll('article > section').forEach(s=>sectionObserver.observe(s));
 requestAnimationFrame(()=>setActive(sections[0][0]));
}
function setActive(id){
 main.querySelectorAll('.section-tabs a,.toc a').forEach(a=>{if(a.hash.endsWith('/'+id))a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
 const tab=main.querySelector('.section-tabs a[aria-current]'),indicator=main.querySelector('.tab-indicator');if(tab&&indicator){indicator.style.width=tab.offsetWidth+'px';indicator.style.transform=`translateX(${tab.offsetLeft}px)`}
}
function route(initial=false){const [rawId,section]=location.hash.slice(1).split('/');const id=rawId||'overview';const valid=id==='overview'||topics.some(t=>t.id===id);if(!valid){location.replace('#overview');return}const changed=current!==id||!main.children.length;if(changed)render(id);if(drawer.classList.contains('open'))setDrawer(false);if(section){requestAnimationFrame(()=>{document.getElementById(section)?.scrollIntoView({behavior:initial||reduce?'instant':'smooth',block:'start'});setActive(section)})}else if(changed){window.scrollTo({top:0,behavior:'instant'});if(!initial)main.focus({preventScroll:true})}}
window.addEventListener('hashchange',()=>route());window.addEventListener('resize',()=>{const active=main.querySelector('.section-tabs a[aria-current]');if(active)setActive(active.hash.split('/')[1])});route(true);
