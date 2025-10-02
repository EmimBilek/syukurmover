import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      content:
        "Jl. Suralaya No. 49, Kec. Cipayung, Kel. Cilangkap\nJakarta Timur 13870, Indonesia",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 819-1111-9998",
      color: "orange",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@syukurmover.co.id\ncs@syukurmover.co.id",
      color: "green",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 18:00\nMinggu: 08:00 - 16:00",
      color: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      orange: "bg-orange-100 text-orange-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-orange-500">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu Anda dengan layanan pindahan terpercaya. Konsultasi
            gratis!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-full ${getColorClasses(
                        info.color
                      )} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Google Maps Embed */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-0">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3755356230009!2d106.90302362851234!3d-6.32891906667061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2e4dad66c5%3A0xde59c0e13056c30a!2sJl.%20Suralaya%20No.49%2C%20RT.4%2FRW.4%2C%20Cilangkap%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013870!5e0!3m2!1sen!2sid!4v1759386906095!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi SyukurMover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Lokasi Kantor
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Kunjungi kantor kami untuk konsultasi langsung dan survei
                    lokasi gratis
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp CTA */}
          <div className="@container p-6 lg:col-span-2 bg-green-50 rounded-xl border border-green-200">
            <div className="flex flex-row @max-sm:flex-col items-center space-x-4">
              <div className="bg-green-500 p-3 me-5 @max-sm:me-0 rounded-full">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 m-0">
                <h4 className="text-center sm:text-left font-semibold text-gray-900">
                  Butuh Respon Cepat?
                </h4>
                <p className="text-sm text-center sm:text-left text-gray-600">
                  Hubungi kami via WhatsApp untuk konsultasi langsung
                </p>
              </div>
              <a
                href="https://wa.me/6281911119998?text=Halo%20SyukurMover%2C%20saya%20butuh%20informasi%20layanan%20pindahan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200 @max-sm:mt-3"
              >
                WhatsApp
              </a>
            </div>
          </div>
          {/* <Card className="lg:col-span-2 shadow-xl border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Dapatkan Penawaran Gratis
                </h3>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          Nama Lengkap *
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          Nomor Telepon *
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                          placeholder="+62 812-xxxx-xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12"
                        placeholder="nama@email.com"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        Pesan *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="resize-none"
                        placeholder="Ceritakan kebutuhan pindahan Anda... (lokasi, jenis barang, tanggal, dll)"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Kirim Pesan
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Pesan Terkirim!
                    </h4>
                    <p className="text-gray-600">
                      Terima kasih! Kami akan segera menghubungi Anda dalam 24
                      jam.
                    </p>
                  </div>
                )}
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
