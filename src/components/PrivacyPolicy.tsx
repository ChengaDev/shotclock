import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SEO from './SEO'

const PrivacyPolicy = () => {
  return (
    <Container>
      <SEO
        title="Privacy Policy | ShotClock Pro"
        description="Privacy policy for ShotClock Pro — free online basketball shot clock. Learn how we use cookies and third-party services like Google Analytics and Google AdSense."
      />
      <Title>Privacy Policy</Title>
      <LastUpdated>Last updated: April 7, 2026</LastUpdated>

      <Section>
        <SectionTitle>Overview</SectionTitle>
        <P>
          ShotClock Pro ("we", "us", or "our") operates the website{' '}
          <A href="https://www.24shotclock.com">www.24shotclock.com</A> (the "Site"). This page
          explains what information is collected when you use the Site and how it is used.
        </P>
        <P>
          We do not collect any personally identifiable information directly. The Site is a free
          tool — no account, login, or registration is required.
        </P>
      </Section>

      <Section>
        <SectionTitle>Cookies and Tracking</SectionTitle>
        <P>
          We use third-party services that may set cookies or collect anonymous usage data. By
          using the Site you consent to cookies being placed in accordance with this policy. You
          can disable cookies in your browser settings, though some site features may not function
          correctly as a result.
        </P>
      </Section>

      <Section>
        <SectionTitle>Google Analytics</SectionTitle>
        <P>
          We use Google Analytics 4 to understand how visitors interact with the Site (e.g., pages
          visited, session duration, country). This data is anonymous and aggregated — Google
          Analytics does not identify individual users.
        </P>
        <P>
          Google Analytics uses cookies to track usage. You can opt out by installing the{' '}
          <A href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer noopener">
            Google Analytics Opt-out Browser Add-on
          </A>
          .
        </P>
        <P>
          Google's privacy policy:{' '}
          <A href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">
            policies.google.com/privacy
          </A>
        </P>
      </Section>

      <Section>
        <SectionTitle>Google AdSense</SectionTitle>
        <P>
          The Site may display advertisements served by Google AdSense. Google uses cookies to
          serve ads based on your prior visits to this Site and other sites on the internet.
          Google's use of advertising cookies enables it and its partners to serve ads based on
          your visit to this and/or other sites.
        </P>
        <P>
          You may opt out of personalised advertising by visiting{' '}
          <A href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer noopener">
            Google Ads Settings
          </A>{' '}
          or{' '}
          <A href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer noopener">
            aboutads.info
          </A>
          .
        </P>
      </Section>

      <Section>
        <SectionTitle>Third-Party Links</SectionTitle>
        <P>
          The Site contains links to external websites (e.g., FIBA). We are not responsible for
          the privacy practices or content of those sites.
        </P>
      </Section>

      <Section>
        <SectionTitle>Children's Privacy</SectionTitle>
        <P>
          The Site does not knowingly collect any data from children under 13. If you believe a
          child has provided personal information through the Site, please contact us so we can
          address it.
        </P>
      </Section>

      <Section>
        <SectionTitle>Changes to This Policy</SectionTitle>
        <P>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated date. Continued use of the Site after changes constitutes acceptance of
          the updated policy.
        </P>
      </Section>

      <Section>
        <SectionTitle>Contact</SectionTitle>
        <P>
          Questions about this Privacy Policy? Reach out via the contact links on the{' '}
          <InternalLink to="/about">About page</InternalLink>.
        </P>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: rgba(255, 255, 255, 0.9);
`

const Title = styled.h1`
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 0.25rem;
  font-weight: 700;
`

const LastUpdated = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  margin-bottom: 2.5rem;
`

const Section = styled.section`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #ffd700;
  margin-bottom: 0.75rem;
  font-weight: 600;
`

const P = styled.p`
  line-height: 1.7;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
`

const A = styled.a`
  color: #ffd700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const InternalLink = styled(Link)`
  color: #ffd700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export default PrivacyPolicy
