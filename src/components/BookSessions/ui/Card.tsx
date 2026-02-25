import { ArrowLeftIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import { CreditCardIcon } from "@heroicons/react/24/outline"

export const Card=() => {
    return(
        <main className="flex-l">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2 font-medium">
                    <ArrowLeftIcon 
                    className="w-5 h-6"/>
                    Back
                </button>
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Complete Your Booking
                    </h1>
                    <span className="text-gray-600 text-lg">
                        Secure payment for your tutoring session
                        </span>
                </div>
                
                <div className="grid grid-cols-l lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                            <form className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Student Information
                                </h3>
                                <label htmlFor='studentName' className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input 
                                id="studentName" 
                                type="text" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" 
                                placeholder="John Doe"/>

                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Payment Method    
                                </h3>

                                <div className="grid grid-cols-l sm:grid-cols-3 gap-3">
                                    <button 
                                    type="button"
                                    className="p-4 border-2 rounded-lg transition border-indigo-600 bg-indigo-50">
                                        <CreditCardIcon 
                                        className="w-8 h-8 lucide lucide-credit-card size-6 mx-auto mb-2 text-indigo-600"/>
                                    <p className="text-sm font-medium text-indigo-600">Credit/Debit Card</p>
                                    </button>

                                    <button 
                                    type="button"
                                    className="p-4 border-2 rounded-lg transition border-indigo-600 bg-indigo-50">
                                        <DevicePhoneMobileIcon
                                        className="w-8 h-8 lucide lucide-credit-card size-6 mx-auto mb-2 text-indigo-600"/>
                                        <p className="text-sm font-medium text-indigo-600">Online Payment</p>
                                    </button>
                                    <button 
                                    type="button"
                                    className="p-4 border-2 rounded-lg transition border-indigo-600 bg-indigo-50">
                                        <CurrencyDollarIcon
                                        className="w-8 h-8 lucide lucide-credit-card size-6 mx-auto mb-2 text-indigo-600"/>
                                        <p className="text-sm font-medium text-indigo-600">Cryptocurrency</p>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Cryptocurrency Payment
                                    </h3>
                                    <label htmlFor="cryptoAddress" 
                                    className="block text-sm font-medium text-gray-700 mb-2">Wallet Address</label>
                                    <input 
                                    id="cryptoAddress"
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                    placeholder="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"/>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                    <p className="text-sm text-amber-800 mb-2">
                                        <strong>Supported cryptocurrencies:</strong>
                                         Bitcoin (BTC), Ethereum (ETH), USDT </p>
                                    <p className="text-sm text-amber-800">Send payment to the address provided after clicking "Pay Now"</p>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                                    <LockClosedIcon className="w-4 h-4"/>
                                    <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                                    <p className="text-sm text-gray-600">Your payment information is encrypted and secure. We never store your card details.</p>
                                </div>
                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg font-semibold transition text-lg shadow-lg hover:shadow-xl">
                                    Pay Now - $
                                    45
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}