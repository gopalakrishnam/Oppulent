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
document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
link.addEventListener('click', closeMenu);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
const target = document.querySelector(this.getAttribute('href'));
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth' });
}
});
});
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
document.querySelectorAll('.btn-enquire').forEach(btn => {
btn.addEventListener('click', (e) => {
let courseName = "";
const card = e.target.closest('.course-card');
if (card) {
const nameEl = card.querySelector('.course-name');
if (nameEl) {
courseName = nameEl.textContent.trim();
}
}

let messageText = "Hi Oppulent Global! I'm interested in studying abroad and would like to know more about your courses.";
if (courseName) {
messageText = `Hi Oppulent Global! I'm interested in ${courseName}.`;
}

const message = encodeURIComponent(messageText);
window.open(`https://wa.me/917075557518?text=${message}`, '_blank');
  });
});
document.querySelector('.btn-hero-primary').addEventListener('click', () => {
document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});
const destData = {
  "US": {
    "title": "United States",
    "flag": "🇺🇸",
    "desc": "Top-ranked research institutions",
    "tuition": "$20,000 - $60,000/year",
    "intake": "Fall (Aug), Spring (Jan)",
    "work": "OPT (1-3 years)",
    "univs": [
      {
        "rank": 1,
        "name": "Arizona state university",
        "city": "phoenix,  Arizona",
        "website": "https://www.asu.edu",
        "highlights": [
          "Business Administration (Finance, Marketing, Supply Chain)",
          "Computer Science",
          "Psychology",
          "Biological Sciences",
          "Nursing",
          "Communication / Journalism (Cronkite School — top ranked)",
          "Criminal Justice & Criminology",
          "Engineering (Mechanical, Electrical, Biomedical)",
          "Sustainability",
          "Kinesiology / Exercise Science"
        ]
      },
      {
        "rank": 2,
        "name": "University of California",
        "city": "riverside,  California",
        "website": "https://www.ucr.edu",
        "highlights": [
          "Business Administration (School of Business)",
          "Psychology",
          "Computer Science / Computer Engineering",
          "Neuroscience",
          "Bioengineering",
          "Political Science",
          "Economics",
          "Public Policy",
          "Environmental Sciences — UCR is known for strong environmental/agricultural research (historically an agricultural extension of UC)",
          "Creative Writing — UCR has a well-regarded program, including one of the top MFA programs in the country",
          "Entomology — UCR is nationally recognized in this niche field"
        ]
      },
      {
        "rank": 3,
        "name": "Virginia Tech Language and Culture Institute",
        "city": "Blacksburg,  Virginia",
        "website": "https://lci.vt.edu",
        "highlights": [
          "Intensive English Program (IEP)",
          "English for Academic Purposes",
          "TOEFL/IELTS Preparation",
          "Business English",
          "Conversation and Pronunciation",
          "American Culture & Life Skill"
        ]
      },
      {
        "rank": 4,
        "name": "University of Arizona",
        "city": "Tucson,  Arizona",
        "website": "https://www.arizona.edu",
        "highlights": [
          "Business Administration (Eller College of Management)",
          "Computer Science",
          "Psychology",
          "Optical Sciences & Engineering — internationally renowned, unique to UArizona",
          "Astronomy / Astrophysics — one of the top programs in the world",
          "Biomedical Engineering",
          "Nursing",
          "Mechanical Engineering",
          "Political Science",
          "Environmental Science / Natural Resources",
          "Agricultural Science",
          "Journalism"
        ]
      },
      {
        "rank": 5,
        "name": "Drexel University",
        "city": "Philadelphia,  Pennsylvania",
        "website": "https://www.drexel.edu",
        "highlights": [
          "Business Administration (LeBow College of Business)",
          "Computer Science",
          "Nursing",
          "Biomedical Engineering",
          "Mechanical Engineering",
          "Electrical Engineering",
          "Game Design & Development — nationally ranked",
          "Fashion Design / Fashion Merchandising",
          "Architecture",
          "Psychology",
          "Communication",
          "Design (Westphal College of Media Arts & Design)"
        ]
      },
      {
        "rank": 6,
        "name": "University of Delaware",
        "city": "Newark,  Delaware",
        "website": "https://www.udel.edu",
        "highlights": [
          "Business Administration (Lerner College of Business)",
          "Biological Sciences",
          "Psychology",
          "Computer Science",
          "Mechanical Engineering",
          "Chemical Engineering",
          "Nursing",
          "Finance",
          "Marketing",
          "Political Science / International Relations",
          "Hotel, Restaurant & Institutional Management — historically strong program",
          "Fashion & Apparel Studies — nationally recognized"
        ]
      },
      {
        "rank": 7,
        "name": "George Mason University",
        "city": "Fairfax county,  Virginia",
        "website": "https://www.gmu.edu",
        "highlights": [
          "Business Administration (School of Business)",
          "Computer Science",
          "Information Technology / Cybersecurity — strong reputation given proximity to D.C./federal agencies",
          "Psychology",
          "Criminology, Law and Society",
          "Nursing",
          "Government and International Politics — notable due to D.C.-area location",
          "Economics",
          "Conflict Analysis and Resolution — unique, highly regarded program",
          "Electrical/Computer Engineering",
          "Biology",
          "Communication"
        ]
      },
      {
        "rank": 8,
        "name": "Colorado State University",
        "city": "Fort Collins,  Colorado",
        "website": "https://www.colostate.edu",
        "highlights": [
          "Business Administration",
          "Animal Science — nationally recognized, strong agricultural roots",
          "Veterinary Medicine / Biomedical Sciences — top-ranked vet program",
          "Mechanical Engineering",
          "Civil Engineering",
          "Psychology",
          "Biology",
          "Environmental Science / Natural Resources — strong reputation",
          "Construction Management",
          "Human Development and Family Studies",
          "Journalism and Media Communication",
          "Agricultural Sciences"
        ]
      },
      {
        "rank": 9,
        "name": "Duke University",
        "city": "Durham,  North Carolina",
        "website": "https://www.duke.edu",
        "highlights": [
          "Economics",
          "Computer Science",
          "Biology",
          "Psychology",
          "Biomedical Engineering",
          "Political Science",
          "Neuroscience",
          "Business/Markets & Management Studies",
          "Global Health",
          "Statistical Science",
          "Environmental Science / Policy (Nicholas School)"
        ]
      },
      {
        "rank": 10,
        "name": "Oregon State University",
        "city": "Corvallis,  Oregon",
        "website": "https://oregonstate.edu",
        "highlights": [
          "Business Administration",
          "Computer Science",
          "Engineering (Mechanical, Civil, Chemical, Electrical)",
          "Forestry / Natural Resources — nationally recognized, strong land-grant tradition",
          "Fisheries, Wildlife and Conservation Sciences",
          "Oceanography / Marine Biology — strong reputation given coastal location",
          "Environmental Science",
          "Kinesiology",
          "Agricultural Sciences",
          "Psychology",
          "Food Science and Technology",
          "Nutrition and Exercise Science"
        ]
      },
      {
        "rank": 11,
        "name": "University of Illinois at Chicago",
        "city": "Illinois",
        "website": "https://www.uic.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Biological Sciences",
          "Psychology",
          "Computer Science",
          "Kinesiology",
          "Criminology, Law, and Justice",
          "Bioengineering",
          "Public Health",
          "Political Science",
          "Pharmacy (College of Pharmacy) — highly ranked",
          "Architecture and Urban Planning"
        ]
      },
      {
        "rank": 12,
        "name": "Northeastern University",
        "city": "Boston,  Massachusetts – D Amore- Mckim School of Business,  the Collage of Professional Studies",
        "website": "https://www.northeastern.edu",
        "highlights": [
          "Business Administration",
          "Finance",
          "Marketing",
          "International Business",
          "Accounting",
          "Entrepreneurship & Innovation",
          "Supply Chain Management",
          "Analytics / Business Analytics",
          "Project Management (CPS)",
          "Leadership (CPS)",
          "Information Technology / Informatics (CPS)",
          "Human Resource Management (CPS)"
        ]
      },
      {
        "rank": 13,
        "name": "University of South Florida",
        "city": "Tampa,  Florida",
        "website": "https://www.usf.edu",
        "highlights": [
          "Business Administration",
          "Psychology",
          "Biomedical Sciences",
          "Nursing",
          "Computer Science",
          "Biology",
          "Engineering (Mechanical, Civil, Industrial)",
          "Public Health",
          "Criminology",
          "Marketing",
          "Finance",
          "Mass Communication"
        ]
      },
      {
        "rank": 14,
        "name": "The University of Alabama Tuscaloosa",
        "city": "Alabama",
        "website": "https://www.ua.edu",
        "highlights": [
          "Engineering (Mechanical, Civil, Chemical, Electrical) – strong reputation via the College of Engineering",
          "Nursing (Capstone College of Nursing)",
          "Communication & Journalism – notably strong media/broadcasting program",
          "Psychology",
          "Computer Science",
          "Marketing",
          "Accounting",
          "Kinesiology",
          "Political Science / Pre-Law track"
        ]
      },
      {
        "rank": 15,
        "name": "Auburn University",
        "city": "Alabama",
        "website": "https://www.auburn.edu",
        "highlights": [
          "Engineering (Aerospace, Mechanical, Civil, Industrial) – Samuel Ginn College of Engineering, highly ranked",
          "Business Administration (Harbert College of Business)",
          "Architecture",
          "Agriculture / Animal Sciences",
          "Veterinary Medicine",
          "Nursing",
          "Computer Science / Software Engineering",
          "Supply Chain Management",
          "Biomedical Sciences",
          "Journalism / Communications"
        ]
      },
      {
        "rank": 16,
        "name": "University of Utah",
        "city": "Salt Lake City,  Utah",
        "website": "https://www.utah.edu",
        "highlights": [
          "Computer Science – strong ties to Silicon Slopes tech industry",
          "Engineering (Biomedical, Mechanical, Chemical)",
          "Business Administration (David Eccles School of Business)",
          "Medicine / Pre-Med – renowned medical school and health sciences programs",
          "Nursing",
          "Psychology",
          "Film & Media Arts – notable entertainment arts program",
          "Chemistry",
          "Mining Engineering / Geology – historically strong, tied to Utah's mining industry",
          "Kinesiology"
        ]
      },
      {
        "rank": 17,
        "name": "University of Cincinnati",
        "city": "Ohio",
        "website": "https://www.uc.edu",
        "highlights": [
          "Design, Architecture, Art & Planning (DAAP) – internationally renowned, especially industrial design and architecture",
          "Engineering (Aerospace, Mechanical, Electrical, Computer)",
          "Business Administration (Carl H. Lindner College of Business)",
          "Medicine / Pre-Med – highly regarded medical college",
          "Nursing",
          "Criminal Justice",
          "Computer Science",
          "Music / Performing Arts (College-Conservatory of Music – CCM) – nationally top-ranked",
          "Pharmacy"
        ]
      },
      {
        "rank": 18,
        "name": "Ohio University",
        "city": "Athens,  Ohio",
        "website": "https://www.ohio.edu",
        "highlights": [
          "Journalism (E.W. Scripps School of Journalism) – one of the oldest and most respected journalism programs in the U.S.",
          "Business Administration (College of Business)",
          "Media Arts & Studies / Communication",
          "Engineering (Mechanical, Electrical, Civil)",
          "Nursing",
          "Health Sciences / Pre-Med",
          "Osteopathic Medicine (Heritage College of Osteopathic Medicine)",
          "Psychology",
          "Film Studies",
          "Sports Management"
        ]
      },
      {
        "rank": 19,
        "name": "University of South Carolina",
        "city": "Columbia,  South Carolina",
        "website": "https://www.sc.edu",
        "highlights": [
          "International Business – Darla Moore School of Business ranked #1 in the U.S. for undergraduate international business for over 20 years",
          "Business Administration",
          "Public Health (Arnold School of Public Health) – highly ranked",
          "Nursing",
          "Engineering (Mechanical, Civil, Computer)",
          "Hospitality & Tourism Management",
          "Psychology",
          "Journalism / Mass Communications",
          "Political Science / Pre-Law",
          "Marine Science"
        ]
      },
      {
        "rank": 20,
        "name": "University of the Pacific",
        "city": "Stockton,  California",
        "website": "https://www.pacific.edu",
        "highlights": [
          "Pharmacy (Thomas J. Long School of Pharmacy) – one of the oldest and most respected pharmacy schools in California",
          "Dentistry (Arthur A. Dugoni School of Dentistry) – highly ranked",
          "Business Administration (Eberhardt School of Business)",
          "Engineering (Civil, Computer, Electrical)",
          "Music / Conservatory of Music – nationally recognized conservatory",
          "Health Sciences / Pre-Med",
          "Psychology",
          "Biological Sciences",
          "Education",
          "Speech-Language Pathology"
        ]
      },
      {
        "rank": 21,
        "name": "University of Kansas",
        "city": "Lawrence,  Kansas",
        "website": "https://www.ku.edu",
        "highlights": [
          "Business Administration (School of Business)",
          "Engineering (Aerospace, Civil, Mechanical, Electrical)",
          "Journalism / Mass Communications – William Allen White School, highly regarded",
          "Pharmacy – top-ranked program",
          "Nursing",
          "Architecture / Design",
          "Psychology",
          "Political Science / Pre-Law",
          "Health Professions / Pre-Med",
          "Communication Studies"
        ]
      },
      {
        "rank": 22,
        "name": "University of Vermont",
        "city": "Burlington,  Vermont",
        "website": "https://www.uvm.edu",
        "highlights": [
          "Environmental Studies / Environmental Science – nationally recognized, strong sustainability focus",
          "Business Administration (Grossman School of Business)",
          "Nursing",
          "Medicine / Pre-Med – notable medical school",
          "Biology",
          "Psychology",
          "Wildlife & Fisheries Biology",
          "Animal Science",
          "Political Science",
          "Public Health"
        ]
      },
      {
        "rank": 23,
        "name": "University of Tulsa",
        "city": "Tulsa,  Oklahoma",
        "website": "https://www.utulsa.edu",
        "highlights": [
          "Petroleum Engineering – nationally top-ranked, tied to Tulsa's oil & gas industry heritage",
          "Chemical Engineering",
          "Mechanical Engineering",
          "Business Administration (Collins College of Business)",
          "Computer Science / Cybersecurity – strong reputation, close ties to federal agencies",
          "Law (TU College of Law)",
          "Psychology",
          "Geosciences",
          "Nursing",
          "English / Creative Writing"
        ]
      },
      {
        "rank": 24,
        "name": "Baylor University",
        "city": "Waco,  Texas",
        "website": "https://www.baylor.edu",
        "highlights": [
          "Business Administration (Hankamer School of Business)",
          "Nursing (Louise Herrington School of Nursing)",
          "Pre-Med / Biology – strong health professions pipeline",
          "Engineering (Mechanical, Electrical, Civil)",
          "Law (Baylor Law School)",
          "Psychology & Neuroscience",
          "Communication / Journalism",
          "Music (School of Music) – nationally recognized",
          "Social Work",
          "Entrepreneurship"
        ]
      },
      {
        "rank": 25,
        "name": "Graduate School at UMBC",
        "city": "University of Maryland,  Baltimore Country",
        "website": "https://www.umbc.edu",
        "highlights": [
          "Computer Science – strong reputation, close ties to cybersecurity and tech industry",
          "Cybersecurity",
          "Data Science",
          "Engineering (Computer, Electrical, Chemical)",
          "Biological Sciences / Biotechnology",
          "Public Policy",
          "Information Systems",
          "Human-Centered Computing",
          "Health Administration & Policy",
          "Education (M.Ed. programs)"
        ]
      },
      {
        "rank": 26,
        "name": "University Albany",
        "city": "The State University of New York,  Albany",
        "website": "https://www.albany.edu",
        "highlights": [
          "Criminal Justice – nationally top-ranked, one of the school's flagship programs",
          "Public Health",
          "Business Administration",
          "Atmospheric & Environmental Sciences – notable meteorology program",
          "Political Science / Public Policy",
          "Psychology",
          "Nanoscale Science & Engineering – unique, cutting-edge program",
          "Social Welfare",
          "Computer Science",
          "Biology"
        ]
      },
      {
        "rank": 27,
        "name": "University of Dayton",
        "city": "Dayton,  Ohio",
        "website": "https://www.udayton.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Aerospace, Chemical) – strong ties to aerospace/defense industry (Wright-Patterson AFB nearby)",
          "Business Administration (School of Business Administration)",
          "Computer Science",
          "Nursing",
          "Education",
          "Psychology",
          "Pre-Law",
          "Biology / Pre-Med",
          "Criminal Justice",
          "Communication"
        ]
      },
      {
        "rank": 28,
        "name": "University of Colorado Denver",
        "city": "Colorado",
        "website": "https://www.ucdenver.edu",
        "highlights": [
          "Business Administration (Business School)",
          "Engineering (Civil, Mechanical, Electrical, Computer)",
          "Architecture & Planning – strong urban design program",
          "Public Affairs (School of Public Affairs)",
          "Nursing",
          "Health Sciences / Pre-Med",
          "Computer Science / Information Systems",
          "Psychology",
          "Communication",
          "Criminal Justice"
        ]
      },
      {
        "rank": 29,
        "name": "State University of New York at Geneseo",
        "city": "",
        "website": "https://www.geneseo.edu",
        "highlights": [
          "Biology / Pre-Med – highly regarded, strong health professions pipeline",
          "Business Administration",
          "Psychology",
          "English",
          "Education (Childhood/Adolescence Education) – strong teacher prep program",
          "Political Science / International Relations",
          "Communication",
          "Chemistry",
          "Geological Sciences",
          "Music"
        ]
      },
      {
        "rank": 30,
        "name": "SUNY Polytechnic Institute",
        "city": "Utica,  New York",
        "website": "https://sunypoly.edu",
        "highlights": [
          "Nanoscale Engineering / Nanotechnology – flagship program, tied to semiconductor/chip industry",
          "Computer Science",
          "Cybersecurity",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Business Administration / Technology Management",
          "Computer Engineering",
          "Data Science",
          "Information Technology",
          "Nanoscale Science"
        ]
      },
      {
        "rank": 31,
        "name": "State University of New York at Fredonia",
        "city": "",
        "website": "https://www.fredonia.edu",
        "highlights": [
          "Music (School of Music) – nationally recognized, one of the largest music schools in the SUNY system",
          "Music Industry – unique, strong ties to recording/business side of music",
          "Business Administration",
          "Education (Childhood/Early Childhood)",
          "Communication / Media Production",
          "Biology",
          "Psychology",
          "Theatre Arts",
          "Environmental Sciences",
          "Sports Management"
        ]
      },
      {
        "rank": 32,
        "name": "State University of New York at Plattsburgh",
        "city": "",
        "website": "https://www.plattsburgh.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Education (Childhood/Early Childhood)",
          "Psychology",
          "Criminal Justice",
          "Environmental Science",
          "Athletic Training / Exercise Science",
          "Art / Studio Art",
          "Expeditionary Studies – unique outdoor education program",
          "Communication"
        ]
      },
      {
        "rank": 33,
        "name": "State University of New York College at Old Westbury",
        "city": "New York",
        "website": "https://www.oldwestbury.edu",
        "highlights": [
          "Business Administration / Accounting",
          "Psychology",
          "Nursing",
          "Criminal Justice",
          "Health & Society",
          "Biology",
          "Sociology",
          "Computer Science",
          "Education",
          "Media & Communication"
        ]
      },
      {
        "rank": 34,
        "name": "The State University of New York at New Paltz",
        "city": "",
        "website": "https://www.newpaltz.edu",
        "highlights": [
          "Business Administration",
          "Fine Arts / Ceramics – nationally recognized ceramics program",
          "Education (Childhood/Adolescence)",
          "Psychology",
          "Digital Media Production",
          "Environmental Science / Geography",
          "Engineering (Electrical, Mechanical, Computer)",
          "English",
          "Sociology",
          "Communication Disorders"
        ]
      },
      {
        "rank": 35,
        "name": "Queens College of the City University of New York",
        "city": "",
        "website": "https://www.qc.cuny.edu",
        "highlights": [
          "Accounting / Business Administration",
          "Psychology",
          "Computer Science",
          "Biology / Pre-Med",
          "Education",
          "Sociology",
          "Media Studies / Communication",
          "Music (Aaron Copland School of Music) – nationally recognized",
          "Nursing",
          "Political Science"
        ]
      },
      {
        "rank": 36,
        "name": "University o f California",
        "city": "Irvine,  California",
        "website": "https://www.uci.edu",
        "highlights": [
          "Computer Science / Informatics – highly ranked, strong tech industry ties",
          "Biological Sciences / Pre-Med",
          "Business Administration (Merage School of Business)",
          "Engineering (Biomedical, Mechanical, Electrical, Chemical)",
          "Criminology, Law & Society – unique, nationally recognized program",
          "Psychology",
          "Public Health",
          "Nursing Science",
          "Economics",
          "Drama / Film & Media Studies"
        ]
      },
      {
        "rank": 37,
        "name": "University of California",
        "city": "Berkeley Extension,  California",
        "website": "https://extension.berkeley.edu",
        "highlights": [
          "Data Science / Data Analytics",
          "Project Management",
          "Business Administration / Management",
          "UX/UI Design",
          "Digital Marketing",
          "Software Development / Coding Bootcamps",
          "Business Analysis",
          "English Language Program (for international students)",
          "Legal Studies / Paralegal Certificate",
          "Financial Planning"
        ]
      },
      {
        "rank": 38,
        "name": "American University Washington D.C.",
        "city": "",
        "website": "https://www.american.edu",
        "highlights": [
          "International Relations / International Studies – School of International Service, nationally top-ranked",
          "Political Science / Government – strong D.C. location advantage",
          "Communication / Journalism (School of Communication)",
          "Business Administration (Kogod School of Business)",
          "Public Policy / Public Administration",
          "Law (Washington College of Law)",
          "Economics",
          "Justice, Law & Criminology",
          "Psychology",
          "Environmental Science"
        ]
      },
      {
        "rank": 39,
        "name": "Louisiana State University",
        "city": "Baton Rouge,  Louisiana",
        "website": "https://www.lsu.edu",
        "highlights": [
          "Petroleum Engineering – strong ties to Louisiana's oil & gas industry",
          "Business Administration (E.J. Ourso College of Business)",
          "Mass Communication / Journalism",
          "Engineering (Mechanical, Civil, Chemical, Electrical)",
          "Agriculture / Agricultural Sciences",
          "Nursing / Pre-Med",
          "Political Science / Pre-Law",
          "Kinesiology",
          "Psychology",
          "Music / Performing Arts"
        ]
      },
      {
        "rank": 40,
        "name": "Washington State University",
        "city": "Pullman,  Washington",
        "website": "https://www.wsu.edu",
        "highlights": [
          "Agriculture / Viticulture & Enology (Wine Science) – nationally recognized, tied to WA's wine industry",
          "Veterinary Medicine – top-ranked vet program",
          "Business Administration (Carson College of Business)",
          "Engineering (Mechanical, Civil, Electrical, Computer)",
          "Pharmacy",
          "Communication",
          "Hospitality Business Management",
          "Kinesiology / Sports Science",
          "Animal Sciences",
          "Criminal Justice"
        ]
      },
      {
        "rank": 41,
        "name": "The University of Nebraska - Lincoln",
        "city": "",
        "website": "https://www.unl.edu",
        "highlights": [
          "Agriculture / Agribusiness – strong reputation, tied to Nebraska's farming economy",
          "Engineering (Mechanical, Civil, Electrical, Biological Systems)",
          "Business Administration",
          "Actuarial Science – nationally top-ranked",
          "Journalism / Broadcasting",
          "Animal Science",
          "Education",
          "Psychology",
          "Political Science",
          "Theatre / Film"
        ]
      },
      {
        "rank": 42,
        "name": "University of Alabama at Birmingham",
        "city": "",
        "website": "https://www.uab.edu",
        "highlights": [
          "Nursing – highly ranked, strong reputation",
          "Biomedical Engineering – strong ties to UAB's renowned medical center",
          "Medicine / Pre-Med",
          "Public Health",
          "Business Administration (Collat School of Business)",
          "Health Professions / Health Informatics",
          "Psychology",
          "Biology",
          "Computer Science",
          "Occupational Therapy / Physical Therapy"
        ]
      },
      {
        "rank": 43,
        "name": "Saint Louis University",
        "city": "St. Louis ,  Missouri",
        "website": "https://www.slu.edu",
        "highlights": [
          "Nursing",
          "Business Administration (Chaifetz School of Business)",
          "Aviation Science – notable, one of the few university aviation programs",
          "Public Health (College for Public Health & Social Justice)",
          "Biology / Pre-Med",
          "Law (SLU School of Law)",
          "Physical Therapy / Occupational Therapy",
          "Psychology",
          "Social Work",
          "Theology / Philosophy – strong Jesuit tradition"
        ]
      },
      {
        "rank": 44,
        "name": "Missouri University",
        "city": "St. Louis,  Missouri",
        "website": "https://www.umsl.edu",
        "highlights": [
          "Business Administration (College of Business Administration)",
          "Nursing",
          "Criminology & Criminal Justice",
          "Optometry – notable, one of few optometry schools in the region",
          "Psychology",
          "Education",
          "Biology",
          "Public Policy Administration",
          "Computer Science",
          "Social Work"
        ]
      },
      {
        "rank": 45,
        "name": "University of Massachusetts Lowell",
        "city": "Massachusetts",
        "website": "https://www.uml.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Plastics/Polymer) – notably strong plastics engineering program",
          "Business Administration (Manning School of Business)",
          "Computer Science",
          "Nursing",
          "Criminal Justice",
          "Music (Sound Recording Technology) – unique, industry-recognized program",
          "Nuclear Engineering",
          "Psychology",
          "Health Sciences",
          "Education"
        ]
      },
      {
        "rank": 46,
        "name": "Massachusetts Collage of Pharmacy and Health Sciences",
        "city": "Boston,  Massachusetts",
        "website": "https://www.mcphs.edu",
        "highlights": [
          "Pharmacy (PharmD) – flagship program, one of the largest and most respected pharmacy schools in the U.S.",
          "Nursing",
          "Physician Assistant Studies",
          "Physical Therapy",
          "Occupational Therapy",
          "Health Sciences",
          "Optometry",
          "Health Psychology",
          "Medical Laboratory Science",
          "Public Health"
        ]
      },
      {
        "rank": 47,
        "name": "University o f Massachusetts",
        "city": "Boston,  Massachusetts",
        "website": "https://www.umb.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Psychology",
          "Biology / Pre-Med",
          "Public Policy & Public Affairs",
          "Political Science",
          "Computer Science",
          "Criminal Justice",
          "Gender, Sexuality & Women's Studies",
          "Economics"
        ]
      },
      {
        "rank": 48,
        "name": "University of Massachusetts",
        "city": "Dartmouth,  Massachusetts",
        "website": "https://www.umassd.edu",
        "highlights": [
          "Engineering (Electrical, Mechanical, Computer, Bioengineering)",
          "Business Administration (Charlton College of Business)",
          "Nursing",
          "Marine Biology / Fisheries Oceanography – notable, tied to coastal location",
          "Art & Design (CVPA – College of Visual & Performing Arts)",
          "Computer Science",
          "Psychology",
          "Textile Science / Engineering – historically strong program",
          "Criminal Justice",
          "Education"
        ]
      },
      {
        "rank": 49,
        "name": "Suffolk University",
        "city": "Boston,  Massachusetts",
        "website": "https://www.suffolk.edu",
        "highlights": [
          "Law (Suffolk University Law School) – well-known, especially for part-time/evening programs",
          "Business Administration (Sawyer Business School)",
          "International Business",
          "Accounting / Finance",
          "Criminal Justice",
          "Psychology",
          "Communication & Journalism",
          "Political Science",
          "Government / Public Administration",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 50,
        "name": "University of New Hampshire",
        "city": "Durham,  New Hampshire",
        "website": "https://www.unh.edu",
        "highlights": [
          "Business Administration (Peter T. Paul College of Business and Economics)",
          "Engineering (Mechanical, Civil, Electrical, Ocean)",
          "Nursing",
          "Marine Biology / Ocean Sciences – notable, strong coastal research programs",
          "Psychology",
          "Environmental Science / Sustainability",
          "Education",
          "Kinesiology",
          "Communication",
          "Political Science"
        ]
      },
      {
        "rank": 51,
        "name": "Adelphi University",
        "city": "New York – Garden City and Manhattan Campus",
        "website": "https://www.adelphi.edu",
        "highlights": [
          "Nursing – highly ranked, one of the largest nursing programs in NY",
          "Psychology / Clinical Psychology – strong graduate psychology programs",
          "Social Work",
          "Business Administration",
          "Education",
          "Communications",
          "Biology / Pre-Med",
          "Physical Therapy",
          "Public Health",
          "Criminal Justice"
        ]
      },
      {
        "rank": 52,
        "name": "University of Central Florida",
        "city": "Orlando,  Florida",
        "website": "https://www.ucf.edu",
        "highlights": [
          "Computer Science / Game Design – nationally top-ranked game design program",
          "Engineering (Mechanical, Electrical, Aerospace) – strong ties to nearby aerospace/defense industry",
          "Business Administration",
          "Hospitality Management – Rosen College, top-ranked, tied to Orlando's tourism industry",
          "Nursing",
          "Film / Digital Media",
          "Psychology",
          "Optics & Photonics – unique, cutting-edge program",
          "Criminal Justice",
          "Education"
        ]
      },
      {
        "rank": 53,
        "name": "University of Idaho",
        "city": "Moscow,  Idaho",
        "website": "https://www.uidaho.edu",
        "highlights": [
          "Agriculture / Agricultural Sciences – flagship land-grant program",
          "Natural Resources / Forestry – strong reputation, tied to Idaho's forests",
          "Engineering (Mechanical, Civil, Electrical)",
          "Business Administration",
          "Wildlife Resources / Fisheries",
          "Education",
          "Psychology",
          "Animal & Veterinary Science",
          "Environmental Science",
          "Journalism / Mass Communication"
        ]
      },
      {
        "rank": 54,
        "name": "California state University",
        "city": "East Bay",
        "website": "https://www.csueastbay.edu",
        "highlights": [
          "Business Administration – largest program, strong ties to Bay Area industry",
          "Nursing",
          "Criminal Justice",
          "Computer Science",
          "Psychology",
          "Kinesiology",
          "Health Sciences",
          "Sociology",
          "Liberal Studies / Education",
          "Biology"
        ]
      },
      {
        "rank": 55,
        "name": "California State University",
        "city": "Fresno",
        "website": "https://www.fresnostate.edu",
        "highlights": [
          "Agricultural Business / Agriculture – strong reputation, tied to Central Valley farming industry",
          "Business Administration",
          "Nursing",
          "Criminology",
          "Viticulture & Enology – notable wine science program",
          "Education",
          "Psychology",
          "Kinesiology",
          "Social Work",
          "Civil Engineering"
        ]
      },
      {
        "rank": 56,
        "name": "California State University",
        "city": "Sacramento",
        "website": "https://www.csus.edu",
        "highlights": [
          "Business Administration",
          "Criminal Justice",
          "Nursing",
          "Government / Political Science – strong reputation given proximity to state capitol",
          "Public Policy & Administration",
          "Psychology",
          "Social Work",
          "Civil Engineering",
          "Kinesiology",
          "Communication Studies"
        ]
      },
      {
        "rank": 57,
        "name": "California State University",
        "city": "San Bernardino and College of Extended Learning",
        "website": "https://www.csusb.edu",
        "highlights": [
          "Business Administration",
          "Criminal Justice",
          "Nursing",
          "Psychology",
          "Kinesiology",
          "Education",
          "Social Work",
          "Computer Science",
          "Liberal Studies",
          "Biology"
        ]
      },
      {
        "rank": 58,
        "name": "California State University",
        "city": "Dominguez Hills",
        "website": "https://www.csudh.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Criminal Justice",
          "Psychology",
          "Occupational Studies",
          "Health Science",
          "Sociology",
          "Kinesiology",
          "Education",
          "Social Work"
        ]
      },
      {
        "rank": 59,
        "name": "California State University",
        "city": "Stanislaus",
        "website": "https://www.csustan.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Criminal Justice",
          "Psychology",
          "Liberal Studies / Education",
          "Agricultural Studies – tied to Central Valley agriculture",
          "Kinesiology",
          "Social Work",
          "Biology",
          "Sociology"
        ]
      },
      {
        "rank": 60,
        "name": "California State University",
        "city": "Northridge",
        "website": "https://www.csun.edu",
        "highlights": [
          "Business Administration – one of the largest business schools in California",
          "Film / Cinema and Television Arts – strong industry ties to Hollywood",
          "Psychology",
          "Deaf Studies / Deaf Education – nationally recognized program",
          "Journalism",
          "Engineering (Mechanical, Civil, Electrical)",
          "Kinesiology",
          "Sociology",
          "Health Administration",
          "Communication Studies"
        ]
      },
      {
        "rank": 61,
        "name": "California State University",
        "city": "Bakersfield",
        "website": "https://www.csub.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Criminal Justice",
          "Petroleum Engineering / Geology – tied to Kern County's oil industry",
          "Psychology",
          "Liberal Studies / Education",
          "Kinesiology",
          "Social Work",
          "Biology",
          "Public Health"
        ]
      },
      {
        "rank": 62,
        "name": "California State University",
        "city": "Channel Islands",
        "website": "https://www.csuci.edu",
        "highlights": [
          "Business Administration",
          "Psychology",
          "Biology",
          "Nursing",
          "Criminal Justice / Criminology",
          "Liberal Studies / Education",
          "Computer Science",
          "Sociology",
          "Environmental Science & Resource Management",
          "Health Science"
        ]
      },
      {
        "rank": 63,
        "name": "California State University",
        "city": "Monterey Bay",
        "website": "https://csumb.edu",
        "highlights": [
          "Business Administration",
          "Marine Science / Environmental Science – strong ties to Monterey Bay coastal location",
          "Computer Science / Human-Computer Interaction",
          "Nursing",
          "Psychology",
          "Cinematic Arts & Technology",
          "Kinesiology",
          "Liberal Studies / Education",
          "Social Work / Human Development",
          "Applied Environmental Science"
        ]
      },
      {
        "rank": 64,
        "name": "San Francisco State University",
        "city": "California",
        "website": "https://www.sfsu.edu",
        "highlights": [
          "Business Administration",
          "Cinema / Film Studies – strong industry reputation",
          "Journalism",
          "Psychology",
          "Biology",
          "International Relations",
          "Creative Writing – nationally recognized MFA program",
          "Communication Studies",
          "Design & Industry",
          "Public Health"
        ]
      },
      {
        "rank": 65,
        "name": "San Jose State University",
        "city": "California",
        "website": "https://www.sjsu.edu",
        "highlights": [
          "Computer Science / Software Engineering – strong Silicon Valley industry ties",
          "Business Administration (Lucas College of Business)",
          "Engineering (Electrical, Mechanical, Industrial)",
          "Nursing",
          "Design (Industrial Design, Animation/Illustration)",
          "Aviation",
          "Psychology",
          "Justice Studies",
          "Kinesiology",
          "Journalism / Mass Communications"
        ]
      },
      {
        "rank": 66,
        "name": "California State Polytechnic University",
        "city": "Pomona",
        "website": "https://www.cpp.edu",
        "highlights": [
          "Engineering (Mechanical, Civil, Electrical, Aerospace) – strong \"learn by doing\" reputation",
          "Business Administration",
          "Architecture",
          "Animal Science / Agriculture – notable, includes on-campus farm",
          "Computer Science",
          "Hospitality Management",
          "Kinesiology",
          "Psychology",
          "Urban & Regional Planning",
          "Nursing"
        ]
      },
      {
        "rank": 67,
        "name": "Seattle Pacific University",
        "city": "Seattle,  Washington",
        "website": "https://www.spu.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Psychology",
          "Biology / Pre-Med",
          "Education",
          "Computer Science",
          "Theology / Christian Ministry – strong ties to university's Christian identity",
          "Kinesiology",
          "Communication",
          "Social Work"
        ]
      },
      {
        "rank": 68,
        "name": "California Baptist University",
        "city": "Riverside,  California",
        "website": "https://calbaptist.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Psychology",
          "Kinesiology",
          "Criminal Justice",
          "Biology / Pre-Med",
          "Education",
          "Christian Ministry / Theology – strong ties to university's Baptist identity",
          "Engineering",
          "Communication Sciences & Disorders"
        ]
      },
      {
        "rank": 69,
        "name": "New Jersey Institute of Technology",
        "city": "Newark,  New Jersey",
        "website": "https://www.njit.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Civil, Biomedical)",
          "Architecture (Hillier College of Architecture and Design)",
          "Information Technology",
          "Data Science",
          "Business Analytics / Management (Martin Tuchman School of Management)",
          "Civil Engineering",
          "Applied Physics",
          "Chemical Engineering",
          "Industrial Engineering"
        ]
      },
      {
        "rank": 70,
        "name": "Florida Institute of Technology",
        "city": "Melbourne,  Florida",
        "website": "https://www.fit.edu",
        "highlights": [
          "Aerospace Engineering – strong reputation, tied to nearby Kennedy Space Center",
          "Mechanical Engineering",
          "Computer Science / Cybersecurity",
          "Aviation / Aeronautics – notable flight training programs",
          "Marine Biology / Oceanography – strong coastal research programs",
          "Electrical Engineering",
          "Business Administration",
          "Psychology",
          "Biomedical Engineering",
          "Environmental Science"
        ]
      },
      {
        "rank": 71,
        "name": "Pace University",
        "city": "New York City",
        "website": "https://www.pace.edu",
        "highlights": [
          "Business Administration (Lubin School of Business) – strong NYC finance industry ties",
          "Accounting / Finance",
          "Computer Science",
          "Nursing (Lienhard School of Nursing)",
          "Performing Arts – notable acting/musical theatre program (Pace School of Performing Arts)",
          "Psychology",
          "Communications",
          "Law (Elisabeth Haub School of Law)",
          "Criminal Justice",
          "Environmental Science"
        ]
      },
      {
        "rank": 72,
        "name": "Drew University",
        "city": "Madison,  New Jersey",
        "website": "https://www.drew.edu",
        "highlights": [
          "Political Science / International Relations – strong ties to NYC/DC through internship programs",
          "Theology / Theological Studies (Drew Theological School) – notable seminary",
          "English / Creative Writing",
          "Biology / Pre-Med",
          "Psychology",
          "Economics",
          "Environmental Studies",
          "History",
          "Business Studies",
          "Law and Society"
        ]
      },
      {
        "rank": 73,
        "name": "DePaul University",
        "city": "Chicago,  Illinois",
        "website": "https://www.depaul.edu",
        "highlights": [
          "Business Administration (Driehaus College of Business)",
          "Computer Science / Game Development – nationally recognized game design program",
          "Accounting",
          "Law (DePaul University College of Law)",
          "Psychology",
          "Digital Cinema / Media Arts",
          "Marketing",
          "Theatre",
          "Criminology",
          "Communication"
        ]
      },
      {
        "rank": 74,
        "name": "University of Hartford",
        "city": "West Hartford,  Connecticut",
        "website": "https://www.hartford.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Civil, Acoustics) – notable acoustics/audio engineering program",
          "Business Administration (Barney School of Business)",
          "Music (Hartt School) – nationally recognized performing arts conservatory",
          "Architecture",
          "Nursing",
          "Psychology",
          "Art / Illustration",
          "Biology / Pre-Med",
          "Criminal Justice",
          "Education"
        ]
      },
      {
        "rank": 75,
        "name": "Florida International University",
        "city": "Miami,  Florida",
        "website": "https://www.fiu.edu",
        "highlights": [
          "Hospitality & Tourism Management – top-ranked, tied to Miami's tourism industry",
          "International Business – strong reputation given Miami's global trade ties",
          "Business Administration",
          "Engineering (Civil, Mechanical, Electrical, Biomedical)",
          "Nursing",
          "Journalism / Mass Communication",
          "Criminal Justice",
          "Psychology",
          "Architecture",
          "Public Health"
        ]
      },
      {
        "rank": 76,
        "name": "Kent State University",
        "city": "Kent,  Ohio",
        "website": "https://www.kent.edu",
        "highlights": [
          "Fashion Design / Merchandising – nationally top-ranked fashion school",
          "Business Administration",
          "Nursing",
          "Journalism / Mass Communication",
          "Fashion Design",
          "Architecture",
          "Psychology",
          "Education",
          "Biology / Pre-Med",
          "Communication Studies"
        ]
      },
      {
        "rank": 77,
        "name": "Nebraska Wesleyan University Lincoln",
        "city": "",
        "website": "https://www.nebrwesleyan.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Education",
          "Psychology",
          "Biology / Pre-Med",
          "Athletic Training / Exercise Science",
          "Criminal Justice",
          "Communication",
          "Music",
          "Actuarial Science"
        ]
      },
      {
        "rank": 78,
        "name": "University of Mississippi",
        "city": "Oxford,  Mississippi",
        "website": "https://www.olemiss.edu",
        "highlights": [
          "Business Administration",
          "Pharmacy – highly ranked program",
          "Accounting",
          "Journalism / Integrated Marketing Communications",
          "Nursing",
          "Engineering (Mechanical, Civil, Electrical, Chemical)",
          "Psychology",
          "Political Science / Pre-Law",
          "Education",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 79,
        "name": "Embry Riddle Aeronautical University",
        "city": "",
        "website": "https://www.erau.edu",
        "highlights": [
          "Aeronautical Science / Professional Flight – flagship program, top-ranked flight training",
          "Aerospace Engineering",
          "Mechanical Engineering",
          "Air Traffic Management",
          "Aviation Business Administration",
          "Unmanned Aircraft Systems (Drone Technology) – unique, cutting-edge program",
          "Airport Management",
          "Cybersecurity",
          "Computer Science",
          "Aviation Maintenance Science"
        ]
      },
      {
        "rank": 80,
        "name": "Mississippi State University",
        "city": "Oktibbeha Country ,  Mississippi",
        "website": "https://www.msstate.edu",
        "highlights": [
          "Agriculture / Agribusiness – flagship land-grant program",
          "Engineering (Mechanical, Aerospace, Civil, Electrical)",
          "Business Administration",
          "Veterinary Medicine – top-ranked vet program",
          "Forestry / Wildlife Sciences",
          "Computer Science",
          "Poultry Science – unique, tied to Mississippi's poultry industry",
          "Education",
          "Psychology",
          "Communication"
        ]
      },
      {
        "rank": 81,
        "name": "University of New Mexico",
        "city": "Albuquerque",
        "website": "https://www.unm.edu",
        "highlights": [
          "Business Administration (Anderson School of Management)",
          "Engineering (Nuclear, Electrical, Civil, Mechanical) – strong ties to national labs (Sandia, Los Alamos)",
          "Medicine / Pre-Med – highly regarded medical school",
          "Psychology",
          "Nursing",
          "Biology",
          "Architecture / Planning",
          "Latin American Studies – nationally recognized program",
          "Anthropology",
          "Political Science"
        ]
      },
      {
        "rank": 82,
        "name": "Illinois State University",
        "city": "Normal,  Illinois",
        "website": "https://illinoisstate.edu",
        "highlights": [
          "Business Administration",
          "Education (Teacher Education)",
          "Nursing",
          "Information Technology / Computer Science",
          "Psychology",
          "Criminal Justice Sciences",
          "Communication",
          "Agriculture",
          "Biological Sciences",
          "Insurance / Financial Planning"
        ]
      },
      {
        "rank": 83,
        "name": "University of Wisconsin Milwaukee",
        "city": "Wisconsin",
        "website": "https://uwm.edu",
        "highlights": [
          "Business Administration (Lubar College of Business)",
          "Nursing",
          "Engineering (Mechanical, Civil, Electrical, Biomedical)",
          "Architecture (School of Architecture and Urban Planning)",
          "Psychology",
          "Public Health",
          "Social Work",
          "Freshwater Sciences – unique, tied to Great Lakes research",
          "Criminal Justice",
          "Education"
        ]
      },
      {
        "rank": 84,
        "name": "University of Nevada",
        "city": "Reno",
        "website": "https://www.unr.edu",
        "highlights": [
          "Business Administration",
          "Engineering (Mechanical, Civil, Electrical, Mining)",
          "Nursing",
          "Journalism (Reynolds School of Journalism) – nationally recognized",
          "Mining Engineering – historically strong, tied to Nevada's mining industry",
          "Psychology",
          "Biology / Pre-Med",
          "Agriculture, Biotechnology & Natural Resources",
          "Education",
          "Criminal Justice"
        ]
      },
      {
        "rank": 85,
        "name": "Cleveland State University",
        "city": "Cleveland,  Ohio",
        "website": "https://www.csuohio.edu",
        "highlights": [
          "Business Administration (Monte Ahuja College of Business)",
          "Nursing",
          "Engineering (Mechanical, Civil, Electrical, Chemical)",
          "Law (Cleveland-Marshall College of Law)",
          "Psychology",
          "Criminal Justice",
          "Social Work",
          "Education",
          "Biology",
          "Communication"
        ]
      },
      {
        "rank": 86,
        "name": "Indiana University of Pennsylvania",
        "city": "Indiana,  PA",
        "website": "https://www.iup.edu",
        "highlights": [
          "Criminology – nationally recognized, one of the largest programs",
          "Nursing",
          "Business Administration",
          "Education",
          "Psychology",
          "Safety Sciences – unique, industry-recognized program",
          "Communications Media",
          "Biology",
          "Social Work",
          "English"
        ]
      },
      {
        "rank": 87,
        "name": "Wright State University",
        "city": "Dayton,  Ohio",
        "website": "https://www.wright.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Biomedical, Computer) – strong ties to Wright-Patterson AFB",
          "Business Administration (Raj Soin College of Business)",
          "Nursing",
          "Computer Science",
          "Psychology",
          "Aerospace/Aviation-related programs – tied to nearby aerospace industry",
          "Biological Sciences / Pre-Med",
          "Education",
          "Social Work",
          "Communication"
        ]
      },
      {
        "rank": 88,
        "name": "Wichita State University",
        "city": "Wichita,  Kansas",
        "website": "https://www.wichita.edu",
        "highlights": [
          "Aerospace Engineering – strong ties to Wichita's aviation manufacturing industry (Boeing, Spirit AeroSystems, Textron)",
          "Business Administration (Barton School of Business)",
          "Nursing",
          "Mechanical Engineering",
          "Aviation Maintenance Technology",
          "Psychology",
          "Biology / Pre-Med",
          "Social Work",
          "Education",
          "Communication"
        ]
      },
      {
        "rank": 89,
        "name": "Northern Arizona University",
        "city": "Flagstaff,  Arizona",
        "website": "https://www.nau.edu",
        "highlights": [
          "Forestry – nationally recognized, tied to Flagstaff's forest environment",
          "Business Administration (W.A. Franke College of Business)",
          "Nursing",
          "Education",
          "Hotel & Restaurant Management",
          "Psychology",
          "Biology / Pre-Med",
          "Environmental Science",
          "Criminal Justice",
          "Astronomy/Physics – notable, tied to Lowell Observatory nearby"
        ]
      },
      {
        "rank": 90,
        "name": "University of North Texas",
        "city": "Denton,  Texas",
        "website": "https://www.unt.edu",
        "highlights": [
          "Music (College of Music) – internationally renowned, especially jazz studies program",
          "Business Administration (G. Brint Ryan College of Business)",
          "Radio, Television & Film",
          "Engineering (Mechanical, Electrical, Computer)",
          "Hospitality Management",
          "Psychology",
          "Education",
          "Art & Design",
          "Computer Science",
          "Criminal Justice"
        ]
      },
      {
        "rank": 91,
        "name": "University of Missouri – St. Louis (UMSL)",
        "city": "Missouri",
        "website": "https://www.umsl.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Criminology & Criminal Justice",
          "Optometry – notable, one of few optometry schools in the region",
          "Psychology",
          "Education",
          "Biology",
          "Public Policy Administration",
          "Computer Science",
          "Social Work"
        ]
      },
      {
        "rank": 92,
        "name": "The University of Memphis",
        "city": "Memphis,  Tennessee",
        "website": "https://www.memphis.edu",
        "highlights": [
          "Business Administration (Fogelman College of Business & Economics)",
          "Engineering (Mechanical, Civil, Electrical, Biomedical)",
          "Audiology / Speech-Language Pathology – nationally recognized program",
          "Nursing",
          "Music – notable, tied to Memphis's musical heritage",
          "Criminal Justice",
          "Education",
          "Psychology",
          "Logistics & Supply Chain Management – strong ties to FedEx headquarters in Memphis",
          "Communication"
        ]
      },
      {
        "rank": 93,
        "name": "Tennessee Tech University",
        "city": "Cookeville,  Tennessee",
        "website": "https://www.tntech.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Civil, Chemical) – strong regional reputation",
          "Business Administration",
          "Nursing",
          "Education",
          "Computer Science",
          "Agriculture",
          "Psychology",
          "Criminal Justice",
          "Biology",
          "Interdisciplinary Studies"
        ]
      },
      {
        "rank": 94,
        "name": "Texas State University",
        "city": "San Marcos,  Texas",
        "website": "https://www.txstate.edu",
        "highlights": [
          "Business Administration (McCoy College of Business)",
          "Criminal Justice – nationally recognized, one of the largest programs",
          "Education",
          "Nursing",
          "Mass Communication",
          "Engineering (Mechanical, Electrical, Civil)",
          "Psychology",
          "Biology / Pre-Med",
          "Respiratory Care",
          "Kinesiology"
        ]
      },
      {
        "rank": 95,
        "name": "Florida Polytechnic University",
        "city": "Lakeland,  Florida",
        "website": "https://floridapoly.edu",
        "highlights": [
          "Computer Science",
          "Computer Engineering",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Data Science / Analytics",
          "Cybersecurity",
          "Information Technology",
          "Industrial Engineering",
          "Civil Engineering",
          "Big Data Analytics"
        ]
      },
      {
        "rank": 96,
        "name": "Montana State University",
        "city": "Bozeman,  Montana",
        "website": "https://www.montana.edu",
        "highlights": [
          "Agriculture / Land Resources & Environmental Sciences – flagship land-grant program",
          "Engineering (Mechanical, Civil, Electrical, Chemical)",
          "Business Administration (Jake Jabs College of Business)",
          "Nursing",
          "Architecture",
          "Animal & Range Sciences",
          "Psychology",
          "Ecology / Environmental Science",
          "Education",
          "Film & Photography – notable, tied to nature/wildlife documentary work"
        ]
      },
      {
        "rank": 97,
        "name": "Gannon University",
        "city": "Erie,  Pennsylvania",
        "website": "https://www.gannon.edu",
        "highlights": [
          "Nursing",
          "Physician Assistant Studies",
          "Business Administration",
          "Occupational Therapy",
          "Engineering (Mechanical, Electrical, Civil, Environmental)",
          "Physical Therapy",
          "Biology / Pre-Med",
          "Criminal Justice",
          "Education",
          "Psychology"
        ]
      },
      {
        "rank": 98,
        "name": "The University of Scranton",
        "city": "Scranton,  Pennsylvania",
        "website": "https://www.scranton.edu",
        "highlights": [
          "Nursing",
          "Business Administration (Kania School of Management)",
          "Occupational Therapy",
          "Physical Therapy",
          "Biology / Pre-Med",
          "Psychology",
          "Accounting / Finance",
          "Education",
          "Criminal Justice",
          "Counseling / Human Services"
        ]
      },
      {
        "rank": 99,
        "name": "Milwaukee School of Engineering",
        "city": "Milwaukee,  Wisconsin",
        "website": "https://www.msoe.edu",
        "highlights": [
          "Mechanical Engineering",
          "Electrical Engineering",
          "Biomedical Engineering",
          "Computer Engineering",
          "Computer Science",
          "Software Engineering",
          "Business (Actuarial Science / Technical Communication)",
          "Architectural Engineering & Building Construction",
          "Nursing",
          "Biomolecular Engineering"
        ]
      },
      {
        "rank": 100,
        "name": "Auburn University at Montgomery",
        "city": "Alabama",
        "website": "https://www.aum.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Criminal Justice",
          "Education",
          "Psychology",
          "Political Science – strong reputation given Montgomery's state capital location",
          "Health Sciences",
          "Liberal Arts",
          "Biology",
          "Communication"
        ]
      },
      {
        "rank": 101,
        "name": "Hofstra University",
        "city": "Long island,  New York",
        "website": "https://www.hofstra.edu",
        "highlights": [
          "Business Administration (Zarb School of Business)",
          "Law (Maurice A. Deane School of Law)",
          "Journalism / Mass Communication",
          "Medicine / Pre-Med (Zucker School of Medicine)",
          "Engineering (Mechanical, Electrical, Computer)",
          "Psychology",
          "Political Science",
          "Speech-Language-Hearing Sciences",
          "Drama / Film",
          "Physician Assistant Studies"
        ]
      },
      {
        "rank": 102,
        "name": "Mercer University",
        "city": "Macon,  Georgia",
        "website": "https://www.mercer.edu",
        "highlights": [
          "Pharmacy – highly ranked program",
          "Business Administration (Stetson-Hatcher School of Business)",
          "Engineering (Biomedical, Electrical, Environmental, Industrial)",
          "Medicine / Pre-Med (Mercer University School of Medicine)",
          "Nursing",
          "Law (Walter F. George School of Law)",
          "Education",
          "Psychology",
          "Music – notable, tied to Townsend School of Music",
          "Christian Ministry / Theology"
        ]
      },
      {
        "rank": 103,
        "name": "Kennesaw State University",
        "city": "Kennesaw,  Georgia",
        "website": "https://www.kennesaw.edu",
        "highlights": [
          "Business Administration (Coles College of Business) – one of the largest programs",
          "Nursing",
          "Computer Science / Software Engineering",
          "Criminal Justice",
          "Engineering Technology",
          "Psychology",
          "Education",
          "Marketing",
          "Biology / Pre-Med",
          "Communication"
        ]
      },
      {
        "rank": 104,
        "name": "Long Island University",
        "city": "Post,  New York",
        "website": "https://www.liu.edu/Post",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Pharmacy",
          "Education",
          "Psychology",
          "Criminal Justice",
          "Veterinary Technology",
          "Communication / Media Arts",
          "Biology / Pre-Med",
          "Accounting"
        ]
      },
      {
        "rank": 105,
        "name": "Long Island University",
        "city": "Brooklyn,  New York",
        "website": "https://www.liu.edu/Brooklyn",
        "highlights": [
          "Pharmacy",
          "Nursing",
          "Business Administration",
          "Physician Assistant Studies",
          "Physical Therapy",
          "Psychology",
          "Education",
          "Criminal Justice",
          "Communication / Media Arts",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 106,
        "name": "Glasgow Caledonian New York College",
        "city": "",
        "website": "https://www.gcnyc.edu",
        "highlights": [
          "Sustainability Studies (MSc) – flagship graduate program",
          "Fashion and Textile Marketing",
          "Finance / Financial Risk Management",
          "Homeland Security and Disaster Management",
          "Business",
          "Nursing",
          "Clinical Laboratory Science",
          "Criminal Justice",
          "English Language and Literature"
        ]
      },
      {
        "rank": 107,
        "name": "Midwestern State University",
        "city": "Wichita falls,  Texas",
        "website": "https://msutexas.edu",
        "highlights": [
          "Nursing",
          "Business Administration (Dillard College of Business Administration)",
          "Radiologic Sciences",
          "Criminal Justice",
          "Kinesiology",
          "Education",
          "Psychology",
          "Biology / Pre-Med",
          "Respiratory Care",
          "Mass Communication"
        ]
      },
      {
        "rank": 108,
        "name": "Texas A & M University",
        "city": "Corpus Christi,  Texas",
        "website": "https://www.tamucc.edu",
        "highlights": [
          "Marine Biology – notable, strong coastal research programs tied to the Gulf of Mexico",
          "Nursing",
          "Business Administration",
          "Engineering (Mechanical, Electrical, Environmental)",
          "Education",
          "Criminal Justice",
          "Kinesiology",
          "Psychology",
          "Computer Science",
          "Fisheries & Mariculture"
        ]
      },
      {
        "rank": 109,
        "name": "Western Kentucky University",
        "city": "Bowling Green,  Kentucky",
        "website": "https://www.wku.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Education",
          "Journalism / Broadcasting – notable, strong photojournalism program",
          "Agriculture",
          "Criminology",
          "Psychology",
          "Engineering (Mechanical, Civil, Electrical)",
          "Communication",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 110,
        "name": "Southeast Missouri State University",
        "city": "Cape Girardeau,  Missouri",
        "website": "https://www.semo.edu",
        "highlights": [
          "Business Administration (Harrison College of Business)",
          "Nursing",
          "Education",
          "Agriculture",
          "Criminal Justice",
          "Music – notable, tied to River Campus performing arts programs",
          "Psychology",
          "Mass Communication",
          "Biology / Pre-Med",
          "Athletic Training / Exercise Science"
        ]
      },
      {
        "rank": 111,
        "name": "Youngstown State University",
        "city": "Youngstown,  Ohio",
        "website": "https://ysu.edu",
        "highlights": [
          "Engineering (Mechanical, Civil, Electrical, Industrial) – strong regional manufacturing ties",
          "Business Administration",
          "Nursing",
          "Criminal Justice",
          "Education",
          "Psychology",
          "Music – notable, nationally recognized Dana School of Music",
          "Health Professions",
          "Biology / Pre-Med",
          "Communication"
        ]
      },
      {
        "rank": 112,
        "name": "Arkansas State University",
        "city": "Jonesboro,  Arkansas",
        "website": "https://www.astate.edu",
        "highlights": [
          "Agriculture – flagship program, strong regional farming ties",
          "Business Administration",
          "Nursing",
          "Education",
          "Criminal Justice",
          "Engineering (Mechanical, Electrical, Civil)",
          "Radiologic Sciences",
          "Psychology",
          "Communication / Journalism",
          "Kinesiology"
        ]
      },
      {
        "rank": 113,
        "name": "Lewis University",
        "city": "Romeoville,  Illinois",
        "website": "https://www.lewisu.edu",
        "highlights": [
          "Aviation / Aviation Administration – notable, one of the few university aviation programs, tied to nearby airports",
          "Nursing",
          "Business Administration",
          "Criminal/Social Justice",
          "Education",
          "Psychology",
          "Computer Science",
          "Engineering (Mechanical, Electrical, Computer)",
          "Aviation Maintenance",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 114,
        "name": "Southern Illinois University",
        "city": "Edwardsville,  Illinois",
        "website": "https://www.siue.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Engineering (Mechanical, Civil, Electrical, Industrial)",
          "Education",
          "Pharmacy",
          "Psychology",
          "Criminal Justice",
          "Dental Medicine",
          "Social Work",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 115,
        "name": "Western Illinois University",
        "city": "Macomb,  Illinois",
        "website": "https://www.wiu.edu",
        "highlights": [
          "Law Enforcement & Justice Administration – nationally recognized",
          "Business Administration",
          "Agriculture",
          "Education",
          "Nursing",
          "Engineering Technology",
          "Psychology",
          "Broadcasting / Communication",
          "Biology / Pre-Med",
          "Recreation, Park & Tourism Administration"
        ]
      },
      {
        "rank": 116,
        "name": "University of New Haven",
        "city": "West Haven,  Connecticut",
        "website": "https://www.newhaven.edu",
        "highlights": [
          "Criminal Justice / Forensic Science – nationally top-ranked, flagship program",
          "Business Administration",
          "Engineering (Mechanical, Electrical, Civil, Biomedical)",
          "Fire Science",
          "Psychology",
          "National Security",
          "Marine Biology",
          "Hospitality & Tourism Management",
          "Sport Management",
          "Computer Science / Cybersecurity"
        ]
      },
      {
        "rank": 117,
        "name": "Dakota State University",
        "city": "Madison,  South Dakota",
        "website": "https://dsu.edu",
        "highlights": [
          "Cyber Operations / Cybersecurity – nationally recognized, designated National Center of Academic Excellence",
          "Computer Science",
          "Computer Information Systems",
          "Network and Security Administration",
          "Business Administration",
          "Digital Arts & Design",
          "Education",
          "Health Information Systems",
          "Analytics",
          "Computer Game Design"
        ]
      },
      {
        "rank": 118,
        "name": "Pittsburg State University",
        "city": "Pittsburg,  Kansas",
        "website": "https://www.pittstate.edu",
        "highlights": [
          "Technology / Engineering Technology – strong regional reputation, tied to manufacturing industry",
          "Business Administration",
          "Nursing",
          "Education",
          "Automotive Technology",
          "Psychology",
          "Criminal Justice",
          "Communication",
          "Biology / Pre-Med",
          "Plastics Engineering Technology – notable, unique program"
        ]
      },
      {
        "rank": 119,
        "name": "University of Bridgeport",
        "city": "Bridgeport,  Connecticut",
        "website": "https://www.bridgeport.edu",
        "highlights": [
          "Business Administration",
          "Engineering (Mechanical, Electrical, Computer, Biomedical)",
          "Nursing",
          "Naturopathic Medicine – notable, one of few accredited programs in the U.S.",
          "Chiropractic – notable, one of few university-based chiropractic programs",
          "Dental Hygiene",
          "Computer Science",
          "Human Nutrition",
          "Psychology",
          "Design (Fashion/Graphic Design)"
        ]
      },
      {
        "rank": 120,
        "name": "Murray State University",
        "city": "Murray,  Kentucky",
        "website": "https://www.murraystate.edu",
        "highlights": [
          "Agriculture",
          "Business Administration",
          "Nursing",
          "Education",
          "Veterinary Technology",
          "Journalism / Mass Communications",
          "Psychology",
          "Criminal Justice",
          "Biology / Pre-Med",
          "Equine Science – notable, tied to strong horse science program"
        ]
      },
      {
        "rank": 121,
        "name": "Marshall University Huntington",
        "city": "West Virginia",
        "website": "https://www.marshall.edu",
        "highlights": [
          "Business Administration (Lewis College of Business)",
          "Nursing",
          "Medicine / Pre-Med (Joan C. Edwards School of Medicine)",
          "Journalism / Mass Communications",
          "Education",
          "Forensic Science",
          "Psychology",
          "Engineering (Civil, Mechanical, Chemical)",
          "Criminal Justice",
          "Physical Therapy"
        ]
      },
      {
        "rank": 122,
        "name": "Duquesne University",
        "city": "Pittsburgh,  Pennsylvania",
        "website": "https://www.duq.edu",
        "highlights": [
          "Pharmacy – highly ranked program",
          "Business Administration (Palumbo-Donahue School of Business)",
          "Nursing",
          "Law (Duquesne University School of Law)",
          "Physical Therapy",
          "Occupational Therapy",
          "Education",
          "Psychology",
          "Music – notable, tied to Mary Pappert School of Music",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 123,
        "name": "Quinnipiac University",
        "city": "Hamden,  Connecticut",
        "website": "https://www.qu.edu",
        "highlights": [
          "Nursing",
          "Physician Assistant Studies",
          "Business Administration (School of Business)",
          "Law (Quinnipiac University School of Law)",
          "Journalism – notable, tied to strong sports journalism reputation",
          "Occupational Therapy",
          "Physical Therapy",
          "Communications",
          "Medicine (Frank H. Netter MD School of Medicine)",
          "Psychology"
        ]
      },
      {
        "rank": 124,
        "name": "NY Tech",
        "city": "New York (NYIT)",
        "website": "https://www.nyit.edu",
        "highlights": [
          "Osteopathic Medicine (NYIT College of Osteopathic Medicine) – flagship, highly regarded",
          "Engineering (Mechanical, Electrical, Computer, Civil)",
          "Business Administration",
          "Architecture",
          "Computer Science / Cybersecurity",
          "Physician Assistant Studies",
          "Life Sciences / Pre-Med",
          "Communication Arts",
          "Occupational Therapy",
          "Health Professions"
        ]
      },
      {
        "rank": 125,
        "name": "University of Central Oklahoma",
        "city": "Edmond,  Oklahoma",
        "website": "https://www.uco.edu",
        "highlights": [
          "Business Administration (College of Business)",
          "Nursing",
          "Education",
          "Forensic Science – notable, strong regional reputation",
          "Criminal Justice",
          "Psychology",
          "Music – notable, jazz studies and music production programs",
          "Biology / Pre-Med",
          "Communication",
          "Kinesiology"
        ]
      },
      {
        "rank": 126,
        "name": "Grand Valley State University",
        "city": "Allendale,  Michigan",
        "website": "https://www.gvsu.edu",
        "highlights": [
          "Business Administration (Seidman College of Business)",
          "Nursing",
          "Engineering (Mechanical, Electrical, Biomedical, Product Design)",
          "Education",
          "Health Sciences / Physician Assistant Studies",
          "Psychology",
          "Criminal Justice",
          "Biology / Pre-Med",
          "Communication",
          "Occupational Therapy"
        ]
      },
      {
        "rank": 127,
        "name": "Lawrence Technological University",
        "city": "Southfield,  Michigan",
        "website": "https://www.ltu.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Civil, Automotive) – strong ties to Michigan's automotive industry",
          "Architecture",
          "Computer Science",
          "Business Administration",
          "Industrial Design",
          "Robotics Engineering",
          "Biomedical Engineering",
          "Construction Engineering Technology",
          "Mathematics / Data Science",
          "Product Design"
        ]
      },
      {
        "rank": 128,
        "name": "Saint Leo University",
        "city": "St. Leo,  Florida",
        "website": "https://www.saintleo.edu",
        "highlights": [
          "Criminal Justice – nationally recognized, one of the largest programs",
          "Business Administration",
          "Sport Business",
          "Psychology",
          "Education",
          "Social Work",
          "Accounting",
          "Homeland Security",
          "Biology / Pre-Med",
          "Theology / Ministry"
        ]
      },
      {
        "rank": 129,
        "name": "Johnson and Wales University",
        "city": "Providence,  Rhode Island",
        "website": "https://www.jwu.edu",
        "highlights": [
          "Culinary Arts – flagship program, one of the most respected culinary schools in the U.S.",
          "Baking & Pastry Arts",
          "Hospitality Management",
          "Business Administration",
          "Sports/Entertainment/Event Management – notable, unique program",
          "Food & Beverage Entrepreneurship",
          "Criminal Justice",
          "Fashion Merchandising & Retailing",
          "Marketing",
          "Nutrition & Culinary Science"
        ]
      },
      {
        "rank": 130,
        "name": "Northwest Missouri State University",
        "city": "Maryville,  Missouri",
        "website": "https://www.nwmissouri.edu",
        "highlights": [
          "Agriculture",
          "Business Administration",
          "Education",
          "Mass Communication",
          "Nursing",
          "Computer Science / Information Systems",
          "Criminal Justice",
          "Psychology",
          "Biology / Pre-Med",
          "Interactive Digital Media"
        ]
      },
      {
        "rank": 131,
        "name": "Missouri State University",
        "city": "Springfield,  Missouri",
        "website": "https://www.missouristate.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Education",
          "Agriculture",
          "Psychology",
          "Communication / Media, Journalism & Film",
          "Criminal Justice",
          "Biology / Pre-Med",
          "Music / Theatre & Dance",
          "Social Work"
        ]
      },
      {
        "rank": 132,
        "name": "California Lutheran University",
        "city": "Thousand Oaks,  California",
        "website": "https://www.callutheran.edu",
        "highlights": [
          "Business Administration",
          "Psychology",
          "Biology / Pre-Med",
          "Nursing",
          "Communication",
          "Criminology",
          "Education",
          "Multimedia",
          "Kinesiology",
          "Political Science"
        ]
      },
      {
        "rank": 133,
        "name": "Pacific Lutheran University",
        "city": "Tacoma,  Washington",
        "website": "https://www.plu.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Psychology",
          "Biology / Pre-Med",
          "Social Work",
          "Education",
          "Environmental Studies",
          "Global Studies",
          "Kinesiology",
          "Communication"
        ]
      },
      {
        "rank": 134,
        "name": "Ashland University",
        "city": "Ashland,  Ohio",
        "website": "https://www.ashland.edu",
        "highlights": [
          "Business Administration",
          "Education – strong reputation, one of the largest teacher prep programs in Ohio",
          "Nursing",
          "Psychology",
          "Criminal Justice",
          "Athletic Training / Exercise Science",
          "Communication",
          "Biology / Pre-Med",
          "Social Work",
          "Music"
        ]
      },
      {
        "rank": 135,
        "name": "Weber State University",
        "city": "Ogden,  Utah",
        "website": "https://www.weber.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Education",
          "Radiologic Sciences",
          "Automotive Technology",
          "Criminal Justice",
          "Psychology",
          "Engineering Technology",
          "Health Sciences",
          "Aviation / Airport Operations"
        ]
      },
      {
        "rank": 136,
        "name": "University of Tampa",
        "city": "Florida",
        "website": "https://www.ut.edu",
        "highlights": [
          "Business Administration (Sykes College of Business)",
          "Marketing",
          "Finance",
          "Nursing",
          "Criminology",
          "Psychology",
          "Entrepreneurship",
          "Communication",
          "Biology / Pre-Med",
          "Accounting"
        ]
      },
      {
        "rank": 137,
        "name": "University of Nebraska",
        "city": "Kearney,  Nebraska",
        "website": "https://www.unk.edu",
        "highlights": [
          "Business Administration",
          "Education",
          "Nursing",
          "Criminal Justice",
          "Biology / Pre-Med",
          "Psychology",
          "Communication",
          "Agriculture",
          "Kinesiology / Sports Science",
          "Recreation Management"
        ]
      },
      {
        "rank": 138,
        "name": "Southern New Hampshire University",
        "city": "Manchester,  New Hampshire",
        "website": "https://www.snhu.edu",
        "highlights": [
          "Business Administration – one of the largest online business programs in the U.S.",
          "Psychology",
          "Criminal Justice",
          "Marketing",
          "Nursing",
          "Accounting",
          "Information Technology / Computer Science",
          "Communication",
          "Human Services",
          "Healthcare Administration"
        ]
      },
      {
        "rank": 139,
        "name": "National University",
        "city": "San Diego,  California",
        "website": "https://www.nu.edu",
        "highlights": [
          "Education / Teaching Credentials – flagship program, one of the largest in California",
          "Business Administration",
          "Nursing",
          "Psychology",
          "Criminal Justice",
          "Healthcare Administration",
          "Cybersecurity",
          "Computer Science",
          "Social Work",
          "Public Health"
        ]
      },
      {
        "rank": 140,
        "name": "Troy University",
        "city": "Troy,  Alabama",
        "website": "https://www.troy.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Criminal Justice",
          "Education",
          "Communication / Journalism",
          "Psychology",
          "Computer Science",
          "Social Work",
          "Biology / Pre-Med",
          "Sport Management"
        ]
      },
      {
        "rank": 141,
        "name": "Texas Wesleyan University",
        "city": "Dallas,  Texas",
        "website": "https://www.txwes.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Kinesiology",
          "Psychology",
          "Criminal Justice",
          "Education",
          "Biology / Pre-Med",
          "Social Work",
          "Communication",
          "Law (Texas Wesleyan formerly had a law school, now Texas A&M School of Law)"
        ]
      },
      {
        "rank": 142,
        "name": "Dallas Baptist University",
        "city": "Dallas,  Texas",
        "website": "https://www.dbu.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Education",
          "Christian Ministry / Theology – strong ties to university's Baptist identity",
          "Psychology",
          "Criminal Justice",
          "Biology / Pre-Med",
          "Communication",
          "Sport Management",
          "Accounting"
        ]
      },
      {
        "rank": 143,
        "name": "Jefferson University",
        "city": "St,  Philadelphia,  Pennsylvania",
        "website": "https://www.jefferson.edu",
        "highlights": [
          "Nursing – highly ranked",
          "Medicine / Pre-Med (Sidney Kimmel Medical College)",
          "Occupational Therapy",
          "Physical Therapy",
          "Pharmacy",
          "Architecture (Jefferson merged with Philadelphia University)",
          "Textile Design / Fashion Design – notable, tied to Philadelphia University merger",
          "Health Sciences",
          "Radiologic Sciences",
          "Public Health"
        ]
      },
      {
        "rank": 144,
        "name": "Western New England University",
        "city": "Springfield,  Massachusetts",
        "website": "https://www1.wne.edu",
        "highlights": [
          "Business Administration",
          "Law (School of Law)",
          "Engineering (Mechanical, Electrical, Biomedical, Civil)",
          "Pharmacy",
          "Criminal Justice",
          "Psychology",
          "Nursing",
          "Accounting",
          "Sport Management",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 145,
        "name": "Rivier University",
        "city": "Nashua,  New Hampshire",
        "website": "https://www.rivier.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Education",
          "Psychology",
          "Criminal Justice",
          "Occupational Therapy",
          "Social Work",
          "Biology / Pre-Med",
          "Communication",
          "Counseling"
        ]
      },
      {
        "rank": 146,
        "name": "Northwood University",
        "city": "Midland,  Michigan",
        "website": "https://www.northwood.edu",
        "highlights": [
          "Business Administration – core focus, entrepreneurship-driven curriculum (Northwood is a business-only university)",
          "Automotive Marketing / Management – notable, unique program tied to Michigan's auto industry",
          "Entrepreneurship",
          "Marketing",
          "Accounting",
          "Finance",
          "Sports & Entertainment Management",
          "Fashion Marketing & Management",
          "Management Information Systems",
          "International Business"
        ]
      },
      {
        "rank": 147,
        "name": "Rider University",
        "city": "Lawrence Township,  New Jersey",
        "website": "https://www.rider.edu",
        "highlights": [
          "Business Administration",
          "Music (Westminster Choir College) – nationally recognized, especially for choral music",
          "Education",
          "Psychology",
          "Criminal Justice",
          "Communication / Journalism",
          "Accounting / Finance",
          "Biology / Pre-Med",
          "Marketing",
          "Musical Theatre"
        ]
      },
      {
        "rank": 148,
        "name": "Atlantis University",
        "city": "Miami,  Florida",
        "website": "https://www.atlantisuniversity.edu",
        "highlights": [
          "Information Technology",
          "Computer Engineering",
          "Nursing Science",
          "Management Information Systems",
          "MBA (Master of Business Administration)",
          "Cybersecurity",
          "Hospitality & Tourism",
          "Engineering",
          "Education"
        ]
      },
      {
        "rank": 149,
        "name": "Valparaiso University",
        "city": "Indiana",
        "website": "https://www.valpo.edu",
        "highlights": [
          "Nursing",
          "Engineering (Mechanical, Civil, Electrical, Computer)",
          "Business Administration",
          "Meteorology – notable, unique nationally recognized program",
          "Law (Valparaiso Law closed in 2020, no longer offered)",
          "Psychology",
          "Education",
          "Biology / Pre-Med",
          "Political Science",
          "Communication"
        ]
      },
      {
        "rank": 150,
        "name": "Trine University",
        "city": "Angola,  Indiana",
        "website": "https://www.trine.edu",
        "highlights": [
          "Engineering (Mechanical, Electrical, Automotive, Civil) – flagship program, strong industry ties",
          "Business Administration",
          "Nursing",
          "Design Engineering Technology",
          "Biology / Pre-Med",
          "Criminal Justice",
          "Computer Science",
          "Physician Assistant Studies",
          "Psychology",
          "Sport Management"
        ]
      },
      {
        "rank": 151,
        "name": "Saginaw Valley State University",
        "city": "University,  Center,  Michigan",
        "website": "https://www.svsu.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Engineering (Mechanical, Electrical, Chemical)",
          "Education",
          "Health Sciences",
          "Psychology",
          "Criminal Justice",
          "Occupational Therapy",
          "Biology / Pre-Med",
          "Communication"
        ]
      },
      {
        "rank": 152,
        "name": "Slippery Tock University",
        "city": "Slippery Rock,  Pennsylvania",
        "website": "https://www.sru.edu",
        "highlights": [
          "Exercise Science / Physical Therapy – nationally recognized, flagship program",
          "Business Administration",
          "Nursing",
          "Education",
          "Athletic Training",
          "Psychology",
          "Parks & Recreation Management",
          "Criminal Justice",
          "Communication",
          "Biology / Pre-Med"
        ]
      },
      {
        "rank": 153,
        "name": "Golden Gate University",
        "city": "San Francisco,  California",
        "website": "https://www.ggu.edu",
        "highlights": [
          "Taxation – flagship program, nationally recognized LLM/MS in Taxation",
          "Business Administration / MBA",
          "Accounting",
          "Law (Golden Gate University School of Law)",
          "Public Administration",
          "Finance",
          "Human Resources & Organizational Development",
          "Information Technology / Data Analytics",
          "International Business",
          "Marketing"
        ]
      },
      {
        "rank": 154,
        "name": "University of Wisconsin – Eau Claire",
        "city": "Wisconsin",
        "website": "https://www.uwec.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Education",
          "Psychology",
          "Biology / Pre-Med",
          "Kinesiology",
          "Communication / Journalism",
          "Social Work",
          "Music",
          "Environmental Science"
        ]
      },
      {
        "rank": 155,
        "name": "University of Wisconsin – La Crosse",
        "city": "Wisconsin",
        "website": "https://www.uwlax.edu",
        "highlights": [
          "Exercise & Sport Science – nationally recognized, flagship program",
          "Business Administration",
          "Nursing",
          "Biology / Pre-Med",
          "Physical Therapy",
          "Psychology",
          "Education",
          "Communication Studies",
          "Recreation Management",
          "Microbiology"
        ]
      },
      {
        "rank": 156,
        "name": "Charleston Southern University",
        "city": "Charleston,  South Carolina",
        "website": "https://www.csuniv.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Criminal Justice",
          "Education",
          "Christian Ministry / Theology – strong ties to university's Baptist identity",
          "Psychology",
          "Biology / Pre-Med",
          "Kinesiology",
          "Social Work",
          "Communication"
        ]
      },
      {
        "rank": 157,
        "name": "University of Charleston",
        "city": "Charleston,  West Virginia",
        "website": "https://www.ucwv.edu",
        "highlights": [
          "Pharmacy – flagship program",
          "Nursing",
          "Physician Assistant Studies",
          "Business Administration",
          "Physical Therapy",
          "Sport Management",
          "Forensic Science",
          "Psychology",
          "Athletic Training",
          "Criminal Justice"
        ]
      },
      {
        "rank": 158,
        "name": "Devry University",
        "city": "Downers Grove,  Illinois",
        "website": "https://www.devry.edu",
        "highlights": [
          "Business Administration",
          "Computer Information Systems",
          "Network & Cybersecurity",
          "Technical Management",
          "Healthcare Technology",
          "Accounting",
          "Game & Simulation Programming",
          "Web & Mobile App Development",
          "Electronics & Computer Technology",
          "Project Management"
        ]
      },
      {
        "rank": 159,
        "name": "James Madison University",
        "city": "Harrisonburg,  Virginia",
        "website": "https://www.jmu.edu",
        "highlights": [
          "Business Administration (College of Business)",
          "Nursing",
          "Psychology",
          "Communication Studies",
          "Kinesiology",
          "Education",
          "Health Sciences",
          "Biology / Pre-Med",
          "Political Science",
          "Media Arts & Design"
        ]
      },
      {
        "rank": 160,
        "name": "Tiffin University",
        "city": "Tiffin,  Ohio",
        "website": "https://www.tiffin.edu",
        "highlights": [
          "Criminal Justice / Forensic Psychology – flagship program, nationally recognized",
          "Business Administration",
          "Sport Management",
          "Psychology",
          "Accounting",
          "Marketing",
          "Cybersecurity / Computer Science",
          "Human Resources Management",
          "Healthcare Management",
          "Criminal Investigation"
        ]
      },
      {
        "rank": 161,
        "name": "Academy of Art University",
        "city": "San Francisco,  California",
        "website": "https://www.academyart.edu",
        "highlights": [
          "Fashion Design – flagship program, nationally recognized",
          "Animation / Visual Effects – strong industry ties to film/gaming",
          "Graphic Design",
          "Illustration",
          "Game Design",
          "Photography",
          "Interior Architecture & Design",
          "Fine Art",
          "Motion Pictures & Television",
          "Industrial Design"
        ]
      },
      {
        "rank": 162,
        "name": "Full Sail University",
        "city": "Winter Park,  Florida",
        "website": "https://www.fullsail.edu",
        "highlights": [
          "Recording Arts / Audio Production – flagship program, one of the most respected in the industry",
          "Game Design / Game Development",
          "Film / Cinematography",
          "Music Production",
          "Entertainment Business",
          "Computer Animation",
          "Digital Cinematography",
          "Sports Marketing & Media",
          "Graphic Design",
          "Creative Writing for Entertainment"
        ]
      },
      {
        "rank": 163,
        "name": "Cleary University",
        "city": "Howell,  Michigan",
        "website": "https://www.cleary.edu",
        "highlights": [
          "Business Administration (BBA) – core, flagship program",
          "Accounting",
          "Finance",
          "Marketing",
          "Healthcare Management",
          "Computer Information Systems",
          "Human Resources & Organizational Leadership",
          "New Media",
          "Entrepreneurship",
          "MBA (Master of Business Administration)"
        ]
      },
      {
        "rank": 164,
        "name": "New York Film Academy",
        "city": "New York City",
        "website": "https://www.nyfa.edu",
        "highlights": [
          "Filmmaking – flagship program, one of the most well-known in the industry",
          "Acting for Film",
          "Screenwriting",
          "Producing",
          "Cinematography",
          "Documentary Filmmaking",
          "Game Design",
          "Photography",
          "Musical Theatre",
          "D Animation & Visual Effects"
        ]
      },
      {
        "rank": 165,
        "name": "Upper Lowa University",
        "city": "Fayette,  Lowa",
        "website": "https://www.uiu.edu",
        "highlights": [
          "Business Administration / Management",
          "Criminal Justice",
          "Public Administration",
          "Human Resource Management",
          "Education",
          "Psychology",
          "Accounting",
          "Social Work",
          "Communication Studies",
          "Athletic Training"
        ]
      },
      {
        "rank": 166,
        "name": "Briar Cliff University",
        "city": "Sioux City,  Lowa",
        "website": "https://www.briarcliff.edu",
        "highlights": [
          "Nursing",
          "Business Administration",
          "Education",
          "Social Work",
          "Criminal Justice",
          "Psychology",
          "Athletic Training / Exercise Science",
          "Biology / Pre-Med",
          "Christian Ministry / Theology",
          "Communication"
        ]
      },
      {
        "rank": 167,
        "name": "Oklahoma City University",
        "city": "Oklahoma City,  Oklahoma",
        "website": "https://www.okcu.edu",
        "highlights": [
          "Musical Theatre / Theatre – flagship program, nationally recognized",
          "Business Administration",
          "Nursing",
          "Law (OCU School of Law)",
          "Dance Performance",
          "Vocal Performance / Music",
          "Mass Communications",
          "Psychology",
          "Biology / Pre-Med",
          "Entrepreneurship"
        ]
      },
      {
        "rank": 168,
        "name": "Webster University Missouri",
        "city": "Orlando,  Irvine Campus",
        "website": "https://www.webster.edu",
        "highlights": [
          "Business Administration / MBA",
          "Media Communications / Film Production",
          "Psychology",
          "Management – notable, strong military/adult learner presence at satellite campuses like Orlando and Irvine",
          "International Relations",
          "Counseling",
          "Human Resources Management",
          "Nursing",
          "Education",
          "Cybersecurity"
        ]
      },
      {
        "rank": 169,
        "name": "Park University",
        "city": "Parkville,  Missouri",
        "website": "https://www.park.edu",
        "highlights": [
          "Business Administration – strong reputation, large military/adult learner population",
          "Criminal Justice",
          "Psychology",
          "Healthcare Administration",
          "Management",
          "Accounting",
          "Homeland Security",
          "Social Work",
          "Computer Science / Information Systems",
          "Education"
        ]
      },
      {
        "rank": 170,
        "name": "The University of Findlay",
        "city": "Findlay,  Ohio",
        "website": "https://www.findlay.edu",
        "highlights": [
          "Pharmacy – flagship program",
          "Business Administration",
          "Equestrian Studies – notable, nationally recognized horse science program",
          "Nursing",
          "Occupational Therapy",
          "Physician Assistant Studies",
          "Environmental, Safety & Occupational Health Management",
          "Physical Therapy",
          "Animal Science",
          "Education"
        ]
      },
      {
        "rank": 171,
        "name": "Hult International Business School Boston",
        "city": "San Francisco,  New York campus",
        "website": "https://www.hult.edu",
        "highlights": [
          "MBA (Master of Business Administration) – flagship program",
          "Bachelor of Business Administration (BBA)",
          "Master of International Business",
          "Master of Finance",
          "Master of Business Analytics",
          "Master of Social Entrepreneurship",
          "Master of Marketing",
          "Executive MBA",
          "International Marketing",
          "Disruptive Innovation – notable, unique focus area"
        ]
      },
      {
        "rank": 172,
        "name": "Simmons University",
        "city": "Boston,  Massachusetts",
        "website": "https://www.simmons.edu",
        "highlights": [
          "Nursing",
          "Psychology",
          "Social Work",
          "Business/Management",
          "Library & Information Science",
          "Public Health",
          "Education"
        ]
      },
      {
        "rank": 173,
        "name": "Schiller International University",
        "city": "Largo,  Florida",
        "website": "https://www.schiller.edu",
        "highlights": [
          "International Business",
          "Business Analytics",
          "Computer Science",
          "International Hospitality & Tourism Management",
          "International Marketing",
          "International Relations & Diplomacy",
          "Data Science and Artificial Intelligence"
        ]
      },
      {
        "rank": 174,
        "name": "Concordia University Chicago",
        "city": "River Forest,  Illinois",
        "website": "https://www.cuchicago.edu",
        "highlights": [
          "Kinesiology and Exercise Science",
          "Healthcare Management",
          "Psychology",
          "Elementary Education",
          "Business/Organizational Behavior Studies",
          "Communications",
          "Sport and Fitness Management"
        ]
      },
      {
        "rank": 175,
        "name": "University of Mary Hardin – Baylor",
        "city": "Belton,  Texas",
        "website": "https://www.umhb.edu",
        "highlights": [
          "Nursing",
          "Elementary Education",
          "Psychology",
          "Business",
          "Biology",
          "Health/Physical Therapy",
          "Music"
        ]
      },
      {
        "rank": 176,
        "name": "Lipscomb University",
        "city": "Nashville,  Tennessee",
        "website": "https://www.lipscomb.edu",
        "highlights": [
          "Nursing",
          "Accounting",
          "Business Administration",
          "Biology",
          "Psychology",
          "Elementary Education",
          "Engineering"
        ]
      },
      {
        "rank": 177,
        "name": "Western Washington University",
        "city": "Bellingham,  Washington",
        "website": "https://www.wwu.edu",
        "highlights": [
          "Business Administration",
          "Psychology",
          "Social Sciences",
          "Environmental Science",
          "Biology",
          "Education",
          "Communications"
        ]
      },
      {
        "rank": 178,
        "name": "New England College",
        "city": "Henniker,  New Hampshire",
        "website": "https://www.nec.edu",
        "highlights": [
          "Business Administration",
          "Criminal Justice",
          "Psychology",
          "Computer Science/Cybersecurity",
          "Health Sciences",
          "Kinesiology and Sport Management",
          "Studio Arts"
        ]
      },
      {
        "rank": 179,
        "name": "Marist College",
        "city": "Poughkeepsie,  New York",
        "website": "https://www.marist.edu",
        "highlights": [
          "Business Administration/Management",
          "Communications",
          "Psychology",
          "Fashion Design/Merchandising",
          "Computer Science/Information Technology",
          "Criminal Justice",
          "Media/Journalism"
        ]
      },
      {
        "rank": 180,
        "name": "New England Institute of Technology",
        "city": "Warwick,  Rhode Island",
        "website": "https://www.neit.edu",
        "highlights": [
          "Engineering",
          "Nursing/Health Sciences",
          "Information Technology/Cybersecurity",
          "Automotive Technology",
          "Digital Media/Game Development",
          "Construction Management Technology",
          "Business Management Technology"
        ]
      },
      {
        "rank": 181,
        "name": "Mississippi College",
        "city": "Clinton,  Mississippi",
        "website": "https://www.mc.edu",
        "highlights": [
          "Nursing",
          "Kinesiology and Exercise Science",
          "Biomedical Sciences",
          "Business Administration",
          "Education",
          "Accounting",
          "Engineering"
        ]
      },
      {
        "rank": 182,
        "name": "Monroe College",
        "city": "Bronx,  New York",
        "website": "https://www.monroecollege.edu",
        "highlights": [
          "Business Administration",
          "Nursing",
          "Criminal Justice",
          "Hospitality Management",
          "Human Services",
          "Information Technology",
          "Culinary Arts"
        ]
      },
      {
        "rank": 183,
        "name": "Berkeley College",
        "city": "New Jersey & New York",
        "website": "https://berkeleycollege.edu",
        "highlights": [
          "Business Administration and Management",
          "Criminal Justice/Law Enforcement Administration",
          "Nursing",
          "Healthcare Management",
          "Fashion Merchandising",
          "Accounting",
          "Interior Design"
        ]
      },
      {
        "rank": 184,
        "name": "Rocky Mountain College of Art + Design",
        "city": "Lakewood,  Colorado",
        "website": "https://www.rmcad.edu",
        "highlights": [
          "Animation",
          "Interior Design",
          "Illustration",
          "Graphic Design",
          "Game Art",
          "Photography",
          "Fashion Design"
        ]
      },
      {
        "rank": 185,
        "name": "Canisius College",
        "city": "Buffalo,  New York",
        "website": "https://www.canisius.edu",
        "highlights": [
          "Finance",
          "Biology",
          "Psychology",
          "Accounting",
          "Sport and Fitness Administration/Management",
          "Computer Science",
          "Criminal Justice"
        ]
      },
      {
        "rank": 186,
        "name": "Richard Bland College of William & Mary",
        "city": "Petersburg,  Virginia",
        "website": "https://www.rbc.edu",
        "highlights": [
          "Physical Sciences",
          "Business",
          "Liberal Arts and Humanities",
          "Communications",
          "Biology",
          "Computational and Applied Mathematics",
          "Behavioral Sciences"
        ]
      },
      {
        "rank": 187,
        "name": "Fisher College",
        "city": "Boston,  Massachusetts",
        "website": "https://www.fisher.edu",
        "highlights": [
          "Biology",
          "Criminal Justice",
          "Fashion Merchandising",
          "Information Technology/Cybersecurity",
          "Management",
          "Psychology",
          "Accounting"
        ]
      },
      {
        "rank": 188,
        "name": "Green River College",
        "city": "Auburn,  Washington",
        "website": "https://www.greenriver.edu",
        "highlights": [
          "Business Administration",
          "Computer and Information Systems Security",
          "Computer Programming",
          "Nursing",
          "Accounting",
          "Aviation/Aerospace Science",
          "Communication and Media Studies"
        ]
      },
      {
        "rank": 189,
        "name": "Settle Central Community College",
        "city": "Seattle,  Washington",
        "website": "https://www.seattlecentral.edu",
        "highlights": [
          "Liberal Arts and Sciences",
          "Nursing",
          "Business/Commerce",
          "Computer Systems Technology",
          "Health Services/Allied Health",
          "Construction Trades",
          "Visual & Performing Arts"
        ]
      },
      {
        "rank": 190,
        "name": "San Mateo Colleges of Silicon Valley",
        "city": "California",
        "website": "https://www.smccd.edu",
        "highlights": [
          "Computer Science",
          "Business Administration",
          "Engineering",
          "Health Sciences",
          "Social Sciences",
          "Biotechnology",
          "Multimedia/Digital Arts"
        ]
      },
      {
        "rank": 191,
        "name": "Santa Ana College",
        "city": "California",
        "website": "https://sac.edu",
        "highlights": [
          "Liberal Arts and Sciences",
          "Criminal Justice/Police Science",
          "Business Administration and Management",
          "Fire Protection and Prevention Technology",
          "Paralegal Studies",
          "Occupational Therapist Assistant",
          "Human Sciences"
        ]
      },
      {
        "rank": 192,
        "name": "California State University",
        "city": "Los Angeles",
        "website": "https://www.calstatela.edu",
        "highlights": [
          "Business Administration and Management",
          "Psychology",
          "Criminal Justice",
          "Social Work/Social Sciences",
          "Nursing/Health Professions",
          "Engineering",
          "Education"
        ]
      },
      {
        "rank": 193,
        "name": "UMass Amherst",
        "city": "",
        "website": "https://www.umass.edu",
        "highlights": [
          "Psychology",
          "Computer Science",
          "Finance/Business (Isenberg School of Management)",
          "Biology",
          "Engineering",
          "Public Health Sciences",
          "Communications"
        ]
      },
      {
        "rank": 194,
        "name": "Summer Discovery. Discovery Internship and Jr. Internship",
        "city": "",
        "website": "https://www.summerdiscovery.com",
        "highlights": [
          "Business & Entrepreneurship",
          "Medicine & Healthcare",
          "Law",
          "Fashion Design",
          "Sports Management & Entertainment",
          "Marketing",
          "Media & Journalism"
        ]
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
        "rank": 1,
        "name": "University of Bristol",
        "city": "Bristol, England",
        "website": "https://www.bristol.ac.uk",
        "highlights": [
          "Law",
          "Medicine",
          "Economics",
          "Psychology",
          "Computer Science",
          "Engineering (Aerospace, Mechanical, Civil)",
          "Business and Management / Accounting and Finance",
          "Politics and International Relations"
        ]
      },
      {
        "rank": 2,
        "name": "University of Glasgow",
        "city": "Glasgow, Scotland",
        "website": "https://www.gla.ac.uk",
        "highlights": [
          "Medicine & Dentistry",
          "Law",
          "Business & Management / Accountancy and Finance",
          "Computer Science",
          "Engineering (Aeronautical/Aerospace)",
          "Psychology",
          "Biological & Medical Sciences",
          "Economics",
          "Mathematics",
          "Architecture"
        ]
      },
      {
        "rank": 3,
        "name": "Durham University",
        "city": "Durham, England",
        "website": "https://www.dur.ac.uk",
        "highlights": [
          "Law",
          "Economics",
          "Finance / Accounting & Finance",
          "Psychology",
          "Business & Management",
          "Computer Science",
          "Physics",
          "Geography",
          "History",
          "Natural Sciences"
        ]
      },
      {
        "rank": 4,
        "name": "University of Birmingham",
        "city": "Birmingham, England",
        "website": "https://www.birmingham.ac.uk",
        "highlights": [
          "Computer Science (including AI-focused pathways)",
          "Engineering (Mechanical, Civil, Electrical, Chemical, Aerospace)",
          "Medicine and Surgery",
          "Business and Management (including MBA)",
          "Law",
          "Psychology",
          "Economics",
          "Data Science / Business Analytics"
        ]
      },
      {
        "rank": 5,
        "name": "Cranfield University",
        "city": "Cranfield, England",
        "website": "https://www.cranfield.ac.uk",
        "highlights": [
          "MSc Aerospace Dynamics",
          "MSc Logistics and Supply Chain Management",
          "MBA (triple-accredited)",
          "MSc Air Transport Management",
          "MSc Applied Artificial Intelligence",
          "MSc Automotive Engineering",
          "MSc Cyber Security",
          "MSc Advanced Chemical Engineering"
        ]
      },
      {
        "rank": 6,
        "name": "Queen Mary University of London",
        "city": "London, England",
        "website": "https://www.qmul.ac.uk",
        "highlights": [
          "Computer Science and Informatics",
          "Engineering (Biomedical, Robotics, Aerospace)",
          "Medicine (Barts and the London)",
          "Law",
          "Business & Management",
          "Economics",
          "Film & Politics",
          "History"
        ]
      },
      {
        "rank": 7,
        "name": "Newcastle University",
        "city": "Newcastle upon Tyne, England",
        "website": "https://www.ncl.ac.uk",
        "highlights": [
          "Business & Management",
          "Engineering",
          "Computer Science",
          "Medicine, Dentistry & Biomedical Sciences",
          "Biology / Marine Science / Zoology",
          "Architecture",
          "Mathematics & Statistics",
          "English Literature"
        ]
      },
      {
        "rank": 8,
        "name": "University of York",
        "city": "York, England",
        "website": "https://www.york.ac.uk",
        "highlights": [
          "Computer Science",
          "Law",
          "Chemistry",
          "Psychology",
          "Accounting & Finance",
          "Nursing & Midwifery",
          "Medicine",
          "Marketing",
          "Social Work"
        ]
      },
      {
        "rank": 9,
        "name": "University of Liverpool",
        "city": "Liverpool, England",
        "website": "https://www.liverpool.ac.uk",
        "highlights": [
          "Business Management (MSc Business Analytics, MSc Marketing, MSc Finance)",
          "Engineering (Mechanical, Civil, Electrical, Computer Science)",
          "Computer Science / AI",
          "Medicine & Health Sciences (MBChB)",
          "Science (Physics, Chemistry, Biology)",
          "Law"
        ]
      },
      {
        "rank": 10,
        "name": "Queen's University Belfast",
        "city": "Belfast, Northern Ireland",
        "website": "https://www.qub.ac.uk",
        "highlights": [
          "Law",
          "Finance / MSc Finance",
          "Data Science / Data Analytics",
          "Pharmaceutical Engineering",
          "Energy Systems",
          "Architecture",
          "Biochemistry",
          "Chemical Engineering",
          "Agriculture, Veterinary & Food Science",
          "Health & Biomedical Sciences"
        ]
      },
      {
        "rank": 11,
        "name": "University of Leicester",
        "city": "Leicester, England",
        "website": "https://www.leicester.ac.uk",
        "highlights": [
          "Computer Science (BSc)",
          "Medicine (MBBS)",
          "Law",
          "Biological Sciences",
          "Physics & Astronomy / Space Science",
          "Archaeology",
          "Business & Management",
          "International Business",
          "International Relations",
          "Engineering"
        ]
      },
      {
        "rank": 12,
        "name": "University of Surrey",
        "city": "Guildford, England",
        "website": "https://www.surrey.ac.uk",
        "highlights": [
          "Engineering (Aeronautical, Civil, Electronic, Mechanical)",
          "Computer Science (AI, Cyber Security)",
          "Business & Management / International Business",
          "Nutrition, Dietetics & Biosciences",
          "Hospitality & Tourism Management",
          "Health & Medical Sciences",
          "Psychology",
          "Veterinary Science",
          "Law"
        ]
      },
      {
        "rank": 13,
        "name": "University of Strathclyde",
        "city": "Glasgow, Scotland",
        "website": "https://www.strath.ac.uk",
        "highlights": [
          "BSc/BEng Software Engineering / Computer Science",
          "MEng/BEng Computer & Electronic Systems",
          "Chemical Engineering",
          "Mechanical Engineering",
          "Applied Statistics / Applied Economics",
          "Competition Law",
          "MBA (Strathclyde Business School)"
        ]
      },
      {
        "rank": 14,
        "name": "Heriot-Watt University",
        "city": "Edinburgh, Scotland",
        "website": "https://www.hw.ac.uk",
        "highlights": [
          "Computer Science",
          "Civil Engineering",
          "Psychology",
          "International Business Management",
          "Mechanical Engineering",
          "Accountancy and Finance",
          "Fashion/Design for Textiles",
          "Data Science",
          "Renewable Energy Engineering",
          "Construction Project Management"
        ]
      },
      {
        "rank": 15,
        "name": "Royal Holloway, University of London",
        "city": "Egham, England",
        "website": "https://www.royalholloway.ac.uk",
        "highlights": [
          "Computer Science",
          "Data Science / Artificial Intelligence",
          "Information Security",
          "Accounting and Finance",
          "Economics",
          "Management / MBA",
          "Psychology",
          "International Relations & Politics",
          "History",
          "Media Management",
          "Criminology"
        ]
      },
      {
        "rank": 16,
        "name": "University of Dundee",
        "city": "Dundee, Scotland",
        "website": "https://www.dundee.ac.uk",
        "highlights": [
          "Medicine (MBChB)",
          "Dentistry (BDS)",
          "Life Sciences / Biological Sciences",
          "Bioengineering & Engineering Science",
          "Art and Design",
          "Law",
          "Psychology",
          "Computer Science",
          "Nursing and Midwifery",
          "Business and Management",
          "Pharmacology"
        ]
      },
      {
        "rank": 17,
        "name": "University of East Anglia",
        "city": "Norwich, England",
        "website": "https://www.uea.ac.uk",
        "highlights": [
          "Business Management / Accounting and Finance",
          "Economics / Actuarial Science",
          "Environmental Sciences",
          "Psychology",
          "Biomedical Sciences",
          "English Literature & Creative Writing",
          "MSc Business Analytics and Management",
          "MBA",
          "MSc Computing Science",
          "MSc Biotechnology"
        ]
      },
      {
        "rank": 18,
        "name": "INTO City University London",
        "city": "London, England",
        "website": "https://www.city.ac.uk",
        "highlights": [
          "MSc Finance",
          "MSc Management",
          "MSc Marketing",
          "MSc Business Analytics",
          "MBA (Full-time / Executive)",
          "LLM International Commercial Law",
          "LLM International Banking & Finance Law",
          "LLM Maritime Law",
          "LLM Technology & AI Law",
          "Graduate Diploma in Law (GDL)"
        ]
      },
      {
        "rank": 19,
        "name": "Brunel University London",
        "city": "Uxbridge, England",
        "website": "https://www.brunel.ac.uk",
        "highlights": [
          "Mechanical Engineering",
          "Aerospace Engineering",
          "Civil Engineering",
          "Management",
          "Data Science",
          "Life Sciences",
          "Anthropology",
          "Digital Media",
          "International Business",
          "Cyber Security",
          "Human Resource Management",
          "Public Health"
        ]
      },
      {
        "rank": 20,
        "name": "Oxford Brookes University",
        "city": "Oxford, England",
        "website": "https://www.brookes.ac.uk",
        "highlights": [
          "Business and Management",
          "Accounting and Finance",
          "Computer Science / Computing (AI)",
          "Architecture and the Built Environment",
          "Media, Journalism and Communications",
          "Psychology",
          "Law",
          "Engineering",
          "Hospitality, Tourism and Events Management",
          "Sport and Exercise Sciences"
        ]
      },
      {
        "rank": 21,
        "name": "University of Essex",
        "city": "Colchester, England",
        "website": "https://www.essex.ac.uk",
        "highlights": [
          "Psychology",
          "Computer Science / AI",
          "Business Management, Marketing, Finance & Accounting",
          "Sociology, Politics & International Studies",
          "Economics & Econometrics",
          "Law",
          "Data Analytics / Data Science",
          "Marine Biology"
        ]
      },
      {
        "rank": 22,
        "name": "Swansea University",
        "city": "Swansea, Wales",
        "website": "https://www.swansea.ac.uk",
        "highlights": [
          "Engineering (Aerospace, Civil, Chemical, Mechanical, Electrical)",
          "Computer Science / Software Engineering",
          "Medicine & Health Sciences (including Nursing)",
          "Business, Management & Accounting/Finance",
          "Law",
          "Psychology",
          "Biological & Biomedical Sciences",
          "Actuarial Science",
          "Data Science"
        ]
      },
      {
        "rank": 23,
        "name": "Aberystwyth University",
        "city": "Aberystwyth, Wales",
        "website": "https://www.aber.ac.uk",
        "highlights": [
          "Computer Science",
          "International Politics / Politics",
          "Geography, Earth and Environmental Studies",
          "Business & Management Studies",
          "Law",
          "Psychology",
          "Media and Creative Writing",
          "Agriculture and Related Science",
          "Nursing",
          "Veterinary Science",
          "Zoology"
        ]
      },
      {
        "rank": 24,
        "name": "University of Stirling",
        "city": "Stirling, Scotland",
        "website": "https://www.stir.ac.uk",
        "highlights": [
          "Communication & Media",
          "Criminology",
          "Education",
          "Business & Management",
          "Sport",
          "French",
          "Psychology",
          "Finance",
          "Nursing"
        ]
      },
      {
        "rank": 25,
        "name": "Coventry University",
        "city": "Coventry & London, England",
        "website": "https://www.coventry.ac.uk",
        "highlights": [
          "Business Management (BA/MBA)",
          "Computer Science / Cyber Security",
          "Automotive & Transport Design",
          "Motorsport Engineering",
          "Adult Nursing",
          "Law",
          "Accounting and Finance",
          "Psychology",
          "Finance and Investment",
          "Data Science / Business Analytics",
          "Fashion"
        ]
      },
      {
        "rank": 26,
        "name": "Kingston University",
        "city": "Kingston, England",
        "website": "https://www.kingston.ac.uk",
        "highlights": [
          "Art and Design",
          "Architecture and Landscape",
          "Biological Sciences",
          "Computing",
          "Chemistry",
          "Pharmaceutical Sciences",
          "Business",
          "Biomedical Science",
          "Accounting, Finance and Banking",
          "Computer Science and Information Systems",
          "Engineering",
          "Psychology",
          "Law"
        ]
      },
      {
        "rank": 27,
        "name": "Bangor University",
        "city": "Bangor, Wales",
        "website": "https://www.bangor.ac.uk",
        "highlights": [
          "Business & Management",
          "Computer Science",
          "Law",
          "Psychology",
          "Biological & Marine Sciences",
          "Environmental Science",
          "Engineering",
          "Economics",
          "Accounting & Finance",
          "Banking & Finance"
        ]
      },
      {
        "rank": 28,
        "name": "University of Bradford",
        "city": "Bradford, England",
        "website": "https://www.bradford.ac.uk",
        "highlights": [
          "Biomedical Science",
          "Nursing (Mental Health)",
          "Criminology and Criminal Behavior",
          "Business and Management",
          "Accounting and Finance",
          "Law",
          "Paramedic Science",
          "Engineering (Mechanical, Chemical, Civil)",
          "Computer Science",
          "Health Sciences",
          "Psychology"
        ]
      },
      {
        "rank": 29,
        "name": "University of Portsmouth",
        "city": "Portsmouth, England",
        "website": "https://www.port.ac.uk",
        "highlights": [
          "Forensic Science",
          "Space Science",
          "Pharmacy",
          "Mechanical Engineering",
          "Psychology",
          "Law & Criminology",
          "Sports Science",
          "Business & Management",
          "Data Science",
          "Childhood & Youth Studies",
          "Information Technology"
        ]
      },
      {
        "rank": 30,
        "name": "Northumbria University",
        "city": "Newcastle upon Tyne & London, England",
        "website": "https://www.northumbria.ac.uk",
        "highlights": [
          "MSc Cyber Security",
          "BSc Computer Science",
          "BSc Artificial Intelligence",
          "MSc Business Analytics",
          "Business, Management, Cyber Security",
          "Project Management",
          "Law",
          "Engineering",
          "Mathematics",
          "Architecture"
        ]
      },
      {
        "rank": 31,
        "name": "University of Plymouth",
        "city": "Plymouth, England",
        "website": "https://www.plymouth.ac.uk",
        "highlights": [
          "Business Management",
          "Marine Biology",
          "Data Science",
          "Robotics",
          "Nursing",
          "Engineering",
          "Mathematics",
          "Optometry",
          "Clinical Psychology",
          "Criminology",
          "Law"
        ]
      },
      {
        "rank": 32,
        "name": "University of Westminster",
        "city": "London, England",
        "website": "https://www.westminster.ac.uk",
        "highlights": [
          "Film, Television and Media Production",
          "Fashion",
          "Art and Design",
          "Architecture, Interior Design, Urban Planning",
          "Computer Science / AI",
          "Business",
          "Law",
          "Hospitality",
          "Humanities & Social Sciences"
        ]
      },
      {
        "rank": 33,
        "name": "Middlesex University",
        "city": "London, England",
        "website": "https://www.mdx.ac.uk",
        "highlights": [
          "Business",
          "Law",
          "Art & Design",
          "Nursing",
          "Computing",
          "Engineering",
          "Education",
          "Psychology",
          "Health Sciences",
          "Music & Sound",
          "Moving Image",
          "Creative Tech"
        ]
      },
      {
        "rank": 34,
        "name": "University of Greenwich",
        "city": "London, England",
        "website": "https://www.gre.ac.uk",
        "highlights": [
          "Business & Management",
          "Computer Science / Data Science",
          "Psychology",
          "Engineering",
          "Law",
          "Pharmaceutical Science",
          "Accounting & Finance",
          "Sociology/Social Policy",
          "Architecture",
          "Biological Sciences",
          "Creative Arts & Design"
        ]
      },
      {
        "rank": 35,
        "name": "University of Huddersfield",
        "city": "Huddersfield, England",
        "website": "https://www.hud.ac.uk",
        "highlights": [
          "Business Management",
          "Accounting and Finance",
          "Marketing",
          "Computer Science",
          "Data Science",
          "Software Development",
          "Mechanical Engineering",
          "Graphic Design",
          "Music",
          "Psychology",
          "Education",
          "Journalism"
        ]
      },
      {
        "rank": 36,
        "name": "Bournemouth University",
        "city": "Poole, England",
        "website": "https://www.bournemouth.ac.uk",
        "highlights": [
          "Media & Film",
          "Computer Animation & VFX",
          "Forensic Science",
          "Nursing & Midwifery",
          "Business & Management",
          "Social Work",
          "Psychology",
          "Tourism"
        ]
      },
      {
        "rank": 37,
        "name": "London South Bank University",
        "city": "London, England",
        "website": "https://www.lsbu.ac.uk",
        "highlights": [
          "Nursing",
          "Business Management",
          "Engineering",
          "Law",
          "Data Science",
          "Biomedical Sciences",
          "International Business Management",
          "Computer Science",
          "LLM International Business Law"
        ]
      },
      {
        "rank": 38,
        "name": "University of East London",
        "city": "London, England",
        "website": "https://www.uel.ac.uk",
        "highlights": [
          "Business",
          "Computer Science",
          "Artificial Intelligence",
          "Data Science",
          "Engineering",
          "Nursing",
          "Psychology",
          "Law",
          "Public Health",
          "Architecture",
          "MBA",
          "Fashion Design"
        ]
      },
      {
        "rank": 39,
        "name": "University of Central Lancashire",
        "city": "Preston, England",
        "website": "https://www.uclan.ac.uk",
        "highlights": [
          "MSc Project Management",
          "MSc Forensic Psychology",
          "MSc International Business and Management",
          "MBA",
          "Accounting and Finance",
          "Biomedical Science",
          "Business Management",
          "Microbiology",
          "Music"
        ]
      },
      {
        "rank": 40,
        "name": "University of Brighton",
        "city": "Brighton, England",
        "website": "https://www.brighton.ac.uk",
        "highlights": [
          "Business and Management",
          "Engineering",
          "Creative Arts and Design",
          "Architecture",
          "Law",
          "Computer Science",
          "Psychology",
          "Economics",
          "Sport and Exercise Sciences",
          "Media/Journalism",
          "Pharmacology",
          "Nursing and Midwifery",
          "Education"
        ]
      },
      {
        "rank": 41,
        "name": "Sheffield Hallam University",
        "city": "Sheffield, England",
        "website": "https://www.shu.ac.uk",
        "highlights": [
          "MSc Advanced Computer Science",
          "Software Engineering",
          "Cyber Security",
          "AI / Data Science / Machine Learning",
          "Mechanical Engineering",
          "Civil Engineering",
          "Aerospace Engineering",
          "MBA",
          "Business Management",
          "International Business",
          "Accounting & Finance"
        ]
      },
      {
        "rank": 75,
        "name": "Istituto Marangoni London",
        "city": "London, England",
        "website": "https://www.istitutomarangoni.com/en/schools/london-school-of-fashion-and-design",
        "highlights": [
          "BA (Hons) Fashion Design",
          "BA (Hons) Fashion Design & Marketing",
          "BA (Hons) Fashion Business",
          "BA (Hons) Interior Design",
          "BA (Hons) Product Design",
          "MA Fashion & Luxury Brand Management",
          "MA Fashion Styling & Creative Direction",
          "MBA Digital Transformation & Leadership for Fashion"
        ]
      },
      {
        "rank": 76,
        "name": "Le Cordon Bleu London",
        "city": "London, England",
        "website": "https://www.cordonbleu.edu/london/home/en",
        "highlights": [
          "Grand Diplôme® – Cuisine & Pâtisserie",
          "Diplôme de Cuisine",
          "Diplôme de Pâtisserie",
          "Diplôme de Boulangerie",
          "Diploma in Culinary Management",
          "Diploma in Gastronomy, Nutrition & Food Trends",
          "BBA in Culinary Industry Management",
          "MSc in Culinary Innovation Management"
        ]
      },
      {
        "rank": 77,
        "name": "BPP University",
        "city": "London, England",
        "website": "https://www.bpp.com",
        "highlights": [
          "LLM International Business & Commercial Law",
          "MSc Management",
          "MSc Management with Data Analytics & AI",
          "MSc Technology Management",
          "BSc Accounting & Finance",
          "MSc Technology Management with Cyber Security",
          "BSc (Hons) Nursing – Adult",
          "MSc Healthcare Leadership & Management"
        ]
      },
      {
        "rank": 78,
        "name": "Regent's University London",
        "city": "London, England",
        "website": "https://www.regents.ac.uk",
        "highlights": [
          "Business & Management",
          "Business & Data Science",
          "Business & Finance",
          "Luxury Brand Management",
          "International Relations",
          "Psychology",
          "Fashion Design",
          "Fashion Marketing",
          "Media & Communications",
          "Film & Screen Production",
          "Law (LLB)",
          "MSc Artificial Intelligence for Business"
        ]
      },
      {
        "rank": 79,
        "name": "Hult International Business School",
        "city": "London, England",
        "website": "https://www.hult.edu",
        "highlights": [
          "Global One-Year MBA",
          "Master's in Management",
          "Master's in Finance",
          "Master's in Marketing",
          "Master's in Marketing, Communications & Branding",
          "Bachelor of Business Administration (BBA)",
          "International Business (Master's)"
        ]
      },
      {
        "rank": 80,
        "name": "University of Bedfordshire",
        "city": "Luton, England",
        "website": "https://www.beds.ac.uk",
        "highlights": [
          "MSc Artificial Intelligence",
          "MSc Computer Science",
          "MSc Business Administration (MBA)",
          "MSc Business Analytics",
          "MSc International Business",
          "MSc Marketing",
          "MSc Adult Nursing",
          "BSc Artificial Intelligence & Robotics",
          "BSc Business Management",
          "BSc Accounting & Finance",
          "BSc Aviation & Airport Management"
        ]
      },
      {
        "rank": 81,
        "name": "University of Salford",
        "city": "Manchester, England",
        "website": "https://www.salford.ac.uk",
        "highlights": [
          "Computer Science & Software Engineering",
          "Business Management",
          "Nursing",
          "Psychology",
          "Civil & Mechanical Engineering",
          "Law",
          "Media, Journalism & Digital Media",
          "Social Work",
          "Fashion & Interior Design"
        ]
      },
      {
        "rank": 82,
        "name": "University of the West of England",
        "city": "Bristol, England",
        "website": "https://www.uwe.ac.uk",
        "highlights": [
          "Business & Management",
          "Psychology",
          "Civil Engineering",
          "Computer Science",
          "Robotics Engineering",
          "Law",
          "Visual & Performing Arts",
          "Nursing & Midwifery",
          "Architecture",
          "Cyber Security"
        ]
      },
      {
        "rank": 83,
        "name": "University for the Creative Arts",
        "city": "Farnham, England",
        "website": "https://www.uca.ac.uk",
        "highlights": [
          "Fashion Design",
          "Fashion Business & Management",
          "Games Design",
          "Games Technology",
          "Animation",
          "Graphic Design",
          "Illustration",
          "Photography",
          "Jewellery & Silversmithing",
          "Film & Media"
        ]
      },
      {
        "rank": 84,
        "name": "Staffordshire University",
        "city": "Stoke-on-Trent, England",
        "website": "https://www.staffs.ac.uk",
        "highlights": [
          "Esports (UK's first Esports degree)",
          "Game Design & Animation",
          "Artificial Intelligence & Robotics",
          "Cyber Security",
          "Business Management",
          "Accounting & Finance",
          "Psychology",
          "Biomedical Science",
          "Aeronautical Engineering",
          "Journalism"
        ]
      },
      {
        "rank": 85,
        "name": "University of South Wales",
        "city": "Cardiff, Wales",
        "website": "https://www.southwales.ac.uk",
        "highlights": [
          "Computer Science",
          "Game Design",
          "Cyber Security",
          "Artificial Intelligence",
          "Forensic Science",
          "Business Management",
          "International Business",
          "Human Resource Management",
          "Civil & Electrical Engineering",
          "Animation & Visual Effects"
        ]
      },
      {
        "rank": 86,
        "name": "Teesside University",
        "city": "Middlesbrough, England",
        "website": "https://www.tees.ac.uk",
        "highlights": [
          "Games Design",
          "Business Management",
          "Law",
          "Nursing (Adult)",
          "Psychology",
          "Computer Science",
          "Artificial Intelligence",
          "Animation",
          "Journalism & Media",
          "Occupational Therapy"
        ]
      },
      {
        "rank": 87,
        "name": "Cardiff Metropolitan University",
        "city": "Cardiff, Wales",
        "website": "https://www.cardiffmet.ac.uk",
        "highlights": [
          "Business Management & Marketing",
          "Sports Science & Management",
          "Computer Science & Data Science",
          "Fashion Retail Management",
          "Architecture Engineering",
          "Aviation Management",
          "Interior Design",
          "Psychology",
          "Art & Design",
          "Tourism"
        ]
      },
      {
        "rank": 88,
        "name": "Solent University",
        "city": "Southampton, England",
        "website": "https://www.solent.ac.uk",
        "highlights": [
          "Marine Engineering",
          "Yacht Design & Boatbuilding",
          "Business Management",
          "Sports Management",
          "Film Making & Media Production",
          "Music Performance & Production",
          "Mechanical Engineering",
          "Fashion & Design",
          "Criminology",
          "Project Management"
        ]
      },
      {
        "rank": 89,
        "name": "Anglia Ruskin University",
        "city": "Cambridge & Chelmsford, England",
        "website": "https://www.aru.ac.uk",
        "highlights": [
          "Nursing & Midwifery",
          "Psychology",
          "Law",
          "Business Management",
          "Forensic Science",
          "Mechanical & Mechatronics Engineering",
          "Software Engineering",
          "Music & Performing Arts",
          "Game Design",
          "Physiotherapy",
          "International Business"
        ]
      },
      {
        "rank": 90,
        "name": "University of Chester",
        "city": "Chester, England",
        "website": "https://www.chester.ac.uk",
        "highlights": [
          "Psychology",
          "Nursing & Healthcare",
          "Business Management",
          "Veterinary Science",
          "Criminology & Forensic Science",
          "Computer Science",
          "Biomedical Sciences",
          "Sports Management",
          "Journalism",
          "Social Work",
          "Marine Biology"
        ]
      },
      {
        "rank": 91,
        "name": "Liverpool Hope University",
        "city": "Liverpool, England",
        "website": "https://www.hope.ac.uk",
        "highlights": [
          "Education",
          "Psychology",
          "Business Management",
          "Computer Science",
          "Social Work",
          "English & Creative Writing",
          "Music",
          "Sports Management",
          "Early Childhood Care & Education",
          "Film, Television & Digital Video Production"
        ]
      },
      {
        "rank": 92,
        "name": "The University of Northampton",
        "city": "Northampton, England",
        "website": "https://www.northampton.ac.uk",
        "highlights": [
          "Business Management",
          "Nursing",
          "Psychology",
          "Computer Science",
          "Architecture Engineering",
          "Biomedical Sciences",
          "Social Work",
          "Criminology",
          "Film & Television Production",
          "Fashion Design",
          "Project Management"
        ]
      },
      {
        "rank": 93,
        "name": "University of Suffolk",
        "city": "Suffolk, England",
        "website": "https://www.uos.ac.uk",
        "highlights": [
          "Cyber Security",
          "Game Design",
          "Film Making",
          "Photography",
          "Psychology",
          "Criminology & Forensic Law",
          "Creative Writing",
          "Early Childhood Care & Education",
          "Strategic Management",
          "History"
        ]
      },
      {
        "rank": 94,
        "name": "University of Sunderland",
        "city": "Sunderland & London, England",
        "website": "https://www.sunderland.ac.uk",
        "highlights": [
          "Computer Science",
          "Nursing",
          "Business Management",
          "Law",
          "Psychology",
          "Pharmacy / Biopharmaceutics",
          "Mechanical & Electrical Engineering",
          "Criminology & Forensic Law",
          "Aviation Management",
          "Media & Journalism",
          "Social Work"
        ]
      },
      {
        "rank": 95,
        "name": "Leeds Beckett University",
        "city": "Leeds, England",
        "website": "https://www.leedsbeckett.ac.uk",
        "highlights": [
          "Sports Management",
          "Business Management",
          "Computer Science",
          "Nursing",
          "Civil Engineering",
          "Architecture & Town Planning",
          "Fashion Design",
          "Criminology & Forensic Law",
          "Biomedical Sciences",
          "Digital Marketing",
          "Psychology"
        ]
      },
      {
        "rank": 96,
        "name": "University of Wolverhampton",
        "city": "Wolverhampton, England",
        "website": "https://www.wlv.ac.uk",
        "highlights": [
          "Automotive & Aerospace Engineering",
          "Computer Science & Artificial Intelligence",
          "Civil & Architecture Engineering",
          "Business Management",
          "Cyber Security",
          "Sports Management",
          "Physiotherapy",
          "Forensic Science",
          "Construction Management",
          "Psychology",
          "Accounting & Finance"
        ]
      },
      {
        "rank": 97,
        "name": "University of the West of Scotland",
        "city": "Paisley, Scotland",
        "website": "https://www.uws.ac.uk",
        "highlights": [
          "Nursing",
          "Business Management",
          "Cyber Security",
          "Civil & Mechanical Engineering",
          "Aircraft Maintenance Engineering",
          "Psychology",
          "Artificial Intelligence",
          "Forensic Science",
          "Digital Marketing",
          "Game Design & Animation",
          "International Business"
        ]
      }
    ]
  },
  "CA": {
    "title": "Canada",
    "flag": "🇨🇦",
    "desc": "Affordable & welcoming",
    "tuition": "CAD 15,000 - 40,000/year",
    "intake": "Sep, Jan, May",
    "work": "PGWP up to 3 years",
    "univs": [
      {
        "rank": 1,
        "name": "University of Waterloo",
        "city": "Waterloo,  Ontario",
        "website": "https://uwaterloo.ca/future-students/programs",
        "highlights": [
          "Computer Science",
          "Software Engineering",
          "Mechatronics Engineering",
          "Electrical & Computer Engineering",
          "Mechanical Engineering",
          "Mathematics",
          "Biomedical Sciences / Health Sciences",
          "Accounting and Financial Management (BAFM)",
          "Architecture"
        ]
      },
      {
        "rank": 2,
        "name": "University of Victoria",
        "city": "Victoria,  British Columbia (Only UG)",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/university-of-victoria/courses",
        "highlights": [
          "Computer Science",
          "Software Engineering",
          "Mechanical Engineering",
          "Psychology",
          "Commerce (Business)",
          "Economics"
        ]
      },
      {
        "rank": 3,
        "name": "York University",
        "city": "Toronto,  Ontario",
        "website": "https://www.topuniversities.com/universities/york-university",
        "highlights": [
          "Law/Legal Studies",
          "Business",
          "Computer Science",
          "Psychology",
          "Film & Media Production",
          "Engineering",
          "Nursing"
        ]
      },
      {
        "rank": 4,
        "name": "University of Guelph",
        "city": "Guelph,  Ontario (Only UG)",
        "website": "https://en.wikipedia.org/wiki/List_of_University_of_Guelph_academic_programs",
        "highlights": [
          "Agriculture / Agricultural Science",
          "Veterinary Medicine (pre-vet pathway)",
          "Biological Sciences",
          "Environmental Sciences",
          "Computing (B.Comp)",
          "Psychology"
        ]
      },
      {
        "rank": 5,
        "name": "Dalhousie University",
        "city": "Halifax,  Nova Scotia(M. Engg in Internetworking and all Undergraduate courses)",
        "website": "https://www.dal.ca/study/programs.html#level=Undergraduate",
        "highlights": [
          "Bachelor of Computer Science (BCS)",
          "Bachelor of Engineering",
          "Bachelor of Commerce (BComm)",
          "Bachelor of Science – Marine Biology/Oceanography",
          "Bachelor of Science – Kinesiology / Health & Human Performance"
        ]
      },
      {
        "rank": 6,
        "name": "University of Manitoba",
        "city": "Winnipeg,  Manitoba",
        "website": "https://umanitoba.ca/explore/programs-of-study",
        "highlights": [
          "Bachelor of Science in",
          "Bachelor of Commerce",
          "Bachelor of Arts",
          "Bachelor of Science",
          "Bachelor of Nursing",
          "Bachelor of Social Work"
        ]
      },
      {
        "rank": 7,
        "name": "University of Saskatchewan",
        "city": "Saskatoon,  Saskatchewan (Only UG)",
        "website": "https://programs.usask.ca/programs/list-of-programs.php#Graduate",
        "highlights": [
          "Agriculture / Agribusiness",
          "Engineering",
          "Computer Science",
          "Nursing",
          "Commerce",
          "Psychology",
          "Kinesiology"
        ]
      },
      {
        "rank": 8,
        "name": "Memorial University of Newfoundland",
        "city": "St. John’s,  Newfoundland and Labrador (OnlyPG)",
        "website": "https://www.mun.ca/become/graduate/programs-and-courses/professional-programs/",
        "highlights": [
          "MBA (Master of Business Administration)",
          "Master of Marine Studies",
          "Master of Applied Ocean Technology",
          "Master of Artificial Intelligence (MAI)",
          "Master of Data Science (MDSc)",
          "Master of Education (MEd)",
          "M.Sc./PhD in Management"
        ]
      },
      {
        "rank": 9,
        "name": "University of Windsor",
        "city": "Windsor,  Ontario (Only UG)",
        "website": "https://www.uwindsor.ca/66/academic-programs",
        "highlights": [
          "Automotive Engineering",
          "Mechanical / Industrial Engineering",
          "Computer Science / Applied Computing",
          "Business (BComm)",
          "Forensic Science",
          "Nursing"
        ]
      },
      {
        "rank": 10,
        "name": "University of New Brunswick",
        "city": "Fredericton,  New Brunswick",
        "website": "https://www.unb.ca/academics/calendar/undergraduate/current/frederictonprograms/index.html",
        "highlights": [
          "Computer Science",
          "Engineering",
          "Forestry",
          "Business Administration (BBA)",
          "Nursing",
          "Bachelor of Science"
        ]
      },
      {
        "rank": 11,
        "name": "University of Regina",
        "city": "Regina,  Saskatchewan",
        "website": "https://www.uregina.ca/academics/index.html",
        "highlights": [
          "Computer Science",
          "Business Administration",
          "Engineering",
          "Actuarial Science",
          "Social Work",
          "Police Studies / Justice Studies"
        ]
      },
      {
        "rank": 12,
        "name": "Brock University",
        "city": "St. Catharines,  Ontario",
        "website": "https://brocku.ca/programs/",
        "highlights": [
          "Business Administration",
          "Medical Sciences",
          "Nursing",
          "Oenology and Viticulture",
          "Kinesiology",
          "Psychology"
        ]
      },
      {
        "rank": 13,
        "name": "Wilfrid Laurier University",
        "city": "Waterloo,  Ontario (Only UG and per MBA)",
        "website": "https://www.wlu.ca/programs/index.html",
        "highlights": [
          "Undergraduate:",
          "Business Administration (BBA)",
          "Business Technology Management (BTM)",
          "Data Science",
          "Criminology Psychology",
          "MBA:",
          "Lazaridis Full-Time MBA (1 year) – Canada's first one-year, full-time MBA",
          "Full-Time MBA with Co-op – first CEWIL-accredited MBA co-op in Canada",
          "Part-Time MBA"
        ]
      },
      {
        "rank": 14,
        "name": "University of Let bridge",
        "city": "Let bridge,  Alberta (Only UG)",
        "website": "https://www.ulethbridge.ca/future-student/programs",
        "highlights": [
          "Business Administration",
          "Psychology",
          "Biological Sciences",
          "Computer Science",
          "Health Sciences – Addictions Counselling – only program of its kind in Canada",
          "Neuroscience"
        ]
      },
      {
        "rank": 15,
        "name": "Lakehead University",
        "city": "Thunder Bay,  Ontario",
        "website": "https://www.lakeheadu.ca/programs",
        "highlights": [
          "Engineering",
          "Nursing",
          "Business Administration",
          "Forestry",
          "Concurrent Education",
          "Computer Science"
        ]
      },
      {
        "rank": 16,
        "name": "Lakehead University through Georgian College",
        "city": "Barrie,  Ontario",
        "website": "https://www.lakeheadu.ca/programs/departments/electrical-engineering/programs/undergraduate---lakehead-georgian-partnership",
        "highlights": [
          "Bachelor of Engineering (Electrical)",
          "Honors BSc Computer Science",
          "Honors BSc Applied Life Science",
          "Honors BA&Sc Environmental Sustainability",
          "Business Administration",
          "Interior Design"
        ]
      },
      {
        "rank": 17,
        "name": "University of Winnipeg",
        "city": "Winnipeg,  Manitoba",
        "website": "https://www.uwinnipeg.ca/programs/",
        "highlights": [
          "Business Administration",
          "Applied Computer Science",
          "Kinesiology and Applied Health",
          "Neuroscience",
          "Criminal Justice",
          "Statistics"
        ]
      },
      {
        "rank": 18,
        "name": "University of Prince Edward Island",
        "city": "Charlottetown,  Prince Edward Island",
        "website": "https://www.upei.ca/programs",
        "highlights": [
          "Doctor of Veterinary Medicine (DVM)",
          "Business Administration (BBA)",
          "Nursing",
          "Computer Science",
          "Science"
        ]
      },
      {
        "rank": 19,
        "name": "Acadia University",
        "city": "Wolfville,  Nova Scotia (Only UG )",
        "website": "https://www2.acadiau.ca/home.html",
        "highlights": [
          "Biology",
          "Business Administration",
          "Psychology",
          "Environmental Studies",
          "Kinesiology",
          "English"
        ]
      },
      {
        "rank": 20,
        "name": "University of Northern British Columbia",
        "city": "Prince George,  British Columbia",
        "website": "https://www.unbc.ca/programs-and-admissions/undergraduate",
        "highlights": [
          "Nursing",
          "Environmental Engineering / Civil Engineering",
          "Psychology",
          "Commerce/Business",
          "Northern Medical Program"
        ]
      },
      {
        "rank": 21,
        "name": "Thompson Rivers University",
        "city": "Kamloops,  British Columbia",
        "website": "https://www.tru.ca/",
        "highlights": [
          "Business & Management",
          "Tourism Management",
          "Computer Science",
          "Law",
          "Nursing / Health Sciences"
        ]
      },
      {
        "rank": 22,
        "name": "Mount Saint Vincent University",
        "city": "Halifax,  Nova Scotia",
        "website": "https://www.msvu.ca/academics/",
        "highlights": [
          "Public Relations – only 4-year BA program of its kind in Canada",
          "Child and Youth Study – only one in Atlantic Canada",
          "Tourism and Hospitality Management – first in Canada",
          "Family Studies and Gerontology",
          "Business Administration",
          "Psychology"
        ]
      },
      {
        "rank": 23,
        "name": "Trent University",
        "city": "Peterborough,  Ontario",
        "website": "https://www.trentu.ca/futurestudents/programs",
        "highlights": [
          "Nursing (BScN)",
          "Environmental & Life Sciences",
          "Indigenous Studies",
          "Forensic Science / Criminology",
          "Psychology",
          "Business / Accounting"
        ]
      },
      {
        "rank": 24,
        "name": "St. Mary’s University",
        "city": "Calgary,  Alberta (Only UG)",
        "website": "https://stmu.ca/",
        "highlights": [
          "Bachelor of Arts – Psychology",
          "Bachelor of Arts – English",
          "Bachelor of Arts – History",
          "Bachelor of Science – Biology",
          "Bachelor of Education (Elementary)",
          "Liberal Studies",
          "General Studies"
        ]
      },
      {
        "rank": 25,
        "name": "Trinity Western University",
        "city": "Langley,  British Columbia",
        "website": "https://www.twu.ca/",
        "highlights": [
          "Nursing (BSN)",
          "Human Kinetics – largest faith-based program of its kind in Canada",
          "Business Administration",
          "Biology",
          "Arts, Media and Culture",
          "Education"
        ]
      },
      {
        "rank": 26,
        "name": "Royal Roads University",
        "city": "Victoria,  British Columbia",
        "website": "https://www.royalroads.ca/",
        "highlights": [
          "Bachelor of Business Administration (BBA)",
          "Global Tourism Management",
          "Professional Communication",
          "Justice Studies",
          "MBA in Executive Management"
        ]
      },
      {
        "rank": 27,
        "name": "Fairleigh Dickinson University",
        "city": "Vancouver,  British Columbia",
        "website": "https://www.fdu.edu/vancouver-academics/",
        "highlights": [
          "BSc Business Administration (BBA)",
          "BSc Information Technology",
          "Hospitality and Tourism Management",
          "Health-related programs",
          "Humanities"
        ]
      },
      {
        "rank": 28,
        "name": "Simon Fraser University through Fraser International College",
        "city": "Burnaby,  British Columbia (Only UG)",
        "website": "https://www.sfu.ca/students/admission/admission-requirements/international-highschool.html",
        "highlights": [
          "Business Administration",
          "Computing Science",
          "Engineering Science",
          "Arts and Social Sciences",
          "Health Sciences"
        ]
      },
      {
        "rank": 29,
        "name": "University of Manitoba through International College of Manitoba",
        "city": "Winnipeg,  Manitoba (Only UG)",
        "website": "https://www.icmanitoba.ca/",
        "highlights": [
          "Business",
          "Arts",
          "Engineering",
          "Science",
          "Agriculture"
        ]
      },
      {
        "rank": 30,
        "name": "Ryerson University International College",
        "city": "Toronto,  Ontario",
        "website": "https://www.torontomuic.ca/",
        "highlights": [
          "Business Management",
          "International Economics and Finance (BA)",
          "Engineering",
          "Arts",
          "Science"
        ]
      },
      {
        "rank": 31,
        "name": "Vancouver Island University",
        "city": "Nanaimo,  British Columbia",
        "website": "https://www.viu.ca/programs/",
        "highlights": [
          "Business Administration",
          "Nursing / Health Sciences",
          "Education",
          "Indigenous/ Xwulmuxw Studies",
          "Fisheries and Aquaculture Technology",
          "Environmental Science / Marine Studies"
        ]
      },
      {
        "rank": 32,
        "name": "St. Thomas University",
        "city": "Fredericton,  New Brunswick",
        "website": "https://www.stu.ca/",
        "highlights": [
          "Bachelor of Arts",
          "Criminology",
          "Journalism",
          "Human Rights",
          "Communications and Public Policy",
          "Bachelor of Education",
          "Bachelor of Social Work"
        ]
      },
      {
        "rank": 33,
        "name": "University Canada West",
        "city": "Vancouver,  British Columbia",
        "website": "https://www.ucanwest.ca/",
        "highlights": [
          "MBA",
          "Bachelor of Commerce (BCom)",
          "Bachelor of Arts in Business Communication",
          "MBA Foundation",
          "Postgraduate Diplomas"
        ]
      },
      {
        "rank": 34,
        "name": "New York Institute of Technology",
        "city": "Vancouver,  British Columbia",
        "website": "https://vancouver.nyit.edu/",
        "highlights": [
          "MBA",
          "Master of Science in Cybersecurity",
          "Master of Energy Management",
          "Master of Data Science"
        ]
      },
      {
        "rank": 35,
        "name": "Nipissing University",
        "city": "North Bay,  Ontario",
        "website": "https://future.nipissingu.ca/programs/",
        "highlights": [
          "Nursing",
          "Teacher Education",
          "Environmental Science",
          "Psychology",
          "Business",
          "Computer Science"
        ]
      },
      {
        "rank": 36,
        "name": "The King’s University",
        "city": "Edmonton,  Alberta",
        "website": "https://www.kingsu.ca/programs",
        "highlights": [
          "Environmental Studies",
          "Politics, History, and Economics (PHE)",
          "Business Administration / Commerce",
          "Psychology",
          "Biology",
          "Bachelor of Education",
          "Computing Science",
          "Interdisciplinary Science (I.Sci)"
        ]
      },
      {
        "rank": 37,
        "name": "Adler University",
        "city": "Vancouver,  British Columbia",
        "website": "https://www.adler.edu/en-ca/about/locations/vancouver/",
        "highlights": [
          "Master of Counseling Psychology",
          "Doctor of Psychology (Psy.D.) in Clinical Psychology – western Canada's first",
          "Master of Industrial and Organisational Psychology",
          "Master of Psychology in Health and Wellness",
          "Art Therapy"
        ]
      },
      {
        "rank": 38,
        "name": "King’s University College (University of Western Ontario)",
        "city": "London,  Ontario",
        "website": "https://kings.uwo.ca/academics/our-programs/",
        "highlights": [
          "Bachelor of Management and Organizational Studies (BMOS)",
          "Social Work (BSW Honours)",
          "Criminology",
          "Social Justice and Peace Studies",
          "Analytics and Decision Sciences (ADS)"
        ]
      },
      {
        "rank": 39,
        "name": "Cape Breton University",
        "city": "Sydney,  Nova Scotia",
        "website": "https://www.cbu.ca/academics/programs/",
        "highlights": [
          "Business Administration",
          "Engineering Technology (BET)",
          "Nursing / Health Sciences",
          "Education",
          "Mi'kmaq Studies"
        ]
      },
      {
        "rank": 40,
        "name": "Capilano University",
        "city": "North Vancouver,  British Columbia",
        "website": "https://www.capilanou.ca/programs--courses/",
        "highlights": [
          "Motion Picture Arts / Film Production",
          "Business Administration (BBA)",
          "Tourism Management",
          "Music Therapy / Jazz Studies",
          "Kinesiology"
        ]
      },
      {
        "rank": 41,
        "name": "Kwantlen Polytechnic University",
        "city": "Surrey,  British Columbia",
        "website": "https://www.kpu.ca/current-students/programs",
        "highlights": [
          "Bachelor of Business Administration (BBA)",
          "Nursing",
          "Criminology",
          "Graphic Design",
          "Architecture / Interior Design",
          "Engineering"
        ]
      },
      {
        "rank": 42,
        "name": "Algoma University",
        "city": "Sault Ste. Marie,  Ontario",
        "website": "https://algomau.ca/academics/programs/",
        "highlights": [
          "Computer Science",
          "Business Administration",
          "Psychology",
          "Social Work",
          "Community Economic and Social Development"
        ]
      },
      {
        "rank": 43,
        "name": "University of the Fraser Valley",
        "city": "Abbotsford,  British Columbia",
        "website": "https://www.ufv.ca/programs/",
        "highlights": [
          "Aviation",
          "Computer Information Systems",
          "Data Science",
          "Kinesiology",
          "Agricultural Science",
          "Social Work"
        ]
      },
      {
        "rank": 44,
        "name": "Mount Allison University",
        "city": "Sackville,  New Brunswick",
        "website": "https://mta.ca/",
        "highlights": [
          "BSc in Aviation",
          "Bachelor of Commerce",
          "Fine Arts",
          "Music",
          "Biology / Psychology"
        ]
      },
      {
        "rank": 45,
        "name": "McEwen University",
        "city": "Edmonton,  Alberta (Only UG)",
        "website": "https://www.macewan.ca/academics/programs/",
        "highlights": [
          "Bachelor of Science in Nursing",
          "Business Management / Commerce",
          "Computer Science",
          "Anthropology",
          "Fine Arts"
        ]
      },
      {
        "rank": 46,
        "name": "Yukon University",
        "city": "Whitehorse,  Yukon",
        "website": "https://www.yukonu.ca/programs",
        "highlights": [
          "Bachelor of Business Administration",
          "Indigenous Governance",
          "Northern Sciences / Northern Environmental and Conservation Sciences",
          "Social Work",
          "Liberal Arts"
        ]
      },
      {
        "rank": 47,
        "name": "Crandall University",
        "city": "Moncton,  New Brunswick",
        "website": "https://www.crandallu.ca/",
        "highlights": [
          "Bachelor of Education",
          "Bachelor of Arts (History)",
          "Bachelor of Business Administration",
          "Biblical Studies / Theology",
          "Bachelor of Science"
        ]
      },
      {
        "rank": 48,
        "name": "Seneca College",
        "city": "Toronto,  Ontario",
        "website": "https://www.senecapolytechnic.ca/programs/byareaofstudy.html",
        "highlights": [
          "Business Administration",
          "Aviation Technology",
          "Computer Programming and Analysis",
          "Cybersecurity",
          "Nursing / Veterinary Technician"
        ]
      },
      {
        "rank": 49,
        "name": "George Brown College",
        "city": "Toronto,  Ontario",
        "website": "https://www.georgebrown.ca/programs",
        "highlights": [
          "Culinary Arts / Hospitality Management",
          "Early Childhood Education",
          "Business / Financial Services",
          "Health Informatics",
          "Construction Management"
        ]
      },
      {
        "rank": 50,
        "name": "Sheridan College",
        "city": "Oakville,  Ontario",
        "website": "https://www.sheridancollege.ca/programs",
        "highlights": [
          "Animation / Game Design",
          "Business",
          "Engineering / Applied Computing",
          "Journalism"
        ]
      },
      {
        "rank": 51,
        "name": "Douglas College",
        "city": "New Westminster,  British Columbia (Except Punjab)",
        "website": "https://www.douglascollege.ca/programs-and-courses",
        "highlights": [
          "Bachelor of Nursing",
          "Business Administration",
          "Computing Science",
          "Psychology",
          "Criminology"
        ]
      },
      {
        "rank": 52,
        "name": "Southern Alberta Institute of Technology",
        "city": "Calgary,  Alberta",
        "website": "https://www.sait.ca/programs-and-courses",
        "highlights": [
          "Hospitality and Tourism Management",
          "Business Administration",
          "Energy / Petroleum Engineering Technology",
          "Aircraft Maintenance / Avionics",
          "Digital Technology"
        ]
      },
      {
        "rank": 53,
        "name": "Niagara College",
        "city": "Welland,  Ontario",
        "website": "https://www.niagaracollege.ca/enrolmentservices/admissions/availability/",
        "highlights": [
          "Culinary Arts / Culinary Innovation",
          "Winemaking / Brewing",
          "Hospitality and Tourism",
          "Nursing",
          "Business"
        ]
      },
      {
        "rank": 54,
        "name": "Fanshawe College",
        "city": "London,  Ontario",
        "website": "https://collegedunia.com/canada/college/193-fanshawe-college-london/programs",
        "highlights": [
          "Advanced Diploma in Dental Hygiene",
          "Cyber Security (Advanced Diploma)",
          "Diploma in Practical Nursing",
          "Graduate Certificate in Business Analysis",
          "Paramedic (Diploma)",
          "Data Analytics"
        ]
      },
      {
        "rank": 55,
        "name": "Durham College",
        "city": "Oshawa,  Ontario",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/durham-college/courses",
        "highlights": [
          "Artificial Intelligence / Applied Data Analytics",
          "Cyber Security",
          "Computer Programming",
          "Supply Chain and Operations",
          "Construction Management"
        ]
      },
      {
        "rank": 56,
        "name": "North Island College",
        "city": "Vancouver Island,  British Columbia",
        "website": "https://www.nic.bc.ca/programs/",
        "highlights": [
          "Practical Nursing / Nursing",
          "Trades (Welding, Carpentry, Automotive Service)",
          "Business & Office Administration",
          "Fine Arts / Digital Design & Development",
          "Tourism & Hospitality"
        ]
      },
      {
        "rank": 57,
        "name": "Georgian College",
        "city": "Barrie,  Ontario",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/georgian-college",
        "highlights": [
          "Practical Nursing",
          "Engineering Technology",
          "Computer Programming",
          "Automotive Business",
          "Business Administration"
        ]
      },
      {
        "rank": 58,
        "name": "Loyalist College",
        "city": "Toronto,  Ontario",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/loyalist-college-toronto-campus/courses",
        "highlights": [
          "Artificial Intelligence & Data Science (Post-Graduate)",
          "Cyber Security",
          "Project Management",
          "Supply Chain Management",
          "Information Technology"
        ]
      },
      {
        "rank": 59,
        "name": "Lakeland College",
        "city": "Vermilion,  Alberta",
        "website": "https://www.lakelandcollege.ca/programs-and-courses/index.html",
        "highlights": [
          "Crop Technology",
          "Animal Science Technology",
          "Interior Design Technology",
          "Fire and Emergency Services",
          "Early Learning and Child Care"
        ]
      },
      {
        "rank": 60,
        "name": "Cambrian College",
        "city": "Sudbury,  Ontario",
        "website": "https://cambriancollege.ca/programs",
        "highlights": [
          "Health Sciences & Nursing",
          "Information Technology",
          "Business",
          "Engineering Technology"
        ]
      },
      {
        "rank": 61,
        "name": "Manitoba Institute of Trades and Technology",
        "city": "Winnipeg,  Manitoba",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/manitoba-institute-of-trades-and-technology/courses",
        "highlights": [
          "Information Technology / Computer Science",
          "Health Care Aide",
          "Business Administration & Management",
          "Skilled Trades (Welding, Carpentry, Electrical)"
        ]
      },
      {
        "rank": 62,
        "name": "Centennial College",
        "city": "Toronto,  Ontario (Only for Sri Lanka,  Nepal and Bangladesh)",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/centennial-college",
        "highlights": [
          "Project Management (Graduate Certificate)",
          "Software Engineering Technician / Software Development",
          "Cyber Security",
          "Business Administration / International Business Management",
          "Nursing"
        ]
      },
      {
        "rank": 63,
        "name": "Conestoga College",
        "city": "Kitchener,  Ontario",
        "website": "https://www.conestogac.on.ca/programs-and-courses",
        "highlights": [
          "Big Data Solution Architecture / Software Quality Assurance",
          "Cybersecurity",
          "Supply Chain Management",
          "Computer Applications Development",
          "Business (Project Management / Sales tracks)"
        ]
      },
      {
        "rank": 64,
        "name": "College of New Caledonia",
        "city": "Prince George,  British Columbia",
        "website": "https://cnc.bc.ca/",
        "highlights": [
          "Diagnostic Medical Sonography",
          "Nursing",
          "Business Management",
          "Civil Technology",
          "Trades & Technology (Heavy Mechanical)"
        ]
      },
      {
        "rank": 65,
        "name": "Cegep Marie-Victorin",
        "city": "Montreal,  Quebec",
        "website": "https://collegedunia.com/canada/college/157-cegep-marie-victorin-montreal/programs",
        "highlights": [
          "Fashion Design",
          "Visual Arts (Fine Arts Profile)",
          "Music (Classical or Jazz)",
          "Sciences of Nature",
          "Arts, Letters and Communication"
        ]
      },
      {
        "rank": 66,
        "name": "Saskatchewan Polytechnic",
        "city": "Saskatoon,  Saskatchewan",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/saskatchewan-polytechnic/courses",
        "highlights": [
          "Software Development",
          "Cyber Security",
          "Project Management",
          "Automation",
          "IT & Systems"
        ]
      },
      {
        "rank": 67,
        "name": "Red Deer College",
        "city": "Red Deer,  Alberta",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/red-deer-college/courses",
        "highlights": [
          "Psychology (BA)",
          "Mechanical / Electrical Engineering",
          "Health Care Aide",
          "Supply Chain Administration",
          "Film Making"
        ]
      },
      {
        "rank": 68,
        "name": "LaSalle College",
        "city": "Montreal and Vancouver",
        "website": "https://lasallecollege.lcieducation.com/en/programs-and-courses",
        "highlights": [
          "Fashion Design",
          "VFX & Game Design / Film Making",
          "Interior Design / Graphic Design",
          "Hotel Management & Tourism",
          "Multimedia & Digital Media / Business & Technology"
        ]
      },
      {
        "rank": 69,
        "name": "College of the Rockies",
        "city": "Cranbrook,  British",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/college-of-the-rockies",
        "highlights": [
          "Tourism Management",
          "Hospitality Management",
          "Healthcare programs",
          "Timber Framing / Trades",
          "Bachelor of Business Administration (Sustainable Business Practices)"
        ]
      },
      {
        "rank": 70,
        "name": "Northern Lights College",
        "city": "Dawson Creek,  British Columbia",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/northern-lights-college",
        "highlights": [
          "Aircraft Maintenance Engineering",
          "Power Engineering",
          "Wind Turbine Maintenance Technician",
          "Trades & Apprenticeship (general)",
          "Early Childhood Education"
        ]
      },
      {
        "rank": 71,
        "name": "Northern College",
        "city": "Timmins,  Ontario",
        "website": "https://www.northerncollege.ca/programs/",
        "highlights": [
          "Mining Engineering",
          "Practical Nursing / Personal Support Worker",
          "Paramedic",
          "Welding Engineering / Construction Engineering",
          "Early Childhood Educator"
        ]
      },
      {
        "rank": 72,
        "name": "St. Lawrnce College",
        "city": "Kingston,  Ontario",
        "website": "https://leapscholar.com/canada/university-details/saint-lawrence-college-kingston/course-fees",
        "highlights": [
          "Bachelor of Science in Nursing",
          "Business Administration",
          "Computer Programming",
          "Addictions and Mental Health",
          "Bachelor of Commerce: Social Innovation"
        ]
      },
      {
        "rank": 73,
        "name": "Confederation College",
        "city": "Thunder Bay,  Ontario",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/confederation-college/courses",
        "highlights": [
          "Health Informatics (Graduate Certificate)",
          "Business Administration (Accounting)",
          "Digital Marketing and Marketing Analytics",
          "Construction Engineering / Environmental Sciences",
          "Practical Nursing / Early Childhood Care & Education"
        ]
      },
      {
        "rank": 74,
        "name": "Lambton College",
        "city": "Sarnia,  Ontario",
        "website": "https://www.lambtoncollege.ca/programs",
        "highlights": [
          "Bachelor of Science in Nursing",
          "Artificial Intelligence and Machine Learning (Graduate Certificate)",
          "Cyber Security and Computer Forensics (Graduate Certificate)",
          "Computer Programming (Diploma)",
          "Quality Engineering Management"
        ]
      },
      {
        "rank": 75,
        "name": "Selkirk College",
        "city": "Castlegar,  British Columbia",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/selkirk-college",
        "highlights": [
          "Business Administration (Diploma/PG Diploma)",
          "Contemporary Music and Technology",
          "Applied Environmental Science and Planning Technology",
          "Ski Resort Operations and Management",
          "Health Care Assistant / Gerontological Nursing"
        ]
      },
      {
        "rank": 76,
        "name": "Assiniboine Community College",
        "city": "Brandon,  Manitoba",
        "website": "https://www.shiksha.com/studyabroad/canada/universities/assiniboine-community-college",
        "highlights": [
          "Practical Nursing",
          "Culinary Arts",
          "Horticultural Production and Sustainable Food Systems",
          "Business (various diplomas)",
          "Trades (via Len Evans Centre)"
        ]
      },
      {
        "rank": 77,
        "name": "Canadore College",
        "city": "North Bay,  Ontario (Except Punjab and Haryana",
        "website": "https://leapscholar.com/canada/university-details/canadore-college/course-fees",
        "highlights": [
          "Aviation Technology",
          "Bachelor of Science in Nursing",
          "Health Care Administration (Graduate Certificate)",
          "Computer Systems (Cybersecurity/Software Development)",
          "Culinary Arts"
        ]
      },
      {
        "rank": 78,
        "name": "Acsenda School of Management",
        "city": "Vancouver,  British Columbia",
        "website": "https://www.gotouniversity.com/university/acsenda-school-of-management/programs#page-start",
        "highlights": [
          "BBA – International Business Management",
          "BBA – Accounting",
          "BBA – Marketing Management",
          "BBA – Human Resource Management",
          "Bachelor of Hospitality Management"
        ]
      },
      {
        "rank": 79,
        "name": "Le Cordon Bleu",
        "city": "Ottawa,  Ontario",
        "website": "https://www.cordonbleu.edu/ottawa/short-courses/en",
        "highlights": [
          "Le Grand Diploma",
          "Diploma de Cuisine",
          "Diploma de Pâtisserie",
          "Diploma in Culinary Management",
          "Plant-Based Culinary Arts Diploma"
        ]
      },
      {
        "rank": 80,
        "name": "Alexander College",
        "city": "Vancouver,  British Columbia",
        "website": "https://alexandercollege.ca/programs-and-courses/",
        "highlights": [
          "Business/Commerce",
          "Computer Science",
          "Psychology",
          "Economics",
          "University Transfer Program (general Arts/Science)"
        ]
      },
      {
        "rank": 81,
        "name": "College St- Michel",
        "city": "Montreal,  Quebec",
        "website": "https://www.educations.com/institutions/college-st-michel",
        "highlights": [
          "Computer Programmer-Analyst (LEACR)",
          "Accounting Techniques (LCAF8)",
          "Childhood Education Techniques (JEE0K)",
          "IT Support Diploma (Dep 5229)",
          "Office Automation Techniques (LCE0X)"
        ]
      },
      {
        "rank": 82,
        "name": "Vancouver Film School",
        "city": "Vancouver,  British Columbia",
        "website": "https://vfs.edu/",
        "highlights": [
          "D Animation & Visual Effects",
          "Game Design",
          "Film Production",
          "Acting for Film & Television",
          "Writing for Film & Television"
        ]
      },
      {
        "rank": 83,
        "name": "Northern College at Pures- Toronto",
        "city": "Toronto,  Ontario",
        "website": "https://pures.ca/international/northern-college-at-pures-toronto-programs/",
        "highlights": [
          "Business Management / International Business",
          "Practical Nursing",
          "Supply Chain Management",
          "Mobile Application Development",
          "Healthcare Management (Graduate Certificate)"
        ]
      },
      {
        "rank": 84,
        "name": "Cegep de la Gaspesie et des lles",
        "city": "Gaspe,  Quebec",
        "website": "https://cegepgim.ca/en/programs/",
        "highlights": [
          "Fisheries & Aquaculture",
          "Renewable Energy",
          "Tourism",
          "Business & Technology",
          "Healthcare"
        ]
      },
      {
        "rank": 85,
        "name": "Vancouver Community College",
        "city": "Vancouver,  British Columbia",
        "website": "https://www.vcc.ca/programscourses/",
        "highlights": [
          "Culinary Arts",
          "Nursing",
          "Hospitality Management",
          "Dental (Health Administration/Dental programs)"
        ]
      },
      {
        "rank": 86,
        "name": "British Columbia Institute of Technology",
        "city": "Burnaby,  British Columbia",
        "website": "https://www.bcit.ca/",
        "highlights": [
          "Computing & IT",
          "Business & Media",
          "Construction & the Environment",
          "Energy",
          "Health Sciences"
        ]
      },
      {
        "rank": 87,
        "name": "Medicine Hat College",
        "city": "Medicine Hat,  Alberta",
        "website": "https://www.mhc.ab.ca/",
        "highlights": [
          "Applied Degrees",
          "Addictions Counseling",
          "Criminal Justice",
          "Electrical Engineering",
          "Administrative Office Management"
        ]
      },
      {
        "rank": 88,
        "name": "NorQuest College",
        "city": "Edmonton,  Alberta",
        "website": "https://www.norquest.ca/programs-courses/browse-programs-and-courses/",
        "highlights": [
          "Health Care Aide / Health Care Leadership",
          "Pharmacy Technician",
          "Business Administration",
          "Machine Learning Analyst",
          "Early Learning and Child Care"
        ]
      },
      {
        "rank": 89,
        "name": "Yorkville University",
        "city": "Toronto and Vancouver",
        "website": "https://www.yorkvilleu.ca/programs/",
        "highlights": [
          "Bachelor of Business Administration (BBA)",
          "Bachelor of Interior Design (BID)",
          "Master of Counselling Psychology",
          "MBA with Business Analytics concentration",
          "Aviation Management Certificate",
          "Education programs"
        ]
      },
      {
        "rank": 90,
        "name": "Montreal College of Information Technology",
        "city": "Montreal,  Quebec",
        "website": "https://www.montrealcollege.ca/diplomas",
        "highlights": [
          "Data Science / AI",
          "Cybersecurity",
          "Cloud Computing",
          "Software Development / Full Stack Web Development",
          "Business Intelligence & Data Analytics (SAP/SQL)"
        ]
      },
      {
        "rank": 91,
        "name": "Toronto Film School",
        "city": "Toronto,  Ontario",
        "website": "https://www.torontofilmschool.ca/",
        "highlights": [
          "film Production",
          "Acting for Film, TV, and the Theatre",
          "Video Game Design and Development",
          "Graphic Design and Interactive Media",
          "Writing for Film & TV"
        ]
      },
      {
        "rank": 92,
        "name": "CDI College",
        "city": "Montreal,  Quebec",
        "website": "https://www.cdicollege.ca/study-on-campus/quebec/programs-by-campus/montreal/#gsc.tab=0",
        "highlights": [
          "Artificial Intelligence Specialist",
          "Paralegal Technology",
          "Dental (Assisting/Hygiene)",
          "Health, Assistance and Nursing",
          "Applied Information Technology"
        ]
      },
      {
        "rank": 93,
        "name": "Coquitlam College",
        "city": "Coquitlam,  British Columbia",
        "website": "https://www.coquitlamcollege.com/programs-courses/",
        "highlights": [
          "University Transfer Program (Arts/Sciences)",
          "Associate of Arts Degree",
          "English Studies Program",
          "University Bridge Program"
        ]
      },
      {
        "rank": 94,
        "name": "Canada College",
        "city": "Montreal,  Quebec",
        "website": "https://www.collegecanada.com/about-us/",
        "highlights": [
          "Digital Content Creation",
          "Digital Marketing",
          "Health, Assistance & Nursing",
          "Home Care Assistance",
          "Early Childhood Education"
        ]
      },
      {
        "rank": 95,
        "name": "Matrix College of Management Technology and Healthcare Inc",
        "city": "Montreal,  Quebec",
        "website": "https://www.matrixcollege.ca/",
        "highlights": [
          "Business Administration",
          "Healthcare",
          "Information Technology",
          "Engineering Technology"
        ]
      },
      {
        "rank": 96,
        "name": "CDE College",
        "city": "Sherbrooke,  Quebec",
        "website": "https://cdeinternational.azurewebsites.net/",
        "highlights": [
          "Programmer-Analyst and Application Development",
          "Network Administration",
          "Accounting and Management",
          "Business Management",
          "Office System Techniques"
        ]
      },
      {
        "rank": 97,
        "name": "ISI",
        "city": "L’institut Superieur d’Informatique,  Montreal,  Quebec",
        "website": "https://lescegeps.com/etablissements/etablissements_prives_sous_permis/institut_superieur_dinformatique_i_s_i_",
        "highlights": [
          "Programming and Internet Technologies",
          "Networks, Security and IP Telephony",
          "Programming, Networks and Telecommunications",
          "Information Systems Integration"
        ]
      },
      {
        "rank": 98,
        "name": "College National of Science and Technology",
        "city": "Montreal,  Quebec",
        "website": "https://collegenational.ca/",
        "highlights": [
          "Network Management (ACS)",
          "Entrepreneurship and Management in Technology",
          "Project Management"
        ]
      },
      {
        "rank": 99,
        "name": "Ascent College",
        "city": "Montreal,  Quebec",
        "website": "https://gostudyin.com/india/study-in-canada/institutes/colleges/ascent/",
        "highlights": [
          "Artificial Intelligence and Machine Learning (AIML)",
          "Network Security and Ethical Cyber Piracy (NSECP)",
          "Big Data Management"
        ]
      },
      {
        "rank": 100,
        "name": "Trebas Institute",
        "city": "Montreal,  Quebec",
        "website": "https://www.trebas.com/programs?noredirect=en-US",
        "highlights": [
          "Audio and Sound Design",
          "Film and Television Production",
          "Analytics, Big Data and Business Intelligence",
          "Digital Marketing",
          "E-commerce and Online Business Management"
        ]
      },
      {
        "rank": 101,
        "name": "M College",
        "city": "Montreal,  Quebec",
        "website": "https://terratern.com/blog/m-college-canada/",
        "highlights": [
          "Multimedia Integration Techniques",
          "Early Childhood Education Techniques",
          "Business Management"
        ]
      },
      {
        "rank": 102,
        "name": "Aviron Quebec College Technique",
        "city": "Quebec City,  Quebec",
        "website": "https://www.avironquebec.com/",
        "highlights": [
          "Electricity (DEP 5795)",
          "Computing/IT Support (DEP 5885)",
          "Automobile Mechanics (DEP 5798)"
        ]
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
        "rank": 1,
        "name": "The University of New South Wales",
        "city": "Sydney",
        "website": "https://www.unsw.edu.au",
        "highlights": [
          "Engineering (Mineral & Mining, Petroleum, Civil & Structural)",
          "Law",
          "Accounting & Finance",
          "Business & Commerce",
          "Computer Science/IT",
          "Medicine",
          "Psychology"
        ]
      },
      {
        "rank": 2,
        "name": "The University of Queensland",
        "city": "Brisbane",
        "website": "https://www.uq.edu.au",
        "highlights": [
          "MBA/Business Administration",
          "Architecture",
          "Biotechnology",
          "Medicine",
          "Sustainable Energy/Environmental Science",
          "Law",
          "Engineering"
        ]
      },
      {
        "rank": 3,
        "name": "The University of Adelaide",
        "city": "South Australia",
        "website": "https://www.adelaide.edu.au",
        "highlights": [
          "Data Science",
          "MBA/Business Administration",
          "Medicine",
          "Engineering",
          "Computer Science",
          "Public Health",
          "Law"
        ]
      },
      {
        "rank": 4,
        "name": "The University of Newcastle",
        "city": "Newcastle",
        "website": "https://www.newcastle.edu.au",
        "highlights": [
          "Health and Medicine",
          "Engineering (Software, Electrical, Civil)",
          "Business and Management/Commerce",
          "Law",
          "Data Science and Artificial Intelligence",
          "Information Technology/Cyber Security",
          "Architecture"
        ]
      },
      {
        "rank": 5,
        "name": "Curtin University",
        "city": "Perth",
        "website": "https://www.curtin.edu.au",
        "highlights": [
          "Business Administration/Commerce",
          "Health Sciences/Nursing",
          "Engineering",
          "Computing/IT",
          "Architecture",
          "Education/Teaching",
          "Pharmacy"
        ]
      },
      {
        "rank": 6,
        "name": "Queensland University of Technology",
        "city": "Brisbane",
        "website": "https://www.qut.edu.au",
        "highlights": [
          "Business",
          "Creative Industries/Design",
          "Engineering",
          "Nursing/Health",
          "Information Technology/Data Science",
          "Law/Justice",
          "Architecture and Built Environment"
        ]
      },
      {
        "rank": 7,
        "name": "RMIT University",
        "city": "Melbourne",
        "website": "https://www.rmit.edu.au",
        "highlights": [
          "Art and Design/Architecture",
          "Business and Management",
          "Engineering (Robotics, Aeronautical)",
          "Computer Science and Information Systems",
          "Communication and Media Studies",
          "Law",
          "Education",
          "Biomedical Science"
        ]
      },
      {
        "rank": 8,
        "name": "University of South Australia",
        "city": "Adelaide",
        "website": "https://www.unisa.edu.au",
        "highlights": [
          "Data Science",
          "MBA/Business Administration",
          "Medicine",
          "Engineering",
          "Computer Science",
          "Public Health",
          "Nursing"
        ]
      },
      {
        "rank": 9,
        "name": "Swinburne University of Technology",
        "city": "Melbourne",
        "website": "https://www.swinburne.edu.au",
        "highlights": [
          "Information Technology/Cyber Security",
          "Engineering (Robotics & Mechatronics, Civil)",
          "Business & Management (Accounting, Marketing)",
          "Design (Games Design, Animation)",
          "MBA",
          "Computer Science/Data Science",
          "Health Science/Psychology"
        ]
      },
      {
        "rank": 10,
        "name": "Flinders University",
        "city": "Adelaide",
        "website": "https://www.flinders.edu.au",
        "highlights": [
          "Medicine",
          "Nursing/Health Sciences",
          "Psychology",
          "Information Technology/Computer Science",
          "Engineering (Civil, Electrical, Biomedical)",
          "Public Health",
          "Business"
        ]
      },
      {
        "rank": 11,
        "name": "James Cook University",
        "city": "Brisbane",
        "website": "https://www.jcu.edu.au",
        "highlights": [
          "Bachelor of Business",
          "Bachelor of Commerce",
          "Bachelor of Information Technology",
          "Bachelor of Tourism, Hospitality and Events",
          "Master of Business Administration (MBA)",
          "Master of Data Science (Professional)",
          "Master of Information Technology",
          "Master of Engineering Management"
        ]
      },
      {
        "rank": 12,
        "name": "Western Sydney University",
        "city": "Sydney",
        "website": "https://www.westernsydney.edu.au",
        "highlights": [
          "Bachelor of Business",
          "Bachelor of Accounting",
          "Bachelor of Nursing",
          "Bachelor of Computer Science",
          "Bachelor of Engineering (Honours)",
          "Bachelor of Data Science",
          "Bachelor of Cyber Security and Behaviour",
          "Master of Artificial Intelligence"
        ]
      },
      {
        "rank": 13,
        "name": "University of Southern Queensland",
        "city": "Toowoomba",
        "website": "https://www.unisq.edu.au",
        "highlights": [
          "MBA/Business",
          "Cyber Security",
          "Data Science (AI & Machine Learning)",
          "Information Systems",
          "Engineering",
          "Nursing/Allied Health",
          "Aviation"
        ]
      },
      {
        "rank": 14,
        "name": "University of Southern Queensland - Sydney Education Centre",
        "city": "Sydney",
        "website": "https://www.unisq.edu.au/international",
        "highlights": [
          "MBA/Business Administration",
          "Cyber Security",
          "Information Systems/IT",
          "Data Science",
          "Engineering Management",
          "Accounting",
          "Nursing"
        ]
      },
      {
        "rank": 15,
        "name": "Southern Cross University - Gold Coast, Lismore and Coffs Harbour",
        "city": "Gold Coast",
        "website": "https://www.scu.edu.au",
        "highlights": [
          "Nursing",
          "Business/Law",
          "Education",
          "Psychology",
          "Marine Science/Environmental Science",
          "Engineering",
          "Health Sciences (Physiotherapy, Occupational Therapy, Osteopathy)"
        ]
      },
      {
        "rank": 16,
        "name": "Southern Cross University - Sydney, Melbourne & Perth",
        "city": "Sydney / Melbourne / Perth",
        "website": "https://www.scu.edu.au",
        "highlights": [
          "Business Administration",
          "Information Technology",
          "Education",
          "Nursing",
          "Accounting",
          "Law",
          "Social Work and Community Welfare"
        ]
      },
      {
        "rank": 17,
        "name": "Australian Technical & Management College",
        "city": "Australia",
        "website": "https://atmc.edu.au",
        "highlights": [
          "Business Administration",
          "Information Technology",
          "Accounting",
          "Bachelor of Technology",
          "Diploma of Business",
          "Project Management",
          "Diploma of Information Technology"
        ]
      },
      {
        "rank": 18,
        "name": "Le Cordon Bleu",
        "city": "Adelaide / Sydney / Melbourne / Perth",
        "website": "https://www.cordonbleu.edu/australia/home/en",
        "highlights": [
          "Diplôme de Cuisine",
          "Diplôme de Pâtisserie",
          "Le Grand Diplôme",
          "Bachelor of Business (International Hotel Management)",
          "Bachelor of Business (International Restaurant Management)",
          "Gastronomy",
          "Master's in Hospitality/Business Management"
        ]
      },
      {
        "rank": 19,
        "name": "International College of Management Sydney",
        "city": "Sydney",
        "website": "https://www.icms.edu.au",
        "highlights": [
          "Business Administration/MBA",
          "Hospitality Management",
          "Event Management",
          "International Tourism",
          "Sports Management",
          "Fashion and Global Brand Management",
          "Property/Accounting"
        ]
      },
      {
        "rank": 20,
        "name": "Engineering Institute of Technology",
        "city": "Perth",
        "website": "https://www.eit.edu.au",
        "highlights": [
          "Master of Engineering (Civil: Structural)",
          "Master of Engineering (Mechanical)",
          "Master of Engineering (Electrical)",
          "Bachelor of Engineering",
          "Doctor of Engineering (DEng)",
          "Industrial Automation Engineering",
          "Instrumentation and Control Engineering"
        ]
      },
      {
        "rank": 21,
        "name": "The Hotel School",
        "city": "Sydney / Melbourne / Brisbane",
        "website": "https://hotelschool.scu.edu.au",
        "highlights": [
          "Bachelor of Business in Hotel Management",
          "Master of International Tourism and Hotel Management",
          "Master of Business in Global Hotel Leadership",
          "Associate Degree of International Hotel & Tourism Management",
          "Graduate Certificate in International Tourism and Hotel Management",
          "Event Management",
          "Tourism Management"
        ]
      },
      {
        "rank": 22,
        "name": "Airways Aviation",
        "city": "Gold Coast and Sunshine Coast",
        "website": "https://www.airwaysaviation.com/country/australia",
        "highlights": [
          "Commercial Pilot Licence (CPL)",
          "Bachelor of Business (Aviation Management) + CPL",
          "Private Pilot Licence",
          "Diploma of Aviation (Instrument Rating)",
          "Diploma of Aviation (Flight Instructor Rating)",
          "Certificate III in Aviation (Ground Operations and Service)",
          "Multi-Engine/Multi-Crew Pilot Training"
        ]
      },
      {
        "rank": 23,
        "name": "Australian College of Applied Psychology",
        "city": "Sydney",
        "website": "https://www.acap.edu.au",
        "highlights": [
          "Bachelor of Psychological Science",
          "Bachelor of Counselling",
          "Bachelor of Criminology and Justice",
          "Master of Counselling",
          "Bachelor of Social Work",
          "Graduate Diploma of Psychology",
          "MBA (Management/Leadership)"
        ]
      },
      {
        "rank": 24,
        "name": "SAE Institute",
        "city": "Brisbane / Sydney / Melbourne / Adelaide / Perth",
        "website": "https://sae.edu.au",
        "highlights": [
          "Bachelor of Audio Engineering",
          "Bachelor of Animation",
          "Bachelor of Film",
          "Bachelor of VFX & Virtual Production",
          "Bachelor of Design & Visual Communication",
          "Bachelor of Music",
          "Bachelor of Information Technology/Computer Science"
        ]
      },
      {
        "rank": 25,
        "name": "Australian National University College",
        "city": "Canberra",
        "website": "https://www.anu.edu.au",
        "highlights": [
          "Law",
          "International Relations/Political Science",
          "Economics/Finance",
          "Medicine",
          "Computer Science/Engineering",
          "Business Administration",
          "Science (Physics, Environmental Science)"
        ]
      },
      {
        "rank": 26,
        "name": "UNSW Global",
        "city": "Sydney",
        "website": "https://www.unswcollege.edu.au",
        "highlights": [
          "Diploma in Business",
          "Diploma in Computer Science",
          "Diploma in Engineering",
          "Foundation Studies Program",
          "Pre-Masters Program",
          "Diploma in Media & Communications",
          "Academic English Program"
        ]
      },
      {
        "rank": 27,
        "name": "Taylors College International Twinning Program",
        "city": "Australia",
        "website": "https://www.taylorscollege.edu.au",
        "highlights": [
          "Diploma in Business",
          "Diploma in Information Technology",
          "Diploma in Engineering",
          "Diploma in Communication",
          "Foundation Studies Program",
          "University Preparation Program",
          "Diploma in Science/Health Science"
        ]
      },
      {
        "rank": 28,
        "name": "The University of Adelaide College",
        "city": "Adelaide",
        "website": "https://international.adelaide.edu.au/admissions/what-can-i-study/pathway-programs/university-of-adelaide-college",
        "highlights": [
          "Foundation Studies Program",
          "Degree Transfer Program (Computer Science, Engineering, Science)",
          "Degree Transfer Program (Business, Economics, Finance)",
          "Degree Transfer Program (Health and Medical Sciences)",
          "Pre-Master's Program",
          "General Academic English",
          "Nursing Pathway"
        ]
      },
      {
        "rank": 29,
        "name": "The University of Sydney - Foundation Programs",
        "city": "Sydney",
        "website": "https://www.sydney.edu.au/study/applying/how-to-apply/international-students/preparation-programs.html",
        "highlights": [
          "Business/Commerce Stream",
          "STEM (Science, Technology, Engineering) Stream",
          "Medicine/Health Sciences Stream",
          "Law Stream",
          "Architecture/Design Stream",
          "Arts/Humanities Stream",
          "Veterinary Science Stream"
        ]
      },
      {
        "rank": 30,
        "name": "UTS Insearch",
        "city": "Sydney, New South Wales",
        "website": "https://utscollege.edu.au",
        "highlights": [
          "Diploma in Business",
          "Diploma in Information Technology",
          "Diploma in Engineering",
          "Diploma in Communication",
          "Diploma in Design and Architecture",
          "Diploma in Science",
          "Academic English Program"
        ]
      },
      {
        "rank": 31,
        "name": "Curtin College",
        "city": "Perth",
        "website": "https://www.curtincollege.edu.au",
        "highlights": [
          "Diploma of Health Sciences",
          "Diploma of Commerce",
          "Diploma of Computing/Information Technology",
          "Diploma of Engineering",
          "Diploma of Architecture & Construction",
          "Diploma of Arts and Creative Industries",
          "Masters Qualifying Program (MQP)"
        ]
      },
      {
        "rank": 32,
        "name": "Deakin College",
        "city": "Melbourne",
        "website": "https://www.deakincollege.edu.au",
        "highlights": [
          "Diploma of Health Sciences",
          "Diploma of Information Technology",
          "Diploma of Engineering",
          "Diploma of Science",
          "Diploma of Film, Television & Animation",
          "Foundation Program",
          "Masters Qualifying Program"
        ]
      },
      {
        "rank": 33,
        "name": "South Australia Institute of Business & Technology",
        "city": "Adelaide",
        "website": "https://www.saibt.sa.edu.au",
        "highlights": [
          "Diploma of Business",
          "Diploma of Information Technology",
          "Diploma of Engineering",
          "Diploma of Health Sciences",
          "Diploma of Arts (Communication & Media)",
          "Diploma of Science",
          "Early Transition Program (Arts)"
        ]
      },
      {
        "rank": 34,
        "name": "Griffith College",
        "city": "Gold Coast & Brisbane",
        "website": "https://www.griffithcollege.edu.au",
        "highlights": [
          "Diploma of Business",
          "Diploma of Engineering",
          "Diploma of Information Technology",
          "Diploma of Health Sciences",
          "Diploma of Communication & Media",
          "Diploma of Arts (Criminology & Law pathway)",
          "Foundation Program"
        ]
      },
      {
        "rank": 35,
        "name": "La Trobe College",
        "city": "Melbourne",
        "website": "https://www.latrobecollege.edu.au",
        "highlights": [
          "Diploma of Business",
          "Diploma of Information Technology",
          "Diploma of Engineering",
          "Diploma of Health Sciences",
          "Diploma of Media and Communication",
          "Foundation Studies Program",
          "Diploma of Science"
        ]
      },
      {
        "rank": 36,
        "name": "Sydney Institute of Business & Technology",
        "city": "Sydney",
        "website": "https://sibt.nsw.edu.au",
        "highlights": [
          "Diploma of Business",
          "Diploma of Information Technology",
          "Diploma of Engineering",
          "Diploma of Communication (Media/Journalism/PR)",
          "Diploma of Health Sciences",
          "Diploma of Social Science (Criminology & Criminal Justice)",
          "Foundation Studies Program"
        ]
      },
      {
        "rank": 37,
        "name": "Edith Cowan College",
        "city": "Perth",
        "website": "https://www.edithcowancollege.edu.au",
        "highlights": [
          "Diploma of Health Sciences (incl. Nursing)",
          "Diploma of Commerce/Business",
          "Diploma of Computing/IT (Cyber Security)",
          "Diploma of Engineering",
          "Diploma of Communications & Creative Industries",
          "Diploma of Hotel Management",
          "Foundation Program (General & Science streams)"
        ]
      },
      {
        "rank": 38,
        "name": "Eynesbury College",
        "city": "Adelaide",
        "website": "https://www.eynesbury.edu.au",
        "highlights": [
          "Foundation Studies Program (Business, Engineering, Health Sciences, Humanities, Science)",
          "Diploma of Business Studies",
          "Diploma of Computing and IT",
          "Diploma of Engineering",
          "Diploma of Media/Communications",
          "ELICOS (English Language Program)",
          "Diploma of Health Sciences"
        ]
      },
      {
        "rank": 39,
        "name": "University of Canberra College",
        "city": "Canberra",
        "website": "https://www.canberra.edu.au/uc-college",
        "highlights": [
          "International Foundation Studies Program",
          "Diploma of Business",
          "Diploma of Information Technology",
          "Diploma of Health Sciences",
          "Diploma of Communication",
          "Diploma of Design",
          "Graduate Certificate in Academic Foundations (GCAF)"
        ]
      },
      {
        "rank": 40,
        "name": "Sarina Russo Institute",
        "city": "Brisbane",
        "website": "https://www.sarinarusso.com.au",
        "highlights": [
          "Diploma of Leadership and Management",
          "Diploma of Business",
          "Certificate/Diploma in Hospitality & Tourism",
          "English Language Programs (ELICOS)",
          "Diploma of Community Services",
          "Vocational Pathway to James Cook University Brisbane (JCU)",
          "Diploma of Information Technology"
        ]
      },
      {
        "rank": 41,
        "name": "CQ University Australia",
        "city": "Sydney / Melbourne / Brisbane / Perth",
        "website": "https://www.cqu.edu.au",
        "highlights": [
          "Nursing",
          "Business Administration / Business",
          "Engineering (Civil, Mechanical, Electrical)",
          "Psychology",
          "Education (Early Childhood/Primary)",
          "Social Work",
          "Information Technology",
          "Occupational Therapy",
          "Paramedicine",
          "Accounting"
        ]
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
        "rank": 1,
        "name": "Jacobs University",
        "city": "Bremen",
        "website": "https://constructor.university/",
        "highlights": [
          "Computer Science",
          "Data Science",
          "Robotics and Intelligent Systems",
          "Life Sciences / Biochemistry & Cell Biology",
          "Business Administration",
          "International Relations: Politics and History",
          "Applied Mathematics and Statistics"
        ]
      },
      {
        "rank": 2,
        "name": "SRH Berlin University of Applied Sciences",
        "city": "Berlin and Hamburg",
        "website": "https://www.srh-berlin.de/",
        "highlights": [
          "Business Administration/Management",
          "International Business",
          "Marketing Management",
          "Media and Communication Management",
          "Business Psychology",
          "Computer Science / Applied Data Science",
          "Design (UX/Interaction, Fashion)"
        ]
      },
      {
        "rank": 3,
        "name": "Hochschule Bremen - International Graduate Centre",
        "city": "Bremen",
        "website": "https://www.graduatecenter.org/en/",
        "highlights": [
          "MBA in Global Management",
          "International MBA (with double degree option)",
          "MBA in International Tourism Management",
          "MBA / M.Sc. in Sustainable Risk Management",
          "MBA in Executive Management",
          "M.A. Management – Digitalization and Transformation",
          "M.Eng. Aeronautical Management"
        ]
      },
      {
        "rank": 4,
        "name": "International School of Management",
        "city": "Dortmund",
        "website": "https://en.ism.de/",
        "highlights": [
          "International Management (BA)",
          "International Business (BA)",
          "Business Psychology (BA/MSc)",
          "International Marketing & Brand Management",
          "Finance, Accounting & Controlling",
          "International Human Resource Management",
          "Master in Management (MSc)",
          "MBA General Management"
        ]
      },
      {
        "rank": 5,
        "name": "IUBH University of Applied Sciences",
        "city": "Berlin and Bad Honnef",
        "website": "https://www.iu.org/",
        "highlights": [
          "International Business Administration (BA)",
          "Business Administration (MBA)",
          "Computer Science (BSc)",
          "International Management (MA)",
          "Marketing Management",
          "Psychology (BSc)",
          "Data Science",
          "Hotel and Tourism Management"
        ]
      },
      {
        "rank": 6,
        "name": "CBS International Business School",
        "city": "Cologne",
        "website": "https://www.cbs.de/en/",
        "highlights": [
          "International Business (BA)",
          "Business Administration (BA/MA)",
          "Marketing & Digital Media",
          "International Business & Management (MA)",
          "International Finance",
          "Global Business Management (MBA)",
          "Human Resource Management",
          "Sustainable Management"
        ]
      },
      {
        "rank": 7,
        "name": "Arden University",
        "city": "Berlin",
        "website": "https://arden.ac.uk/berlin",
        "highlights": [
          "BA (Hons) Business Management",
          "BA (Hons) Accounting & Finance",
          "BA (Hons) International Business",
          "BSc (Hons) Computer Science",
          "MBA (Master of Business Administration)",
          "MSc International Business Management",
          "Human Resource Management",
          "Healthcare Management"
        ]
      },
      {
        "rank": 8,
        "name": "GISMA Business School",
        "city": "Hanover",
        "website": "https://www.gisma.com/",
        "highlights": [
          "Global MBA (AMBA-accredited)",
          "BSc International Management",
          "BSc Computer Science",
          "MSc International Business",
          "MSc Data Science / Data Analytics",
          "MSc Digital Marketing",
          "MSc Project Management",
          "BA Business Administration"
        ]
      },
      {
        "rank": 9,
        "name": "New European College",
        "city": "Munich",
        "website": "https://www.new-european-college.com/",
        "highlights": [
          "BA International Business Administration",
          "BA Business Administration (Entrepreneurship, Finance, Digital Marketing)",
          "MSc International Management",
          "MBA (Master of Business Administration)",
          "Innovation and Entrepreneurship",
          "Digital Marketing"
        ]
      },
      {
        "rank": 10,
        "name": "EU Business School",
        "city": "Munich",
        "website": "https://www.euruni.edu/",
        "highlights": [
          "BA Business Administration",
          "BA International Business",
          "BA Digital Business",
          "BA Sports Management",
          "MBA (Master of Business Administration)",
          "MSc Marketing",
          "MSc Finance",
          "Communication & Public Relations"
        ]
      },
      {
        "rank": 11,
        "name": "Accadis Hochschule Bad Homburg",
        "city": "Bad Homburg",
        "website": "https://www.accadis.com/",
        "highlights": [
          "International Business (BA)",
          "Digital Business Management (BA)",
          "Marketing Management",
          "Sports Management",
          "Event Management",
          "Finance",
          "MBA (Master of Business Administration)",
          "IT / Digital Transformation programs"
        ]
      },
      {
        "rank": 12,
        "name": "Berlin School of Business and Innovation",
        "city": "Berlin",
        "website": "https://www.berlinsbi.com/",
        "highlights": [
          "BA (Hons) Business Management",
          "BA (Hons) International Business",
          "MSc Data Science",
          "MBA (Master of Business Administration)",
          "MA Marketing",
          "BSc Computer Science",
          "BA Digital Marketing",
          "MSc International Business Management"
        ]
      },
      {
        "rank": 13,
        "name": "University of Europe for Applied Sciences",
        "city": "Hamburg",
        "website": "https://www.ue-germany.com/",
        "highlights": [
          "Business Management (BA)",
          "Business Psychology (BA)",
          "Film, TV and Digital Media Production",
          "Game Design",
          "Journalism and Communication",
          "Fitness and Health / Sports Management",
          "Interior Design",
          "MBA / MSc International Management"
        ]
      },
      {
        "rank": 14,
        "name": "Navitas - Lancaster University",
        "city": "Leipzig",
        "website": "https://www.lancaster.de/",
        "highlights": [
          "BSc Business Studies",
          "BSc Finance",
          "BSc Computer Science",
          "BSc Management",
          "MSc Logistics & Supply Chain Management",
          "International Foundation Year (pathway program)",
          "Pre-Master's programs"
        ]
      },
      {
        "rank": 15,
        "name": "EIIE Eurasia Institute for International Education",
        "city": "Berlin",
        "website": "https://www.eurasia-institute.com/en/",
        "highlights": [
          "Super-Intensive German Language Course (A1–C1)",
          "University Foundation Program (Studienkolleg preparation)",
          "Pre-Master's Pathway Program",
          "TestDaF & telc Exam Preparation",
          "Academic Counselling & University Placement Program"
        ]
      }
    ]
  },
  "NZ": {
    "title": "New Zealand",
    "flag": "🇳🇿",
    "desc": "Quality of life leader",
    "tuition": "NZD 22,000 - 35,000/year",
    "intake": "Feb, Jul",
    "work": "Post-Study Work Visa (up to 3 yrs)",
    "univs": [
      {
        "rank": 1,
        "name": "Victoria University of Wellington",
        "city": "Wellington",
        "website": "https://www.topuniversities.com/universities/victoria-university-wellington",
        "highlights": [
          "M.A. in Linguistics",
          "Postgraad in Statistics",
          "Postgrad in Artificial Intelligence"
        ]
      },
      {
        "rank": 2,
        "name": "University of Canterbury",
        "city": "Christchurch",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/university-of-canterbury",
        "highlights": [
          "Engineering",
          "Computer Science / Applied Data Science",
          "Business & Accounting",
          "Law",
          "Antarctic Studies"
        ]
      },
      {
        "rank": 3,
        "name": "University of Waikato",
        "city": "Hamilton,  North Island",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/university-of-waikato",
        "highlights": [
          "Master of Cyber security",
          "Master of Data Science",
          "Master of Business Analytics",
          "Law",
          "Psychology"
        ]
      },
      {
        "rank": 4,
        "name": "Lincoln University",
        "city": "Lincoln",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/lincoln-university",
        "highlights": [
          "Bachelor of Agriculture",
          "MSc in Food Innovation",
          "Master of Horticultural Science",
          "Bachelor of Landscape Architecture",
          "Master of Environmental Management"
        ]
      },
      {
        "rank": 5,
        "name": "Auckland University of Technology",
        "city": "Auckland",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/aut-university",
        "highlights": [
          "Bachelor of Computer and Information Sciences",
          "Hospitality & Leisure Management",
          "Master of Nursing Science",
          "MBA / Business (Marketing)",
          "Master of Design / Art & Design"
        ]
      },
      {
        "rank": 6,
        "name": "Unitec Institute of Technology",
        "city": "Auckland",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/unitec-institute-of-technology",
        "highlights": [
          "Master of Applied Business",
          "Master of Computing",
          "Bachelor of Architecture",
          "Bachelor of Accounting",
          "Engineering (Civil/Electrical)"
        ]
      },
      {
        "rank": 7,
        "name": "Otago Polytechnic",
        "city": "Dunedin& Auckland",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/otago-polytechnic",
        "highlights": [
          "Stonemasonry or Sports Turf Management",
          "Bachelor of Culinary Arts",
          "Bachelor of Design / Fashion Design",
          "Civil / Construction Engineering",
          "Master of Applied Management"
        ]
      },
      {
        "rank": 8,
        "name": "Manukau Institute of Technology",
        "city": "Auckland",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/manukau-institute-of-technology",
        "highlights": [
          "Bachelor of Digital Technologies",
          "BSN (Bachelor of Nursing)",
          "Bachelor of Applied Management",
          "Electrical / Computer Science Engineering"
        ]
      },
      {
        "rank": 9,
        "name": "Ara Institute of Canterbury",
        "city": "Christchurch",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/christchurch-polytechnic-institute-of-technology",
        "highlights": [
          "Bachelor of Information and Communication Technologies (ICT)",
          "Nursing, Midwifery & Medical Imaging",
          "Bachelor of Design",
          "Business & Accounting/Commerce",
          "Tourism & Hospitality"
        ]
      },
      {
        "rank": 10,
        "name": "Eastern Institute of Technology",
        "city": "Napier",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/eastern-institute-of-technology",
        "highlights": [
          "Wine Science / Viticulture",
          "Nursing",
          "Business & Management",
          "Information Technology",
          "Tourism & Hospitality"
        ]
      },
      {
        "rank": 11,
        "name": "Nelson Marlborough Institute of Technology",
        "city": "Nelson & Blenheim",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/nelson-marlborough-institute-of-technology",
        "highlights": [
          "Computer Generated Imagery (CGI)",
          "Aquaculture",
          "Bachelor of Nursing",
          "Maritime / Aviation Engineering"
        ]
      },
      {
        "rank": 12,
        "name": "ATMC NZ – Nelson Marlborough Institute of Technology",
        "city": "Auckland Campus",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/atmc-new-zealand",
        "highlights": [
          "B.J.M.C. (Bachelor of Journalism & Mass Communication)",
          "BBA (Business)",
          "B.E./B.Tech (Engineering)",
          "Animation"
        ]
      },
      {
        "rank": 13,
        "name": "Whitireia New Zealand",
        "city": "Porirue",
        "website": "https://www.whitireiaweltec.ac.nz/study-programmes",
        "highlights": [
          "Nursing / Health and Social Services",
          "Creative Writing",
          "Information Technology / Computer Science",
          "Business Analytics / Management",
          "Civil / Mechanical Engineering Trades"
        ]
      },
      {
        "rank": 14,
        "name": "Southern Institute of Technology",
        "city": "Invercargill",
        "website": "https://www.sit.ac.nz/Courses",
        "highlights": [
          "Audio Engineering",
          "Bachelor of Information Technology",
          "Bachelor of Environmental Management",
          "Health Sciences",
          "Business"
        ]
      },
      {
        "rank": 15,
        "name": "Wellington Institute of Technology (WelTec)",
        "city": "Wellington",
        "website": "https://www.whitireiaweltec.ac.nz/study-programmes",
        "highlights": [
          "Bachelor of Information Technology",
          "Bachelor of Nursing",
          "Construction / Civil & Structural Engineering",
          "Culinary Skills / Hospitality",
          "Fashion Design"
        ]
      },
      {
        "rank": 16,
        "name": "Western Institute of Technology at Taranaki (WITT)",
        "city": "New Plymouth",
        "website": "https://www.witt.ac.nz/study",
        "highlights": [
          "Energy, Oil & Gas",
          "Civil Engineering / Trades",
          "Nursing",
          "Business Management",
          "Hospitality / Cookery"
        ]
      },
      {
        "rank": 17,
        "name": "North Tec",
        "city": "Whangarei",
        "website": "https://www.northtec.ac.nz/study",
        "highlights": [
          "Civil Engineering",
          "Bachelor of Nursing (BSN)",
          "Automotive Engineering",
          "Business / Project Management",
          "Sport and Recreation"
        ]
      },
      {
        "rank": 18,
        "name": "Toi Ohomai Institute of Technology",
        "city": "Tauranga & Rotorua",
        "website": "https://www.toiohomai.ac.nz/courses",
        "highlights": [
          "Forestry",
          "Maritime Crewing",
          "Business & Management",
          "Engineering / IT & Software",
          "Hospitality"
        ]
      },
      {
        "rank": 19,
        "name": "Auckland Institute of Studies",
        "city": "Auckland",
        "website": "https://www.ais.ac.nz/study",
        "highlights": [
          "MBA (Master of Business Administration)",
          "Bachelor of Business",
          "Information Technology",
          "Tourism Management",
          "English Language / TESOL Teacher Training"
        ]
      },
      {
        "rank": 20,
        "name": "Pacific International Hotel Management school",
        "city": "new plymouth",
        "website": "https://pihms.ac.nz/programmes",
        "highlights": [
          "Bachelor of Applied Hospitality and Tourism Management",
          "Master of Hospitality and Tourism Management",
          "Postgraduate Diploma in Hotel Management",
          "Diploma in Hotel Management"
        ]
      },
      {
        "rank": 21,
        "name": "UC International College",
        "city": "Christchurch",
        "website": "https://www.canterbury.ac.nz/",
        "highlights": [
          "UTP Engineering",
          "UTP Science",
          "Foundation Studies Certificate",
          "Diploma pathways (DipUS)",
          "Pre-Master's programmes"
        ]
      },
      {
        "rank": 22,
        "name": "Whitecliffe College of Arts and Design",
        "city": "Auckland& Christchurch",
        "website": "https://www.whitecliffe.ac.nz/qualification/",
        "highlights": [
          "Bachelor of Fine Arts – Graphic Design",
          "Fine Arts (general)",
          "Fashion Design",
          "Photography",
          "Master of Creative Enterprise and Innovation"
        ]
      },
      {
        "rank": 23,
        "name": "Whitecliffe College of Fashion and Sustainability",
        "city": "Auckland & Wellington",
        "website": "https://www.whitecliffe.ac.nz/qualification/bachelor-of-sustainable-fashion-design/",
        "highlights": [
          "Bachelor of Sustainable Fashion Design",
          "Jewellery Certificate/Diploma",
          "Fashion Certificates (18 weeks)"
        ]
      },
      {
        "rank": 24,
        "name": "Whitecliffe College of Technology & Innovation",
        "city": "Auckland,  Wellington & Christchurch",
        "website": "https://www.whitecliffe.ac.nz/",
        "highlights": [
          "Cybersecurity",
          "Software Development / Software Architecture",
          "Data Science / Business Intelligence",
          "Web Development & UX Design",
          "Networking"
        ]
      },
      {
        "rank": 25,
        "name": "AGl Education",
        "city": "Auckland",
        "website": "https://www.shiksha.com/studyabroad/new-zealand/universities/agi-education",
        "highlights": [
          "Diploma in Health Services Management (Level 7)",
          "Diploma in Health Care Management",
          "NZIM Diploma in Management",
          "IT & Software Diploma"
        ]
      },
      {
        "rank": 26,
        "name": "Professional Business & Restaurant School",
        "city": "Auckland",
        "website": "https://www.pbrs.ac.nz/",
        "highlights": [
          "Diploma in Hospitality",
          "Food and Beverage Service (Advanced)",
          "Café and Bar Service Standards"
        ]
      },
      {
        "rank": 27,
        "name": "Aspire2Iinternational Group",
        "city": "Auckland. Wellington,  Tauranga & Christchurch",
        "website": "https://www.aspire2international.ac.nz/",
        "highlights": [
          "IT & Computing",
          "Business & Management",
          "Hospitality Management / Cookery & Culinary Arts",
          "Health Services Management"
        ]
      },
      {
        "rank": 28,
        "name": "New Zealand Institution of Education (NZIE)",
        "city": "Auckland",
        "website": "https://www.digitalmarketingschool.ac.nz/",
        "highlights": [
          "Diploma in Digital Marketing (Applied) Level 7",
          "Diploma in Applied Business",
          "Postgraduate Diploma in Applied Business",
          "Information Technology"
        ]
      },
      {
        "rank": 29,
        "name": "New Zealand School of Education (NZSE)",
        "city": "Auckland",
        "website": "https://nzse.ac.nz/",
        "highlights": [
          "Business & Management Studies",
          "Engineering",
          "Science",
          "Health"
        ]
      },
      {
        "rank": 30,
        "name": "Le Cordon Bleu",
        "city": "Wellington",
        "website": "https://www.cordonbleu.edu/new-zealand/programmes/en",
        "highlights": [
          "Bachelor of Culinary Arts & Business",
          "Le Grand Diploma",
          "Diploma Avancé Culinary (Level 5)",
          "Patisserie Diploma"
        ]
      },
      {
        "rank": 31,
        "name": "Newton College of Business and Technology",
        "city": "Auckland",
        "website": "https://www.educations.com/institutions/newton-college-of-business-and-technology",
        "highlights": [
          "Diploma in Advanced International Business (Applied Exporting & Importing)",
          "International Business",
          "Computer Science / IT & Systems Administration",
          "National Diploma in Business"
        ]
      },
      {
        "rank": 32,
        "name": "Kauri Academy",
        "city": "Auckland",
        "website": "https://www.kauriacademy.ac.nz/programmes",
        "highlights": [
          "Pharmacy Technician (Level 5)",
          "Certificate in Diversional & Recreational Therapy (Level 4)",
          "Pharmacy Introduction"
        ]
      },
      {
        "rank": 33,
        "name": "Taylors College",
        "city": "Auckland",
        "website": "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/tertiary-foundation-certificate.html",
        "highlights": [
          "University of Auckland Certificate in Foundation Studies",
          "Tertiary Foundation Certificate (TFC)"
        ]
      },
      {
        "rank": 34,
        "name": "New Zealand Airline Academy",
        "city": "Oamaru",
        "website": "https://www.nzaal.co.nz/",
        "highlights": [
          "Commercial Pilot License (CPL) Program",
          "Private Pilot License (PPL)",
          "Frozen ATPL",
          "MCC (Multi-Crew Cooperation) Training"
        ]
      }
    ]
  },
  "FR": {
    "title": "France",
    "flag": "🇫🇷",
    "desc": "France is a leading destination for international students, known for its rich culture, history, and excellent higher education system, particularly in business, fashion, and engineering.",
    "tuition": "€2,770 - €15,000/year",
    "intake": "Sep, Jan",
    "work": "Post-Study Work (1-2 years)",
    "univs": [
      {
        "rank": 1,
        "name": "SKEMA Business School",
        "city": "Paris",
        "website": "https://www.skema.edu/en",
        "highlights": [
          "Master in Management (MIM)",
          "Master in Financial Markets & Investments",
          "MSc Digital Marketing & Data Science",
          "MSc Luxury & Fashion Management",
          "Global BBA / Bachelor in Global Management",
          "MSc International Business",
          "MBA (Executive/Global)",
          "PhD in Business Administration"
        ]
      },
      {
        "rank": 2,
        "name": "NEOMA Business School",
        "city": "Rouen",
        "website": "https://neoma-bs.com/",
        "highlights": [
          "Master in Management (Grande École Programme)",
          "Bachelor in Global Management",
          "MBA (Full-Time / Executive)",
          "MSc International Finance",
          "MSc Marketing Management",
          "MSc Supply Chain Management",
          "MSc Data Management for Business",
          "Executive Education programs"
        ]
      },
      {
        "rank": 3,
        "name": "Burgundy School of Business",
        "city": "Dijon",
        "website": "https://www.bsb-education.com/en",
        "highlights": [
          "Bachelor in Management (Marketing/Finance/International Business tracks)",
          "Master in Management (Grande École Programme)",
          "MSc Wine Management",
          "MSc International Finance",
          "MBA (International MBA)",
          "MSc Artificial Intelligence & Business Analytics",
          "MSc Entrepreneurship & Innovation",
          "MSc Arts & Cultural Management"
        ]
      },
      {
        "rank": 4,
        "name": "Excelia Group",
        "city": "La Rochelle",
        "website": "https://www.excelia-group.com/",
        "highlights": [
          "Master in Management (Grande École)",
          "MSc International Business/Management",
          "MSc Tourism & Hospitality Management",
          "MSc Finance",
          "MSc Marketing & Digital Strategy",
          "Bachelor in Business Administration",
          "MSc Communication & Digital Media",
          "MBA"
        ]
      },
      {
        "rank": 5,
        "name": "Institut Supérieur d'Électronique de Paris (ISEP)",
        "city": "Paris",
        "website": "https://www.isep.fr/",
        "highlights": [
          "Engineering Degree — Electronics & Telecommunications",
          "Engineering Degree — Computer Science & Networks",
          "Data Science & Artificial Intelligence",
          "Cybersecurity / Digital Security",
          "Embedded Systems",
          "International Master's in Data Science & AI",
          "Multimedia & IT Systems"
        ]
      },
      {
        "rank": 6,
        "name": "EPITA – School of Engineering and Computer Science",
        "city": "Paris",
        "website": "https://www.epita.fr/en/",
        "highlights": [
          "Diplôme d'Ingénieur (5-year Computer Science Engineering)",
          "Bachelor of Science in Computer Science",
          "MSc Computer Science & Digital Technology",
          "MSc Artificial Intelligence Systems",
          "MSc Artificial Intelligence for Marketing Strategy",
          "Cybersecurity Engineering",
          "Software Engineering"
        ]
      },
      {
        "rank": 7,
        "name": "ESIGELEC",
        "city": "Rouen",
        "website": "https://en.esigelec.fr/",
        "highlights": [
          "5-Year Integrated Master of Engineering (General Engineering)",
          "Software Engineering & Digital Transformation",
          "Electronic Embedded Systems",
          "Electrical Engineering for Transport",
          "Robotics & Automation",
          "Biomedical Engineering",
          "Energy & Sustainable Development",
          "MSc in Information Technology / Networks"
        ]
      },
      {
        "rank": 8,
        "name": "Institut Supérieur du Commerce de Paris (ISC Paris)",
        "city": "Paris",
        "website": "https://www.iscparis.com/",
        "highlights": [
          "Master in Management (Grande École Programme)",
          "Bachelor in International Business",
          "MSc Marketing & Digital Business",
          "MSc Finance",
          "MBA",
          "MSc International Business Management",
          "DBA (Doctor of Business Administration)",
          "Executive Education programs"
        ]
      },
      {
        "rank": 9,
        "name": "EM Normandie Business School",
        "city": "Paris",
        "website": "https://en.em-normandie.com/",
        "highlights": [
          "International BBA (IBBA)",
          "Master in Management (Grande École)",
          "MSc International Business",
          "MSc Marketing",
          "MSc Finance",
          "MSc Supply Chain & Logistics Management",
          "MBA",
          "Business Administration & Management"
        ]
      },
      {
        "rank": 10,
        "name": "Le Cordon Bleu",
        "city": "Paris",
        "website": "https://www.cordonbleu.edu/paris/home/en",
        "highlights": [
          "Grand Diplôme (Cuisine + Pastry)",
          "Diplôme de Cuisine",
          "Diplôme de Pâtisserie",
          "Bachelor in Culinary Management",
          "Wine & Oenology courses",
          "Plant-Based Culinary Arts",
          "Hospitality Management (Bachelor's/Master's)",
          "Boulangerie (Bread-Making) Diploma"
        ]
      },
      {
        "rank": 11,
        "name": "Léonard de Vinci",
        "city": "Paris",
        "website": "https://www.devinci.fr/en/",
        "highlights": [
          "Master in Management (EMLV Business School)",
          "Engineering Degree (ESILV — Data, AI, Fintech, Energy)",
          "Digital & Multimedia Management (IIM)",
          "International BBA",
          "MSc Big Data & Artificial Intelligence",
          "MSc Digital Marketing",
          "Financial Engineering",
          "Web Development & UX/UI Design"
        ]
      },
      {
        "rank": 12,
        "name": "The Catholic University of the West",
        "city": "Angers",
        "website": "https://www.uco.fr/",
        "highlights": [
          "Education / Teacher Training",
          "Humanities & Social Sciences",
          "French Language & Civilization (for international students)",
          "Psychology",
          "Theology & Religious Sciences",
          "Business & Management",
          "International Relations",
          "Sciences"
        ]
      },
      {
        "rank": 13,
        "name": "Queen Mary University of London (Paris Campus)",
        "city": "Paris",
        "website": "https://www.qmul.ac.uk/paris/",
        "highlights": [
          "LLM International Business Law",
          "LLM International Commercial Law",
          "LLM International Economic Law",
          "LLM International Shipping Law",
          "MA Comparative Urban History and Culture",
          "MA International Relations",
          "LLM Comparative and International Dispute Resolution"
        ]
      },
      {
        "rank": 14,
        "name": "Istituto Marangoni Fashion and Design School",
        "city": "Paris",
        "website": "https://www.istitutomarangoni.com/en/schools/paris-school-of-fashion",
        "highlights": [
          "Fashion Design",
          "Fashion Business & Luxury Management",
          "Fashion Styling",
          "Fashion Communication & Image",
          "Fashion Stylist (CNCP-certified 3-year course)",
          "Womenswear / Menswear Design",
          "Luxury Hospitality & Jewellery (Cartier Excellence Pathway)"
        ]
      },
      {
        "rank": 15,
        "name": "Sustainable Design School",
        "city": "Nice",
        "website": "https://besignschool.com/en/",
        "highlights": [
          "Bachelor in Sustainable Design (Assistant Designer, 3 years)",
          "Master 'Designer in Sustainable Innovation' (RNCP-certified)",
          "MSc Entrepreneurship & Sustainable Design (dual degree with SKEMA Business School)",
          "Product & Industrial Design for Sustainability",
          "Circular Economy & Biomimicry Design",
          "PhD in Sustainable Design (in partnership with Université Côte d'Azur)"
        ]
      },
      {
        "rank": 16,
        "name": "The American Business School of Paris",
        "city": "Paris",
        "website": "https://www.american-business-college-paris.com/",
        "highlights": [
          "BBA (Bachelor of Business Administration)",
          "MBA (Master of Business Administration)",
          "MSc International Business",
          "MSc Marketing",
          "MSc Fashion & Luxury Management",
          "MSc Finance",
          "MSc Sports Management",
          "International Business Law"
        ]
      }
    ]
  },
  "SE": {
    "title": "Sweden",
    "flag": "🇸🇪",
    "desc": "Sweden is a leader in innovation, sustainability, and equality. Universities focus on independent thinking and group work, offering many programs in English.",
    "tuition": "€7,500 - €25,500/year",
    "intake": "Autumn (Aug/Sep), Spring (Jan)",
    "work": "Post-Study Work (1 year)",
    "univs": [
      {
        "rank": 1,
        "name": "Uppsala University",
        "city": "Uppsala",
        "website": "https://www.uu.se/en",
        "highlights": [
          "Medicine",
          "Law",
          "Political Science / International Relations",
          "Molecular Biology / Biomedicine",
          "Computer Science",
          "Business & Economics",
          "Psychology",
          "Global Health / Public Health"
        ]
      },
      {
        "rank": 2,
        "name": "Linnaeus University",
        "city": "Kalmar and Växjö",
        "website": "https://lnu.se/en",
        "highlights": [
          "Business Administration & Economics",
          "International Marketing",
          "Computer Science / Software Technology",
          "Design (Design + Change, Product Design)",
          "Optometry",
          "Social Work",
          "Logistics & Supply Chain Management",
          "Environmental Science / Sustainability Studies"
        ]
      },
      {
        "rank": 3,
        "name": "University of Skövde",
        "city": "Skövde",
        "website": "https://www.his.se/english",
        "highlights": [
          "Game Development / Computer Game Design",
          "Computer Science & Informatics",
          "Biomedicine",
          "Bioinformatics",
          "Cognitive Neuroscience",
          "Business Administration",
          "Engineering & Technology",
          "Health Science"
        ]
      },
      {
        "rank": 4,
        "name": "Halmstad University",
        "city": "Halmstad",
        "website": "https://www.hh.se/english.html",
        "highlights": [
          "Business Administration & Innovation",
          "Information Technology / Computer Science",
          "Health Innovation",
          "Environmental Science",
          "Media & Communication",
          "Network Forensics / Cybersecurity",
          "Smart Cities & Communities (Embedded Systems)",
          "Social Work"
        ]
      },
      {
        "rank": 5,
        "name": "Jönköping University",
        "city": "Jönköping",
        "website": "https://ju.se/en",
        "highlights": [
          "International Business / Master in Management (JIBS)",
          "Master in Finance",
          "Master in Marketing",
          "Mechanical Engineering",
          "Product Development & Design",
          "Nursing & Social Work",
          "Computer Science / Information Technology",
          "Global School of Teacher Education"
        ]
      },
      {
        "rank": 6,
        "name": "Dalarna University",
        "city": "Falun",
        "website": "https://www.du.se/en/",
        "highlights": [
          "Business Administration & Analytics",
          "Microdata Analysis",
          "Information Technology / Data Science",
          "Tourism Studies",
          "Sports Physiology / Sports Science",
          "Nursing & Public Health",
          "Sustainable Tourism Destination Development",
          "Educational Sciences / Teacher Training"
        ]
      },
      {
        "rank": 7,
        "name": "Kristianstad University",
        "city": "Kristianstad",
        "website": "https://www.hkr.se/en/",
        "highlights": [
          "Business Administration (BSc — ranked top 3 in Sweden)",
          "Behavioural Sciences / Psychology",
          "Food Science & Nutrition",
          "Nursing & Health Sciences",
          "Teacher Education",
          "Engineering",
          "Environmental Science",
          "Social Work"
        ]
      },
      {
        "rank": 8,
        "name": "ON Campus in Lund University",
        "city": "Lund",
        "website": "https://www.lunduniversity.lu.se/",
        "highlights": [
          "Engineering (LTH — Civil, Industrial Design, Architecture)",
          "Medicine",
          "Law",
          "Economics & Business Administration",
          "International Development / Political Science",
          "Environmental Studies & Sustainability Science",
          "Computer Science / Data Science",
          "Physics (incl. affiliation with MAX IV & European Spallation Source)"
        ]
      },
      {
        "rank": 9,
        "name": "ON Campus in Swedish University of Agricultural Sciences",
        "city": "Uppsala",
        "website": "https://www.slu.se/en/",
        "highlights": [
          "Veterinary Medicine",
          "Agricultural Science",
          "Forest & Landscape (Bachelor's — international)",
          "Sustainable Food Systems",
          "Horticultural Science",
          "Forest Ecology & Sustainable Management",
          "Landscape Architecture",
          "Animal Science / Wildlife Management"
        ]
      }
    ]
  },
  "NL": {
    "title": "Netherlands",
    "flag": "🇳🇱",
    "desc": "The Netherlands is known for its highly interactive and student-centered teaching style, offering a vast range of English-taught programs and an excellent international environment.",
    "tuition": "€6,000 - €15,000/year",
    "intake": "Sep, Feb",
    "work": "Orientation Year (1 year)",
    "univs": [
      {
        "rank": 1,
        "name": "University of Twente",
        "city": "Enschede",
        "website": "https://www.utwente.nl/en/",
        "highlights": [
          "Electrical Engineering / Computer Science",
          "Industrial Design Engineering",
          "Mechanical Engineering",
          "Business Information Technology",
          "Psychology",
          "Biomedical Engineering",
          "Civil Engineering",
          "Geo-Information Science & Earth Observation (ITC)"
        ]
      },
      {
        "rank": 2,
        "name": "Tilburg University",
        "city": "Tilburg",
        "website": "https://www.tilburguniversity.edu/",
        "highlights": [
          "Economics & Business Economics",
          "International Business Administration",
          "Law (Global Law / International Business Law)",
          "Data Science & Society",
          "Communication & Information Sciences",
          "Finance",
          "Psychology",
          "Sociology / Social Policy"
        ]
      },
      {
        "rank": 3,
        "name": "HAN University of Applied Sciences",
        "city": "Nijmegen",
        "website": "https://www.han.nl/en/",
        "highlights": [
          "International Business (BBA)",
          "Communication",
          "Logistics Engineering / Management",
          "Engineering (Electrical, Mechanical, Automotive)",
          "International Business & Communication",
          "Applied Physics",
          "Chemistry",
          "Master in Business Administration / International Business"
        ]
      },
      {
        "rank": 4,
        "name": "Maastricht School of Management",
        "city": "Maastricht",
        "website": "https://www.msm.nl/",
        "highlights": [
          "Full-time MBA",
          "Executive MBA",
          "Master in Management",
          "Online MBA (Global)",
          "Executive PhD / DBA (Doctor of Business Administration)",
          "MSc programs (Management-focused)",
          "Short Executive Programmes"
        ]
      },
      {
        "rank": 5,
        "name": "Fontys University",
        "city": "Eindhoven",
        "website": "https://www.fontys.edu/",
        "highlights": [
          "International Business",
          "Information and Communication Technology (ICT)",
          "Mechanical / Electrical Engineering",
          "Marketing",
          "Logistics Engineering",
          "Applied Psychology",
          "Industrial Engineering & Management",
          "Fontys School of Fine and Performing Arts (Music/Arts)"
        ]
      },
      {
        "rank": 6,
        "name": "Wittenborg University of Applied Sciences",
        "city": "Apeldoorn",
        "website": "https://www.wittenborg.eu/",
        "highlights": [
          "BBA International Business & Management",
          "MBA (Master of Business Administration)",
          "MSc International Business Management",
          "MSc Sports Management",
          "MSc IT Management",
          "MSc Strategic Design & Innovation Management",
          "MSc Tourism Management",
          "Pre-Master & IELTS Foundation courses"
        ]
      },
      {
        "rank": 7,
        "name": "The Hague University of Applied Sciences",
        "city": "The Hague",
        "website": "https://www.thuas.com/",
        "highlights": [
          "International Business",
          "European Studies",
          "Communication Management",
          "Business IT & Management",
          "International Relations & International Organization",
          "Aviation Management",
          "Mechanical Engineering",
          "Fintech / Financial Services Management"
        ]
      },
      {
        "rank": 8,
        "name": "Hanze University of Applied Sciences",
        "city": "Groningen",
        "website": "https://www.hanze.nl/en",
        "highlights": [
          "International Business & Management Studies (IBMS)",
          "Communication & Media Design",
          "International Communication",
          "Marketing Management",
          "Engineering (Electrical, Mechanical, Industrial)",
          "Finance & Control",
          "International Financial Management & Control",
          "Applied Psychology"
        ]
      },
      {
        "rank": 9,
        "name": "Vrije Universiteit Amsterdam",
        "city": "Amsterdam",
        "website": "https://vu.nl/en",
        "highlights": [
          "Business Administration / International Business",
          "Psychology",
          "Economics & Business Economics",
          "Computer Science / Artificial Intelligence",
          "Law (International/European)",
          "Medicine (VUmc)",
          "International Relations",
          "Communication Science"
        ]
      },
      {
        "rank": 10,
        "name": "Erasmus University Rotterdam",
        "city": "Rotterdam",
        "website": "https://www.eur.nl/en",
        "highlights": [
          "International Business Administration (RSM)",
          "Economics & Business Economics",
          "Medicine (Erasmus MC)",
          "International Business Law",
          "International Relations & International Organization (ISS)",
          "Global Business & Sustainability",
          "Psychology",
          "Health Policy & Management"
        ]
      }
    ]
  },
  "AT": {
    "title": "Austria",
    "flag": "🇦🇹",
    "desc": "Austria combines a rich cultural heritage with excellent educational institutions, located in the heart of Europe. It offers a very high standard of living and safety.",
    "tuition": "€1,450 - €20,000/year",
    "intake": "Oct, Mar",
    "work": "Red-White-Red Card (Job Seeker)",
    "univs": [
      {
        "rank": 1,
        "name": "Modul University",
        "city": "Vienna",
        "website": "https://www.modul.ac.at/",
        "highlights": [
          "International Management / Tourism Management (BBA)",
          "New Media Technology",
          "Sustainable Development",
          "Public Administration",
          "International Relations",
          "Data Science",
          "MBA in Tourism & Hospitality Management",
          "Digital Marketing"
        ]
      },
      {
        "rank": 2,
        "name": "International Business School",
        "city": "Vienna",
        "website": "https://www.ibsvienna.com/",
        "highlights": [
          "MSc in International Management (University of Buckingham degree)",
          "BSc in International Management",
          "Business Management (Foundation/Diploma)",
          "Financial Management",
          "International Business Administration",
          "Marketing Management"
        ]
      }
    ]
  },
  "DK": {
    "title": "Denmark",
    "flag": "🇩🇰",
    "desc": "Denmark offers an innovative educational system focused on problem-based learning and critical thinking, along with an outstanding work-life balance and happiness.",
    "tuition": "€6,000 - €16,000/year",
    "intake": "Sep, Feb",
    "work": "Establishment Card (2 years)",
    "univs": [
      {
        "rank": 1,
        "name": "International Business Academy",
        "city": "Kolding",
        "website": "https://iba.dk/",
        "highlights": [
          "AP Degree in International Sales & Marketing",
          "Global Business Bachelor's",
          "MBA in General Management",
          "Leadership & Management",
          "Financial Management",
          "Service Management",
          "Software Development / Web Development (IT)",
          "Digital Marketing / Data Analytics"
        ]
      },
      {
        "rank": 2,
        "name": "University College of Northern Denmark",
        "city": "Hjørring",
        "website": "https://www.ucn.dk/english/",
        "highlights": [
          "Nursing",
          "Teacher Education",
          "Business Economics / Financial Management",
          "International Sales & Marketing",
          "Social Education (Social Educator)",
          "Multimedia Design",
          "Engineering / Technology",
          "Business Administration (Top-up Bachelor)"
        ]
      }
    ]
  },
  "FI": {
    "title": "Finland",
    "flag": "🇫🇮",
    "desc": "Finland boasts one of the world's best education systems, with a strong focus on research, technology, and a deep connection to nature.",
    "tuition": "€5,000 - €18,000/year",
    "intake": "Aug/Sep, Jan",
    "work": "Post-Study Work (2 years)",
    "univs": [
      {
        "rank": 1,
        "name": "LUT University",
        "city": "Lappeenranta",
        "website": "https://www.lut.fi/en",
        "highlights": [
          "Energy Systems / Energy Technology",
          "Mechanical Engineering",
          "Chemical Engineering",
          "Software Engineering",
          "Business Administration / Strategic Finance",
          "Industrial Engineering & Management",
          "Supply Management",
          "Sustainability Science / Circular Economy"
        ]
      },
      {
        "rank": 2,
        "name": "Haaga-Helia University of Applied Sciences",
        "city": "Porvoo",
        "website": "https://www.haaga-helia.fi/en",
        "highlights": [
          "Business Administration (BBA)",
          "Tourism Management",
          "International Business",
          "Hospitality Management",
          "Financial Management",
          "Sales & Marketing",
          "Sustainable Business"
        ]
      },
      {
        "rank": 3,
        "name": "HAMK Häme University of Applied Sciences",
        "city": "Hämeenlinna",
        "website": "https://www.hamk.fi/en/",
        "highlights": [
          "Business Administration (International)",
          "Sustainable Design Engineering",
          "Forestry (Evo campus)",
          "Bioeconomy / Agricultural Engineering",
          "Mechanical Engineering",
          "Health Care / Nursing",
          "Traffic & Transport Management",
          "Smart and Sustainable Design"
        ]
      }
    ]
  },
  "IT": {
    "title": "Italy",
    "flag": "🇮🇹",
    "desc": "Art, design & world-class universities",
    "tuition": "€5,000 - €20,000/year",
    "intake": "Sep / Feb",
    "work": "20 hrs/week",
    "univs": [
      {
        "rank": 1,
        "name": "University of Padua",
        "city": "Padua",
        "website": "https://www.unipd.it/en",
        "highlights": [
          "Medicine & Surgery",
          "Veterinary Medicine",
          "Law",
          "Psychology",
          "Engineering (Civil, Industrial, Information)",
          "Economics & Business",
          "Political Science / International Relations",
          "Astronomy / Physics"
        ]
      },
      {
        "rank": 2,
        "name": "Istituto Europeo di Design (IED)",
        "city": "Milan",
        "website": "https://www.ied.edu/milan",
        "highlights": [
          "Fashion Design",
          "Product/Industrial Design",
          "Interior Design",
          "Visual Communication / Graphic Design",
          "Fashion Business & Management",
          "Automotive/Transportation Design",
          "Photography",
          "Digital Marketing & Communication"
        ]
      },
      {
        "rank": 3,
        "name": "Istituto Marangoni Fashion and Design School",
        "city": "Milan",
        "website": "https://www.istitutomarangoni.com/",
        "highlights": [
          "Fashion Design",
          "Fashion Business & Management",
          "Fashion Communication & Image",
          "Fragrances & Cosmetics (Beauty)",
          "Interior & Product Design",
          "Luxury Hospitality Management",
          "Fashion Styling",
          "Art & Curatorial Practice"
        ]
      },
      {
        "rank": 4,
        "name": "Nuova Accademia di Belle Arti (NABA)",
        "city": "Milan",
        "website": "https://www.naba.it/en",
        "highlights": [
          "Fashion Design",
          "Graphic Design & Art Direction",
          "Media Design & New Technologies",
          "Fine Arts / Visual Arts",
          "Interior Design",
          "Fashion Management",
          "Scenography (Set Design)",
          "Photography"
        ]
      },
      {
        "rank": 5,
        "name": "Domus Academy",
        "city": "Milan",
        "website": "https://www.domusacademy.com/",
        "highlights": [
          "Master in Fashion Design",
          "Master in Product/Industrial Design",
          "Master in Interior & Living Design",
          "Master in Design Management",
          "Master in Interaction Design",
          "Design x AI (new programme)",
          "Design Futures (new programme)",
          "Fashion & Luxury Business"
        ]
      },
      {
        "rank": 6,
        "name": "Scuola Politecnica di Design (SPD)",
        "city": "Milan",
        "website": "https://www.scuoladesign.com/",
        "highlights": [
          "Transportation & Car Design",
          "Industrial/Product Design",
          "Interior Design",
          "Visual/Communication Design",
          "Food Design & Innovation",
          "Web & Digital Design",
          "Event & Exhibition Design"
        ]
      },
      {
        "rank": 7,
        "name": "John Cabot University",
        "city": "Rome",
        "website": "https://www.johncabot.edu/",
        "highlights": [
          "International Business",
          "Economics & Finance",
          "Political Science / International Affairs",
          "Art History",
          "Communications",
          "Business Administration",
          "Classical Studies / Humanistic Studies",
          "MA in International Affairs"
        ]
      },
      {
        "rank": 8,
        "name": "Raffles Milano - Istituto Moda e Design",
        "city": "Milan",
        "website": "https://rafflesmilano.it/",
        "highlights": [
          "Fashion Design",
          "Jewellery & Accessories Design",
          "Fashion Communication & Marketing",
          "Product Design",
          "Interior Design",
          "Visual/Graphic Communication Design",
          "Branding & Design Management"
        ]
      },
      {
        "rank": 9,
        "name": "Kent State University (Florence)",
        "city": "Florence",
        "website": "https://www.kent.edu/globaleducation/florence",
        "highlights": [
          "Fashion Design & Merchandising (Kent State School of Fashion)",
          "Architecture",
          "Art History",
          "Hospitality & Tourism Management",
          "Italian Language & Culture",
          "Interior Design",
          "Biology / Sciences",
          "Business & International Studies"
        ]
      }
    ]
  },
  "HU": {
    "title": "Hungary",
    "flag": "🇭🇺",
    "desc": "Affordable European education",
    "tuition": "€5,000 - €20,000/year",
    "intake": "Sep / Feb",
    "work": "20 hrs/week",
    "univs": [
      {
        "rank": 1,
        "name": "University of Pécs",
        "city": "Pécs",
        "website": "https://international.pte.hu/",
        "highlights": [
          "Medicine (General Medicine, MD)",
          "Dentistry",
          "Pharmacy",
          "Law",
          "Business Administration",
          "Engineering (Civil, Electrical, Mechanical)",
          "Psychology",
          "Computer Science / Information Technology"
        ]
      },
      {
        "rank": 2,
        "name": "University of Debrecen",
        "city": "Debrecen",
        "website": "https://unideb.hu/en",
        "highlights": [
          "Medicine (General Medicine, MD)",
          "Dentistry",
          "Pharmacy",
          "Veterinary Medicine",
          "Engineering (Mechanical, Electrical)",
          "Agricultural Science",
          "Law",
          "Economics & Business Administration"
        ]
      },
      {
        "rank": 3,
        "name": "International Business School",
        "city": "Budapest",
        "website": "https://www.ibs-b.hu/en/",
        "highlights": [
          "BA (Hons) Business Management",
          "BA (Hons) International Business",
          "BA (Hons) Marketing / Digital Marketing",
          "MBA (Master of Business Administration)",
          "MSc International Management",
          "MSc Marketing",
          "MSc Finance",
          "Foundation Year (common first-year programme)"
        ]
      },
      {
        "rank": 4,
        "name": "Budapest Metropolitan University of Applied Sciences",
        "city": "Budapest",
        "website": "https://www.metropolitan.hu/",
        "highlights": [
          "Business Administration & Management",
          "Communication & Media Science",
          "Tourism & Hospitality Management",
          "International Relations",
          "Graphic Design / Visual Arts",
          "Marketing",
          "MBA",
          "Film & Photography"
        ]
      }
    ]
  },
  "CH": {
    "title": "Switzerland",
    "flag": "🇨🇭",
    "desc": "Hospitality & business excellence",
    "tuition": "€5,000 - €20,000/year",
    "intake": "Sep / Feb",
    "work": "20 hrs/week",
    "univs": [
      {
        "rank": 1,
        "name": "GLION Institute of Higher Education",
        "city": "Montreux",
        "website": "https://www.glion.edu/",
        "highlights": [
          "BA in Hospitality & Event Management",
          "BA in Hospitality, Sports & Entertainment Management",
          "BBA in International Hospitality Business",
          "MBA in International Hospitality Business",
          "MSc in Hospitality Management",
          "MSc in International Luxury Management",
          "Culinary Arts (with Michelin-star chef partnerships)"
        ]
      },
      {
        "rank": 2,
        "name": "EU Business School",
        "city": "Montreux and Geneva",
        "website": "https://www.euruni.edu/",
        "highlights": [
          "BA Business Administration",
          "BA International Business",
          "BA Digital Business / Marketing",
          "MBA (with 11 specialization tracks)",
          "MSc Marketing",
          "MSc Finance",
          "Tourism & Hospitality Management",
          "Doctor of Business Administration (DBA)"
        ]
      },
      {
        "rank": 3,
        "name": "Business & Hotel Management School (BHMS)",
        "city": "Lucerne",
        "website": "https://www.bhms.ch/",
        "highlights": [
          "BA in Hotel & Hospitality Management",
          "BA in Global Business Management",
          "BA in Culinary Arts",
          "MSc in International Hospitality Business Management",
          "MSc in Global Business Management",
          "MSc in International Tourism Management",
          "MBA",
          "MSc in Wine & Beverage Business Management"
        ]
      },
      {
        "rank": 4,
        "name": "Swiss Hotel Management School (SHMS)",
        "city": "Montreux and Leysin",
        "website": "https://www.shms.com/en/",
        "highlights": [
          "BA (Hons) International Hospitality & Hotel Management",
          "Master of International Business in Hotel Management",
          "MSc in International Hospitality Management",
          "Postgraduate Diploma in Hospitality Management",
          "Operations Management",
          "Events Management",
          "Resort & Spa Management",
          "Executive Master of Hospitality Management (online)"
        ]
      },
      {
        "rank": 5,
        "name": "Geneva Business School",
        "city": "Geneva",
        "website": "https://gbsge.com/",
        "highlights": [
          "BBA in International Management",
          "BBA in Digital Marketing",
          "BBA in Entrepreneurship",
          "BBA in International Finance",
          "BBA in International Relations",
          "MBA (Global)",
          "MSc in International Management",
          "Sports Management"
        ]
      },
      {
        "rank": 6,
        "name": "International Management Institute (IMI)",
        "city": "Kastanienbaum, Luzern",
        "website": "https://imi-luzern.com/",
        "highlights": [
          "BA (Hons) International Hospitality Management",
          "BA (Hons) International Events Management",
          "BA International Culinary Arts",
          "MSc International Hospitality Management",
          "MSc International Events Management",
          "Postgraduate Diploma in Hospitality Management",
          "MBA in Hospitality Management"
        ]
      },
      {
        "rank": 7,
        "name": "César Ritz Colleges",
        "city": "Montreux",
        "website": "https://www.cesarritzcolleges.edu/en/",
        "highlights": [
          "BA in International Business in Hotel & Tourism Management (dual degree with Washington State University)",
          "MA in Global Hospitality Business",
          "MSc in International Hospitality Management",
          "MBA in Global Hospitality Business",
          "Culinary Arts (Apicius Culinary Training Center)",
          "Entrepreneurship & Innovation in Hospitality"
        ]
      },
      {
        "rank": 8,
        "name": "International Hotel & Tourism Training Institute (IHTTI)",
        "city": "Montreux",
        "website": "https://www.ihtti.com/",
        "highlights": [
          "BA (Hons) International Hospitality Management",
          "BA (Hons) International Tourism Management",
          "MSc International Hospitality Management",
          "MSc International Tourism Management",
          "Postgraduate Diploma in Hospitality Management",
          "Event Management",
          "MBA in Hospitality Management"
        ]
      },
      {
        "rank": 9,
        "name": "Hotel & Tourism Management Institute Switzerland (HTMi)",
        "city": "Lucerne",
        "website": "https://htmi.ch/",
        "highlights": [
          "BSc (Hons) International Hospitality & Tourism Management (Ulster University)",
          "MSc International Hospitality & Tourism Management (Edinburgh Napier University)",
          "MBA in Hospitality Management",
          "Postgraduate Diploma in Hospitality Management",
          "Events Management",
          "Culinary Management",
          "Executive MBA in Hotel Management"
        ]
      },
      {
        "rank": 10,
        "name": "Culinary Arts Academy",
        "city": "Le Bouveret and Lucerne",
        "website": "https://www.culinaryartsswitzerland.com/",
        "highlights": [
          "BA in Culinary Arts (dual degree with University of Derby)",
          "BA in Pastry & Chocolate Arts",
          "BA in Vegetarian Culinary Arts",
          "Postgraduate Diploma in Culinary Management",
          "MA/MSc in Culinary Management",
          "Wine Business Management (Certificate)"
        ]
      },
      {
        "rank": 11,
        "name": "Hotel Institute Montreux (HIM)",
        "city": "Montreux",
        "website": "https://www.him-business-school.com/",
        "highlights": [
          "BBA (Bachelor of Business Administration) — majors in Marketing, Finance, Management, Hospitality",
          "International Business",
          "Marketing Management",
          "Finance",
          "Hospitality Management (Business track)",
          "MBA (postgraduate offerings)"
        ]
      },
      {
        "rank": 12,
        "name": "American University in Switzerland",
        "city": "La Tour-de-Peilz",
        "website": "https://www.aus.edu/",
        "highlights": [
          "Business Administration",
          "Accounting & Finance",
          "Aviation Management",
          "Marketing",
          "Entrepreneurship",
          "Human Resources",
          "Fashion Design",
          "Sports Management"
        ]
      }
    ]
  },
  "LT": {
    "title": "Lithuania",
    "flag": "🇱🇹",
    "desc": "Emerging European study hub",
    "tuition": "€5,000 - €20,000/year",
    "intake": "Sep / Feb",
    "work": "20 hrs/week",
    "univs": [
      {
        "rank": 1,
        "name": "Vilnius University",
        "city": "Vilnius",
        "website": "https://www.vu.lt/en/news-events/news/vilnius-university-opens-admissions-for-international-students",
        "highlights": [
          "Medicine",
          "Information Systems & Cyber Security",
          "Management",
          "Global Marketing",
          "Software Engineering"
        ]
      }
    ]
  },
  "PL": {
    "title": "Poland",
    "flag": "🇵🇱",
    "desc": "Quality education at low cost",
    "tuition": "€5,000 - €20,000/year",
    "intake": "Sep / Feb",
    "work": "20 hrs/week",
    "univs": [
      {
        "rank": 1,
        "name": "Vistula University",
        "city": "Warsaw",
        "website": "https://vistula.edu.pl/en",
        "highlights": [
          "BBA in International Business",
          "BSc in Computer Science / MSc in Cybersecurity",
          "International Relations",
          "Management",
          "Finance & Banking",
          "Economics, Journalism, Philology, Architecture, Graphics"
        ]
      },
      {
        "rank": 2,
        "name": "Newton College",
        "city": "Prague",
        "website": "https://newton.university/en/",
        "highlights": [
          "Management",
          "Marketing",
          "Psychology",
          "Applied Business"
        ]
      }
    ]
  },
  "MT": {
    "title": "Malta",
    "flag": "🇲🇹",
    "desc": "English-taught programs in the Med",
    "tuition": "€5,000 - €20,000/year",
    "intake": "Sep / Feb",
    "work": "20 hrs/week",
    "univs": [
      {
        "rank": 1,
        "name": "Middlesex University (Mauritius / Malta Hub)",
        "city": "Malta",
        "website": "https://www.middlesex.mu/study/courses/",
        "highlights": [
          "BA (Hons) Advertising, Public Relations and Branding",
          "BSc (Hons) Computer Science (Systems Engineering)",
          "BSc (Hons) Business Computing and Data Analytics",
          "MSc Data Science",
          "MSc Cyber Security and Pen Testing",
          "Artificial Intelligence, Robotics",
          "Accounting and Finance",
          "Business",
          "Law, Psychology, International Relations"
        ]
      },
      {
        "rank": 2,
        "name": "London School of Commerce",
        "city": "Malta Campus",
        "website": "https://lscmalta.edu.mt/courses/",
        "highlights": [
          "MBA (Master of Business Administration)",
          "BBA (Bachelor of Business Administration)",
          "B.Sc. Business Management Studies",
          "Business Studies (Bachelor's & Master's)",
          "English language courses"
        ]
      }
    ]
  }
};
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
<div class="univ-programs">${Array.isArray(u.highlights) ? u.highlights.join(', ') : u.highlights}</div>
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

const waText = encodeURIComponent(
`Hi Oppulent Global!\nNew Enquiry Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCountry: ${country || 'N/A'}\nCourse: ${course || 'N/A'}\nMessage: ${message || 'N/A'}`
);

document.getElementById('enquiryForm').style.display = 'none';
document.getElementById('successName').textContent = name;
document.getElementById('enquirySuccess').style.display = 'block';

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
