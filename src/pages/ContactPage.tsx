import { useState, FormEvent, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | GlowPrime";
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] min-h-[300px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5920826/pexels-photo-5920826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="absolute inset-0 bg-burgundy/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-cream mb-4 drop-shadow-md">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
          <p className="text-cream text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-sand-light/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-burgundy" size={20} />
              </div>
              <h3 className="font-serif text-lg mb-2">Email Us</h3>
              <p className="text-burgundy-light mb-2">For general inquiries:</p>
              <a
                href="mailto:hello@glowprime.example"
                className="text-rose-gold hover:text-burgundy transition-colors"
              >
                hello@belleepoque.example
              </a>
              <p className="text-burgundy-light mt-2 mb-2">
                For customer support:
              </p>
              <a
                href="mailto:support@glowprime.example"
                className="text-rose-gold hover:text-burgundy transition-colors"
              >
                support@belleepoque.example
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-sand-light/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-burgundy" size={20} />
              </div>
              <h3 className="font-serif text-lg mb-2">Call Us</h3>
              <p className="text-burgundy-light mb-2">Customer Service:</p>
              <a
                href="tel:+9080711025"
                className="text-rose-gold hover:text-burgundy transition-colors"
              >
                +91 9080711025
              </a>
              <p className="text-burgundy-light mt-4 mb-2">Office Hours:</p>
              <p className="text-burgundy">Monday - Friday: 9am - 5pm IST</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-sand-light/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-burgundy" size={20} />
              </div>
              <h3 className="font-serif text-lg mb-2">Visit Us</h3>
              <p className="text-burgundy-light mb-2">Our Flagship Store:</p>
              <address className="text-burgundy not-italic">
                MIT HOSTELS, Kurinji
                <br />
                Room No : 316
                <br />
                Chennai, Chromepet
              </address>
              <p className="text-burgundy-light mt-4 mb-2">Store Hours:</p>
              <p className="text-burgundy">
                Monday - Saturday: 10am - 6pm
                <br />
                Sunday: 12pm - 5pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-sand-light/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4">Send Us a Message</h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
            <p className="text-burgundy-light max-w-2xl mx-auto">
              Have a question, comment, or suggestion? Use the form below to get
              in touch with our team.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage flex items-center justify-center">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h3 className="font-serif text-2xl mb-4">Message Sent!</h3>
                <p className="text-burgundy-light mb-6">
                  Thank you for reaching out. A member of our team will get back
                  to you shortly.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Your Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Eleanor Spencer"
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <Input
                  label="Subject"
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this regarding?"
                  required
                />

                <div className="form-group">
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="input resize-none"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isLoading}
                  className="mt-4"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
            <p className="text-burgundy-light max-w-2xl mx-auto">
              Find quick answers to our most commonly asked questions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 divide-y divide-sand-light">
            <div className="py-4">
              <h3 className="font-serif text-lg mb-2">
                What are your shipping options?
              </h3>
              <p className="text-burgundy-light">
                We offer standard shipping (5-7 business days), expedited
                shipping (2-3 business days), and overnight shipping. Orders
                over ₹75 qualify for free standard shipping within the United
                States.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-serif text-lg mb-2">
                What is your return policy?
              </h3>
              <p className="text-burgundy-light">
                We accept returns within 30 days of purchase. Items must be
                unused and in their original packaging. Please note that
                personalized items and sale items are final sale.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-serif text-lg mb-2">
                Are your products tested on animals?
              </h3>
              <p className="text-burgundy-light">
                Absolutely not. We are proudly cruelty-free and never test our
                products or ingredients on animals. We are certified by Leaping
                Bunny and PETA.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-serif text-lg mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-burgundy-light">
                Yes, we ship to most countries worldwide. International shipping
                rates and delivery times vary by location. Customs fees may
                apply and are the responsibility of the customer.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-serif text-lg mb-2">
                How can I track my order?
              </h3>
              <p className="text-burgundy-light">
                Once your order ships, you will receive a confirmation email
                with tracking information. You can also log into your account on
                our website to track your order status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
