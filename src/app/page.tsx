import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-red-50 to-yellow-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                🥁 DholCanada
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <a href="#packages" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          <div className="inline-block mb-4 px-4 py-2 bg-orange-600/90 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold">🎉 Canada's Premier Dhol Entertainment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Make Your Event Unforgettable
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Professional Dhol players for Weddings, Baraats, Mehndi, Sangeet, and all your special celebrations!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-6 shadow-xl">
              📞 Call Now: (647) 227-1443
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm">
              View Packages
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">💒</div>
              <div className="font-semibold text-gray-800">Weddings</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🎊</div>
              <div className="font-semibold text-gray-800">Baraat</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">💃</div>
              <div className="font-semibold text-gray-800">Mehndi</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🎵</div>
              <div className="font-semibold text-gray-800">Sangeet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Dhol Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your celebration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">🎯 Dhol Entrance</CardTitle>
                <CardDescription>Perfect for grand entrances</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>1-hour performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Traditional attire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Decorated drums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Professional dhol player</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  Contact for Pricing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-400 transition-all hover:shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">🎉 All Evening Dhol</CardTitle>
                <CardDescription>Complete evening entertainment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Full evening coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Entrance & performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Play with DJ music</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Multiple rhythm styles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Bari Barsi Boliyan</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                  Contact for Pricing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-600">✨ LED Dhol</CardTitle>
                <CardDescription>Upgrade any package with LED</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Custom LED lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>App-controlled colors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Custom patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Wow your guests</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">🎭 Fusion Performance</CardTitle>
                <CardDescription>Dhol with other instruments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Violin + Dhol</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Bagpiper + Dhol</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Trumpet + Dhol</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Tassa Band + Dhol</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Contact for Pricing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">🚗 Mobile Baraat</CardTitle>
                <CardDescription>Dhol with mobile sound system</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Mobile sound system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Street procession</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>High energy performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Perfect for baraats</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Contact for Pricing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">✈️ Destination Wedding</CardTitle>
                <CardDescription>Take us anywhere in the world</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>International travel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Full event coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Premium service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Unforgettable memories</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Contact for Pricing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Celebrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Moments of joy and rhythm at events across Canada
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1769947059310-bca7fa241a49?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Dhol musicians performing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Traditional Dhol Performance</p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1756661921904-45287eeb9abb?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Festival celebration with drums"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Festival Celebrations</p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-r2aNkswRQ1U?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Traditional clothing and drums"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Traditional Attire & Music</p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-4CQ4dkP5O7E?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Punjabi traditional attire"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Punjabi Wedding Celebrations</p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Indian wedding celebration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Live Wedding Entertainment</p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?fm=jpg&q=80&w=800&auto=format&fit=crop"
                alt="Wedding celebration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Baraat Processions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Why Choose DholCanada?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Experienced Players</h3>
              <p className="text-gray-600">All our dhol players have minimum 5 years of professional training and experience.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Traditional Attire</h3>
              <p className="text-gray-600">Full traditional wardrobe including Sherwanis, Kurta, and formal wear available.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🥁</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Drums</h3>
              <p className="text-gray-600">Full-sized Rose Wood dhols with colorful tassels, graphics, and engravings.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Multiple Rhythms</h3>
              <p className="text-gray-600">Uk Bhangra, Traditional Bhangra, Afghani Attan, Garba, Dandiya, and Fusion sounds.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration Ready</h3>
              <p className="text-gray-600">Work seamlessly with DJs, Bagpipers, Saxophonists, and other musicians.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">100% Satisfaction</h3>
              <p className="text-gray-600">Professional etiquette and guaranteed energy for your special day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Book Your Event
            </h2>
            <p className="text-xl text-gray-600">Get in touch for bookings and inquiries</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Call us</h3>
                  <p className="text-gray-600">647-227-1443</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600">info@dholcanada.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Service Area</h3>
                  <p className="text-gray-600">Greater Toronto Area</p>
                  <p className="text-gray-600">Brampton • Mississauga • Toronto</p>
                  <p className="text-gray-600">Scarborough • Oakville • Hamilton</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">International</h3>
                  <p className="text-gray-600">Available for destination weddings worldwide</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Inquiry</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Package Interest</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Select a package</option>
                      <option>Dhol Entrance</option>
                      <option>All Evening Dhol</option>
                      <option>LED Dhol Upgrade</option>
                      <option>Fusion Performance</option>
                      <option>Mobile Baraat</option>
                      <option>Destination Wedding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" rows="3" placeholder="Tell us about your event"></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                🥁 DholCanada
              </h3>
              <p className="text-gray-400">Bringing the beat of celebration to your special moments across Canada and beyond.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#packages" className="hover:text-orange-400 transition-colors">Packages</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📘</a>
                <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📸</a>
                <a href="#" className="text-2xl hover:text-orange-400 transition-colors">🐦</a>
                <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📺</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DholCanada. All rights reserved. Serving the Punjabi and Muslim communities across Canada.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
