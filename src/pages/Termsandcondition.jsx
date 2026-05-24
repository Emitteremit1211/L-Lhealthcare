import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    id: 1,
    heading: 'Acceptance of Terms',
    text: `These Terms and Conditions of Use ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and L&L Healthcare Staffing Solution LLC, a Massachusetts limited liability company operating as llstaffingsolution.com ("L&L," "we," "us," or "our"), governing your access to and use of the website located at www.llstaffingsolution.com, including all content, features, services, and functionality offered on or through the website (collectively, the "Site").

BY ACCESSING, BROWSING, OR OTHERWISE USING THIS SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. If you do not agree to these Terms, you must immediately cease use of the Site.

You represent and warrant that you are at least eighteen (18) years of age and have the legal capacity to enter into a binding agreement. If you are accessing the Site on behalf of an organization or entity, you represent and warrant that you have the authority to bind such organization to these Terms.`
  },
  {
    id: 2,
    heading: 'Description of Services',
    text: `L&L Staffing Solution LLC provides professional healthcare staffing, caregiver placement, personal care aide (PCA) coordination, and related services within the Commonwealth of Massachusetts. Our services are designed to assist individuals who require assistance with activities of daily living, personal care, companionship, and healthcare support, with a focus on enabling clients to remain safely in their homes and communities.

2.1 Website Purpose
The Site serves as an informational platform describing our services, facilitating caregiver recruitment, enabling prospective client and family inquiries, and providing general information about healthcare staffing options. The Site does not itself constitute the delivery of care services.

2.2 Service Agreements
Actual healthcare staffing and care services are governed exclusively by separate written Service Agreements and/or Employment Agreements entered into directly between L&L Staffing Solution LLC and the respective client, family, or caregiver. Nothing on this Site creates a care services contract, an employment contract, or any other binding obligation to provide services except as expressly set forth in a duly executed written agreement.

2.3 Service Availability
Service availability, caregiver availability, geographic coverage areas, and pricing are subject to change without notice. We encourage prospective clients and applicants to contact our office directly for the most current service information.`
  },
  {
    id: 3,
    heading: 'User Responsibilities',
    text: `As a condition of your use of this Site, you agree to the following responsibilities and restrictions:

Accuracy of Information: You agree to provide accurate, current, and complete information in connection with any form submission, inquiry, or application submitted through the Site. You accept responsibility for all information you provide to L&L Staffing Solution LLC.

Prohibited Conduct: You agree that you will not:
• Use the Site for any unlawful purpose or in violation of any applicable federal, state, or local law or regulation;
• Attempt to gain unauthorized access to any portion of the Site, its servers, or any system connected to the Site;
• Use any automated scraping tool, robot, spider, crawler, or similar automated data collection or extraction tool to access, copy, or collect content from the Site without our prior written consent;
• Reverse engineer, disassemble, or decompile any software, code, or technology used in connection with the Site;
• Transmit any virus, malware, or other malicious code through the Site;
• Submit false, misleading, or fraudulent employment applications, client inquiries, or other communications; or
• Impersonate any person or entity or misrepresent your affiliation with any person or entity.

Compliance: You agree to comply with all applicable local, state, and federal laws and regulations in connection with your use of this Site and any services engaged through L&L Staffing Solution LLC.`
  },
  {
    id: 4,
    heading: 'Intellectual Property',
    text: `4.1 Ownership
All content on this Site, including but not limited to text, articles, descriptions, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the overall design and "look and feel" of the Site (collectively, "L&L Content"), is the exclusive property of L&L Staffing Solution LLC or its content suppliers and is protected by United States and international copyright, trademark, trade dress, and other intellectual property laws.

4.2 Limited License
Subject to your compliance with these Terms, L&L Staffing Solution LLC grants you a limited, non-exclusive, non-transferable, revocable license to access and use this Site solely for your personal, non-commercial informational purposes. This license does not include any right to:
• Reproduce, publish, distribute, or create derivative works based on L&L Content;
• Use L&L Content for commercial purposes without our prior express written consent;
• Remove or alter any proprietary notices or labels on L&L Content; or
• Frame or mirror any portion of the Site on any other website or platform.

4.3 Trademarks
L&L Staffing Solution LLC, llstaffingsolution.com, and associated logos and service marks are trademarks or service marks of L&L Staffing Solution LLC. Nothing in these Terms grants you any right or license to use our trademarks without our prior written consent.`
  },
  {
    id: 5,
    heading: 'Job Applicant and Caregiver Terms',
    text: `5.1 No Guarantee of Employment
The submission of a job application, caregiver profile, resume, or any other employment-related materials through this Site or by any other means does not constitute an offer of employment or guarantee of placement. All applicants are subject to L&L Staffing Solution LLC's standard hiring process, which may include multiple interviews, reference checks, and credentialing verification.

5.2 Background Screening Requirements
All applicants for caregiver, home health aide, personal care aide, or other direct care and service positions are subject to:
• Criminal background checks and CORI (Criminal Offender Record Information) checks pursuant to MGL c.6, §§167–178B and applicable MA Department of Public Health regulations;
• Reference verification;
• Credential and licensure verification, including Home Health Aide certification checks with the MA Certified Home Care Aide Registry (CHCF);
• OIG (Office of Inspector General) and SAM (System for Award Management) exclusion list screening;
• Drug screening, where applicable and as permitted by Massachusetts law; and
• Employment eligibility verification pursuant to the Immigration Reform and Control Act (IRCA), 8 U.S.C. §1324a (Form I-9).

5.3 Misrepresentation
Any misrepresentation or omission of material information in a job application, caregiver profile, or any communication with L&L Staffing Solution LLC including but not limited to misrepresentation of credentials, licensure, certifications, employment history, or criminal record shall be grounds for immediate disqualification from consideration, termination of any existing placement, and may be subject to reporting to appropriate regulatory authorities.

5.4 At-Will Employment
To the extent an employment or contractor relationship is established between L&L Staffing Solution LLC and a caregiver or staff member, such relationship shall be at-will unless otherwise expressly set forth in a separate written agreement signed by an authorized officer of L&L Staffing Solution LLC.`
  },
  {
    id: 6,
    heading: 'Service Agreements',
    text: `The actual provision of healthcare staffing, caregiver placement, PCA coordination, and related services is governed exclusively by separate written agreements executed between L&L Staffing Solution LLC and each client, family representative, or care coordinator. These Terms of Use apply solely to your access to and use of this Site and do not create, modify, or supersede any such service agreement.

In the event of any conflict between these Terms and a written service agreement, the written service agreement shall control with respect to the services covered therein.`
  },
  {
    id: 7,
    heading: 'Limitation of Liability',
    text: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, L&L Staffing Solution LLC, its officers, members, managers, employees, agents, contractors, affiliates, and successors (collectively, "L&L Parties") shall not be liable to you or any third party for any:

• Indirect, incidental, special, consequential, punitive, or exemplary damages;
• Loss of profits, revenue, data, goodwill, or business opportunities;
• Damages arising from your use of or inability to use the Site;
• Errors, omissions, or inaccuracies in Site content;
• Unauthorized access to or alteration of your data transmissions; or
• Any matter beyond L&L's reasonable control.

In the event that L&L Staffing Solution LLC is found liable to you for any claim arising out of or related to your use of this Site, L&L's maximum aggregate liability to you shall not exceed the total fees paid by you to L&L Staffing Solution LLC in the thirty (30) day period immediately preceding the event giving rise to the claim.

Important Limitation: Nothing in this Section shall operate to limit or exclude L&L Staffing Solution LLC's liability for personal injury caused directly by its own negligence or intentional misconduct, or for any other liability that cannot be excluded under applicable Massachusetts or federal law.`
  },
  {
    id: 8,
    heading: 'Disclaimer of Warranties',
    text: `THIS SITE AND ALL CONTENT, INFORMATION, SERVICES, AND MATERIALS AVAILABLE ON OR THROUGH THE SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

To the fullest extent permitted by applicable law, L&L Staffing Solution LLC expressly disclaims all warranties, including but not limited to:

• Implied warranties of merchantability, fitness for a particular purpose, and non-infringement;
• Any warranty that the Site will be uninterrupted, error-free, or free of viruses or other harmful components;
• Any warranty as to the accuracy, completeness, timeliness, or reliability of any content or information on the Site; and
• Any warranty that defects in the Site will be corrected.

L&L Staffing Solution LLC does not warrant or make any representation regarding the use or results of use of any information, content, materials, or services on the Site.`
  },
  {
    id: 9,
    heading: 'Indemnification',
    text: `You agree to defend, indemnify, and hold harmless L&L Solution LLC and the L&L Parties from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees and court costs) arising out of or related to:

(a) your use of or access to the Site;
(b) your violation of any provision of these Terms;
(c) your violation of any applicable law, rule, or regulation;
(d) any information you submit to L&L Staffing Solution LLC through the Site, including any misrepresentation; or
(e) your infringement of any third-party intellectual property rights.

L&L Staffing Solution LLC reserves the right, at its own expense, to assume exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate fully with L&L in asserting any available defenses.`
  },
  {
    id: 10,
    heading: 'Governing Law and Jurisdiction',
    text: `10.1 Governing Law
These Terms and your use of this Site shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law principles.

10.2 Jurisdiction and Venue
Any legal action or proceeding arising out of or relating to these Terms or your use of the Site shall be brought exclusively in the state courts of the Commonwealth of Massachusetts, specifically in the Superior Court of Norfolk County, Massachusetts, or in the United States District Court for the District of Massachusetts, and you hereby consent to the personal jurisdiction and venue of such courts.

10.3 Waiver of Jury Trial
TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AND L&L STAFFING SOLUTION LLC EACH WAIVE ANY RIGHT TO A JURY TRIAL IN CONNECTION WITH ANY ACTION OR PROCEEDING ARISING UNDER THESE TERMS.`
  },
  {
    id: 11,
    heading: 'Modification of Terms',
    text: `L&L Staffing Solution LLC reserves the right to amend, modify, update, or replace these Terms at any time in its sole discretion. Changes will be effective immediately upon posting to the Site, with the "Last Updated" date revised accordingly.

Your continued use of the Site following the posting of revised Terms constitutes your binding acceptance of the modified Terms. It is your responsibility to periodically review these Terms for updates. If any modification is unacceptable to you, your sole remedy is to discontinue use of the Site.`
  },
  {
    id: 12,
    heading: 'Termination of Access',
    text: `L&L Staffing Solution LLC reserves the right, in its sole discretion and without prior notice, to terminate or suspend your access to all or any part of the Site at any time, for any reason, including but not limited to your actual or suspected violation of these Terms, any applicable law, or the rights of any third party.

Upon termination, your right to use the Site shall immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to Sections 4, 7, 8, 9, 10, and 13.`
  },
  {
    id: 13,
    heading: 'Severability and Entire Agreement',
    text: `13.1 Severability
If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.

13.2 Entire Agreement
These Terms, together with our Privacy Policy, Cookie Policy, and Website Disclaimer (all incorporated herein by reference), constitute the entire agreement between you and L&L Staffing Solution LLC with respect to your use of this Site and supersede all prior and contemporaneous negotiations, representations, warranties, agreements, and understandings between the parties regarding such subject matter.

13.3 No Waiver
L&L Staffing Solution LLC's failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision unless acknowledged and agreed to by L&L in writing.`
  },
  {
    id: 14,
    heading: 'Contact Information',
    text: `For questions, concerns, or notices regarding these Terms and Conditions of Use, please contact:

Company Name: L&L Staffing Solution LLC
Address: 91 Mill Street, Suite 1, Randolph, MA 02368
General Email: l-l@llstaffingsolution.com
Privacy Officer Email: info@llstaffingsolution.com
Website: www.llstaffingsolution.com`
  }
]

