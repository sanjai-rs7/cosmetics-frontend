import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | GlowPrime";
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="absolute inset-0 bg-burgundy/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-cream mb-4 drop-shadow-md">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
          <p className="text-cream text-lg max-w-2xl mx-auto">
            Inspired by the timeless beauty rituals of the past, reimagined for
            the modern woman.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-center mb-8">Our Journey</h2>

            <div className="prose prose-burgundy max-w-none">
              <p className="text-burgundy-light mb-4">
                GlowPrime was born from a passion for the elegant beauty rituals
                of the early 20th century—a time when cosmetics were crafted
                with care, packaged with artistry, and applied with intention.
              </p>

              <p className="text-burgundy-light mb-4">
                Founded in 2015 by Catherine Montgomery, a historian with a
                background in cosmetic chemistry, our brand bridges the gap
                between vintage beauty traditions and modern performance.
                Catherine spent years researching historical beauty formulations
                in archives across Europe, discovering forgotten techniques and
                ingredients that women once treasured.
              </p>

              <p className="text-burgundy-light mb-8">
                What began as a small collection of hand-crafted creams and
                powders has grown into a beloved brand that honors the
                sophistication of yesteryear while embracing the advances of
                today. Each GlowPrime product is a tribute to the timeless
                pursuit of beauty—thoughtfully formulated, elegantly packaged,
                and designed to become a cherished part of your daily ritual.
              </p>

              <div className="divider divider-fancy my-12"></div>

              <blockquote className="italic border-l-4 border-rose-gold pl-4 py-2 mb-8">
                "I created GlowPrime because I believe that beauty should be
                more than just a routine—it should be a moment of luxury and
                self-care, a connection to the elegant rituals that women have
                cherished for generations."
                <footer className="text-right text-burgundy-light mt-2">
                  — Catherine Montgomery, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-sand-light/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://laurajaneatelier.com/wp-content/uploads/2019/11/DSCF1002-1170x780.jpg"
                alt="Vintage beauty products"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif mb-4">Our Philosophy</h2>
              <div className="w-24 h-1 bg-rose-gold mb-6"></div>

              <h3 className="font-serif text-xl mb-3">Timeless Elegance</h3>
              <p className="mb-6 text-burgundy-light">
                We believe that true beauty transcends trends. Our products are
                designed with a timeless aesthetic that celebrates the elegant
                simplicity of vintage beauty rituals.
              </p>

              <h3 className="font-serif text-xl mb-3">Modern Performance</h3>
              <p className="mb-6 text-burgundy-light">
                While inspired by the past, our formulations incorporate the
                best of modern cosmetic science, ensuring safe, effective
                products that meet contemporary expectations.
              </p>

              <h3 className="font-serif text-xl mb-3">
                Thoughtful Craftsmanship
              </h3>
              <p className="mb-6 text-burgundy-light">
                From carefully selected ingredients to our Art Deco-inspired
                packaging, every detail of a GlowPrime product is thoughtfully
                crafted to provide both performance and pleasure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4">Our Commitments</h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
            <p className="text-burgundy-light max-w-2xl mx-auto">
              At GlowPrime, our vintage inspiration is matched by our modern
              values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sage-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-sage"
                >
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                  <path d="M16.5 9.4 7.55 4.24"></path>
                  <path d="M3.29 7 12 12l8.71-5"></path>
                  <path d="M12 22V12"></path>
                  <circle cx="18.5" cy="15.5" r="2.5"></circle>
                  <path d="M20.27 17.27 22 19"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg mb-3">Sustainable Packaging</h3>
              <p className="text-burgundy-light text-sm">
                Our packaging is designed to be both beautiful and
                environmentally responsible, using recycled materials and glass
                containers whenever possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sage-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-sage"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg mb-3">Cruelty-Free</h3>
              <p className="text-burgundy-light text-sm">
                We are committed to ethical practices. None of our products or
                ingredients are tested on animals, and we work only with
                suppliers who share this commitment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-sage-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-sage"
                >
                  <path d="M12 22s8-4 8-10V6L12 2 4 6v6c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg mb-3">Safe Formulations</h3>
              <p className="text-burgundy-light text-sm">
                We carefully select ingredients that are safe for both you and
                the environment, avoiding harmful chemicals while still
                delivering exceptional performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-burgundy text-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-cream mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
            <p className="text-cream/80 max-w-2xl mx-auto">
              The passionate individuals who bring GlowPrime to life each day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="sudh.png"
                  alt="James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">James Wilson</h3>
              <p className="text-rose-gold mb-3">Head of Product Development</p>
              <p className="text-cream/80 text-sm">
                Cosmetic chemist with over 15 years of experience in formulating
                luxury skincare products.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="bhai.png"
                  alt="Catherine Montgomery"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Catherine Montgomery</h3>
              <p className="text-rose-gold mb-3">Founder & Creative Director</p>
              <p className="text-cream/80 text-sm">
                Historian, formulator, and the visionary behind GlowPrime's
                unique approach to vintage beauty.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="joel.png"
                  alt="Eleanor Bennett"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Eleanor Bennett</h3>
              <p className="text-rose-gold mb-3">Design Director</p>
              <p className="text-cream/80 text-sm">
                Award-winning designer responsible for GlowPrime's distinctive
                vintage-inspired packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-sand-light/50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl mb-4">
            Join the GlowPrime Family
          </h2>
          <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
          <p className="text-burgundy-light mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive beauty tips inspired by
            vintage rituals, exclusive offers, and be the first to know about
            new product launches.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="input flex-grow rounded-r-none"
                required
              />
              <button
                type="submit"
                className="btn-primary rounded-l-none whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
