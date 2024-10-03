import { buttonVariants } from "@/components/ui/button"
import { Moon, Star, Rocket, Users, MapPin, Bed, Wifi, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import StarryBackground from '@/components/starry-background'
import PricingTableComponent from '@/components/pricing-table'

export default function LandingPage() {
  const speakers = [
    {
      name: 'Jim Holden',
      title: 'Quantum JS Specialist',
      image: 'https://static.wikia.nocookie.net/expanse/images/5/5d/James_Holden_-_Expanse_season_4_promotional_3.png/revision/latest?cb=20191206014518',
    },
    {
      name: 'Camina Drummer',
      title: 'CTO, Transport Union',
      image: 'https://static.wikia.nocookie.net/expanse/images/3/35/Camina_Drummer_S4_.png/revision/latest?cb=20191206024126',
    },
    {
      name: 'Chrisjen Avasarala',
      title: 'Senior Frontend Engineer, United Nations',
      image: 'https://static.wikia.nocookie.net/expanse/images/1/1f/S02E09-ShohrehAghdashloo_as_ChrisjenAvasarala_05c.jpg/revision/latest?cb=20170702041257',
    },
  ]
  
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Starry background */}
      <StarryBackground />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-background bg-gray-900 bg-opacity-80">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Moon className="text-primary" />
              <span className="text-2xl font-heading font-bold">Next.js Conf2099</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#about" className="hover:text-primary">About</Link></li>
                <li><Link href="#schedule" className="hover:text-primary">Schedule</Link></li>
                <li><Link href="#speakers" className="hover:text-primary">Speakers</Link></li>
                <li><Link href="#location" className="hover:text-primary">Location</Link></li>
                <li><Link href="#tickets" className="hover:text-primary">Tickets</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="https://th.bing.com/th/id/R.7b18a8399977e78de5a2ee31468002fd?rik=Xvx0r2Ge3BoYcg&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f131441-Apollo-moon-landscape.jpg&ehk=dq28ckNZR4kHx%2fal9AZYiU4A36uoA0441jG9TFbcTMM%3d&risl=&pid=ImgRaw&r=0"
            alt="Lunar landscape"
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 brightness-50"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-7xl md:text-7xl font-bold mb-4">Next.js Conf2099</h1>
            <p className="text-xl md:text-2xl mb-8">Join us for an out-of-this-world developer experience October 24th</p>
            <Link href="https://nextjs.org/conf" className={buttonVariants()}>Get Your Ticket Now</Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background bg-opacity-80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About the Conference</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Rocket className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Cutting-edge Tech</h3>
                <p>Explore the latest in web development and beyond</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p>Connect with developers from around the galaxy</p>
              </div>
              <div className="text-center">
                <Star className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Unique Experience</h3>
                <p>First-ever tech conference on the lunar surface</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Conference Schedule</h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Day 1 - October 24th</h3>
                <ul className="space-y-2">
                  <li>9:00 AM - Opening Ceremony</li>
                  <li>10:00 AM - Keynote: The Future of Web Development</li>
                  <li>2:00 PM - Workshop: Building Apps in Zero Gravity</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Day 2 - October 25th</h3>
                <ul className="space-y-2">
                  <li>9:00 AM - Panel: Scaling Apps Across the Solar System</li>
                  <li>11:00 AM - Workshop: Optimizing for Lunar Internet Speeds</li>
                  <li>3:00 PM - Closing Ceremony &amp; Networking Event</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="py-20 bg-background bg-opacity-80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Speakers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div key={speaker.name} className="text-center">
                  <Image
                    src={speaker.image}
                    alt={`Speaker ${speaker.name}`}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover w-[200px] h-[200px]"
                  />
                  <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                  <p>{speaker.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Conference Location</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4"><Link href="https://en.wikipedia.org/wiki/Lunar_Hilton">Lunar Hilton</Link></h3>
                <p className="mb-4">Experience luxury and innovation at the edge of the cosmos.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin className="mr-2 text-primary" />
                    Sea of Tranquility, Moon
                  </li>
                  <li className="flex items-center">
                    <Bed className="mr-2 text-primary" />
                    State-of-the-art sleeping pods
                  </li>
                  <li className="flex items-center">
                    <Wifi className="mr-2 text-primary" />
                    Quantum-entangled WiFi
                  </li>
                  <li className="flex items-center">
                    <Utensils className="mr-2 text-primary" />
                    Gourmet space food
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="https://ychef.files.bbci.co.uk/624x351/p00vynyx.jpg"
                  alt="Lunar Hilton"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Section */}
        <section id="tickets" className="py-20 bg-background bg-opacity-80">
          <PricingTableComponent />
          <div className="container mx-auto px-4 text-center">
            <p className="mb-8 text-xl">Secure your spot at this groundbreaking lunar conference!</p>
            <div className="max-w-md mx-auto">
              <p className="text-sm text-gray-400 mt-4">Limited spots available. Earth-to-Moon transport not included.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 bg-opacity-80 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2099 Vercel. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link href="https://v0.dev/chat/8mYlE3NfiMw?b=b_OJG36Qeb4Hs">Twitter</Link>
              <Link href="https://v0.dev/chat/8mYlE3NfiMw?b=b_OJG36Qeb4Hs">Facebook</Link>
              <Link href="https://v0.dev/chat/8mYlE3NfiMw?b=b_OJG36Qeb4Hs">Instagram</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}