import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    id: 1,
    heading: 'Introduction & Scope',
    text: `L&L Healthcare Staffing Solution LLC ("L&L," "we," "us," or "our"), operating as llstaffingsolution.com, is a Massachusetts-based provider of healthcare staffing, caregiver placement, personal care aide (PCA) coordination, and related services headquartered in Randolph, Massachusetts. We are committed to protecting the privacy and confidentiality of all personal information entrusted to us by our clients, caregivers, job applicants, website visitors, and referral sources.

This Privacy Policy ("Policy") describes the types of personal information L&L Healthcare Staffing Solution LLC collects, how we use and protect that information, with whom we share it, and the rights you have with respect to your personal data. This Policy applies to all information collected through:

• Our website at www.llstaffingsolution.com and any affiliated subdomains or web pages;
• Our healthcare staffing and care coordination service operations;
• Telephone, email, and written communications with our office;
• Paper and electronic intake forms, employment applications, and service agreements; and
• Any other interaction between you and L&L Healthcare Staffing Solution LLC.

By accessing or using www.llstaffingsolution.com or engaging our services, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree with this Policy, please discontinue use of our website and services.

This Policy is designed to comply with applicable Massachusetts state law, including Massachusetts General Laws Chapter 93H (MGL c.93H), Chapter 66A (MGL c.66A), and the Massachusetts Data Security Regulations (201 CMR 17.00), as well as applicable federal law including the Health Insurance Portability and Accountability Act of 1996 (HIPAA), 45 CFR Parts 160 and 164, and the Health Information Technology for Economic and Clinical Health Act (HITECH).`
  },
  {
    id: 2,
    heading: 'Information We Collect',
    text: `L&L Healthcare Staffing Solution LLC collects personal information from multiple categories of individuals in connection with the provision of our services and operation of our website.

2.1 Personal Identifiers
• Full legal name, preferred name, and aliases;
• Residential address, mailing address, and location information;
• Email address and telephone number(s);
• Date of birth and age;
• Government-issued identification numbers (where required for employment or licensing purposes); and
• Emergency contact information.

2.2 Health-Related Information (Home Care Clients)
• Medical diagnoses, conditions, and health history;
• Care needs assessments, care plans, and service authorization documents;
• Medication information, treatment regimens, and physician orders;
• Attending physician, specialist, and healthcare provider information;
• Health insurance plan information and payer identification numbers; and
• Functional limitations and activities of daily living assessments.

2.3 Employment Information (Caregivers and Job Applicants)
• Social Security Number (SSN), as required for employment verification, payroll, and tax administration;
• Employment history, references, and professional credentials;
• Home Health Aide (HHA), Personal Care Attendant (PCA), and other certifications and licensure information;
• Background check and Criminal Offender Record Information (CORI) data, obtained and processed in compliance with MGL c.6, §§167–178B;
• Drug screening and occupational health records (where applicable); and
• Immigration and work authorization documentation, as required by federal law (Form I-9).

2.4 Financial Information
• Billing address and payment method information;
• Bank account or ACH routing information (for payroll or direct billing);
• Insurance billing and claims data; and
• Accounts receivable and payment history.

2.5 Website Usage Data
• IP address and general geographic location derived therefrom;
• Browser type, version, and operating system;
• Pages visited, time spent on pages, and referral URLs;
• Cookie identifiers and session data; and
• Device identifiers and screen resolution data.

2.6 Communications and Inquiries
• Content of inquiries submitted through our website contact forms;
• Email correspondence with L&L staff;
• Voicemail and telephone call records (where applicable and where permitted by law); and
• Referral information provided by healthcare providers, case managers, or family members.`
  },
  {
    id: 3,
    heading: 'How We Use Your Information',
    text: `L&L Healthcare Staffing Solution LLC uses the personal information we collect for the following purposes, each of which is authorized under applicable law or otherwise necessary for the operation of our business:

1. Service Delivery and Coordination: Providing, scheduling, coordinating, and managing healthcare staffing, caregiver placement, PCA coordination, and related services for our clients;

2. Caregiver Recruitment and Placement: Recruiting, screening, credentialing, training, scheduling, and placing caregivers and healthcare staff with appropriate client placements;

3. Billing, Payroll, and Financial Administration: Processing client invoices, insurance claims, caregiver payroll, tax reporting (including IRS Form W-2 and 1099), and general financial recordkeeping;

4. Legal and Regulatory Compliance: Meeting obligations under HIPAA, HITECH, MGL c.111 §70E, MGL c.149, MGL c.93H, and 201 CMR 17.00, and responding to lawful government requests or legal process;

5. Safety Screening and Verification: Conducting background checks, CORI checks, reference verification, OIG exclusion list screening, and other credentialing activities required or recommended by Massachusetts law and best practices;

6. Quality Improvement and Training: Evaluating service quality, conducting staff performance reviews, and improving our care coordination processes;

7. Communications: Responding to your inquiries, sending appointment confirmations, and communicating service updates; and

8. Marketing and Website Improvement: Analyzing website usage trends, improving user experience, and conducting marketing activities — with consent where required by applicable law.`
  },
  {
    id: 4,
    heading: 'Legal Basis for Processing',
    text: `L&L Healthcare Staffing Solution LLC processes personal information on the following legal bases:

• Contractual Necessity: Processing is necessary for the performance of our service agreements with clients and employment agreements with caregivers and staff. Without this processing, we cannot provide our healthcare staffing services.

• Legitimate Business Interests: Processing is necessary for our legitimate interests in operating a professional healthcare staffing agency, including ensuring worker safety, maintaining service quality, and managing business operations, provided such interests are not overridden by your privacy rights.

• Legal Obligation: Processing is required to comply with Massachusetts state law, federal law (including HIPAA, IRS requirements, and FLSA), and applicable regulatory requirements.

• Consent: For marketing communications, the use of non-essential cookies, and certain other discretionary data uses, we rely on your affirmative consent. You may withdraw consent at any time without affecting the lawfulness of processing prior to withdrawal.`
  },
  {
    id: 5,
    heading: 'HIPAA-Aligned Privacy Protections',
    text: `To the extent that L&L Healthcare Staffing Solution LLC functions as a Covered Entity or Business Associate under HIPAA, all Protected Health Information (PHI) — as defined at 45 CFR §160.103 — is handled in strict accordance with the requirements of 45 CFR Parts 160 and 164 (the HIPAA Privacy Rule and Security Rule).

5.1 Use and Disclosure of PHI
PHI is used and disclosed only as permitted or required by HIPAA, including for treatment, payment, and health care operations (TPO), as required by law, or pursuant to a valid HIPAA-compliant written authorization signed by the client or their authorized representative.

5.2 Notice of Privacy Practices
Clients receiving healthcare staffing services subject to HIPAA will receive a separate Notice of Privacy Practices (NPP) at or before the commencement of services. The NPP describes in detail how PHI may be used and disclosed and the rights of HIPAA-covered individuals with respect to their PHI. A copy of our current NPP is available upon request by contacting l-l@llstaffingsolution.com.

5.3 Prohibition on Sale of PHI
L&L Healthcare Staffing Solution LLC does not sell, rent, or trade PHI to any third party. PHI is not used for marketing purposes without an explicit, HIPAA-compliant written authorization from the individual.

5.4 Minimum Necessary Standard
In all uses and disclosures of PHI, L&L Healthcare Staffing Solution LLC applies the HIPAA minimum necessary standard, disclosing only that PHI which is reasonably necessary to accomplish the purpose of the use or disclosure.`
  },
  {
    id: 6,
    heading: 'Sharing of Information',
    text: `L&L Healthcare Staffing Solution LLC does not sell, rent, or trade personal information to third parties for their own marketing purposes. We may share personal information with the following categories of recipients, solely to the extent necessary for the purposes described in this Policy:

• Service Providers and Subcontractors: Third-party vendors who assist us in operating our business, including payroll processors, background check companies, electronic health record (EHR) platforms, scheduling software providers, and IT service providers. All such vendors are required to execute confidentiality agreements and, where applicable, Business Associate Agreements (BAAs) as required by HIPAA;

• Healthcare Providers and Care Coordinators: Physicians, specialists, hospitals, skilled nursing facilities, home health agencies, and care management organizations, as necessary to coordinate and provide care, and only with appropriate client authorization or as otherwise permitted by HIPAA;

• Government Agencies and Regulators: The Massachusetts Department of Public Health (DPH), Executive Office of Elder Affairs (EOEA), the Office for Civil Rights (OCR) of the U.S. Department of Health and Human Services (HHS), law enforcement agencies, courts, and other governmental bodies, as required by law, regulation, court order, or lawful governmental process;

• Background Check and Credentialing Services: Consumer reporting agencies and credentialing verification organizations, as necessary to conduct required employment screening, in compliance with the federal Fair Credit Reporting Act (FCRA) and applicable Massachusetts law; and

• Insurance Companies and Payers: Health insurers, MassHealth (Massachusetts Medicaid), and other payers, as necessary for billing and claims adjudication.

Important Notice: L&L Healthcare Staffing Solution LLC does not sell, rent, or otherwise disclose your personal information to any third party for commercial or marketing purposes. Any sharing of information is limited to what is legally permitted and operationally necessary.`
  },
  {
    id: 7,
    heading: 'Data Retention',
    text: `L&L Healthcare Staffing Solution LLC retains personal information for the periods required or permitted by applicable law and no longer than is necessary for the purposes for which it was collected:

• Client Health and Service Records: Retained for a minimum of six (6) years from the date of the last service or the date of creation, whichever is later, as required by HIPAA (45 CFR §164.530(j)) and Massachusetts Department of Public Health regulations;

• Employment and Caregiver Records: Retained for a minimum of three (3) years from the date of termination of employment or the end of the service engagement, as required by MGL c.149 and applicable federal labor law;

• Financial and Billing Records: Retained for a minimum of seven (7) years for tax and accounting purposes, as required by the Internal Revenue Service and Massachusetts law;

• Background Check Data: Retained only as long as necessary for employment screening purposes and in compliance with FCRA requirements; and

• Website Analytics Data: Retained for up to twenty-four (24) months from collection, after which aggregate or anonymized data may be retained indefinitely for analytics purposes.

Upon expiration of the applicable retention period, personal information is securely destroyed or de-identified in accordance with our data destruction procedures and applicable law.`
  },
  {
    id: 8,
    heading: 'Your Rights Under Massachusetts Law',
    text: `Massachusetts residents have the following rights with respect to their personal information, subject to applicable legal exceptions and our legal obligations regarding record retention:

• Right of Access: You have the right to request access to the personal information we hold about you, pursuant to MGL c.66A and, for HIPAA-covered PHI, 45 CFR §164.524;

• Right to Correction: You have the right to request correction of inaccurate or incomplete personal information we hold about you;

• Right to Request Deletion: You may request deletion of your personal information, subject to our legal obligations to retain certain records under applicable law (including HIPAA and Massachusetts law);

• Right to Opt Out of Marketing: You may opt out of receiving marketing communications from L&L Healthcare Staffing Solution LLC at any time by contacting us at l-l@llstaffingsolution.com or by following the unsubscribe instructions included in any marketing email;

• Right to File a Complaint: You have the right to file a complaint regarding our privacy practices with:
  – The Massachusetts Attorney General's Office: (617) 727-2200 or www.mass.gov/ago; and
  – The HHS Office for Civil Rights (for HIPAA-related complaints): 1-800-368-1019 or www.hhs.gov/ocr.

To exercise your rights, please submit a written request to: L&L Healthcare Staffing Solution LLC, Attn: Privacy Officer, 91 Mill Street, Suite 1, Randolph, MA 02368, or email: info@llstaffingsolution.com. We will respond to all verifiable requests within thirty (30) days of receipt, as required by applicable law.`
  },
  {
    id: 9,
    heading: 'Data Security',
    text: `L&L Healthcare Staffing Solution LLC maintains a comprehensive Written Information Security Program (WISP) as required by 201 CMR 17.00. Our security program incorporates the following safeguards:

• Technical Controls: Encryption of personal information stored on portable devices and transmitted over public networks; role-based access controls limiting access to personal information to those with a legitimate business need; multi-factor authentication for systems containing sensitive data; and regular software updates and patch management;

• Administrative Controls: Annual privacy and security training for all employees and contractors; executed confidentiality agreements with all workforce members; and documented incident response procedures; and

• Physical Controls: Secured file storage for paper records; clean desk and locked filing policies; and controlled access to office premises.

In the event of a security breach involving personal information of Massachusetts residents, L&L Healthcare Staffing Solution LLC will provide notification to affected individuals within thirty (30) days of the discovery of the breach, and will notify the Massachusetts Attorney General and the Director of Consumer Affairs and Business Regulation, as required by MGL c.93H. HIPAA breach notifications will be provided in accordance with 45 CFR §§164.400–414.`
  },
  {
    id: 10,
    heading: "Children's Privacy",
    text: `The website at www.llstaffingsolution.com is not directed to children under the age of thirteen (13). L&L Healthcare Staffing Solution LLC does not knowingly collect, use, or disclose personal information from children under the age of 13 without verifiable parental consent, in compliance with the Children's Online Privacy Protection Act (COPPA), 15 U.S.C. §§6501–6506.

If we become aware that we have inadvertently collected personal information from a child under 13 without appropriate consent, we will take prompt steps to delete such information from our records.

Our healthcare staffing services may involve the coordination of care for minor clients; however, all such information is collected directly from the parent or legal guardian as the authorized representative and is handled in accordance with applicable law.`
  },
  {
    id: 11,
    heading: 'Third-Party Links',
    text: `The llstaffingsolution.com website may contain hyperlinks to third-party websites, resources, or services that are not owned or controlled by L&L Healthcare Staffing Solution LLC. These links are provided solely for your convenience and informational purposes. L&L Healthcare Staffing Solution LLC has no control over, and assumes no responsibility for, the content, privacy practices, or terms of use of any third-party websites. The inclusion of a link to a third-party site does not constitute an endorsement, recommendation, or approval by L&L Healthcare Staffing Solution LLC of that site or its operators.

We encourage you to review the privacy policy and terms of use of every third-party website you visit. L&L Healthcare Staffing Solution LLC is not liable for any information you provide to or receive from any third-party website accessed through a link on our site.`
  },
  {
    id: 12,
    heading: 'Changes to This Policy',
    text: `L&L Healthcare Staffing Solution LLC reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, legal obligations, or regulatory requirements. When material changes are made to this Policy, we will revise the "Last Updated" date at the top of this document and, where appropriate, provide conspicuous notice on our website or by direct communication to affected individuals.

Your continued use of www.llstaffingsolution.com or our services following the posting of an updated Privacy Policy constitutes your acceptance of the revised Policy. We encourage you to review this Policy periodically to remain informed about our privacy practices.`
  },
  {
    id: 13,
    heading: 'Contact Us',
    text: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:

Company Name: L&L Healthcare Staffing Solution LLC
Address: 91 Mill Street, Suite 1, Randolph, MA 02368
General Email: l-l@llstaffingsolution.com
Privacy Officer Email: info@llstaffingsolution.com
Website: www.llstaffingsolution.com`
  }
]

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState({ 0: true })

  const toggle = (idx) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pp-root {
          font-family: 'DM Sans', sans-serif;
          background: #f5f4f0;
          min-height: 100vh;
          color: #1c1c1c;
        }

        .pp-hero {
          background: #0f2540;
          padding: 72px 24px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .pp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.015) 40px,
            rgba(255,255,255,0.015) 80px
          );
        }

        .pp-hero-eyebrow {
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #17B7F5;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 50px;
  position: relative;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
}

        .pp-hero-title {
          font-family: 'Lora', serif;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.15;
          position: relative;
        }

        .pp-hero-meta {
          font-size: 13px;
          color: #7aabcc;
          position: relative;
          line-height: 1.8;
        }

        .pp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(91,163,217,0.15);
          border: 1px solid rgba(91,163,217,0.3);
          color: #7aabcc;
          font-size: 11px;
          padding: 6px 14px;
          border-radius: 20px;
          margin-top: 20px;
          letter-spacing: 0.5px;
          position: relative;
        }

        .pp-body {
          max-width: 820px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        .pp-intro-bar {
          background: #fff;
          border-left: 4px solid #0f2540;
          padding: 20px 24px;
          border-radius: 0 8px 8px 0;
          margin-bottom: 36px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }

        .pp-intro-bar p {
          margin: 0;
          font-size: 13.5px;
          color: #444;
          line-height: 1.7;
        }

        .pp-intro-bar strong {
          color: #0f2540;
        }

        .pp-section {
          background: #ffffff;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1px solid #e4e1da;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .pp-section:hover {
          box-shadow: 0 4px 20px rgba(15,37,64,0.08);
        }

        .pp-section-btn {
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

        .pp-section-btn:hover {
          background: #f9f8f5;
        }

        .pp-section-btn.open {
          background: #f0f5fb;
        }

        .pp-section-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #0f2540;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .pp-section-title {
          flex: 1;
          font-family: 'Lora', serif;
          font-size: 15.5px;
          font-weight: 600;
          color: #0f2540;
          line-height: 1.3;
        }

        .pp-section-chevron {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #e8edf3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s, background 0.15s;
          font-size: 14px;
          color: #0f2540;
          font-weight: 700;
        }

        .pp-section-chevron.open {
          transform: rotate(45deg);
          background: #0f2540;
          color: #fff;
        }

        .pp-section-body {
          padding: 4px 24px 28px 72px;
          animation: fadeSlide 0.2s ease;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pp-divider {
          height: 1px;
          background: linear-gradient(to right, #dde4ed, transparent);
          margin-bottom: 20px;
        }

        .pp-section-text {
          font-size: 14px;
          line-height: 1.9;
          color: #3d3d3d;
          white-space: pre-wrap;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }

        .pp-contact-strip {
          background: linear-gradient(135deg, #0f2540 0%, #1a3a5c 100%);
          padding: 48px 24px;
          text-align: center;
        }

        .pp-contact-strip h3 {
          font-family: 'Lora', serif;
          font-size: 22px;
          color: #fff;
          margin: 0 0 8px;
        }

        .pp-contact-strip p {
          font-size: 13.5px;
          color: #7aabcc;
          margin: 0 0 24px;
        }

        .pp-contact-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .pp-btn-primary {
          background: #fff;
          color: #0f2540;
          padding: 11px 26px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13.5px;
          font-family: 'DM Sans', sans-serif;
          transition: opacity 0.2s;
        }

        .pp-btn-primary:hover { opacity: 0.88; }

        .pp-btn-outline {
          background: transparent;
          color: #fff;
          padding: 11px 26px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          font-size: 13.5px;
          font-family: 'DM Sans', sans-serif;
          border: 1px solid rgba(255,255,255,0.35);
          transition: background 0.2s;
        }

        .pp-btn-outline:hover { background: rgba(255,255,255,0.08); }

        @media (max-width: 600px) {
          .pp-section-body { padding-left: 24px; }
          .pp-section-num { display: none; }
        }
      `}</style>

      <div className="pp-root">

        {/* Hero */}
        <div className="pp-hero">
          <p className="pp-hero-eyebrow">Legal & Compliance</p>
          <h1 className="pp-hero-title">Privacy Policy</h1>
          <div className="pp-hero-meta">
            <div>L&L Healthcare Staffing Solution LLC</div>
            <div>91 Mill Street, Suite 1 · Randolph, MA 02368</div>
          </div>
          <div className="pp-hero-badge">
            <span>●</span>
            Effective: May 17, 2025 &nbsp;·&nbsp; Last Updated: May 17, 2026
          </div>
        </div>

        {/* Body */}
        <div className="pp-body">

          {/* Intro notice */}
          <div className="pp-intro-bar">
            <p>
              This Privacy Policy applies to all personal information collected through <strong>www.llstaffingsolution.com</strong> and all services provided by <strong>L&L Healthcare Staffing Solution LLC</strong>. It is designed to comply with HIPAA, HITECH, MGL c.93H, MGL c.66A, and 201 CMR 17.00.
            </p>
          </div>

          {/* Accordion sections */}
          {sections.map((section, idx) => {
            const isOpen = !!openSections[idx]
            return (
              <div className="pp-section" key={section.id}>
                <button
                  className={`pp-section-btn${isOpen ? ' open' : ''}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="pp-section-num">{section.id}</span>
                  <span className="pp-section-title">{section.heading}</span>
                  <span className={`pp-section-chevron${isOpen ? ' open' : ''}`}>+</span>
                </button>

                {isOpen && (
                  <div className="pp-section-body">
                    <div className="pp-divider" />
                    <p className="pp-section-text">{section.text}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact strip */}
        <div className="pp-contact-strip">
          <h3>Privacy Questions or Requests?</h3>
          <p>Our Privacy Officer will respond within 30 days of your verifiable request.</p>
          <div className="pp-contact-btns">
            <a href="mailto:l-l@llstaffingsolution.com" className="pp-btn-primary">General Inquiries</a>
            <a href="mailto:info@llstaffingsolution.com" className="pp-btn-outline">Privacy Officer</a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default PrivacyPolicy