import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    id: 1,
    heading: 'General Disclaimer',
    text: `The information contained on this website, www.llstaffingsolution.com (the "Site"), is provided by L&L Staffing Solution LLC, a Massachusetts limited liability company ("L&L," "we," "us," or "our"), for general informational and educational purposes only. The information on this Site is provided in good faith; however, L&L Staffing Solution LLC makes no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.

Under no circumstances shall L&L Staffing Solution LLC be liable for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site are solely at your own risk.

Important Notice to All Users: The information provided on this website does not constitute professional medical, legal, financial, employment, or regulatory advice. It is intended for general informational purposes only. Always seek the advice of a qualified professional with respect to any specific matter or concern.`
  },
  {
    id: 2,
    heading: 'No Medical Advice',
    text: `Nothing on this website, including articles, descriptions of care services, caregiver profiles, care tips, health information, testimonials, or any other content, constitutes medical advice, medical diagnosis, medical treatment recommendations, or the practice of medicine. L&L Staffing Solution LLC does not hold a medical license and does not practice medicine in any form.

Specifically:

• Healthcare staffing content and descriptions of personal care services on this Site are provided for informational purposes only and are not a substitute for consultation with a licensed physician, nurse practitioner, registered nurse, or other qualified healthcare professional;
• If you or a loved one are experiencing a medical emergency, call 9-1-1 immediately;
• Nothing on this Site should be used to delay seeking professional medical advice or to disregard the advice of a licensed healthcare provider; and
• The inclusion of links to external health information resources does not constitute an endorsement of the medical content found on those resources.

Clients engaging healthcare staffing services through L&L Staffing Solution LLC should consult with their attending physician, specialist, or care manager regarding all medical decisions. Our caregivers are trained to provide personal care and assistance with activities of daily living they do not provide medical treatment or make clinical judgments unless specifically licensed to do so under Massachusetts law.`
  },
  {
    id: 3,
    heading: 'No Employment Guarantee',
    text: `The posting of job openings, caregiver positions, or other employment opportunities on this Site, and the submission of employment applications, caregiver profiles, or resumes through this Site or any other channel, does not:

• Create an employment relationship, staffing relationship, or contractor relationship between L&L Healthcare Staffing Solution LLC and the applicant;
• Guarantee placement in any caregiver, home care aide, or other position;
• Constitute an offer of employment or a promise of employment; or
• Confer any rights against L&L Staffing Solution LLC with respect to employment decisions.

All employment and placement decisions are made by L&L Staffing Solution LLC in its sole discretion and are subject to the successful completion of all required background screening, credentialing, reference verification, and onboarding processes. An employment relationship is created only upon the execution of a written employment or contractor agreement signed by an authorized officer of L&L Staffing Solution LLC.`
  },
  {
    id: 4,
    heading: 'Accuracy and Completeness',
    text: `L&L Staffing Solution LLC endeavors to keep all information on this Site current, accurate, and complete. However, we make no warranty, express or implied, as to the accuracy, completeness, timeliness, or fitness for any particular purpose of any content on this Site. The following may change without notice:

• Service offerings, service areas, and geographic coverage;
• Caregiver availability and staffing capacity;
• Rates, fees, and pricing information;
• Insurance payers and coverage accepted;
• Regulatory compliance information;
• Contact information and office hours; and
• Job openings and caregiver positions available.

We reserve the right to modify, update, correct, or remove any content on this Site at any time and without prior notice. For the most current and accurate information regarding our services, pricing, and availability, please contact our office directly at l-l@llstaffingsolution.com.`
  },
  {
    id: 5,
    heading: 'External Links Disclaimer',
    text: `This Site may contain hyperlinks to external websites, resources, organizations, government agencies, and other entities that are not owned or operated by L&L Staffing Solution LLC. These links are provided solely as a convenience to users and for informational purposes.

L&L Staffing Solution LLC:

• Does not control, and is not responsible for, the content, accuracy, privacy practices, or terms of use of any linked external website;
• Does not endorse, recommend, or sponsor any linked external website or its operators;
• Does not make any representation or warranty regarding any external website;
• Is not liable for any information you provide to, or receive from, any external website accessed through a link on our Site; and
• Encourages users to review the privacy policy and terms of use of every external website before providing any personal information.

The inclusion of any link to an external site does not imply an affiliation, endorsement, or adoption by L&L Staffing Solution LLC of any information, product, service, or viewpoint expressed on or available through that site.`
  },
  {
    id: 6,
    heading: 'Geographic Limitations',
    text: `L&L Staffing Solution LLC's healthcare staffing and care services are provided primarily within the Commonwealth of Massachusetts. Service availability varies by geographic location, even within Massachusetts. The information on this Site may not be applicable to, or accurate for, services or operations in jurisdictions other than Massachusetts.

Nothing on this Site constitutes an offer to provide services in any jurisdiction where L&L Staffing Solution LLC is not licensed, registered, or otherwise authorized to operate. Users located outside of Massachusetts are advised that this Site is directed at Massachusetts residents and that we may be unable to service their needs.

If you are unsure whether services are available in your specific area, please contact our office directly.`
  },
  {
    id: 7,
    heading: 'Regulatory Compliance Notice',
    text: `L&L  Staffing Solution LLC operates in compliance with applicable Massachusetts state and federal laws and regulations governing healthcare staffing agencies, including but not limited to:

• MGL c.111, §70E — Patient's Bill of Rights, governing the rights of home care clients;
• MGL c.149 — Massachusetts labor law, governing employment practices and wage and hour compliance;
• MGL c.93H — Massachusetts data security law, governing the protection of personal information;
• 201 CMR 17.00 — Massachusetts Data Security Regulations, requiring a Written Information Security Program (WISP);
• MGL c.6, §§167–178B — Massachusetts CORI law, governing the use of criminal record information in employment decisions;
• HIPAA (45 CFR Parts 160 and 164) — Federal law governing the privacy and security of protected health information; and
• HITECH Act — Federal law governing electronic health records and strengthening HIPAA enforcement.

Any regulatory compliance information provided on this Site is intended for general informational purposes only and does not constitute legal advice. Compliance obligations vary based on individual circumstances, and L&L Staffing Solution LLC strongly encourages all clients, caregivers, and partners to consult with qualified legal counsel regarding specific regulatory requirements applicable to their situation.`
  },
  {
    id: 8,
    heading: 'Limitation of Liability',
    text: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, L&L STAFFING SOLUTION LLC, ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, AGENTS, AND CONTRACTORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OF ANY KIND INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, USE, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO:

• Your access to or use of, or inability to access or use, this Site;
• Any content or information on this Site, including any errors, omissions, or inaccuracies therein;
• Your reliance on any information obtained from this Site;
• Unauthorized access to or alteration of your transmissions or data; or
• Any other matter relating to this Site.

Nothing in this Section shall be construed to limit L&L Staffing Solution LLC's liability for personal injury directly caused by its own negligence, fraud, or any other liability that cannot be excluded under applicable law.`
  },
  {
    id: 9,
    heading: 'Contact Information',
    text: `If you have questions about this Website Disclaimer or require clarification about any content on our Site, please contact:

Company Name: L&L Staffing Solution LLC
Address: 91 Mill Street, Suite 1, Randolph, MA 02368
General Email: l-l@llstaffingsolution.com
Privacy Officer Email: info@llstaffingsolution.com
Website: www.llstaffingsolution.com`
  }
]

