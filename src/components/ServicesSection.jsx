import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Home,
  Building2,
  Package,
  Truck,
  Shield,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Pindahan Rumah",
      description:
        "Layanan pindahan rumah tangga lengkap dengan tim profesional dan peralatan modern.",
      features: [
        "Packing & unpacking barang",
        "Peralatan pindahan lengkap",
        "Asuransi barang",
        "Tim Profesional",
      ],
      price: "Mulai dari Rp 500.000",
      color: "blue",
    },
    {
      icon: Building2,
      title: "Pindahan Kantor",
      description:
        "Solusi pindahan kantor yang efisien dengan minimal gangguan terhadap operasional bisnis.",
      features: [
        "Jadwal fleksibel",
        "Handling dokumen penting",
        "Setup ulang workstation",
        "Koordinasi tim IT",
      ],
      price: "Mulai dari Rp 1.500.000",
      color: "orange",
    },
    {
      icon: Package,
      title: "Jasa Packing",
      description:
        "Layanan packing profesional untuk melindungi barang berharga selama proses pindahan.",
      features: [
        "Material packing berkualitas",
        "Packing barang fragile",
        "Labeling sistematis",
        "Unpacking service",
      ],
      price: "Mulai dari Rp 200.000",
      color: "green",
    },
    {
      icon: Truck,
      title: "Sewa Truk",
      description:
        "Penyewaan truk berbagai ukuran dengan atau tanpa driver dan helper profesional.",
      features: [
        "Berbagai ukuran truk",
        "Driver berpengalaman",
        "Helper tersedia",
        "Harga kompetitif",
      ],
      price: "Mulai dari Rp 300.000/hari",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Asuransi Barang",
      description:
        "Perlindungan menyeluruh untuk barang-barang berharga selama proses pemindahan.",
      features: [
        "Coverage hingga 100%",
        "Klaim mudah & cepat",
        "Berbagai jenis barang",
        "Premi terjangkau",
      ],
      price: "Mulai dari Rp 50.000",
      color: "red",
    },
    {
      icon: Wrench,
      title: "Bongkar Pasang",
      description:
        "Layanan bongkar pasang furniture dan peralatan rumah tangga atau kantor.",
      features: [
        "Furniture & AC",
        "Peralatan elektronik",
        "Kitchen set",
        "Lemari built-in",
      ],
      price: "Mulai dari Rp 150.000",
      color: "indigo",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-500 bg-blue-50 text-blue-600",
      orange: "border-orange-500 bg-orange-50 text-orange-600",
      green: "border-green-500 bg-green-50 text-green-600",
      purple: "border-purple-500 bg-purple-50 text-purple-600",
      red: "border-red-500 bg-red-50 text-red-600",
      indigo: "border-indigo-500 bg-indigo-50 text-indigo-600",
    };
    return colors[color] || colors.blue;
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-orange-500">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan pindahan dan logistik Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full border-2 flex items-center justify-center mb-4 ${getColorClasses(
                      service.color
                    )}`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center border-t pt-6">
                    <div className="text-lg font-bold text-orange-600 mb-4">
                      {service.price}
                    </div>
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                    >
                      Pesan Sekarang
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Tidak Menemukan Layanan yang Anda Cari?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Hubungi kami untuk konsultasi gratis dan dapatkan solusi pindahan
            yang sesuai dengan kebutuhan Anda
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
