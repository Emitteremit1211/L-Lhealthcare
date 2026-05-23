import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    id: 1,
    heading: 'Our Commitment to Data Protection',
    text: `L&L Healthcare Staffing Solution LLC ("L&L," "we," "us," or "our"), operating as llstaffingsolution.com, takes its obligations as a custodian of personal information and protected health information (PHI) with the utmost seriousness. We recognize that the individuals we serve — our healthcare staffing clients, their families, our caregivers, and our staff — entrust us with sensitive personal and health information as an essential part of our service relationship. This trust is foundational to our mission, and we are deeply committed to protecting that information from unauthorized access, use, disclosure, modification, or destruction.

Our data protection program is designed to comply with, and in many cases exceed, the requirements of the following applicable laws and regulations:

• Massachusetts 201 CMR 17.00 — Standards for the Protection of Personal Information of Residents of the Commonwealth, requiring a comprehensive Written Information Security Program (WISP);
• MGL c.93H — Massachusetts data security breach notification law;
• MGL c.66A — Massachusetts Fair Information Practices Act;
• HIPAA Privacy Rule — 45 CFR Part 164, Subparts A and E, governing the use and disclosure of Protected Health Information (PHI);
• HIPAA Security Rule — 45 CFR Part 164, Subparts A and C, requiring administrative, physical, and technical safeguards for electronic PHI (ePHI); and
• HITECH Act — Health Information Technology for Economic and Clinical Health Act, strengthening HIPAA enforcement and breach notification requirements.`
  },
  {
    id: 2,
    heading: 'Categories of Data We Protect',
    text: `L&L Healthcare Staffing Solution LLC maintains protective measures for the following categories of sensitive information:

2.1 Client Protected Health Information (PHI)
Individually identifiable health information about our home care clients, including:
• Medical diagnoses, conditions, care plans, and treatment histories;
• Medication lists, physician orders, and prescription information;
• Attending physician, specialist, and care coordinator information;
• Health insurance information, MassHealth/Medicaid identifiers, and prior authorization records; and
• Functional assessments and activities of daily living documentation.

2.2 Caregiver and Employee Personally Identifiable Information (PII)
Personal information relating to our caregivers, home health aides, personal care aides, and other staff, including:
• Social Security Numbers, government-issued identification numbers, and Form I-9 documentation;
• Background check, CORI check, and criminal history data;
• Professional certifications, licensure records, and credentialing data;
• Contact information, home addresses, and emergency contact details; and
• Payroll, direct deposit, and tax withholding information.

2.3 Financial Records
• Client billing records, invoices, and payment histories;
• Insurance claims data and remittance information;
• Caregiver payroll records and W-2/1099 tax documents; and
• Banking and ACH information for payroll and client billing.

2.4 Employment and Operational Records
• Personnel files and employment history;
• Performance evaluations and disciplinary records;
• Training records and certification renewals; and
• Incident reports and quality assurance documentation.`
  },
  {
    id: 3,
    heading: 'Our Written Information Security Program (WISP)',
    text: `L&L Healthcare Staffing Solution LLC maintains a Written Information Security Program (WISP) as required by Massachusetts 201 CMR 17.00. Our WISP is a comprehensive, documented security framework that governs how we collect, store, access, transmit, and dispose of personal information about Massachusetts residents.

3.1 WISP Components
Our WISP addresses the following core areas:

• Physical Safeguards: Policies for the secure storage of paper records, access controls to our office premises, and procedures for the secure disposal of paper documents containing personal information;
• Technical Controls: Technical measures governing electronic access to personal information, encryption standards, network security, and software security;
• Administrative Safeguards: Personnel policies, training requirements, vendor management, and incident response procedures; and
• Risk Assessment: Periodic evaluation of internal and external threats to the security of personal information, with documented remediation of identified vulnerabilities.

3.2 Annual Review and Risk Assessment
Our WISP is reviewed and updated at least annually, or whenever there is a material change in our business practices, technology environment, or applicable legal requirements. Annual risk assessments are conducted to identify foreseeable internal and external risks to the security, confidentiality, and integrity of personal information.

3.3 Workforce Security Training
All employees and contractors who have access to personal information or PHI receive security awareness training at the time of hire and at least annually thereafter. Training covers HIPAA Privacy and Security Rules, Massachusetts data protection requirements, phishing and social engineering awareness, password hygiene, and our incident reporting procedures.`
  },
  {
    id: 4,
    heading: 'Technical Safeguards',
    text: `L&L Healthcare Staffing Solution LLC implements the following technical safeguards to protect electronic personal information and ePHI:

• Encryption in Transit: All electronic transmission of personal information and ePHI over public or untrusted networks is encrypted using Transport Layer Security (TLS) version 1.2 or higher (TLS 1.3 preferred). Unencrypted transmission of PHI or PII over public networks is prohibited;

• Encryption at Rest: Electronic personal information and ePHI stored on servers, laptops, portable storage devices, and mobile devices is encrypted using industry-standard encryption protocols (AES-256 or equivalent);

• Role-Based Access Controls (RBAC): Access to electronic personal information and ePHI is restricted to workforce members who require access to perform their specific job functions. The principle of minimum necessary access is applied to all systems containing sensitive data;

• Multi-Factor Authentication (MFA): Multi-factor authentication is required for all staff accounts that access systems containing PHI, PII, financial records, or other sensitive information, including remote access and cloud-based systems;

• Audit Logging: Access to systems containing PHI and sensitive personal information is logged and audited. Audit logs are retained and reviewed periodically to detect unauthorized access or anomalous activity;

• Regular Software Patching: Operating systems, applications, and security software are updated and patched on a regular basis to remediate known vulnerabilities; and

• Vulnerability Scanning and Penetration Testing: Periodic vulnerability assessments are conducted on systems and networks that process or store personal information, with documented remediation of identified vulnerabilities.`
  },
  {
    id: 5,
    heading: 'Administrative Safeguards',
    text: `• Privacy Officer: L&L Healthcare Staffing Solution LLC has designated a Privacy Officer responsible for overseeing our HIPAA compliance program, privacy policies, and response to privacy-related complaints and inquiries. The Privacy Officer may be contacted at info@llstaffingsolution.com;

• Security Officer: L&L Healthcare Staffing Solution LLC has designated a Security Officer responsible for our WISP, HIPAA Security Rule compliance, and the technical security of our information systems;

• Confidentiality Agreements: All employees and contractors are required to execute confidentiality and non-disclosure agreements as a condition of access to personal information and PHI;

• HIPAA Workforce Training: All workforce members with access to PHI receive HIPAA Privacy and Security training as required by 45 CFR §164.530(b) and §164.308(a)(5);

• Vendor Management and Business Associate Agreements (BAAs): All vendors and service providers who create, receive, maintain, or transmit PHI on our behalf are required to execute a HIPAA-compliant Business Associate Agreement (BAA) before any PHI is shared, as required by 45 CFR §164.308(b). We conduct due diligence on all such vendors; and

• Incident Response Procedures: L&L Healthcare Staffing Solution LLC maintains documented incident response procedures for identifying, containing, investigating, and reporting data security incidents and breaches, consistent with HIPAA and MGL c.93H requirements.`
  },
  {
    id: 6,
    heading: 'Physical Safeguards',
    text: `• Secure Storage of Paper Records: Paper documents containing personal information or PHI are stored in locked filing cabinets or secure storage rooms. Access to such records is restricted to authorized personnel on a need-to-know basis;

• Clean Desk Policy: All employees are required to secure or store away paper documents containing personal information or PHI when not in active use, particularly at the end of each business day. Computer screens displaying sensitive information must be locked when unattended;

• Locked Filing and Secure Disposal: Paper documents containing personal information or PHI are disposed of using cross-cut shredding or other secure destruction methods. We do not dispose of such documents in ordinary trash or recycling;

• Visitor Access Controls: Access to our office premises is controlled. Visitors are required to sign in and are accompanied by a staff member at all times in areas where personal information may be visible or accessible; and

• Workstation Controls: Workstations used to access ePHI are positioned to minimize the possibility of unauthorized viewing. Screen lock policies are enforced.`
  },
  {
    id: 7,
    heading: 'Breach Notification',
    text: `7.1 Massachusetts Data Breach Notification (MGL c.93H)
In the event of a security breach involving the personal information of Massachusetts residents, L&L Healthcare Staffing Solution LLC will:

• Notify all affected Massachusetts residents in writing within thirty (30) days of the discovery and confirmation of the breach, as required by MGL c.93H, §3;
• Notify the Massachusetts Attorney General's Office and the Director of Consumer Affairs and Business Regulation, concurrently with or prior to notifying affected individuals; and
• Provide each affected individual with notification that includes: (a) the nature of the breach; (b) the categories of personal information involved; (c) the approximate date of the breach; (d) steps taken to secure the data; and (e) steps the affected individual may take to protect themselves from potential identity theft or fraud.

7.2 HIPAA Breach Notification (45 CFR §§164.400–414)
For breaches of unsecured PHI covered by HIPAA, L&L Healthcare Staffing Solution LLC will:

• Notify each affected individual without unreasonable delay and no later than sixty (60) calendar days after discovery of the breach;
• Notify the Secretary of the U.S. Department of Health and Human Services (HHS) through the HHS Office for Civil Rights (OCR) breach reporting portal:
  – For breaches affecting 500 or more individuals: notification within 60 days of discovery; and
  – For breaches affecting fewer than 500 individuals: notification logged annually through the HHS OCR web portal by March 1 of the following calendar year;
• For breaches affecting 500 or more residents of a state or jurisdiction, provide notification to prominent media outlets in that state, as required by 45 CFR §164.406; and
• Conduct a thorough investigation and risk assessment, and document all breach determinations and response activities.

7.3 Breach Notification Content
All breach notifications will include, to the extent known at the time of notification:
• A description of the nature of the breach and how it occurred;
• The categories and approximate number of individuals and records affected;
• The types of information involved;
• Steps L&L Healthcare Staffing Solution LLC has taken to investigate, contain, and remediate the breach;
• Steps affected individuals can take to protect themselves; and
• Contact information for L&L Healthcare Staffing Solution LLC, including the Privacy Officer.`
  },
  {
    id: 8,
    heading: 'Data Subject Rights',
    text: `8.1 Massachusetts Residents
Massachusetts residents may exercise the following rights with respect to their personal information held by L&L Healthcare Staffing Solution LLC:

• Right of Access: Request a copy of the personal information we hold about you, pursuant to MGL c.66A;
• Right to Correction: Request correction of inaccurate, incomplete, or outdated personal information; and
• Right to Request Deletion: Request deletion of your personal information, subject to our legal obligations to retain certain records under applicable law.

8.2 HIPAA-Covered Individuals
Individuals whose information is PHI subject to HIPAA have the following additional rights under 45 CFR §§164.524–528:

• Right of Access to PHI (45 CFR §164.524): Request access to and obtain a copy of your PHI maintained in our designated record sets;
• Right to Amend PHI (45 CFR §164.526): Request amendment or correction of PHI that you believe to be inaccurate or incomplete;
• Right to an Accounting of Disclosures (45 CFR §164.528): Request an accounting of certain disclosures of your PHI made by L&L Healthcare Staffing Solution LLC;
• Right to Request Restrictions (45 CFR §164.522(a)): Request restrictions on certain uses and disclosures of your PHI; and
• Right to Confidential Communications (45 CFR §164.522(b)): Request that we communicate with you about your PHI in a specific manner or at a specific location.

8.3 How to Submit Requests
To exercise any of the above rights, please submit a written request — including your full name, contact information, and a description of the specific right you wish to exercise — to:
• By Email: info@llstaffingsolution.com
• By Mail: L&L Healthcare Staffing Solution LLC, Attn: Privacy Officer, 91 Mill Street, Suite 1, Randolph, MA 02368

L&L Healthcare Staffing Solution LLC will acknowledge receipt of your request promptly and will respond substantively within thirty (30) days of receipt of a verifiable written request, as required by applicable law.`
  },
  {
    id: 9,
    heading: 'Data Transfers',
    text: `All personal information and PHI collected and processed by L&L Healthcare Staffing Solution LLC is stored and processed within the United States. We do not transfer personal information or PHI to recipients located outside of the United States. Our data storage systems, servers, and cloud service providers are located in the United States and are subject to U.S. law, including applicable HIPAA, HITECH, and Massachusetts data protection requirements.

If this policy changes in the future, we will update this Data Protection Statement and obtain any required consents or provide required notifications to affected individuals prior to implementing any international data transfers.`
  },
  {
    id: 10,
    heading: 'Contact Our Privacy Officer',
    text: `L&L Healthcare Staffing Solution LLC has designated a Privacy Officer to oversee our data protection program and to serve as the primary point of contact for privacy-related inquiries, complaints, and requests.

Company Name: L&L Healthcare Staffing Solution LLC
Attn: Privacy Officer
Address: 91 Mill Street, Suite 1, Randolph, MA 02368
Privacy Email: info@llstaffingsolution.com
General Email: l-l@llstaffingsolution.com
Website: www.llstaffingsolution.com

We take all privacy inquiries and complaints seriously and will respond to all communications in a timely and professional manner. If you believe your privacy rights have been violated, we encourage you to first contact our Privacy Officer directly so that we may address your concerns.`
  },
  {
    id: 11,
    heading: 'Regulatory Contacts',
    text: `If you believe your privacy rights or data protection rights have not been adequately addressed by L&L Healthcare Staffing Solution LLC, you have the right to file a complaint directly with the applicable regulatory authority:

Massachusetts Attorney General's Office
Jurisdiction: Massachusetts data security and consumer protection complaints (MGL c.93H, c.93A)
Contact: One Ashburton Place, Boston, MA 02108 | Tel: (617) 727-2200 | www.mass.gov/ago

HHS Office for Civil Rights (OCR)
Jurisdiction: HIPAA Privacy and Security complaints
Contact: 200 Independence Ave., SW, Washington, DC 20201 | Tel: 1-800-368-1019 | TTY: 1-800-537-7697 | www.hhs.gov/ocr

Federal Trade Commission (FTC)
Jurisdiction: Federal consumer protection and privacy
Contact: 600 Pennsylvania Avenue NW, Washington, DC 20580 | Tel: 1-877-382-4357 | reportfraud.ftc.gov

Filing a complaint with a regulatory authority will not result in any retaliation or adverse action by L&L Healthcare Staffing Solution LLC against you. We support your right to seek regulatory assistance.`
  }
]

