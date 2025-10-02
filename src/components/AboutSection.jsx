import React from "react";
import { Card, CardContent } from "./ui/card";
import { Target, Eye, Award, Truck, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-blue-600">SyukurMover</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner terpercaya untuk semua kebutuhan pindahan Anda sejak 2018
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Description */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Solusi Pindahan Terpercaya di Indonesia
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SyukurMover adalah perusahaan jasa pindahan profesional yang telah
              melayani ribuan keluarga dan perusahaan di seluruh Indonesia.
              Dengan pengalaman lebih dari 5 tahun, kami memahami betapa
              pentingnya proses pindahan yang aman, cepat, dan terpercaya.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tim kami terdiri dari profesional berpengalaman yang telah
              terlatih untuk menangani berbagai jenis barang dengan
              kehati-hatian maksimal. Mulai dari barang elektronik, furniture,
              hingga barang berharga lainnya.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-sm font-medium text-gray-700">
                  Pelanggan Puas
                </div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  5+
                </div>
                <div className="text-sm font-medium text-gray-700">
                  Tahun Pengalaman
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Misi Kami</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Memberikan layanan pindahan terbaik dengan standar keamanan
                  tinggi, harga terjangkau, dan pelayanan yang memuaskan untuk
                  setiap pelanggan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Eye className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Visi Kami</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi perusahaan jasa pindahan terdepan di Indonesia yang
                  dikenal dengan profesionalisme, keandalan, dan inovasi dalam
                  pelayanan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Komitmen Kami
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mengutamakan kepuasan pelanggan dengan pelayanan berkualitas,
                  transparansi harga, dan jaminan keamanan untuk setiap barang.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Mengapa Memilih SyukurMover?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                <Truck className="h-8 w-8 text-blue-600 mx-auto mt-1" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Armada Lengkap
              </h4>
              <p className="text-sm text-gray-600">
                Berbagai ukuran kendaraan sesuai kebutuhan
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mt-1" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Berlisensi & Asuransi
              </h4>
              <p className="text-sm text-gray-600">
                Legalitas lengkap dan asuransi barang
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-blue-600 mx-auto mt-1" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Tim Profesional
              </h4>
              <p className="text-sm text-gray-600">
                Pekerja terlatih dan berpengalaman
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mt-1" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">
                Layanan konsultasi sepanjang waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
