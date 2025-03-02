import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#038c6d] text-white mt-10 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 - About */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About Us</h2>
                        <p className="text-sm mb-4">
                            We are a team of passionate developers, designers, and creators working together to bring the best digital experiences.
                        </p>
                        <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li><a href="#" className="text-sm hover:text-secondary my-3 block duration-300">Home</a></li>
                            <li><a href="#" className="text-sm hover:text-secondary my-3 block duration-300">About</a></li>
                            <li><a href="#" className="text-sm hover:text-secondary my-3 block duration-300">Services</a></li>
                            <li><a href="#" className="text-sm hover:text-secondary my-3 block duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Social Media */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Contact Me (CR) </h2>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">Built with ❤️ by Your Company</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
