function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-burgundy">
      <h1 className="text-3xl font-serif mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At GlowPrime, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your personal information when
        you visit our website, make a purchase, or interact with our services.
        By using our website, you consent to the practices described in this
        policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-2 font-semibold">Personal Information:</p>
      <p className="mb-4">
        When you place an order, sign up for an account, or contact us, we may
        collect personal data such as your name, email address, billing/shipping
        address, phone number, and payment details.
      </p>

      <p className="mb-2 font-semibold">Non-Personal Information:</p>
      <p className="mb-4">
        We may also collect non-personal information such as browser type, IP
        address, device information, and browsing behavior using cookies or
        similar technologies to improve your experience on our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc ml-5 mb-4 space-y-2">
        <li>To process and fulfill your orders</li>
        <li>To communicate with you about your account or orders</li>
        <li>To send marketing emails (only with your consent)</li>
        <li>To improve our website and customer service</li>
        <li>To prevent fraudulent transactions and protect our users</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third
        parties. We may share your data with trusted service providers (e.g.,
        payment processors, shipping partners) who assist us in operating our
        business, provided they comply with confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your
        information, including SSL encryption, secure payment gateways, and
        restricted access to sensitive data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
      <ul className="list-disc ml-5 mb-4 space-y-2">
        <li>
          You have the right to access, correct, or delete your personal
          information.
        </li>
        <li>
          You can unsubscribe from our emails at any time using the
          “unsubscribe” link.
        </li>
        <li>You may request a copy of the data we store about you.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience, remember cart
        contents, and analyze site usage. You can control cookie settings
        through your browser.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
      <p className="mb-4">
        Our site may contain links to external websites. We are not responsible
        for the privacy practices of these sites. Please review their policies
        separately.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Children's Privacy
      </h2>
      <p className="mb-4">
        Our services are not intended for individuals under the age of 13. We do
        not knowingly collect data from children.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        9. Changes to This Policy
      </h2>
      <p className="mb-4">
        We reserve the right to update this policy at any time. All changes will
        be posted on this page with the effective date. Your continued use of
        the site after any updates means you accept the revised policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at:{" "}
        <a
          href="mailto:support@glowprime.com"
          className="text-rose-gold underline"
        >
          support@glowprime.com
        </a>
      </p>

      <p className="mt-10 italic text-sm">Last updated: April 30, 2025</p>
    </div>
  );
}

export default PrivacyPolicyPage;