const disclaimerCards = [
  { icon: '🚫', title: 'Not Medical Advice', desc: 'Content here is informational only. Always consult a licensed professional.' },
  { icon: '💼', title: 'No Employment Promise', desc: 'Applying through this site does not guarantee placement or employment.' },
  { icon: '📍', title: 'Massachusetts Only', desc: 'Services are provided within the Commonwealth of Massachusetts.' },
  { icon: '🔗', title: 'External Links', desc: 'We are not responsible for the content of third-party websites.' },
]

const websitedisclaimer = () => {
  const [openSections, setOpenSections] = useState({ 0: true })

  const toggle = (idx) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .dis-root {
          font-family: 'DM Sans', sans-serif;
          background: #f3f5f8;
          min-height: 100vh;
          color: #1a1a1a;
        }

        .dis-hero {
          background: #1B3A5C;
          padding: 72px 24px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .dis-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.03) 25%, transparent 25%) -20px 0,
            linear-gradient(225deg, rgba(255,255,255,0.03) 25%, transparent 25%) -20px 0,
            linear-gradient(315deg, rgba(255,255,255,0.03) 25%, transparent 25%),
            linear-gradient(45deg,  rgba(255,255,255,0.03) 25%, transparent 25%);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .dis-hero-inner {
          position: relative;
          z-index: 1;
        }

        .dis-hero-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #7aabcc;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .dis-hero-icon {
          font-size: 48px;
          margin-bottom: 16px;
          display: block;
          filter: grayscale(0.2);
        }

        .dis-hero-title {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(28px, 5vw, 50px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.15;
        }

        .dis-hero-meta {
          font-size: 13px;
          color: #7aabcc;
          line-height: 1.8;
        }

        .dis-hero-pill {
          display: inline-flex;
          gap: 20px;
          align-items: center;
          margin-top: 20px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(122,171,204,0.3);
          padding: 8px 22px;
          border-radius: 4px;
          font-size: 12px;
          color: #7aabcc;
          flex-wrap: wrap;
          justify-content: center;
        }

        .dis-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        .dis-warning {
          background: #fff;
          border-radius: 10px;
          padding: 22px 24px;
          margin-bottom: 28px;
          border: 1px solid #dde3ed;
          border-left: 5px solid #c0392b;
          box-shadow: 0 2px 12px rgba(27,58,92,0.06);
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .dis-warning-icon {
          font-size: 22px;
          flex-shrink: 0;
        }

        .dis-warning p {
          margin: 0;
          font-size: 13.5px;
          color: #444;
          line-height: 1.7;
          font-weight: 300;
        }

        .dis-warning strong {
          color: #1B3A5C;
          font-weight: 600;
        }

        .dis-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
          gap: 12px;
          margin-bottom: 36px;
        }

        .dis-card {
          background: #fff;
          border-radius: 10px;
          padding: 20px 16px;
          border: 1px solid #dde3ed;
          box-shadow: 0 2px 8px rgba(27,58,92,0.05);
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .dis-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #1B3A5C;
        }

        .dis-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(27,58,92,0.1);
        }

        .dis-card-icon {
          font-size: 26px;
          margin-bottom: 10px;
        }

        .dis-card-title {
          font-size: 13px;
          font-weight: 600;
          color: #1B3A5C;
          margin-bottom: 5px;
        }

        .dis-card-desc {
          font-size: 12px;
          color: #666;
          line-height: 1.55;
          font-weight: 300;
        }

        .dis-section {
          background: #ffffff;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1px solid #dde3ed;
          overflow: hidden;
          transition: box-shadow 0.2s, border-color 0.2s;
        }

        .dis-section:hover {
          box-shadow: 0 4px 20px rgba(27,58,92,0.09);
          border-color: #b8c8dc;
        }

        .dis-section-btn {
          width: 100%;
          text-align: left;
          padding: 20px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background 0.15s;
        }

        .dis-section-btn:hover { background: #f5f8fc; }
        .dis-section-btn.open { background: #edf2f8; }

        .dis-section-num {
          width: 34px;
          height: 34px;
          border-radius: 4px;
          background: #1B3A5C;
          color: #7aabcc;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dis-section-title {
          flex: 1;
          font-family: 'Libre Baskerville', serif;
          font-size: 15.5px;
          font-weight: 700;
          color: #1B3A5C;
          line-height: 1.3;
        }

        .dis-section-arrow {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          background: #e4eaf4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s, background 0.15s;
          color: #1B3A5C;
          font-size: 16px;
          font-weight: 700;
        }

        .dis-section-arrow.open {
          transform: rotate(45deg);
          background: #1B3A5C;
          color: #7aabcc;
        }

        .dis-section-body {
          padding: 4px 24px 28px 74px;
          animation: disFade 0.2s ease;
        }

        @keyframes disFade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dis-divider {
          height: 1px;
          background: linear-gradient(to right, #c0d0e0, transparent);
          margin-bottom: 20px;
        }

        .dis-section-text {
          font-size: 13.5px;
          line-height: 1.95;
          color: #3a3a3a;
          white-space: pre-wrap;
          font-weight: 300;
        }

        .dis-contact-strip {
          background: #1B3A5C;
          padding: 52px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .dis-contact-strip::before {
          content: '!';
          position: absolute;
          font-family: 'Libre Baskerville', serif;
          font-size: 260px;
          font-weight: 700;
          opacity: 0.03;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          pointer-events: none;
          line-height: 1;
        }

        .dis-contact-strip h3 {
          font-family: 'Libre Baskerville', serif;
          font-size: 26px;
          color: #fff;
          margin: 0 0 8px;
          position: relative;
        }

        .dis-contact-strip p {
          font-size: 13.5px;
          color: #7aabcc;
          margin: 0 0 28px;
          font-weight: 300;
          position: relative;
        }

        .dis-contact-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }

        .dis-btn-solid {
          background: #fff;
          color: #1B3A5C;
          padding: 12px 28px;
          border-radius: 7px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13.5px;
          transition: opacity 0.2s;
        }

        .dis-btn-solid:hover { opacity: 0.88; }

        .dis-btn-ghost {
          background: transparent;
          color: #fff;
          padding: 12px 28px;
          border-radius: 7px;
          text-decoration: none;
          font-weight: 400;
          font-size: 13.5px;
          border: 1px solid rgba(255,255,255,0.3);
          transition: background 0.2s;
        }

        .dis-btn-ghost:hover { background: rgba(255,255,255,0.08); }

        @media (max-width: 600px) {
          .dis-section-body { padding-left: 24px; }
          .dis-section-num { display: none; }
        }
      `}</style>

      <div className="dis-root">

        {/* Hero */}
        <div className="dis-hero">
          <div className="dis-hero-inner mt-[50px]">
            <p className="dis-hero-eyebrow">Legal & Compliance</p>
            <span className="dis-hero-icon">⚖️</span>
            <h1 className="dis-hero-title">Website Disclaimer</h1>
            <div className="dis-hero-meta">
              <div>L&L Staffing Solution LLC · llstaffingsolution.com</div>
              <div>91 Mill Street, Suite 1 · Randolph, MA 02368</div>
            </div>
            <div className="dis-hero-pill">
              Effective: May 17, 2025 &nbsp;·&nbsp; Last Updated: May 17, 2026
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="dis-body">

          {/* Warning bar */}
          <div className="dis-warning">
            <span className="dis-warning-icon">⚠️</span>
            <p>
              <strong>Important:</strong> The information on <strong>www.llstaffingsolution.com</strong> is provided for general informational purposes only. It does not constitute medical, legal, financial, or employment advice. By using this Site, you acknowledge and accept this disclaimer in full.
            </p>
          </div>

          {/* Summary cards */}
          <div className="dis-cards">
            {disclaimerCards.map((c, i) => (
              <div className="dis-card" key={i}>
                <div className="dis-card-icon">{c.icon}</div>
                <div className="dis-card-title">{c.title}</div>
                <div className="dis-card-desc">{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Accordion */}
          {sections.map((section, idx) => {
            const isOpen = !!openSections[idx]
            return (
              <div className="dis-section" key={section.id}>
                <button
                  className={`dis-section-btn${isOpen ? ' open' : ''}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="dis-section-num">{section.id}</span>
                  <span className="dis-section-title">{section.heading}</span>
                  <span className={`dis-section-arrow${isOpen ? ' open' : ''}`}>+</span>
                </button>

                {isOpen && (
                  <div className="dis-section-body">
                    <div className="dis-divider" />
                    <p className="dis-section-text">{section.text}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact strip */}
        <div className="dis-contact-strip">
          <h3>Need Clarification?</h3>
          <p>If you have questions about this disclaimer or any content on our Site, reach out to us directly.</p>
          <div className="dis-contact-btns">
            <a href="mailto:l-l@llstaffingsolution.com" className="dis-btn-solid">Contact Us</a>
            <a href="mailto:info@llstaffingsolution.com" className="dis-btn-ghost">Privacy Officer</a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default websitedisclaimer