import React from "react";
import { Separator } from "./ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowUp,
  Truck,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#services", label: "Layanan" },
    { href: "#gallery", label: "Galeri" },
    { href: "#contact", label: "Kontak" },
  ];

  const services = [
    { label: "Pindahan Rumah" },
    { label: "Pindahan Kantor" },
    { label: "Jasa Packing" },
    { label: "Sewa Truk" },
    { label: "Asuransi Barang" },
  ];

  const features = [
    { icon: Truck, label: "Armada Lengkap" },
    { icon: Shield, label: "Berlisensi & Asuransi" },
    { icon: Clock, label: "24/7 Support" },
    { icon: Award, label: "Tim Profesional" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">SyukurMover</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Partner terpercaya untuk semua kebutuhan pindahan Anda. Melayani
              dengan profesional sejak 2018.
            </p>

            {/* Features Icons */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                  >
                    <IconComponent className="h-4 w-4 text-orange-500" />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Jl. Suralaya No. 49, Kec. Cipayung, Kel. Cilangkap
                    <br />
                    Jakarta Timur 13870, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+62 819-1111-9998</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    info@syukurmover.co.id
                  </p>
                  <p className="text-gray-300 text-sm">cs@syukurmover.co.id</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">
                Ikuti Kami
              </h5>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/syukurmover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/syukurmover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Separator */}
      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2025 SyukurMover. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for reliable moving services</p>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">
              Berlisensi & Berasuransi
            </span>
            <button
              onClick={scrollToTop}
              className="bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition-colors duration-200 group"
            >
              <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
