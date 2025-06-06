import React, { useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('individual');
  
const features = [
  {
    icon: "https://img.icons8.com/color/96/000000/group-task.png",
    title: "Family Therapy",
    desc: "Comprehensive therapy sessions for families facing challenges or seeking to strengthen relationships."
  },
  {
    icon: "https://img.icons8.com/color/96/000000/family.png",
    title: "Couples Counseling",
    desc: "Specialized sessions helping partners improve communication and resolve conflicts."
  },
  {
    icon: "https://img.icons8.com/color/96/000000/person-male.png",
    title: "Individual Therapy",
    desc: "One-on-one sessions for personal growth, anxiety, depression, and other mental health concerns."
  },
  {
    icon: "https://img.icons8.com/color/96/000000/children.png",
    title: "Child & Adolescent",
    desc: "Age-appropriate therapy approaches for younger clients dealing with behavioral or emotional challenges."
  }
];
const [yearly, setYearly] = useState(false);
const pricing = [
  { plan: "Free", monthly: "0", yearly: "0", features: ["1 Project", "100MB Storage", "Community Support"] },
  { plan: "Pro", monthly: "19", yearly: "190", features: ["10 Projects", "10GB Storage", "Priority Support"] },
  { plan: "Enterprise", monthly: "99", yearly: "990", features: ["Unlimited Projects", "1TB Storage", "Dedicated Support"] }
];
const testimonials = [
  { name: "Sarah J.", role: "Family Therapy Client", text: "The counseling we received helped our family communicate better and heal old wounds. Forever grateful.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael R.", role: "Couples Therapy Client", text: "Our marriage was struggling, but after 8 sessions, we've found our connection again. Thank you!", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Tanya L.", role: "Parent of Adolescent Client", text: "The therapists here truly understand teenagers. My son finally feels heard and is making great progress.", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }
];
const [testimonialIdx, setTestimonialIdx] = useState(0);

const [openFaq, setOpenFaq] = useState(null);
const faqs = [
  { q: "What should I expect in my first therapy session?", a: "Your first session is primarily an introduction. We'll discuss what brings you to therapy, gather some history, explain our approach, and answer any questions you have. It's also a chance to see if you feel comfortable with your therapist." },
  { q: "How long does each therapy session last?", a: "Standard sessions are 50 minutes, though initial consultations may be 60-90 minutes to allow time for a thorough assessment of your needs." },
  { q: "Is therapy confidential?", a: "Yes, all sessions are completely confidential with a few legal exceptions: risk of harm to self or others, suspected abuse of children or vulnerable adults, or if records are subpoenaed by court order." },
  { q: "Do you accept insurance?", a: "We accept most major insurance plans. We recommend contacting your insurance provider to verify coverage for mental health services before your first appointment." },
  { q: "How often will I need to attend therapy?", a: "Most clients start with weekly sessions, then may transition to bi-weekly as progress is made. The frequency depends on your specific situation and goals." }
];
  return (
    <div className="main-landing">
      <header className="landing-header">
        <div className="logo">
          <img src="https://img.icons8.com/color/96/000000/mental-health.png" alt="Logo" />
          <span>Family Healing Center</span>
        </div>
        <nav className={navOpen ? "nav-open" : ""}>
          <a href="#services" onClick={() => setNavOpen(false)}>Our Services</a>
          <a href="#about" onClick={() => setNavOpen(false)}>About Us</a>
          <a href="#appointment" onClick={() => setNavOpen(false)}>Schedule</a>
          <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          <a href="#testimonials" onClick={() => setNavOpen(false)}>Testimonials</a>
          <a href="#faq" onClick={() => setNavOpen(false)}>FAQ</a>
        </nav>
  {navOpen && <div className="nav-overlay show" onClick={() => setNavOpen(false)}></div>}
        <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          <span />
          <span />
          <span />
        </button>
      </header>
      
      <section className="hero">
        <h1>Healing Families Together</h1>
        <p>Professional therapy services to help families and individuals navigate life's challenges and build stronger relationships.</p>
        <div className="hero-actions">
          <a href="#appointment" className="primary-btn">Schedule Appointment</a>
          <a href="#about" className="secondary-btn">Learn More</a>
        </div>
        <img className="hero-img" src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Family Therapy Session" />
      </section>
      
      <section className="about-section" id="about">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2>About Our Practice</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Compassionate Care for Every Family</h3>
            <p className="intro-paragraph">At Family Healing Center, we believe in the power of connection and understanding to heal relationships and foster personal growth. Our team of licensed therapists specializes in evidence-based approaches tailored to each client's unique needs.</p>
            
            <p>With over 20 years of combined experience, our compassionate professionals create a safe, non-judgmental space for all clients. We understand that seeking therapy is a courageous step, and we're honored to be part of your healing journey.</p>
            
            <div className="about-approach">
              <h4>Our Therapeutic Approach</h4>
              <p>We integrate various evidence-based methods including Cognitive Behavioral Therapy, Family Systems Therapy, and Emotion-Focused Therapy to provide personalized treatment plans that address your specific concerns and goals.</p>
            </div>
            
            <div className="about-values">
              <h4>Our Core Values</h4>
              <div className="values-container">
                <div className="value-item">
                  <div className="value-icon">
                    <img src="https://img.icons8.com/ios-filled/50/3498db/handshake.png" alt="Trust icon" />
                  </div>
                  <h4>Trust</h4>
                  <p>Building relationships based on confidentiality and respect</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <img src="https://img.icons8.com/ios-filled/50/3498db/communication.png" alt="Communication icon" />
                  </div>
                  <h4>Communication</h4>
                  <p>Fostering open dialogue and active listening</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <img src="https://img.icons8.com/ios-filled/50/3498db/leaf.png" alt="Growth icon" />
                  </div>
                  <h4>Growth</h4>
                  <p>Supporting positive change and personal development</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <img src="https://img.icons8.com/ios-filled/50/3498db/diversity.png" alt="Inclusivity icon" />
                  </div>
                  <h4>Inclusivity</h4>
                  <p>Embracing diversity and creating welcoming spaces for all</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Therapy Office" />
              <div className="image-overlay">
                <span>Our Healing Space</span>
              </div>
            </div>
            
            <div className="credentials">
              <h4>Our Credentials</h4>
              <div className="credential-items">
                <div className="credential-item">
                  <img src="https://img.icons8.com/ios-filled/50/3498db/diploma.png" alt="Certified" />
                  <span>Licensed Therapists</span>
                </div>
                <div className="credential-item">
                  <img src="https://img.icons8.com/ios-filled/50/3498db/medal.png" alt="Experience" />
                  <span>20+ Years Experience</span>
                </div>
                <div className="credential-item">
                  <img src="https://img.icons8.com/ios-filled/50/3498db/certificate.png" alt="Accredited" />
                  <span>Accredited Practice</span>
                </div>
                <div className="credential-item">
                  <img src="https://img.icons8.com/ios-filled/50/3498db/training.png" alt="Training" />
                  <span>Ongoing Professional Development</span>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <h4>Ready to Start Your Healing Journey?</h4>
              <a href="#appointment" className="primary-btn about-btn">
                Schedule a Consultation
                <span className="btn-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features" id="services">
  <h2>Our Therapy Services</h2>
  <div className="features-list">
    {features.map((f, i) => (
      <div className="feature-card" key={i}>
        <img src={f.icon} alt={f.title} />
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </div>
    ))}
  </div>
</section>
<section className="appointment-section" id="appointment">
  <h2>Schedule an Appointment</h2>
  <div className="appointment-container">
    <div className="appointment-info">
      <h3>How It Works</h3>
      <div className="process-steps">
        <div className="step-indicator">
          <div className="step-line"></div>
          <div className={`step-marker ${appointmentType ? 'completed' : ''}`}>1</div>
          <div className={`step-marker ${appointmentDate && appointmentTime ? 'completed' : ''}`}>2</div>
          <div className="step-marker">3</div>
          <div className="step-marker">4</div>
        </div>
        <ol>
          <li className={appointmentType ? 'active' : ''}>Select your preferred therapy service</li>
          <li className={appointmentDate && appointmentTime ? 'active' : ''}>Choose a convenient date and time</li>
          <li>Fill in your contact information</li>
          <li>Submit your request and we'll confirm within 24 hours</li>
        </ol>
      </div>
      <div className="appointment-guarantee">
        <div className="guarantee-icon"></div>
        <p>Your privacy is our priority. All information is protected by our <a href="#privacy">confidentiality policy</a>.</p>
      </div>
      <div className="appointment-note">
        <div className="urgent-icon"></div>
        <div>
          <strong>Need immediate assistance?</strong>
          <p>Please call our office directly at <a href="tel:5551234567">(555) 123-4567</a></p>
        </div>
      </div>
    </div>
    <div className="appointment-form">
      <div className="form-header">
        <span className="form-title">New Appointment Request</span>
        <span className="form-subtitle">Fields marked with * are required</span>
      </div>
      <form onSubmit={e => { e.preventDefault(); alert('Thank you! We\'ll contact you shortly to confirm your appointment.'); }}>
        <div className="form-section">
          <h4>Appointment Details</h4>
          <div className="form-group">
            <label htmlFor="appointmentType">Therapy Service *</label>
            <select 
              id="appointmentType"
              value={appointmentType} 
              onChange={e => setAppointmentType(e.target.value)}
              required
            >
              <option value="individual">Individual Therapy</option>
              <option value="couples">Couples Counseling</option>
              <option value="family">Family Therapy</option>
              <option value="child">Child/Adolescent Therapy</option>
            </select>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="appointmentDate">Preferred Date *</label>
              <input 
                id="appointmentDate"
                type="date" 
                value={appointmentDate}
                onChange={e => setAppointmentDate(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="appointmentTime">Preferred Time *</label>
              <select
                id="appointmentTime"
                value={appointmentTime}
                onChange={e => setAppointmentTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                <option value="9:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h4>Your Information</h4>
          <div className="form-group">
            <label htmlFor="clientName">Full Name *</label>
            <input id="clientName" type="text" required />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="clientPhone">Phone Number *</label>
              <input id="clientPhone" type="tel" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="clientEmail">Email *</label>
              <input id="clientEmail" type="email" required />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="visitReason">Brief reason for visit</label>
            <textarea id="visitReason" rows="3" placeholder="Share any concerns or questions you'd like to address in your session"></textarea>
          </div>
          
          <div className="form-group checkbox-group">
            <input id="newClient" type="checkbox" />
            <label htmlFor="newClient">I am a new client</label>
          </div>
        </div>
        
        <button type="submit" className="primary-btn">
          <span className="btn-text">Request Appointment</span>
          <span className="btn-icon">→</span>
        </button>
      </form>
    </div>
  </div>
</section>
<section className="testimonials-section" id="testimonials">
  <h2>Client Testimonials</h2>
  <div className="testimonial-card">
    <img src={testimonials[testimonialIdx].avatar} alt={testimonials[testimonialIdx].name} />
    <p>"{testimonials[testimonialIdx].text}"</p>
    <div className="testimonial-meta">
      <strong>{testimonials[testimonialIdx].name}</strong>
      <span>{testimonials[testimonialIdx].role}</span>
    </div>
    <div className="testimonial-nav">
      <button onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}>&lt;</button>
      <button onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}>&gt;</button>
    </div>
  </div>
</section>
<section className="faq-section" id="faq">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-list">
    {faqs.map((faq, i) => (
      <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
        <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
          {faq.q}
          <span>{openFaq === i ? "-" : "+"}</span>
        </div>
        <div className="faq-answer">{faq.a}</div>
      </div>
    ))}
  </div>
</section>
<section className="contact-section" id="contact">
  <div className="section-header">
    <span className="section-tag">Reach Out</span>
    <h2>Contact Us</h2>
    <div className="section-divider"></div>
  </div>
  
  <div className="contact-container">
    <div className="contact-info">
      <div className="contact-intro-block">
        <h3 className="contact-heading">We're Here For You</h3>
        <p className="contact-intro">Have questions about our therapy services? Need more information before scheduling? Get in touch with us using any of the methods below or fill out our contact form.</p>
        <div className="contact-emergency">
          <div className="emergency-icon">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Emergency" />
          </div>
          <div className="emergency-content">
            <h4>Crisis Support</h4>
            <p>If you're experiencing a mental health emergency, please call our crisis line at <strong><a href="tel:5551239999">(555) 123-9999</a></strong> or the National Crisis Hotline at <strong>988</strong>.</p>
          </div>
        </div>
      </div>
      
      <div className="contact-items">
        <div className="contact-item">
          <div className="contact-icon">
            <img src="https://img.icons8.com/ios-filled/50/3498db/marker.png" alt="Location" />
          </div>
          <div className="contact-details">
            <h4>Our Office</h4>
            <p>123 Healing Way, Suite 400<br />Wellness City, ST 12345</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">Get Directions →</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <img src="https://img.icons8.com/ios-filled/50/3498db/phone.png" alt="Phone" />
          </div>
          <div className="contact-details">
            <h4>Phone</h4>
            <p><a href="tel:5551234567" className="contact-phone">(555) 123-4567</a></p>
            <span className="contact-note">For appointments and general inquiries</span>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <img src="https://img.icons8.com/ios-filled/50/3498db/mail.png" alt="Email" />
          </div>
          <div className="contact-details">
            <h4>Email</h4>
            <p><a href="mailto:info@familyhealingcenter.com">info@familyhealingcenter.com</a></p>
            <span className="contact-note">Response within 24-48 hours</span>
          </div>
        </div>
      </div>
      
      <div className="contact-hours">
        <h4>Hours of Operation</h4>
        <div className="hours-grid">
          <div className="hours-day">
            <span className="day">Monday - Thursday:</span>
            <span className="time">9:00 AM - 7:00 PM</span>
          </div>
          <div className="hours-day">
            <span className="day">Friday:</span>
            <span className="time">9:00 AM - 5:00 PM</span>
          </div>
          <div className="hours-day">
            <span className="day">Saturday:</span>
            <span className="time">10:00 AM - 3:00 PM</span>
          </div>
          <div className="hours-day">
            <span className="day">Sunday:</span>
            <span className="time">Closed</span>
          </div>
        </div>
        <p className="hours-note">* Evening appointments available upon request</p>
      </div>
      
      <div className="insurance-section">
        <h4>Insurance & Payment</h4>
        <p>We accept most major insurance plans and offer sliding scale fees for those without insurance coverage.</p>
        <div className="insurance-logos">
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" />
          <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" />
        </div>
      </div>
    </div>
    
    <div className="contact-form-container">
      <div className="contact-form">
        <div className="form-header">
          <span className="form-title">Send Us a Message</span>
          <span className="form-subtitle">We'll respond within 24-48 hours</span>
        </div>
        
        <form onSubmit={e => { e.preventDefault(); alert('Thank you! Your message has been sent. We\'ll respond within 24-48 hours.'); }}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactName">Your Name *</label>
              <input id="contactName" type="text" placeholder="Full Name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="contactPhone">Phone Number</label>
              <input id="contactPhone" type="tel" placeholder="(000) 000-0000" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="contactEmail">Email Address *</label>
            <input id="contactEmail" type="email" placeholder="your@email.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="contactSubject">Subject *</label>
            <select id="contactSubject" required>
              <option value="">Please select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="appointment">Appointment Question</option>
              <option value="insurance">Insurance & Billing</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="contactMessage">Your Message *</label>
            <textarea id="contactMessage" rows="5" placeholder="How can we help you?" required></textarea>
          </div>
          
          <div className="form-group checkbox-group">
            <input id="contactConsent" type="checkbox" required />
            <label htmlFor="contactConsent">I consent to being contacted about my inquiry *</label>
          </div>
          
          <div className="form-group checkbox-group">
            <input id="contactPrivacy" type="checkbox" required />
            <label htmlFor="contactPrivacy">I acknowledge that this form is not for emergencies and I have read the <a href="#privacy">Privacy Policy</a> *</label>
          </div>
          
          <div className="form-note">
            <p>Fields marked with * are required</p>
          </div>
          
          <button type="submit" className="primary-btn">
            <span className="btn-text">Send Message</span>
            <span className="btn-icon">→</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
<footer className="landing-footer">
  <div className="footer-wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="#3498db" fillOpacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,160C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>

  <div className="footer-top">
    <div className="footer-col footer-brand">
      <div className="footer-logo">
        <img src="https://img.icons8.com/color/96/000000/mental-health.png" alt="Family Healing Center Logo" />
        <span>Family Healing Center</span>
      </div>
      <p className="footer-tagline">Healing minds, strengthening relationships, and restoring harmony in families for over two decades.</p>
      <div className="footer-social">
        <a href="#" className="social-link" aria-label="Facebook">
          <img src="https://img.icons8.com/ios-filled/24/3498db/facebook.png" alt="Facebook" />
        </a>
        <a href="#" className="social-link" aria-label="Instagram">
          <img src="https://img.icons8.com/ios-filled/24/3498db/instagram.png" alt="Instagram" />
        </a>
        <a href="#" className="social-link" aria-label="Twitter">
          <img src="https://img.icons8.com/ios-filled/24/3498db/twitter.png" alt="Twitter" />
        </a>
        <a href="#" className="social-link" aria-label="LinkedIn">
          <img src="https://img.icons8.com/ios-filled/24/3498db/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <div className="footer-certifications">
        <img src="https://img.icons8.com/color/48/000000/verified-badge.png" alt="Verified Provider" title="Verified Provider" />
        <img src="https://img.icons8.com/color/48/000000/diploma.png" alt="Licensed Professionals" title="Licensed Professionals" />
        <img src="https://img.icons8.com/color/48/000000/security-shield-green.png" alt="HIPAA Compliant" title="HIPAA Compliant" />
      </div>
    </div>
    
    <div className="footer-col footer-links-col">
      <h3>Quick Links</h3>
      <div className="footer-links">
        <a href="#services" className="footer-link">Our Services</a>
        <a href="#about" className="footer-link">About Us</a>
        <a href="#appointment" className="footer-link">Schedule Appointment</a>
        <a href="#testimonials" className="footer-link">Testimonials</a>
        <a href="#contact" className="footer-link">Contact Us</a>
        <a href="#faq" className="footer-link">FAQ</a>
      </div>
    </div>
    
    <div className="footer-col footer-links-col">
      <h3>Our Services</h3>
      <div className="footer-links">
        <a href="#services" className="footer-link">Family Therapy</a>
        <a href="#services" className="footer-link">Couples Counseling</a>
        <a href="#services" className="footer-link">Individual Therapy</a>
        <a href="#services" className="footer-link">Child & Adolescent</a>
        <a href="#services" className="footer-link">Trauma Recovery</a>
        <a href="#services" className="footer-link">Online Sessions</a>
      </div>
    </div>
    
    <div className="footer-col footer-links-col">
      <h3>Resources</h3>
      <div className="footer-links">
        <a href="#blog" className="footer-link">Mental Health Blog</a>
        <a href="#resources" className="footer-link">Self-Help Resources</a>
        <a href="#insurance" className="footer-link">Insurance Information</a>
        <a href="#forms" className="footer-link">Client Forms</a>
        <a href="#careers" className="footer-link">Careers</a>
        <a href="#research" className="footer-link">Research & Publications</a>
      </div>
    </div>
    
    <div className="footer-col footer-newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <p className="newsletter-info">Get monthly tips, resources and updates on mental wellness delivered to your inbox.</p>
      <form className="newsletter" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing to our newsletter!'); }}>
        <div className="newsletter-form-group">
          <label className="visually-hidden" htmlFor="newsletterEmail">Email address</label>
          <input type="email" id="newsletterEmail" placeholder="Your email address" required />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </div>
        <div className="newsletter-consent">
          <input type="checkbox" id="newsletter-consent" required />
          <label htmlFor="newsletter-consent">I agree to receive email updates and promotions</label>
        </div>
      </form>
    </div>
  </div>
  
  <div className="footer-bottom">
    <div className="footer-info">
      <p className="footer-address">
        <img src="https://img.icons8.com/ios-filled/16/3498db/marker.png" alt="Location" />
        123 Healing Way, Suite 400, Wellness City, ST 12345
      </p>
      <p className="footer-contact">
        <img src="https://img.icons8.com/ios-filled/16/3498db/phone.png" alt="Phone" />
        <a href="tel:5551234567">(555) 123-4567</a>
        <span className="footer-separator">•</span>
        <img src="https://img.icons8.com/ios-filled/16/3498db/mail.png" alt="Email" />
        <a href="mailto:info@familyhealingcenter.com">info@familyhealingcenter.com</a>
      </p>
    </div>
    
    <div className="footer-legal">
      <p className="footer-copyright">&copy; {new Date().getFullYear()} Family Healing Center. All Rights Reserved.</p>
      <div className="footer-legal-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#accessibility">Accessibility</a>
        <a href="#sitemap">Sitemap</a>
      </div>
    </div>
  </div>
  
  <div className="back-to-top">
    <a href="#top" aria-label="Back to top">
      <img src="https://img.icons8.com/ios-filled/24/ffffff/up.png" alt="Back to top" />
    </a>
  </div>
</footer>
      {/* ...rest of your sections... */}
    </div>
  );
}

export default App;