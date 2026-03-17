export const FooterBar = () => {
    return (
        <footer className="bg-gray-900 py-4 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} CramMaster Admin Panel. All rights reserved.
                </p>
            </div>
        </footer>
    );
};