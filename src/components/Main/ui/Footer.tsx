import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo2Image from "../../../assets/logo2.svg"
import { CreditCardIcon } from "@heroicons/react/24/outline"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      {/* Payment section */}
      <div className="bg-indigo-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
            <CreditCardIcon className="w-5 h-5" />
            <span className="font-semibold text-lg">We accept payments:</span>

            <div className="flex items-center gap-4">
              <span className="bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-sm">VISA</span>
              <span className="bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-sm">Mastercard</span>
              <span className="bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-sm">PayPal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Students */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Help & Support</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Platform Rules</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Bookings & Payments</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Cancellations & Refunds</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Pricing & Plans</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Online Payment</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">How to Book a Session</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Platform Guarantees</a></li>
            </ul>
          </div>

          {/* Tutors */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">For Tutors</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Tutor Registration</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Course Guide</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">How to Receive Orders</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Payments & Terms</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Platform Rules</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Tutor Support</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">About CramMaster</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Team</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">News & Updates</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">CramMaster App</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Programs & Benefits</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Loyalty Program</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Referral Program</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Student Discounts</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Tutor Bonuses</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Subscribe for Updates</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <img src={logo2Image} alt="logo" />
              </div>

              <div>
                <p className="text-white font-semibold">CramMaster</p>
                <p className="text-sm text-gray-400">© 2026 All rights reserved</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-indigo-400 transition" aria-label="Facebook">
                <FaFacebook className="w-5 h-5 text-white" />
              </a>

              <a href="#" className="hover:text-indigo-400 transition" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 text-white" />
              </a>

              <a href="#" className="hover:text-indigo-400 transition" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>

              <a href="#" className="hover:text-indigo-400 transition" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
            </div>

          </div>

          {/* Policies */}
          <div className="mt-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
              <span>.</span>
              <a href="#" className="hover:text-indigo-400 transition">Terms of Service</a>
              <span>.</span>
              <a href="#" className="hover:text-indigo-400 transition">Cookie Policy</a>
              <span>.</span>
              <a href="#" className="hover:text-indigo-400 transition">Accessibility</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}