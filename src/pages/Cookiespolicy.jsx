import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    id: 1,
    heading: 'What Are Cookies',
    text: `Cookies are small text files that are placed on your computer, tablet, smartphone, or other device by a website when you visit it. They are widely used in order to make websites work, work more efficiently, and to provide information about how a website is being used. Cookies allow a website to recognize your device and remember information about your visit, such as your language preferences or login status.

In addition to traditional cookies, we may also use the following related tracking technologies on llstaffingsolution.com:

• Web Beacons (Pixels): Small, transparent image files embedded in web pages or emails that allow us to track whether a page has been viewed or an email has been opened. Web beacons are often used in conjunction with cookies;

• Local Storage: A browser-based storage mechanism that allows websites to store data locally on your device, similar to cookies but with greater storage capacity and session persistence. Local storage data does not expire automatically; and

• Session Storage: Similar to local storage but limited to a single browser session. Session storage data is cleared automatically when you close your browser window or tab.

Throughout this Cookie Policy, references to "cookies" encompass all of the above-described technologies unless otherwise specified.`
  },
  {
    id: 2,
    heading: 'How We Use Cookies',
    text: `L&L Staffing Solution LLC uses cookies and similar tracking technologies on www.llstaffingsolution.com for the following purposes:

2.1 Essential / Strictly Necessary Cookies
These cookies are necessary for the Site to function properly and cannot be disabled in our systems without preventing the Site from working correctly. They are typically set in response to actions made by you, such as setting your privacy preferences, logging in, or filling out forms. These cookies do not store any personally identifiable information beyond what is strictly necessary for their function. You cannot opt out of essential cookies if you wish to use the Site.

2.2 Performance and Analytics Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Site. They help us understand which pages are the most and least popular and see how visitors move around the Site. All information these cookies collect is aggregated and anonymized. We use Google Analytics with IP anonymization enabled, ensuring that your IP address is truncated before processing. If you do not allow these cookies, we will not know when you have visited our Site and will not be able to monitor its performance.

2.3 Functional Cookies
These cookies enable enhanced functionality and personalization on the Site. They may be set by us or by third-party providers whose services we have added to our pages. They allow the Site to remember choices you make, such as your language preference, accessibility settings, or the region you are in, and to provide enhanced, more personalized features. If you do not allow these cookies, some or all of these services may not function properly.

2.4 Marketing and Targeting Cookies
Marketing cookies may be used to deliver advertisements and content that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns. These cookies are placed only with your express prior consent. L&L Staffing Solution LLC does not currently operate paid advertising campaigns through the Site; if this changes, we will update this Cookie Policy accordingly and obtain fresh consent as required.`
  },
  {
    id: 3,
    heading: 'Types of Cookies We Use',
    text: `The following describes the specific cookies currently in use on www.llstaffingsolution.com:

ESSENTIAL COOKIES
• session_id — Maintains your active user session while navigating the Site; required for form submissions and site security. Duration: Session (deleted when browser closes). First-party.

• csrf_token — Cross-Site Request Forgery (CSRF) protection token; prevents unauthorized form submissions and protects site security. Duration: Session. First-party.

• ll_consent — Records your cookie consent preferences so the consent banner is not repeatedly displayed. Duration: 12 months. First-party.

ANALYTICS COOKIES
• _ga — Google Analytics: used to distinguish unique users by assigning a randomly generated number as a client identifier. IP anonymization enabled. Duration: 24 months. Third-party (Google LLC).

• _gid — Google Analytics: distinguishes users; stores and updates a unique value for each page visited. Duration: 24 hours. Third-party (Google LLC).

• _gat — Google Analytics: used to throttle request rate; limits data collection on high-traffic sites. Duration: 1 minute. Third-party (Google LLC).

FUNCTIONAL COOKIES
• ll_prefs — Stores your language and accessibility preferences to provide a consistent experience across sessions. Duration: 6 months. First-party.

• ll_region — Stores your service area or geographic region preference for displaying relevant service information. Duration: 30 days. First-party.

This table is periodically updated to reflect changes in our cookie usage. Please check back regularly for the most current list.`
  },
  {
    id: 4,
    heading: 'Third-Party Cookies',
    text: `4.1 Google Analytics
We use Google Analytics, a web analytics service provided by Google LLC ("Google"), to help us understand how users interact with our Site. Google Analytics places cookies on your device that collect information about your use of the Site in anonymized, aggregated form. This information is transmitted to and stored on Google's servers. L&L Staffing Solution LLC has enabled IP anonymization, which means Google truncates your IP address before processing. Google's use of this data is governed by Google's Privacy Policy, available at policies.google.com/privacy. You may opt out of Google Analytics tracking using the Google Analytics Opt-Out Browser Add-on available at tools.google.com/dlpage/gaoptout.

4.2 Social Media Sharing Features
If social media sharing buttons (such as those for Facebook, LinkedIn, or X/Twitter) are present on our Site, these features may place cookies from the respective social media platform on your device when you interact with them, even if you do not click on the button. We do not control these third-party cookies and encourage you to review the privacy and cookie policies of the relevant social media platforms.

4.3 Third-Party Advertising Networks
L&L Staffing Solution LLC does not currently permit third-party advertising networks to place tracking cookies on users of our Site for cross-site behavioral advertising without explicit, prior user consent. If we engage such networks in the future, we will update this Cookie Policy and obtain fresh consent prior to enabling any such cookies.`
  },
  {
    id: 5,
    heading: 'Your Cookie Choices',
    text: `5.1 Browser Settings
Most web browsers allow you to control cookies through their settings. You can typically configure your browser to:
• Block all cookies;
• Accept only first-party (website-set) cookies and reject third-party cookies;
• Delete cookies when you close your browser; or
• Alert you each time a new cookie is placed, so you can decide whether to allow or reject it.

Instructions for managing cookies in common browsers are available at:
• Google Chrome: support.google.com/chrome/answer/95647
• Mozilla Firefox: support.mozilla.org/kb/cookies-information-websites-store-on-your-computer
• Microsoft Edge: support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge
• Apple Safari: support.apple.com/guide/safari/manage-cookies-sfri11471

5.2 Google Analytics Opt-Out
To opt out of Google Analytics tracking across all websites, you may install the Google Analytics Opt-Out Browser Add-on, available at tools.google.com/dlpage/gaoptout.

5.3 Impact of Disabling Cookies
Please be aware that disabling or blocking certain types of cookies may impact the functionality of our Site:
• Disabling essential cookies will prevent core Site functionality, including form submissions, security protections, and session management, from operating correctly;
• Disabling analytics cookies will prevent us from understanding how you use our Site, which may limit our ability to improve it; and
• Disabling functional cookies may result in loss of your saved preferences and require you to reset them each visit.`
  },
  {
    id: 6,
    heading: 'Consent',
    text: `6.1 Cookie Consent Banner
Upon your first visit to www.llstaffingsolution.com, you will be presented with a cookie consent banner that describes our use of cookies and requests your consent for non-essential cookie categories. Your consent preferences are recorded in the ll_consent cookie. By continuing to browse the Site after acknowledging the banner and selecting your preferences, you consent to the use of cookies in accordance with this Cookie Policy.

6.2 Granular Consent
Where technically practicable, our cookie consent tool allows you to accept or reject specific categories of cookies (essential, analytics, functional, and marketing) independently. Essential cookies are always active and cannot be declined without impairing Site functionality.

6.3 Withdrawing Consent
You may withdraw or update your cookie consent at any time by clearing your browser's cookies (which will reset the ll_consent cookie and re-display the consent banner on your next visit) or by adjusting your browser settings as described in Section 5. Withdrawing consent does not affect the lawfulness of any cookie use prior to withdrawal.`
  },
  {
    id: 7,
    heading: 'Updates to This Policy',
    text: `L&L Staffing Solution LLC may update this Cookie Policy from time to time to reflect changes in the cookies we use, changes in applicable law, or updates to our website technology. When we update this Policy, we will revise the "Last Updated" date at the top of this document. We encourage you to review this Cookie Policy periodically to remain informed about our use of cookies and related technologies.`
  },
  {
    id: 8,
    heading: 'Contact Us',
    text: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Company Name: L&L Staffing Solution LLC
Address: 91 Mill Street, Suite 1, Randolph, MA 02368
General Email: l-l@llstaffingsolution.com
Privacy Officer Email: info@llstaffingsolution.com
Website: www.llstaffingsolution.com`
  }
]

const cookieTypes = [
  { icon: '⚙️', label: 'Essential', color: '#1B3A5C', desc: 'Always active. Required for the site to function.' },
  { icon: '📊', label: 'Analytics', color: '#2a5298', desc: 'Helps us understand how visitors use the site.' },
  { icon: '🎛️', label: 'Functional', color: '#1a6b8a', desc: 'Remembers your preferences and settings.' },
  { icon: '📢', label: 'Marketing', color: '#888', desc: 'Not currently in use. Requires explicit consent.' },
]

const Cookiespolicy = () => {
  const [openSections, setOpenSections] = useState({ 0: true })

  const toggle = (idx) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cp-root {
          font-family: 'DM Sans', sans-serif;
          background: #f4f6f9;
          min-height: 100vh;
          color: #1a1a1a;
        }

        .cp-hero {
          background: #1B3A5C;
          padding: 68px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 40%);
        }

        .cp-hero::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 52px;
          background: #f4f6f9;
          clip-path: polygon(0 100%, 100% 100%, 100% 0);
        }

        .cp-hero-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #7aabcc;
          font-weight: 500;
          margin-bottom: 16px;
          position: relative;
        }

        .cp-hero-title {
          font-family: 'Crimson Pro', serif;
          font-size: clamp(32px, 5.5vw, 54px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.1;
          position: relative;
        }

        .cp-hero-meta {
          font-size: 13px;
          color: #7aabcc;
          line-height: 1.8;
          position: relative;
        }

        .cp-hero-dates {
          display: inline-flex;
          gap: 24px;
          margin-top: 20px;
          padding-bottom: 20px;
          position: relative;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cp-hero-date {
          font-size: 12px;
          color: #5ba3d9;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cp-hero-date span {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5ba3d9;
        }

        .cp-body {
          max-width: 840px;
          margin: 0 auto;
          padding: 44px 24px 80px;
        }

        .cp-cookie-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 12px;
          margin-bottom: 36px;
        }

        .cp-type-card {
          background: #fff;
          border-radius: 10px;
          padding: 18px 16px;
          border: 1px solid #dde3ed;
          border-top: 3px solid #1B3A5C;
          text-align: center;
          box-shadow: 0 2px 8px rgba(27,58,92,0.05);
        }

        .cp-type-card.inactive {
          border-top-color: #ccc;
          opacity: 0.65;
        }

        .cp-type-icon {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .cp-type-label {
          font-size: 13px;
          font-weight: 600;
          color: #1B3A5C;
          margin-bottom: 4px;
        }

        .cp-type-card.inactive .cp-type-label {
          color: #888;
        }

        .cp-type-desc {
          font-size: 11.5px;
          color: #666;
          line-height: 1.5;
          font-weight: 300;
        }

        .cp-toggle-pill {
          display: inline-block;
          margin-top: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          background: #e8f0f8;
          color: #1B3A5C;
        }

        .cp-type-card.inactive .cp-toggle-pill {
          background: #f0f0f0;
          color: #999;
        }

        .cp-notice {
          background: #fff;
          border-left: 4px solid #1B3A5C;
          border-radius: 0 8px 8px 0;
          padding: 18px 22px;
          margin-bottom: 32px;
          box-shadow: 0 2px 10px rgba(27,58,92,0.06);
        }

        .cp-notice p {
          margin: 0;
          font-size: 13px;
          color: #444;
          line-height: 1.7;
          font-weight: 300;
        }

        .cp-notice strong {
          color: #1B3A5C;
          font-weight: 600;
        }

        .cp-section {
          background: #ffffff;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1px solid #dde3ed;
          overflow: hidden;
          transition: box-shadow 0.2s, border-color 0.2s;
        }

        .cp-section:hover {
          box-shadow: 0 4px 20px rgba(27,58,92,0.09);
          border-color: #b8c8dc;
        }

        .cp-section-btn {
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

        .cp-section-btn:hover { background: #f5f8fc; }
        .cp-section-btn.open { background: #edf2f8; }

        .cp-section-num {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #1B3A5C;
          color: #7aabcc;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cp-section-title {
          flex: 1;
          font-family: 'Crimson Pro', serif;
          font-size: 16px;
          font-weight: 600;
          color: #1B3A5C;
          line-height: 1.3;
        }

        .cp-section-arrow {
          width: 28px;
          height: 28px;
          border-radius: 6px;
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

        .cp-section-arrow.open {
          transform: rotate(45deg);
          background: #1B3A5C;
          color: #7aabcc;
        }

        .cp-section-body {
          padding: 4px 24px 28px 72px;
          animation: cpFade 0.2s ease;
        }

        @keyframes cpFade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cp-divider {
          height: 1px;
          background: linear-gradient(to right, #c0d0e0, transparent);
          margin-bottom: 20px;
        }

        .cp-section-text {
          font-size: 13.5px;
          line-height: 1.95;
          color: #3a3a3a;
          white-space: pre-wrap;
          font-weight: 300;
        }

        .cp-contact-strip {
          background: #1B3A5C;
          padding: 52px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cp-contact-strip::before {
          content: '🍪';
          position: absolute;
          font-size: 120px;
          opacity: 0.04;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .cp-contact-strip h3 {
          font-family: 'Crimson Pro', serif;
          font-size: 26px;
          color: #fff;
          margin: 0 0 8px;
          position: relative;
        }

        .cp-contact-strip p {
          font-size: 13.5px;
          color: #7aabcc;
          margin: 0 0 28px;
          font-weight: 300;
          position: relative;
        }

        .cp-contact-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }

        .cp-btn-solid {
          background: #fff;
          color: #1B3A5C;
          padding: 12px 28px;
          border-radius: 7px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13.5px;
          transition: opacity 0.2s;
        }

        .cp-btn-solid:hover { opacity: 0.88; }

        .cp-btn-ghost {
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

        .cp-btn-ghost:hover { background: rgba(255,255,255,0.08); }

        @media (max-width: 600px) {
          .cp-section-body { padding-left: 24px; }
          .cp-section-num { display: none; }
        }
      `}</style>

      <div className="cp-root">

        {/* Hero */}
        <div className="cp-hero">
          <p className="cp-hero-eyebrow">Legal & Compliance</p>
          <h1 className="cp-hero-title">Cookie Policy</h1>
          <div className="cp-hero-meta">
            <div>L&L Staffing Solution LLC · llstaffingsolution.com</div>
            <div>91 Mill Street, Suite 1 · Randolph, MA 02368</div>
          </div>
          <div className="cp-hero-dates">
            <span className="cp-hero-date"><span />Effective: May 17, 2025</span>
            <span className="cp-hero-date"><span />Last Updated: May 17, 2026</span>
          </div>
        </div>

        {/* Body */}
        <div className="cp-body">

          {/* Cookie type cards */}
          <div className="cp-cookie-types">
            {cookieTypes.map((t, i) => (
              <div className={`cp-type-card${t.label === 'Marketing' ? ' inactive' : ''}`} key={i}>
                <div className="cp-type-icon">{t.icon}</div>
                <div className="cp-type-label">{t.label}</div>
                <div className="cp-type-desc">{t.desc}</div>
                <span className="cp-toggle-pill">
                  {t.label === 'Essential' ? 'Always On' : t.label === 'Marketing' ? 'Not Active' : 'Opt-Out'}
                </span>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="cp-notice">
            <p>
              This Cookie Policy explains how <strong>L&L Staffing Solution LLC</strong> uses cookies and similar tracking technologies on <strong>www.llstaffingsolution.com</strong>. By continuing to use our Site, you consent to our use of cookies in accordance with this policy.
            </p>
          </div>

          {/* Accordion */}
          {sections.map((section, idx) => {
            const isOpen = !!openSections[idx]
            return (
              <div className="cp-section" key={section.id}>
                <button
                  className={`cp-section-btn${isOpen ? ' open' : ''}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="cp-section-num">{section.id}</span>
                  <span className="cp-section-title">{section.heading}</span>
                  <span className={`cp-section-arrow${isOpen ? ' open' : ''}`}>+</span>
                </button>

                {isOpen && (
                  <div className="cp-section-body">
                    <div className="cp-divider" />
                    <p className="cp-section-text">{section.text}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact strip */}
        <div className="cp-contact-strip">
          <h3>Questions About Our Cookie Policy?</h3>
          <p>Reach out to our team and we will get back to you promptly.</p>
          <div className="cp-contact-btns">
            <a href="mailto:l-l@llstaffingsolution.com" className="cp-btn-solid">General Inquiries</a>
            <a href="mailto:info@llstaffingsolution.com" className="cp-btn-ghost">Privacy Officer</a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Cookiespolicy