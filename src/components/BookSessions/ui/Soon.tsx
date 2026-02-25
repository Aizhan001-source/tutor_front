import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo2Image from "../../../assets/logo2.svg"
import { CreditCardIcon } from "@heroicons/react/24/outline"

export const Soon =() => {
    return(
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="bg-indigo-600 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
                        <CreditCardIcon className="w-5 h-5"/>
                        <span className="font-semibold text-lg">We accept payments:</span>
                        <div className="flex items-center gap-4">
                            <span className="bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-sm">VISA</span>
                            <span className="bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-sm">Mastercard</span>
                            <span className="bg-white text-indigo-600 px-3 py-1 rounded font-semibold text-sm">PayPal</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <h3 className="text-white font-semibold text-lg mb-4">For Students</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Help & Support
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>FAQ
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Platform Rules
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Bookings & Payments
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Cancellations & Refunds
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Pricing & Plans
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Online Payment
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>How to Book a Session
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Platform Guarantees   
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">For Tutors</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Tutor Registration
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Course Guide
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>How to Receive Orders
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Payments & Terms
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Platform Rules
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Tutor Support
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">About</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>About CramMaster
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Our Mission
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Team
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Careers
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>News & Updates
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>CramMaster App
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Programs & Benefits</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Loyalty Program
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Referral Program
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Student Discounts
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Tutor Bonuses
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-400 transition text-sm"/>Subscribe for Updates
                        </li>
                    </ul>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-indigo-600 p-2 rounded-lg">
                            <img 
                            src={logo2Image}
                            alt="logo">
                            </img>
                            </div>
                            
                            <p className="text-white font-semibold">CramMaster</p>
                            <p className="text-sm text-gray-400">© 2026 All rights reserved</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-indigo-400 transition" 
                            aria-label="Facebook"/>
                            <FaFacebook className="w-5 h-5 text-white" />
                            <a href="#" className="hover:text-indigo-400 transition" 
                            aria-label="Twitter"/>
                            <FaTwitter className="w-5 h-5 text-white" />
                            <a href="#" className="hover:text-indigo-400 transition" 
                            aria-label="Instagram"/>
                            <FaInstagram className="w-5 h-5 text-white" />
                            <a href="#" className="hover:text-indigo-400 transition" 
                            aria-label="LinkedIn"/>
                            <FaLinkedin className="w-5 h-5 text-white" />
                        </div>
                    </div>
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