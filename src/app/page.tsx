import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center py-6">
            <div className="mb-6">
              <Image
                src="/dhol-canada-logo.webp"
                alt="DholCanada Logo"
                width={400}
                height={100}
                className="h-32 w-auto"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              <a href="#home" className="text-gray-800 hover:text-orange-600 transition-colors font-medium tracking-wide">Home</a>
              <a href="#about" className="text-gray-800 hover:text-orange-600 transition-colors font-medium tracking-wide">About</a>
              <div className="relative group">
                <button className="text-gray-800 hover:text-orange-600 transition-colors font-medium tracking-wide flex items-center gap-1">
                  Other Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-3 w-52 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <a href="https://www.photoboothcanada.ca" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-t-xl font-medium">
                    Photobooth Services
                  </a>
                </div>
              </div>
              <a href="#contact" className="text-gray-800 hover:text-orange-600 transition-colors font-medium tracking-wide">Contact</a>
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-52 pb-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1769947059310-bca7fa241a49?fm=jpg&q=80&w=2000&auto=format&fit=crop"
            alt="Dhol musicians performing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-orange-50/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block mb-8 px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 backdrop-blur-sm rounded-full shadow-lg">
            <span className="text-white font-semibold tracking-wider text-sm uppercase">Canada's Premier Dhol Entertainment</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent font-montserrat">
            Make Your Event
            <br />
            Unforgettable
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Professional Dhol players for Weddings, Baraats, Mehndi, Sangeet, and all your special celebrations!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all font-semibold tracking-wide">
              Call Now: (647) 227-1443
            </Button>
            <Button size="lg" variant="outline" className="border-3 border-orange-600 text-orange-600 hover:bg-orange-50 text-xl px-12 py-8 font-semibold tracking-wide transition-all">
              Contact Us
            </Button>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="font-bold text-gray-900 text-lg tracking-wide">Weddings</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="font-bold text-gray-900 text-lg tracking-wide">Baraat</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="font-bold text-gray-900 text-lg tracking-wide">Mehndi</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="font-bold text-gray-900 text-lg tracking-wide">Sangeet</div>
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-montserrat">
              Our Celebrations
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Moments of joy and rhythm at events across Canada
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1769947059310-bca7fa241a49?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Dhol musicians performing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl tracking-wide">Traditional Dhol Performance</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1756661921904-45287eeb9abb?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Festival celebration with drums"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl tracking-wide">Festival Celebrations</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Traditional clothing and drums"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl tracking-wide">Traditional Attire & Music</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Punjabi traditional attire"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl tracking-wide">Punjabi Wedding Celebrations</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Indian wedding celebration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl tracking-wide">Live Wedding Entertainment</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Wedding celebration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl tracking-wide">Baraat Processions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-montserrat">
              Why Choose DholCanada?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-wide">Experienced Players</h3>
              <p className="text-gray-700 text-lg leading-relaxed">All our dhol players have minimum 5 years of professional training and experience.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-wide">Traditional Attire</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Full traditional wardrobe including Sherwanis, Kurta, and formal wear available.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-wide">Premium Drums</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Full-sized Rose Wood dhols with colorful tassels, graphics, and engravings.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-wide">Multiple Rhythms</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Uk Bhangra, Traditional Bhangra, Afghani Attan, Garba, Dandiya, and Fusion sounds.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-wide">Collaboration Ready</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Work seamlessly with DJs, Bagpipers, Saxophonists, and other musicians.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-wide">100% Satisfaction</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Professional etiquette and guaranteed energy for your special day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-montserrat">
              Book Your Event
            </h2>
            <p className="text-2xl text-gray-600 font-light">Get in touch for bookings and inquiries</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">Call us</h3>
                  <p className="text-xl text-gray-700">647-227-1443</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">Email</h3>
                  <p className="text-xl text-gray-700">info@dholcanada.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">Service Area</h3>
                  <p className="text-xl text-gray-700">Greater Toronto Area</p>
                  <p className="text-xl text-gray-700">Brampton • Mississauga • Toronto</p>
                  <p className="text-xl text-gray-700">Scarborough • Oakville • Hamilton</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2 tracking-wide">International</h3>
                  <p className="text-xl text-gray-700">Available for destination weddings worldwide</p>
                </div>
              </div>
            </div>
            <Card className="shadow-2xl border-0 rounded-3xl">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 rounded-t-3xl">
                <CardTitle className="text-white text-3xl tracking-wide">Quick Inquiry</CardTitle>
                <CardDescription className="text-white/90 text-lg">Fill out the form and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent className="p-10">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">Name</label>
                    <input type="text" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-lg transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">Phone</label>
                    <input type="tel" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-lg transition-all" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">Event Date</label>
                    <input type="date" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-lg transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">Service Interest</label>
                    <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-lg transition-all">
                      <option>Select a service</option>
                      <option>Wedding Dhol</option>
                      <option>Baraat Procession</option>
                      <option>Mehndi Night</option>
                      <option>Sangeet Night</option>
                      <option>Festival Performance</option>
                      <option>Destination Wedding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">Message</label>
                    <textarea className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-lg transition-all" rows={4} placeholder="Tell us about your event"></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xl py-6 shadow-xl hover:shadow-2xl transition-all font-semibold tracking-wide">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <Image
                  src="/dhol-canada-logo.webp"
                  alt="DholCanada Logo"
                  width={200}
                  height={50}
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">Bringing the beat of celebration to your special moments across Canada and beyond.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 tracking-wide">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-lg">YouTube</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-10 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 DholCanada. All rights reserved. Serving the Punjabi and Muslim communities across Canada.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
