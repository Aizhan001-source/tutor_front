import Book from "../../../../assets/book3.svg" 

export const PaymentsBar = () => {
    return (
        <div className="p-6">
            <div className="text-center py-12">
                
                <img
                    src={Book}
                    alt="Courses"
                    className="w-12 h-12 mx-auto mb-4 opacity-60"
                />

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Payments Management
                </h3>

                <p className="text-gray-600">
                    Manage payments and view detailed analytics
                </p>

            </div>
        </div>
    );
};