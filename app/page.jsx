import FeasibilityModel from './components/FeasibilityModel';

export default function PortfolioPage() {
  return (
    <div className="w-full bg-ground text-ink min-h-[100dvh] overflow-x-hidden">
      {/* Top Header Rail */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#intro" className="font-serif text-lg font-medium text-ink hover:text-red-700 transition-colors anim-1">
            Adithya Dhamodharan
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted hover:text-ink transition-colors">About</a>
              <a href="#experience" className="text-muted hover:text-ink transition-colors">Experience</a>
              <a href="#work" className="text-muted hover:text-ink transition-colors">Initiatives</a>
              <a href="#skills" className="text-muted hover:text-ink transition-colors">Skills</a>
            </div>
            <a 
              href="#contact" 
              className="bg-ink text-white px-4 py-2 text-sm font-medium hover:bg-red-700 transition-colors hover-lift anim-2"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-20">
        
        {/* Intro / Hero Section */}
        <section id="intro" className="mb-24 sm:mb-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-7xl font-serif font-medium text-ink leading-tight tracking-tight anim-3">
              Adithya Dhamodharan
            </h1>
            <p className="text-2xl sm:text-3xl font-serif text-ink mt-3 mb-6 anim-4">
              Business Strategist & Infrastructure Specialist
            </p>
            <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed mb-8 max-w-3xl anim-5">
              STEM professional with an M.Tech from IIT Bombay structuring multi-crore Public-Private Partnerships, municipal waste systems, and multi-modal AI evaluation rubrics.
            </p>
            <div className="flex flex-wrap items-center gap-4 anim-6">
              <a
                href="https://linkedin.com/in/adithya-dhamodharan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white px-6 py-3 font-medium text-sm hover:bg-red-800 transition-colors hover-lift"
              >
                Connect on LinkedIn
              </a>
              <a
                href="#feasibility"
                className="bg-neutral-100 text-ink px-6 py-3 font-medium text-sm hover:bg-neutral-200 transition-colors hover-lift"
              >
                Explore Techno-Commercial Model
              </a>
            </div>
          </div>

          {/* Focal Hero Photograph */}
          <div className="mt-12 sm:mt-16 w-full anim-7">
            <img
              src="https://picsum.photos/id/693/1400/800"
              alt="Civil infrastructure suspension tower and bridge engineering"
              className="w-full h-80 sm:h-[480px] object-cover"
            />
            <div className="mt-2 text-sm text-muted flex justify-between">
              <span>Environmental & Municipal Infrastructure Engineering</span>
              <span>Rob Bye · Unsplash Architecture Series</span>
            </div>
          </div>
        </section>

        {/* Quantified Impact Numbers - Editorial Typographic Layout (No card grids) */}
        <section id="impact" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-10 anim-8">
            Realized Scale & Operational Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="anim-9">
              <div className="text-5xl font-serif font-semibold text-red-700 mb-2">₹400+ Cr</div>
              <div className="text-lg font-serif font-medium text-ink mb-1">Revenue Realization</div>
              <p className="text-sm text-muted leading-relaxed">
                Proposal & pursuit management in urban environmental infrastructure.
              </p>
            </div>

            <div className="anim-10">
              <div className="text-5xl font-serif font-semibold text-ink mb-2">12.5M+</div>
              <div className="text-lg font-serif font-medium text-ink mb-1">Citizens Impacted</div>
              <p className="text-sm text-muted leading-relaxed">
                Population covered under scalable municipal waste management frameworks.
              </p>
            </div>

            <div className="anim-11">
              <div className="text-5xl font-serif font-semibold text-ink mb-2">₹80L+</div>
              <div className="text-lg font-serif font-medium text-ink mb-1">Monthly Operational Savings</div>
              <p className="text-sm text-muted leading-relaxed">
                Generated via systematic tracking and clearance of operational bottlenecks.
              </p>
            </div>

            <div className="anim-12">
              <div className="text-5xl font-serif font-semibold text-ink mb-2">1,500+</div>
              <div className="text-lg font-serif font-medium text-ink mb-1">Placements Facilitated</div>
              <p className="text-sm text-muted leading-relaxed">
                Coordinated 300+ recruiters and 4,500+ interviews at IIT Bombay.
              </p>
            </div>
          </div>
        </section>

        {/* About Me Section with Architecture Image */}
        <section id="about" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-10 anim-13">
            About & Strategic Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7 space-y-6 text-base sm:text-lg text-ink font-normal leading-relaxed">
              <p>
                I am a STEM professional with a Master of Technology from the Indian Institute of Technology, Bombay, dedicated to strategizing and implementing large-scale urban infrastructure.
              </p>
              <p>
                Inspired by my research stay in Japan, I focus on applying disciplined engineering, circular economy principles, and sustainable operational practices across developing urban centers.
              </p>
              <p>
                As an Executive Assistant to top corporate management, I bridge techno-commercial feasibility with execution rigor: evaluating CAPEX/OPEX models, structuring competitive bids, analyzing RFP requirements, and collaborating directly with governmental bodies including MoEF&CC, BIS, CPCB, CEA, and MoHUA.
              </p>
              <p>
                In parallel, I work as an AI Generalist and Trainer, designing expert benchmarking tasks, instruction-adherence validation rubrics, and evaluating multi-modal voice and video AI models where precision and systemic resilience are critical.
              </p>
            </div>
            <div className="md:col-span-5 anim-14">
              <img
                src="https://picsum.photos/id/618/800/900"
                alt="Curving glass and steel lattice roof"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="mt-2 text-sm text-muted">
                Precision engineering & structural analysis · Mika Ruusunen
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Hydrology Moving Footage */}
        <section id="hydrology" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-6 anim-15">
            Environmental Systems & Hydrology
          </h2>
          <div className="w-full relative overflow-hidden bg-neutral-900 anim-16">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/River_Rwizi_and_its_vegetation_and_the_human_activity_around_it.webm/1280px--River_Rwizi_and_its_vegetation_and_the_human_activity_around_it.webm.jpg"
              className="w-full h-72 sm:h-96 object-cover"
            >
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ee/River_Rwizi_and_its_vegetation_and_the_human_activity_around_it.webm/River_Rwizi_and_its_vegetation_and_the_human_activity_around_it.webm.480p.vp9.webm"
                type="video/webm"
              />
            </video>
            <div className="p-4 bg-white text-sm text-muted flex justify-between">
              <span>Environmental hydrology, ecological monitoring & watershed management</span>
              <span>BalukuBrian · CC BY-SA 4.0 via Wikimedia Commons</span>
            </div>
          </div>
        </section>

        {/* Interactive Simulator Section */}
        <section id="feasibility" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-4">
            Interactive Feasibility & Impact Calculator
          </h2>
          <p className="text-base text-muted max-w-2xl mb-6">
            Simulate techno-commercial outcomes, capital expenditure allocations, and decarbonization metrics for urban concessions.
          </p>
          <FeasibilityModel />
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-12">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {/* Renvion Solutions */}
            <div className="tone-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover-lift">
              <div className="md:col-span-4">
                <div className="text-sm font-medium text-red-700 mb-1">July 2024 – Present</div>
                <h3 className="text-xl font-serif font-medium text-ink">Business Strategist</h3>
                <div className="text-sm text-muted">Renvion Solutions Private Limited · Hyderabad</div>
              </div>
              <div className="md:col-span-8 space-y-3 text-base text-ink">
                <p>
                  Lead end-to-end pursuit and proposal management in Environmental Infrastructure, delivering revenue realization exceeding ₹400+ Cr, positively impacting 12.5+ million people while advancing organizational ESG metrics.
                </p>
                <p>
                  Spearhead new market exploration, proactive business development, and stakeholder alignment for rapid project realization.
                </p>
                <p>
                  Provide technical support in tracking and resolving critical bottlenecks in field operations, securing ₹80+ Lakh in monthly recurring savings.
                </p>
                <p>
                  Drive policy advocacy with statutory authorities (MoEF&CC, BIS, CPCB, CEA, MoHUA), including co-authoring CII's NCEF Handbook for Mission LiFE.
                </p>
              </div>
            </div>

            {/* Sustainability Cell IIT Bombay */}
            <div className="tone-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover-lift">
              <div className="md:col-span-4">
                <div className="text-sm font-medium text-muted mb-1">Dec 2022 – June 2024</div>
                <h3 className="text-xl font-serif font-medium text-ink">Core Team Member</h3>
                <div className="text-sm text-muted">Sustainability Cell, IIT Bombay · Mumbai</div>
              </div>
              <div className="md:col-span-8 space-y-3 text-base text-ink">
                <p>
                  Formulated evaluation metrics for the Green Cup, enacted as India’s first collegiate sustainability-based General Championship.
                </p>
                <p>
                  Led a 15-member operations team executing 100% source-segregation of municipal waste during Convocation 2023 across 4,000+ attendees with a 100% diversion success rate.
                </p>
              </div>
            </div>

            {/* Placement Office IIT Bombay */}
            <div className="tone-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover-lift">
              <div className="md:col-span-4">
                <div className="text-sm font-medium text-muted mb-1">June 2022 – June 2024</div>
                <h3 className="text-xl font-serif font-medium text-ink">Placement Coordinator</h3>
                <div className="text-sm text-muted">Placement Office, IIT Bombay · Mumbai</div>
              </div>
              <div className="md:col-span-8 space-y-3 text-base text-ink">
                <p>
                  Company Coordinator (2022 – 2024): Managed corporate onboarding for 300+ recruiters, collectively facilitating placements for 1,500+ graduating students.
                </p>
                <p>
                  Associate Coordinator (2022): Awarded Best Office Bearer certificate for spearheading logistics with 250+ coordinators, conducting 4,500+ interviews across 15 days.
                </p>
              </div>
            </div>

            {/* Cleaffo Innovation Labs */}
            <div className="tone-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover-lift">
              <div className="md:col-span-4">
                <div className="text-sm font-medium text-muted mb-1">Jan 2024 – April 2024</div>
                <h3 className="text-xl font-serif font-medium text-ink">ESG Intern</h3>
                <div className="text-sm text-muted">Cleaffo Innovation Labs · Mumbai</div>
              </div>
              <div className="md:col-span-8 space-y-3 text-base text-ink">
                <p>
                  Performed regulatory review, data mining, and greenhouse gas (GHG) accounting for industrial Scope 1, 2, and 3 emissions. Formulated decarbonization roadmaps for transportation fleets.
                </p>
              </div>
            </div>

            {/* Sun Pharmaceuticals & NIG Japan */}
            <div className="tone-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover-lift">
              <div className="md:col-span-4">
                <div className="text-sm font-medium text-muted mb-1">Prior Research & Biotech</div>
                <h3 className="text-xl font-serif font-medium text-ink">Research & Quality Control</h3>
                <div className="text-sm text-muted">Japan & India</div>
              </div>
              <div className="md:col-span-8 space-y-3 text-base text-ink">
                <p>
                  <strong>National Institute of Genetics (Japan, 2019–2020):</strong> Investigated auxin-inducible degron (AID) systems for reversible protein degradation in cell culture and murine models.
                </p>
                <p>
                  <strong>Sun Pharmaceuticals (2021):</strong> Tested pharmaceutical grade water parameters (BET, TOC, TAMC, conductivity) and conducted cleanroom environmental monitoring under Grade A & C standards.
                </p>
              </div>
            </div>
          </div>

          {/* Environmental Facility Image */}
          <div className="mt-12 w-full">
            <img
              src="https://picsum.photos/id/942/1400/600"
              alt="Modern concrete environmental and industrial facility"
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="mt-2 text-sm text-muted">
              Industrial facilities and sustainable circular operations · Carl Nenzen Loven
            </div>
          </div>
        </section>

        {/* Featured Initiatives & Policy Publications */}
        <section id="work" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-10">
            Featured Initiatives & Publications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tone-surface p-8 flex flex-col justify-between hover-lift">
              <div>
                <div className="text-sm font-medium text-red-700 mb-2">National Policy Document</div>
                <h3 className="text-xl font-serif font-medium text-ink mb-3">
                  CII's NCEF Handbook for Mission LiFE
                </h3>
                <p className="text-base text-muted leading-relaxed mb-6">
                  Co-authored national policy handbook on circular economy frameworks, aligning municipal waste-to-wealth practices with national sustainable consumption targets.
                </p>
              </div>
              <div className="text-sm text-muted">
                Statutory Alignment: MoEF&CC, CPCB, CII
              </div>
            </div>

            <div className="tone-surface p-8 flex flex-col justify-between hover-lift">
              <div>
                <div className="text-sm font-medium text-red-700 mb-2">Peer-Reviewed Scientific Research</div>
                <h3 className="text-xl font-serif font-medium text-ink mb-3">
                  DDX6 Protein Knockdown Dynamics via AID System
                </h3>
                <p className="text-base text-muted leading-relaxed mb-6">
                  Published molecular research investigating P-body dynamics and rapid degradation kinetics utilizing the auxin-inducible degron technology developed at National Institute of Genetics, Japan.
                </p>
              </div>
              <div className="text-sm text-muted">
                Research Immersion: Mishima, Shizuoka, Japan
              </div>
            </div>
          </div>

          {/* Research Architecture Perspective Image */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <img
                src="https://picsum.photos/id/954/800/500"
                alt="Minimalist architectural staircase"
                className="w-full h-60 object-cover"
              />
              <div className="mt-2 text-sm text-muted">Systemic architecture · Todd Quackenbush</div>
            </div>
            <div>
              <img
                src="https://picsum.photos/id/1081/800/500"
                alt="Sustainable stepped modern building"
                className="w-full h-60 object-cover"
              />
              <div className="mt-2 text-sm text-muted">Urban building systems · Julien Moreau</div>
            </div>
          </div>
        </section>

        {/* Core Skills & Capabilities - Clean Typographic Columns */}
        <section id="skills" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-10">
            Domain Capabilities & Methodologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-medium text-ink mb-4">Infrastructure & PPP</h3>
              <ul className="text-base text-muted space-y-2">
                <li>• Public-Private Partnership (PPP) Structuring</li>
                <li>• CAPEX & OPEX Financial Modeling</li>
                <li>• Techno-Commercial Feasibility Studies</li>
                <li>• RFP Bid Pursuit & Evaluation</li>
                <li>• Concession Risk Assessment</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium text-ink mb-4">Sustainability & Policy</h3>
              <ul className="text-base text-muted space-y-2">
                <li>• Municipal Solid Waste & Biomethanation</li>
                <li>• Circular Economy Frameworks</li>
                <li>• Decarbonization & Scope 1-3 Accounting</li>
                <li>• Statutory Regulatory Compliance</li>
                <li>• ESG Reporting Standards</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium text-ink mb-4">AI Evaluation & Leadership</h3>
              <ul className="text-base text-muted space-y-2">
                <li>• Multi-Modal AI Evaluation (Voice/Video)</li>
                <li>• Expert Task Benchmarking & Design</li>
                <li>• Instruction-Adherence Rubric Building</li>
                <li>• Executive Leadership Support to CXO</li>
                <li>• Cross-functional Team Coordination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink mb-10">
            Academic Foundation & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif font-medium text-ink mb-6">Degrees</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-serif font-medium text-ink">Indian Institute of Technology, Bombay</div>
                  <div className="text-base text-muted">M.Tech., Environmental Science & Engineering (2022 – 2024)</div>
                </div>
                <div>
                  <div className="text-lg font-serif font-medium text-ink">Vellore Institute of Technology</div>
                  <div className="text-base text-muted">B.Tech., Biotechnology (2016 – 2020)</div>
                </div>
                <div>
                  <div className="text-lg font-serif font-medium text-ink">Indian Institute of Technology, Delhi</div>
                  <div className="text-base text-muted">MS by Research, Chemical Engineering (2022)</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-ink mb-6">Certifications & Honors</h3>
              <ul className="space-y-3 text-base text-muted">
                <li>• Integrated Waste Management for a Smart City</li>
                <li>• PPP for Sustainable Urban Waste Management</li>
                <li>• Quality Control Biologist (Life Sciences NSQF Level 5)</li>
                <li>• Environmental Biotechnology Specialist</li>
                <li>• Best Office Bearer Honor — Placement Office, IIT Bombay</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="tone-dark p-8 sm:p-14 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mb-4">
              Connect Directly
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mb-8 leading-relaxed">
              Open to strategic, analytical, and techno-commercial leadership roles where precision, data integrity, and systemic resilience are required.
            </p>

            <div className="flex flex-wrap gap-4 text-base font-medium">
              <a
                href="mailto:d.adithya1107@gmail.com"
                className="bg-red-700 text-white px-6 py-3 hover:bg-red-800 transition-colors hover-lift"
              >
                Send Email (d.adithya1107@gmail.com)
              </a>
              <a
                href="https://linkedin.com/in/adithya-dhamodharan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ink px-6 py-3 hover:bg-neutral-200 transition-colors hover-lift"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 text-white px-6 py-3 hover:bg-neutral-700 transition-colors hover-lift"
              >
                GitHub Profile
              </a>
            </div>

            <div className="mt-8 text-sm text-neutral-400">
              Location: Chennai, Tamil Nadu, India · Inbound inquiries welcome
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="tone-surface py-12 px-6 sm:px-10 text-sm text-muted">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Adithya Dhamodharan. Built with Next.js & Taste Skill direction.
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/adithya-dhamodharan" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href="mailto:d.adithya1107@gmail.com" className="hover:text-ink">
              Email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
