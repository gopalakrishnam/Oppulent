/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

function openMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileOverlay.addEventListener('click', closeMenu);

// Close on any mobile nav link click
document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ===== COURSE FILTER ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    courseCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const revealElements = document.querySelectorAll(
  '.service-card, .dest-card, .course-card, .why-card, .testimonial-card, .stat-item'
);

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  revealObserver.observe(el);
});

/* ===== ENQUIRE BUTTON ===== */
document.querySelectorAll('.btn-enquire').forEach(btn => {
  btn.addEventListener('click', () => {
    const message = encodeURIComponent("Hi Oppulent Global! I'm interested in studying abroad and would like to know more about your courses.");
    window.open(`https://wa.me/917075557518?text=${message}`, '_blank');
  });
});

/* ===== HERO CTA ===== */
document.querySelector('.btn-hero-primary').addEventListener('click', () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

/* ===== DESTINATION MODALS (EXACT API DATA) ===== */
const destData = {
  "US": {
    "title": "United States",
    "flag": "🇺🇸",
    "desc": "The United States is home to world-renowned universities like MIT, Stanford, and Harvard. With cutting-edge research facilities, diverse programs, and a vibrant campus life, the US offers unparalleled opportunities for international students.",
    "tuition": "$20,000 - $60,000/year",
    "intake": "Fall (Aug), Spring (Jan)",
    "work": "OPT (1-3 years)",
    "univs": [
      {
        "rank": "#1",
        "name": "Massachusetts Institute of Technology (MIT)",
        "city": "Cambridge, MA",
        "highlights": "Engineering, Computer Science, Physics",
        "website": "https://www.mit.edu"
      },
      {
        "rank": "#2",
        "name": "Stanford University",
        "city": "Stanford, CA",
        "highlights": "Business, Engineering, AI Research",
        "website": "https://www.stanford.edu"
      },
      {
        "rank": "#3",
        "name": "Harvard University",
        "city": "Cambridge, MA",
        "highlights": "Law, Medicine, Business",
        "website": "https://www.harvard.edu"
      },
      {
        "rank": "#4",
        "name": "California Institute of Technology (Caltech)",
        "city": "Pasadena, CA",
        "highlights": "Physics, Engineering, Astronomy",
        "website": "https://www.caltech.edu"
      },
      {
        "rank": "#5",
        "name": "University of Chicago",
        "city": "Chicago, IL",
        "highlights": "Economics, Law, Public Policy",
        "website": "https://www.uchicago.edu"
      },
      {
        "rank": "#6",
        "name": "Columbia University",
        "city": "New York, NY",
        "highlights": "Journalism, Business, International Affairs",
        "website": "https://www.columbia.edu"
      },
      {
        "rank": "#7",
        "name": "Yale University",
        "city": "New Haven, CT",
        "highlights": "Drama, Law, Art History",
        "website": "https://www.yale.edu"
      },
      {
        "rank": "#8",
        "name": "University of Pennsylvania",
        "city": "Philadelphia, PA",
        "highlights": "Finance, Nursing, Wharton Business",
        "website": "https://www.upenn.edu"
      },
      {
        "rank": "#9",
        "name": "Duke University",
        "city": "Durham, NC",
        "highlights": "Medicine, Public Policy, Environmental Science",
        "website": "https://www.duke.edu"
      },
      {
        "rank": "#10",
        "name": "Northwestern University",
        "city": "Evanston, IL",
        "highlights": "Journalism, Engineering, Performing Arts",
        "website": "https://www.northwestern.edu"
      },
      {
        "rank": "#11",
        "name": "Cornell University",
        "city": "Ithaca, NY",
        "highlights": "Hotel Administration, Veterinary, Engineering",
        "website": "https://www.cornell.edu"
      },
      {
        "rank": "#12",
        "name": "University of California, Los Angeles (UCLA)",
        "city": "Los Angeles, CA",
        "highlights": "Film, Medicine, Linguistics",
        "website": "https://www.ucla.edu"
      },
      {
        "rank": "#13",
        "name": "Carnegie Mellon University",
        "city": "Pittsburgh, PA",
        "highlights": "Robotics, Computer Science, Drama",
        "website": "https://www.cmu.edu"
      },
      {
        "rank": "#14",
        "name": "New York University (NYU)",
        "city": "New York, NY",
        "highlights": "Finance, Film, Performing Arts",
        "website": "https://www.nyu.edu"
      },
      {
        "rank": "#15",
        "name": "University of Michigan",
        "city": "Ann Arbor, MI",
        "highlights": "Engineering, Business, Public Health",
        "website": "https://umich.edu"
      }
    ]
  },
  "UK": {
    "title": "United Kingdom",
    "flag": "🇬🇧",
    "desc": "The UK boasts historic institutions like Oxford and Cambridge alongside modern universities. Known for shorter degree programs, research excellence, and a multicultural environment.",
    "tuition": "£15,000 - £35,000/year",
    "intake": "Sep, Jan",
    "work": "Graduate Route (2 years)",
    "univs": [
      {
        "rank": "#1",
        "name": "University of Oxford",
        "city": "Oxford",
        "highlights": "Humanities, Medicine, Law",
        "website": "https://www.ox.ac.uk"
      },
      {
        "rank": "#2",
        "name": "University of Cambridge",
        "city": "Cambridge",
        "highlights": "Science, Engineering, Mathematics",
        "website": "https://www.cam.ac.uk"
      },
      {
        "rank": "#3",
        "name": "Imperial College London",
        "city": "London",
        "highlights": "Engineering, Medicine, Business",
        "website": "https://www.imperial.ac.uk"
      },
      {
        "rank": "#4",
        "name": "University College London (UCL)",
        "city": "London",
        "highlights": "Architecture, Education, Law",
        "website": "https://www.ucl.ac.uk"
      },
      {
        "rank": "#5",
        "name": "University of Edinburgh",
        "city": "Edinburgh",
        "highlights": "AI, Informatics, Philosophy",
        "website": "https://www.ed.ac.uk"
      },
      {
        "rank": "#6",
        "name": "University of Manchester",
        "city": "Manchester",
        "highlights": "Materials Science, Social Sciences, Engineering",
        "website": "https://www.manchester.ac.uk"
      },
      {
        "rank": "#7",
        "name": "King's College London",
        "city": "London",
        "highlights": "Law, Medicine, Dentistry",
        "website": "https://www.kcl.ac.uk"
      },
      {
        "rank": "#8",
        "name": "London School of Economics (LSE)",
        "city": "London",
        "highlights": "Economics, Politics, International Relations",
        "website": "https://www.lse.ac.uk"
      },
      {
        "rank": "#9",
        "name": "University of Bristol",
        "city": "Bristol",
        "highlights": "Aerospace Engineering, Philosophy, Veterinary Science",
        "website": "https://www.bristol.ac.uk"
      },
      {
        "rank": "#10",
        "name": "University of Warwick",
        "city": "Coventry",
        "highlights": "Business, Mathematics, Theatre Studies",
        "website": "https://www.warwick.ac.uk"
      },
      {
        "rank": "#11",
        "name": "University of Glasgow",
        "city": "Glasgow",
        "highlights": "Medicine, Engineering, Veterinary Medicine",
        "website": "https://www.gla.ac.uk"
      },
      {
        "rank": "#12",
        "name": "University of Leeds",
        "city": "Leeds",
        "highlights": "Transport Studies, Media, Business",
        "website": "https://www.leeds.ac.uk"
      },
      {
        "rank": "#13",
        "name": "University of Nottingham",
        "city": "Nottingham",
        "highlights": "Pharmacy, Aerospace, Education",
        "website": "https://www.nottingham.ac.uk"
      },
      {
        "rank": "#14",
        "name": "Durham University",
        "city": "Durham",
        "highlights": "Theology, Archaeology, Business",
        "website": "https://www.durham.ac.uk"
      },
      {
        "rank": "#15",
        "name": "University of Birmingham",
        "city": "Birmingham",
        "highlights": "Dentistry, Psychology, Social Sciences",
        "website": "https://www.birmingham.ac.uk"
      }
    ]
  },
  "CA": {
    "title": "Canada",
    "flag": "🇨🇦",
    "desc": "Canada is known for its affordable tuition, high quality of life, and immigrant-friendly policies. With world-class education and post-graduation work opportunities.",
    "tuition": "CAD 20,000 - 40,000/year",
    "intake": "Fall (Sep), Winter (Jan)",
    "work": "PGWP (up to 3 years)",
    "univs": [
      {
        "rank": "#1",
        "name": "University of Toronto",
        "city": "Toronto, ON",
        "highlights": "AI Research, Medicine, Engineering",
        "website": "https://www.utoronto.ca"
      },
      {
        "rank": "#2",
        "name": "University of British Columbia",
        "city": "Vancouver, BC",
        "highlights": "Forestry, Mining, Environmental Science",
        "website": "https://www.ubc.ca"
      },
      {
        "rank": "#3",
        "name": "McGill University",
        "city": "Montreal, QC",
        "highlights": "Medicine, Music, Law",
        "website": "https://www.mcgill.ca"
      },
      {
        "rank": "#4",
        "name": "University of Alberta",
        "city": "Edmonton, AB",
        "highlights": "AI, Energy, Health Sciences",
        "website": "https://www.ualberta.ca"
      },
      {
        "rank": "#5",
        "name": "McMaster University",
        "city": "Hamilton, ON",
        "highlights": "Health Sciences, Engineering, Business",
        "website": "https://www.mcmaster.ca"
      },
      {
        "rank": "#6",
        "name": "University of Waterloo",
        "city": "Waterloo, ON",
        "highlights": "Computer Science, Co-op Programs, Engineering",
        "website": "https://uwaterloo.ca"
      },
      {
        "rank": "#7",
        "name": "Western University",
        "city": "London, ON",
        "highlights": "Business (Ivey), Medicine, Neuroscience",
        "website": "https://www.uwo.ca"
      },
      {
        "rank": "#8",
        "name": "Queen's University",
        "city": "Kingston, ON",
        "highlights": "Engineering, Commerce, Political Studies",
        "website": "https://www.queensu.ca"
      },
      {
        "rank": "#9",
        "name": "University of Calgary",
        "city": "Calgary, AB",
        "highlights": "Energy Engineering, Kinesiology, Veterinary Medicine",
        "website": "https://www.ucalgary.ca"
      },
      {
        "rank": "#10",
        "name": "Dalhousie University",
        "city": "Halifax, NS",
        "highlights": "Ocean Sciences, Medicine, Agriculture",
        "website": "https://www.dal.ca"
      },
      {
        "rank": "#11",
        "name": "University of Ottawa",
        "city": "Ottawa, ON",
        "highlights": "Law, Bilingual Programs, Health Sciences",
        "website": "https://www.uottawa.ca"
      },
      {
        "rank": "#12",
        "name": "York University",
        "city": "Toronto, ON",
        "highlights": "Business (Schulich), Fine Arts, Science",
        "website": "https://www.yorku.ca"
      },
      {
        "rank": "#13",
        "name": "University of Victoria",
        "city": "Victoria, BC",
        "highlights": "Climate Research, Law, Marine Biology",
        "website": "https://www.uvic.ca"
      },
      {
        "rank": "#14",
        "name": "Simon Fraser University",
        "city": "Burnaby, BC",
        "highlights": "Criminology, Communication, Computing Science",
        "website": "https://www.sfu.ca"
      },
      {
        "rank": "#15",
        "name": "Carleton University",
        "city": "Ottawa, ON",
        "highlights": "Journalism, Architecture, Public Affairs",
        "website": "https://carleton.ca"
      }
    ]
  },
  "AU": {
    "title": "Australia",
    "flag": "🇦🇺",
    "desc": "Australia combines excellent education with a relaxed lifestyle. Universities here are leaders in research, especially in marine science, environmental studies, and mining engineering.",
    "tuition": "AUD 30,000 - 45,000/year",
    "intake": "Feb, Jul",
    "work": "Post-Study Work (2-4 years)",
    "univs": [
      {
        "rank": "#1",
        "name": "University of Melbourne",
        "city": "Melbourne, VIC",
        "highlights": "Medicine, Law, Education",
        "website": "https://www.unimelb.edu.au"
      },
      {
        "rank": "#2",
        "name": "University of Sydney",
        "city": "Sydney, NSW",
        "highlights": "Business, Engineering, Architecture",
        "website": "https://www.sydney.edu.au"
      },
      {
        "rank": "#3",
        "name": "Australian National University",
        "city": "Canberra, ACT",
        "highlights": "Politics, International Relations, Research",
        "website": "https://www.anu.edu.au"
      },
      {
        "rank": "#4",
        "name": "University of Queensland",
        "city": "Brisbane, QLD",
        "highlights": "Marine Science, Mining, Agriculture",
        "website": "https://www.uq.edu.au"
      },
      {
        "rank": "#5",
        "name": "Monash University",
        "city": "Melbourne, VIC",
        "highlights": "Pharmacy, Engineering, Business",
        "website": "https://www.monash.edu"
      },
      {
        "rank": "#6",
        "name": "University of New South Wales (UNSW)",
        "city": "Sydney, NSW",
        "highlights": "Engineering, Business, Law",
        "website": "https://www.unsw.edu.au"
      },
      {
        "rank": "#7",
        "name": "University of Western Australia",
        "city": "Perth, WA",
        "highlights": "Mining Engineering, Marine Biology, Psychology",
        "website": "https://www.uwa.edu.au"
      },
      {
        "rank": "#8",
        "name": "University of Adelaide",
        "city": "Adelaide, SA",
        "highlights": "Wine Science, Robotics, Defence Technologies",
        "website": "https://www.adelaide.edu.au"
      },
      {
        "rank": "#9",
        "name": "Macquarie University",
        "city": "Sydney, NSW",
        "highlights": "Linguistics, Astrophysics, Commerce",
        "website": "https://www.mq.edu.au"
      },
      {
        "rank": "#10",
        "name": "RMIT University",
        "city": "Melbourne, VIC",
        "highlights": "Design, Architecture, Information Technology",
        "website": "https://www.rmit.edu.au"
      },
      {
        "rank": "#11",
        "name": "University of Technology Sydney (UTS)",
        "city": "Sydney, NSW",
        "highlights": "Data Science, Nursing, Architecture",
        "website": "https://www.uts.edu.au"
      },
      {
        "rank": "#12",
        "name": "Deakin University",
        "city": "Geelong, VIC",
        "highlights": "Sport Science, Education, AI Research",
        "website": "https://www.deakin.edu.au"
      },
      {
        "rank": "#13",
        "name": "Griffith University",
        "city": "Brisbane, QLD",
        "highlights": "Environmental Science, Tourism, Criminology",
        "website": "https://www.griffith.edu.au"
      },
      {
        "rank": "#14",
        "name": "University of Tasmania",
        "city": "Hobart, TAS",
        "highlights": "Marine Science, Antarctic Research, Agriculture",
        "website": "https://www.utas.edu.au"
      },
      {
        "rank": "#15",
        "name": "La Trobe University",
        "city": "Melbourne, VIC",
        "highlights": "Biomedical Science, Archaeology, Business",
        "website": "https://www.latrobe.edu.au"
      }
    ]
  },
  "DE": {
    "title": "Germany",
    "flag": "🇩🇪",
    "desc": "Germany offers tuition-free education at public universities, even for international students. With strong engineering programs and cutting-edge research.",
    "tuition": "€0 - €1,500/semester (admin fees)",
    "intake": "Winter (Oct), Summer (Apr)",
    "work": "18-month job seeker visa",
    "univs": [
      {
        "rank": "#1",
        "name": "Technical University of Munich",
        "city": "Munich",
        "highlights": "Engineering, Computer Science, Natural Sciences",
        "website": "https://www.tum.de"
      },
      {
        "rank": "#2",
        "name": "Ludwig Maximilian University of Munich",
        "city": "Munich",
        "highlights": "Medicine, Law, Humanities",
        "website": "https://www.lmu.de"
      },
      {
        "rank": "#3",
        "name": "Heidelberg University",
        "city": "Heidelberg",
        "highlights": "Medicine, Physics, Molecular Biology",
        "website": "https://www.uni-heidelberg.de"
      },
      {
        "rank": "#4",
        "name": "Humboldt University of Berlin",
        "city": "Berlin",
        "highlights": "Law, Philosophy, Social Sciences",
        "website": "https://www.hu-berlin.de"
      },
      {
        "rank": "#5",
        "name": "RWTH Aachen University",
        "city": "Aachen",
        "highlights": "Mechanical Engineering, Automotive, Materials Science",
        "website": "https://www.rwth-aachen.de"
      },
      {
        "rank": "#6",
        "name": "Free University of Berlin",
        "city": "Berlin",
        "highlights": "Political Science, Veterinary Medicine, Earth Sciences",
        "website": "https://www.fu-berlin.de"
      },
      {
        "rank": "#7",
        "name": "University of Hamburg",
        "city": "Hamburg",
        "highlights": "Climate Research, Maritime Law, Informatics",
        "website": "https://www.uni-hamburg.de"
      },
      {
        "rank": "#8",
        "name": "University of Stuttgart",
        "city": "Stuttgart",
        "highlights": "Automotive Engineering, Aerospace, Urban Planning",
        "website": "https://www.uni-stuttgart.de"
      },
      {
        "rank": "#9",
        "name": "University of Göttingen",
        "city": "Göttingen",
        "highlights": "Mathematics, Agricultural Sciences, Quantum Physics",
        "website": "https://www.uni-goettingen.de"
      },
      {
        "rank": "#10",
        "name": "University of Cologne",
        "city": "Cologne",
        "highlights": "Business Economics, Medicine, Arts & Humanities",
        "website": "https://www.uni-koeln.de"
      },
      {
        "rank": "#11",
        "name": "University of Freiburg",
        "city": "Freiburg",
        "highlights": "Environmental Sciences, Microsystems, Theology",
        "website": "https://www.uni-freiburg.de"
      },
      {
        "rank": "#12",
        "name": "University of Bonn",
        "city": "Bonn",
        "highlights": "Mathematics, Agricultural Sciences, Physics",
        "website": "https://www.uni-bonn.de"
      },
      {
        "rank": "#13",
        "name": "Technical University of Berlin",
        "city": "Berlin",
        "highlights": "Computer Science, Urban Design, Energy Engineering",
        "website": "https://www.tu-berlin.de"
      },
      {
        "rank": "#14",
        "name": "University of Mannheim",
        "city": "Mannheim",
        "highlights": "Business Informatics, Economics, Political Science",
        "website": "https://www.uni-mannheim.de"
      },
      {
        "rank": "#15",
        "name": "Leipzig University",
        "city": "Leipzig",
        "highlights": "Medicine, American Studies, Physics",
        "website": "https://www.uni-leipzig.de"
      }
    ]
  },
  "NZ": {
    "title": "New Zealand",
    "flag": "🇳🇿",
    "desc": "New Zealand offers a safe, welcoming environment with stunning natural beauty. Its universities excel in agriculture, environmental science, and adventure tourism.",
    "tuition": "NZD 25,000 - 35,000/year",
    "intake": "Feb, Jul",
    "work": "Post-Study Work (1-3 years)",
    "univs": [
      {
        "rank": "#1",
        "name": "University of Auckland",
        "city": "Auckland",
        "highlights": "Engineering, Business, Education",
        "website": "https://www.auckland.ac.nz"
      },
      {
        "rank": "#2",
        "name": "University of Otago",
        "city": "Dunedin",
        "highlights": "Medicine, Dentistry, Humanities",
        "website": "https://www.otago.ac.nz"
      },
      {
        "rank": "#3",
        "name": "Victoria University of Wellington",
        "city": "Wellington",
        "highlights": "Law, Architecture, Public Policy",
        "website": "https://www.wgtn.ac.nz"
      },
      {
        "rank": "#4",
        "name": "University of Canterbury",
        "city": "Christchurch",
        "highlights": "Engineering, Forestry, Speech-Language Therapy",
        "website": "https://www.canterbury.ac.nz"
      },
      {
        "rank": "#5",
        "name": "Massey University",
        "city": "Palmerston North",
        "highlights": "Agriculture, Veterinary Science, Aviation",
        "website": "https://www.massey.ac.nz"
      },
      {
        "rank": "#6",
        "name": "University of Waikato",
        "city": "Hamilton",
        "highlights": "Computer Science, Maori Studies, Environmental Planning",
        "website": "https://www.waikato.ac.nz"
      },
      {
        "rank": "#7",
        "name": "Lincoln University",
        "city": "Lincoln",
        "highlights": "Agriculture, Environmental Management, Wine Science",
        "website": "https://www.lincoln.ac.nz"
      },
      {
        "rank": "#8",
        "name": "Auckland University of Technology (AUT)",
        "city": "Auckland",
        "highlights": "Sport Science, Communications, Design",
        "website": "https://www.aut.ac.nz"
      },
      {
        "rank": "#9",
        "name": "University of Otago (Wellington)",
        "city": "Wellington",
        "highlights": "Public Health, Pacific Studies, Biomedical Science",
        "website": "https://www.otago.ac.nz"
      },
      {
        "rank": "#10",
        "name": "Massey University (Palmerston North)",
        "city": "Palmerston North",
        "highlights": "Creative Arts, Social Work, Food Technology",
        "website": "https://www.massey.ac.nz"
      },
      {
        "rank": "#11",
        "name": "University of Canterbury",
        "city": "Christchurch",
        "highlights": "Civil Engineering, Forestry, Speech-Language Therapy",
        "website": "https://www.canterbury.ac.nz"
      },
      {
        "rank": "#12",
        "name": "Victoria University of Wellington",
        "city": "Wellington",
        "highlights": "Law, Architecture, Design Innovation",
        "website": "https://www.wgtn.ac.nz"
      },
      {
        "rank": "#13",
        "name": "Massey University (Albany)",
        "city": "Auckland",
        "highlights": "Aviation, Fashion Design, Agribusiness",
        "website": "https://www.massey.ac.nz"
      },
      {
        "rank": "#14",
        "name": "Eastern Institute of Technology",
        "city": "Napier",
        "highlights": "Wine Science, Nursing, Viticulture",
        "website": "https://www.eit.ac.nz"
      },
      {
        "rank": "#15",
        "name": "Unitec Institute of Technology",
        "city": "Auckland",
        "highlights": "Construction, Performing Arts, Applied Technology",
        "website": "https://www.unitec.ac.nz"
      }
    ]
  }
};

const destModal = document.getElementById('destModal');
const destModalOverlay = document.getElementById('destModalOverlay');
const destModalClose = document.getElementById('destModalClose');

function openDestModal(destKey) {
  const data = destData[destKey];
  if (!data) return;

  document.getElementById('modalAbbr').textContent = destKey;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDesc').textContent = data.desc;
  document.getElementById('modalTuition').textContent = data.tuition;
  document.getElementById('modalIntake').textContent = data.intake;
  document.getElementById('modalWork').textContent = data.work;
  
  document.getElementById('modalUnivTitle').textContent = `Universities in ${data.title}`;
  document.getElementById('modalUnivCount').textContent = `${data.univs.length} universities`;

  const listContainer = document.getElementById('modalUnivList');
  listContainer.innerHTML = '';
  
  data.univs.forEach(u => {
    const item = document.createElement('div');
    item.className = 'univ-item';
    item.innerHTML = `
      <div class="univ-rank">${u.rank}</div>
      <div class="univ-details">
        <h4><a href="${u.website}" target="_blank" style="color:inherit;text-decoration:none;display:flex;align-items:center;gap:6px;">${u.name} <span style="font-size:0.75rem;color:#64748b;">${destKey}</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></h4>
        <div class="univ-location">${u.city}</div>
        <div class="univ-programs">${u.highlights}</div>
      </div>
    `;
    listContainer.appendChild(item);
  });

  destModal.classList.add('open');
  destModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDestModal() {
  destModal.classList.remove('open');
  destModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.dest-card').forEach(card => {
  card.addEventListener('click', () => {
    const dest = card.getAttribute('data-dest');
    if (dest) openDestModal(dest);
  });
});

destModalClose.addEventListener('click', closeDestModal);
destModalOverlay.addEventListener('click', closeDestModal);

/* ===== ENQUIRE FORM SUBMISSION ===== */
function handleEnquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('enquiryName').value.trim();
  const email = document.getElementById('enquiryEmail').value.trim();
  const phone = document.getElementById('enquiryPhone').value.trim();
  const country = document.getElementById('enquiryCountry').value;
  const course = document.getElementById('enquiryCourse').value;
  const message = document.getElementById('enquiryMessage').value.trim();
  const errorDiv = document.getElementById('enquiryError');

  if (!name || !email) {
    errorDiv.textContent = 'Please fill in your name and email.';
    errorDiv.style.display = 'block';
    return;
  }

  errorDiv.style.display = 'none';

  // Construct WhatsApp notification message
  const waText = encodeURIComponent(
    `Hi Oppulent Global!\nNew Enquiry Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCountry: ${country || 'N/A'}\nCourse: ${course || 'N/A'}\nMessage: ${message || 'N/A'}`
  );

  // Show success state
  document.getElementById('enquiryForm').style.display = 'none';
  document.getElementById('successName').textContent = name;
  document.getElementById('enquirySuccess').style.display = 'block';

  // Open WhatsApp with form details
  window.open(`https://wa.me/917075557518?text=${waText}`, '_blank');
}

function resetEnquiryForm() {
  document.getElementById('enquiryForm').reset();
  document.getElementById('enquiryForm').style.display = 'block';
  document.getElementById('enquirySuccess').style.display = 'none';
  document.getElementById('enquiryError').style.display = 'none';
}


function toggleCourseDetails(btn) {
  const details = btn.closest('.course-card').querySelector('.course-details');
  const viewText = btn.querySelector('.view-text');
  const svg = btn.querySelector('svg');
  if (details.style.display === 'none') {
    details.style.display = 'block';
    viewText.textContent = 'Hide Details';
    svg.innerHTML = '<path d="m18 15-6-6-6 6"/>';
  } else {
    details.style.display = 'none';
    viewText.textContent = 'View Details';
    svg.innerHTML = '<path d="m6 9 6 6 6-6"/>';
  }
}