const Dataprotection = () => {
  const [openSections, setOpenSections] = useState({ 0: true })

  const toggle = (idx) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap');

        .dp-root {
          font-family: 'Inter', sans-serif;
          background: #f2f4f3;
          min-height: 100vh;
          color: #1a1a1a;
        }

        .dp-hero {
          background: #1B3A5C;
          padding: 72px 24px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .dp-hero::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 48px;
          background: #f2f4f3;
          clip-path: ellipse(55% 100% at 50% 100%);
        }

        .dp-hero-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #5ba3d9;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .dp-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.15;
        }

        .dp-hero-meta {
          font-size: 13px;
          color: #7aabcc;
          line-height: 1.8;
        }

        .dp-hero-chips {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
          padding-bottom: 24px;
        }

        .dp-chip {
          background: rgba(109,191,160,0.15);
          border: 1px solid rgba(109,191,160,0.3);
          color: #5ba3d9;
          font-size: 11px;
          padding: 5px 14px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .dp-body {
          max-width: 840px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        .dp-shield-banner {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          background: #fff;
          border-radius: 12px;
          padding: 24px 28px;
          margin-bottom: 36px;
          border: 1px solid #d0dde8;
          box-shadow: 0 2px 16px rgba(18,48,42,0.06);
        }

        .dp-shield-icon {
          width: 44px;
          height: 44px;
          background: #1B3A5C;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 20px;
        }

        .dp-shield-text {
          flex: 1;
        }

        .dp-shield-text h4 {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 600;
          color: #1B3A5C;
        }

        .dp-shield-text p {
          margin: 0;
          font-size: 13px;
          color: #555;
          line-height: 1.65;
          font-weight: 300;
        }

        .dp-section {
          background: #ffffff;
          border-radius: 12px;
          margin-bottom: 10px;
          border: 1px solid #d0dde8;
          overflow: hidden;
          transition: box-shadow 0.2s, border-color 0.2s;
        }

        .dp-section:hover {
          box-shadow: 0 4px 24px rgba(18,48,42,0.09);
          border-color: #b0c8dc;
        }

        .dp-section-btn {
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

        .dp-section-btn:hover {
          background: #f6f9fc;
        }

        .dp-section-btn.open {
          background: #edf2f8;
        }

        .dp-section-num {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #1B3A5C;
          color: #5ba3d9;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dp-section-title {
          flex: 1;
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 600;
          color: #1B3A5C;
          line-height: 1.35;
        }

        .dp-section-arrow {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: #e0eaf4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s, background 0.15s;
          color: #1B3A5C;
          font-size: 16px;
          font-weight: 700;
        }

        .dp-section-arrow.open {
          transform: rotate(45deg);
          background: #1B3A5C;
          color: #5ba3d9;
        }

        .dp-section-body {
          padding: 4px 24px 28px 74px;
          animation: dpFade 0.2s ease;
        }

        @keyframes dpFade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dp-divider {
          height: 1px;
          background: linear-gradient(to right, #c0d0e0, transparent);
          margin-bottom: 20px;
        }

        .dp-section-text {
          font-size: 13.5px;
          line-height: 1.95;
          color: #3a3a3a;
          white-space: pre-wrap;
          font-weight: 300;
        }

        .dp-regs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
          margin: 36px 0;
        }

        .dp-reg-card {
          background: #fff;
          border: 1px solid #d0dde8;
          border-radius: 10px;
          padding: 16px 18px;
          border-top: 3px solid #1B3A5C;
        }

        .dp-reg-card h5 {
          margin: 0 0 4px;
          font-size: 12px;
          font-weight: 600;
          color: #1B3A5C;
          letter-spacing: 0.3px;
        }

        .dp-reg-card p {
          margin: 0;
          font-size: 11.5px;
          color: #666;
          line-height: 1.55;
          font-weight: 300;
        }

        .dp-contact-strip {
          background: #1B3A5C;
          padding: 52px 24px;
          text-align: center;
        }

        .dp-contact-strip h3 {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          color: #fff;
          margin: 0 0 8px;
        }

        .dp-contact-strip p {
          font-size: 13.5px;
          color: #7aabcc;
          margin: 0 0 28px;
          font-weight: 300;
        }

        .dp-contact-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .dp-btn-solid {
          background: #5ba3d9;
          color: #1B3A5C;
          padding: 12px 28px;
          border-radius: 7px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13.5px;
          transition: opacity 0.2s;
        }

        .dp-btn-solid:hover { opacity: 0.88; }

        .dp-btn-ghost {
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

        .dp-btn-ghost:hover { background: rgba(255,255,255,0.07); }

        @media (max-width: 600px) {
          .dp-section-body { padding-left: 24px; }
          .dp-section-num { display: none; }
          .dp-shield-banner { flex-direction: column; }
        }
      `}</style>

      <div className="dp-root">

        {/* Hero */}
        <div className="dp-hero mt-[50px]">
          <p className="dp-hero-eyebrow">Legal & Compliance</p>
          <h1 className="dp-hero-title">Data Protection Statement</h1>
          <div className="dp-hero-meta">
            <div>L&L Healthcare Staffing Solution LLC · llstaffingsolution.com</div>
            <div>91 Mill Street, Suite 1 · Randolph, MA 02368</div>
          </div>
          <div className="dp-hero-chips">
            <span className="dp-chip">Effective: May 17, 2025</span>
            <span className="dp-chip">Last Updated: May 17, 2026</span>
            <span className="dp-chip">HIPAA Compliant</span>
            <span className="dp-chip">201 CMR 17.00</span>
          </div>
        </div>

        {/* Body */}
        <div className="dp-body">

          {/* Shield banner */}
          <div className="dp-shield-banner">
            <div className="dp-shield-icon">🛡️</div>
            <div className="dp-shield-text">
              <h4>Your Data Is Protected</h4>
              <p>
                This Data Protection Statement describes how <strong>L&L Healthcare Staffing Solution LLC</strong> safeguards the personal information and protected health information (PHI) of our clients, caregivers, and staff, in full compliance with HIPAA, HITECH, MGL c.93H, MGL c.66A, and Massachusetts 201 CMR 17.00.
              </p>
            </div>
          </div>

          {/* Regulatory cards */}
          <div className="dp-regs">
            {[
              { label: '201 CMR 17.00', desc: 'MA Written Information Security Program (WISP)' },
              { label: 'HIPAA', desc: 'Privacy & Security Rule · 45 CFR Parts 160 & 164' },
              { label: 'HITECH Act', desc: 'Breach notification & HIPAA enforcement' },
              { label: 'MGL c.93H', desc: 'MA data breach notification law' },
            ].map((r, i) => (
              <div className="dp-reg-card" key={i}>
                <h5>{r.label}</h5>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Accordion */}
          {sections.map((section, idx) => {
            const isOpen = !!openSections[idx]
            return (
              <div className="dp-section" key={section.id}>
                <button
                  className={`dp-section-btn${isOpen ? ' open' : ''}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="dp-section-num">{section.id}</span>
                  <span className="dp-section-title">{section.heading}</span>
                  <span className={`dp-section-arrow${isOpen ? ' open' : ''}`}>+</span>
                </button>

                {isOpen && (
                  <div className="dp-section-body">
                    <div className="dp-divider" />
                    <p className="dp-section-text">{section.text}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact strip */}
        <div className="dp-contact-strip">
          <h3>Contact Our Privacy Officer</h3>
          <p>All privacy inquiries are handled within 30 days of a verifiable written request.</p>
          <div className="dp-contact-btns">
            <a href="mailto:info@llstaffingsolution.com" className="dp-btn-solid">Privacy Officer</a>
            <a href="mailto:l-l@llstaffingsolution.com" className="dp-btn-ghost">General Inquiries</a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Dataprotection