const highlights = [
  { icon: '📋', title: 'Binding Agreement', desc: 'Using this site means you accept these terms in full.' },
  { icon: '🏥', title: 'Healthcare Staffing', desc: 'Services governed by separate written agreements.' },
  { icon: '⚖️', title: 'Massachusetts Law', desc: 'Disputes resolved under Commonwealth of MA jurisdiction.' },
  { icon: '🔒', title: 'No Warranties', desc: 'Site provided "as is" see Section 8 for details.' },
]

const Termsandcondition = () => {
  const [openSections, setOpenSections] = useState({ 0: true })

  const toggle = (idx) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .tc-root {
          font-family: 'DM Sans', sans-serif;
          background: #f3f5f8;
          min-height: 100vh;
          color: #1a1a1a;
        }

        .tc-hero {
          background: #1B3A5C;
          padding: 72px 24px 72px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .tc-hero::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          pointer-events: none;
        }

        .tc-hero::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.025);
          pointer-events: none;
        }

        .tc-hero-inner {
          position: relative;
          z-index: 1;
        }

        .tc-hero-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #7aabcc;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .tc-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5.5vw, 58px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px;
          line-height: 1.1;
        }

        .tc-hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2.5vw, 22px);
          font-style: italic;
          color: #5ba3d9;
          margin: 0 0 20px;
        }

        .tc-hero-meta {
          font-size: 13px;
          color: #7aabcc;
          line-height: 1.8;
        }

        .tc-hero-dates {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          margin-top: 18px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 12px;
          color: #7aabcc;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tc-hero-dates span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #5ba3d9;
        }

        .tc-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        .tc-alert {
          background: #fff3cd;
          border: 1px solid #ffe69c;
          border-left: 4px solid #1B3A5C;
          border-radius: 0 8px 8px 0;
          padding: 16px 20px;
          margin-bottom: 28px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .tc-alert-icon {
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .tc-alert p {
          margin: 0;
          font-size: 13px;
          color: #6b5900;
          line-height: 1.65;
          font-weight: 400;
        }

        .tc-alert strong {
          color: #1B3A5C;
        }

        .tc-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-bottom: 36px;
        }

        .tc-highlight-card {
          background: #fff;
          border-radius: 10px;
          padding: 20px 18px;
          border: 1px solid #dde3ed;
          border-bottom: 3px solid #1B3A5C;
          box-shadow: 0 2px 8px rgba(27,58,92,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .tc-highlight-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(27,58,92,0.1);
        }

        .tc-highlight-icon {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .tc-highlight-title {
          font-size: 13px;
          font-weight: 600;
          color: #1B3A5C;
          margin-bottom: 5px;
        }

        .tc-highlight-desc {
          font-size: 12px;
          color: #666;
          line-height: 1.55;
          font-weight: 300;
        }

        .tc-section {
          background: #ffffff;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1px solid #dde3ed;
          overflow: hidden;
          transition: box-shadow 0.2s, border-color 0.2s;
        }

        .tc-section:hover {
          box-shadow: 0 4px 20px rgba(27,58,92,0.09);
          border-color: #b8c8dc;
        }

        .tc-section-btn {
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

        .tc-section-btn:hover { background: #f5f8fc; }
        .tc-section-btn.open { background: #edf2f8; }

        .tc-section-num {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #1B3A5C;
          color: #7aabcc;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .tc-section-title {
          flex: 1;
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          color: #1B3A5C;
          line-height: 1.3;
        }

        .tc-section-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
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

        .tc-section-arrow.open {
          transform: rotate(45deg);
          background: #1B3A5C;
          color: #7aabcc;
        }

        .tc-section-body {
          padding: 4px 24px 28px 74px;
          animation: tcFade 0.2s ease;
        }

        @keyframes tcFade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tc-divider {
          height: 1px;
          background: linear-gradient(to right, #c0d0e0, transparent);
          margin-bottom: 20px;
        }

        .tc-section-text {
          font-size: 13.5px;
          line-height: 1.95;
          color: #3a3a3a;
          white-space: pre-wrap;
          font-weight: 300;
        }

        .tc-contact-strip {
          background: #1B3A5C;
          padding: 52px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .tc-contact-strip::before {
          content: '§';
          position: absolute;
          font-size: 200px;
          font-family: 'Cormorant Garamond', serif;
          opacity: 0.04;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          pointer-events: none;
          line-height: 1;
        }

        .tc-contact-strip h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          color: #fff;
          margin: 0 0 8px;
          position: relative;
        }

        .tc-contact-strip p {
          font-size: 13.5px;
          color: #7aabcc;
          margin: 0 0 28px;
          font-weight: 300;
          position: relative;
        }

        .tc-contact-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }

        .tc-btn-solid {
          background: #fff;
          color: #1B3A5C;
          padding: 12px 28px;
          border-radius: 7px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13.5px;
          transition: opacity 0.2s;
        }

        .tc-btn-solid:hover { opacity: 0.88; }

        .tc-btn-ghost {
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

        .tc-btn-ghost:hover { background: rgba(255,255,255,0.08); }

        @media (max-width: 600px) {
          .tc-section-body { padding-left: 24px; }
          .tc-section-num { display: none; }
        }
      `}</style>

      <div className="tc-root">

        {/* Hero */}
        <div className="tc-hero">
          <div className="tc-hero-inner mt-[50px]">
            <p className="tc-hero-eyebrow">Legal & Compliance</p>
            <h1 className="tc-hero-title">Terms & Conditions</h1>
            <p className="tc-hero-subtitle">of Use llstaffingsolution.com</p>
            <div className="tc-hero-meta">
              <div>L&L Staffing Solution LLC</div>
              <div>91 Mill Street, Suite 1 · Randolph, MA 02368</div>
            </div>
            <div className="tc-hero-dates">
              Effective: May 17, 2025
              <span />
              Last Updated: May 17, 2026
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="tc-body">

          {/* Legal alert */}
          <div className="tc-alert">
            <span className="tc-alert-icon">⚠️</span>
            <p>
              <strong>Please read these Terms carefully.</strong> By accessing or using <strong>www.llstaffingsolution.com</strong>, you agree to be legally bound by these Terms and Conditions. If you do not agree, please discontinue use of the Site immediately.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="tc-highlights">
            {highlights.map((h, i) => (
              <div className="tc-highlight-card" key={i}>
                <div className="tc-highlight-icon">{h.icon}</div>
                <div className="tc-highlight-title">{h.title}</div>
                <div className="tc-highlight-desc">{h.desc}</div>
              </div>
            ))}
          </div>

          {/* Accordion */}
          {sections.map((section, idx) => {
            const isOpen = !!openSections[idx]
            return (
              <div className="tc-section" key={section.id}>
                <button
                  className={`tc-section-btn${isOpen ? ' open' : ''}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="tc-section-num">{section.id}</span>
                  <span className="tc-section-title">{section.heading}</span>
                  <span className={`tc-section-arrow${isOpen ? ' open' : ''}`}>+</span>
                </button>

                {isOpen && (
                  <div className="tc-section-body">
                    <div className="tc-divider" />
                    <p className="tc-section-text">{section.text}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact strip */}
        <div className="tc-contact-strip">
          <h3>Questions About These Terms?</h3>
          <p>Our team is available to clarify any aspect of our Terms and Conditions.</p>
          <div className="tc-contact-btns">
            <a href="mailto:l-l@llstaffingsolution.com" className="tc-btn-solid">Contact Us</a>
            <a href="mailto:info@llstaffingsolution.com" className="tc-btn-ghost">Privacy Officer</a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Termsandcondition