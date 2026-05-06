import { CheckCircleIcon } from "@heroicons/react/24/outline"

export const Summary=() => {
    return(
        <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                    <div className="pb-3 border-b border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Tutor</p>
                        <p className="font-medium text-gray-900">Sarah Johnson</p>
                    </div>
                    <div className="pb-3 border-b border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Course</p>
                        <p className="font-medium text-gray-900">Mathematics</p>
                    </div>
                    <div className="pb-3 border-b border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Session Duration</p>
                        <p className="font-medium text-gray-900">Mathematics</p>
                    </div>
                    <div className="pb-3 border-b border-gray-200">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-900">
                                $
                                45
                                .00</span>
                        </div>
                    </div>
                    <div className="pb-3 border-b border-gray-200">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Platform Fee</span>
                            <span className="font-medium text-gray-900">
                                $2.00</span>
                        </div>
                    </div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-indigo-600">$47.00</span>
                    </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4"/>
                        <p>Instant booking confirmation</p>
                    </div>  
                    <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4"/>
                        <p>24-hour cancellation policy</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4"/>
                        <p>Money-back guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}