'use client';

import { Card, Divider, SocialAuth, FormFooter } from '../Molecules';

/**
 * Reusable auth form layout template
 * @param {string} title - Card title
 * @param {string} subtitle - Card subtitle
 * @param {ReactNode} children - Form content
 * @param {string} footerText - Footer text before link
 * @param {string} footerLinkText - Footer link text
 * @param {string} footerLinkHref - Footer link href
 */
export default function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        <Card title={title} subtitle={subtitle}>
          {children}

          {/* Divider Molecule */}
          <Divider text="or" />

          {/* SocialAuth Molecule */}
          <div className="mb-6">
            <SocialAuth providers={['Google', 'GitHub']} />
          </div>

          {/* FormFooter Molecule */}
          <FormFooter 
            text={footerText}
            linkText={footerLinkText}
            linkHref={footerLinkHref}
          />
        </Card>

        {/* Footer Text */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>Protected by reCAPTCHA and subject to the</p>
          <div className="space-x-2">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <span>and</span>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
