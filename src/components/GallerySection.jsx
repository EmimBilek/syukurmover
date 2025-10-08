import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/flagged/photo-1594051723956-b14e836bdeb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtb3ZlcnN8ZW58MHx8fHwxNzU5MzAxNTY4fDA&ixlib=rb-4.1.0&q=85",
      title: "Layanan Packing Profesional",
      description: "Tim kami membantu mengemas barang dengan aman dan rapi",
    },
    {
      url: "https://images.unsplash.com/photo-1694715669993-ea0022b470f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtb3ZlcnN8ZW58MHx8fHwxNzU5MzAxNTY4fDA&ixlib=rb-4.1.0&q=85",
      title: "Proses Loading Barang",
      description: "Pemuatan barang ke truk dengan hati-hati dan sistematis",
    },
    {
      url: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxtb3ZpbmclMjB0cnVja3xlbnwwfHx8fDE3NTkzMDE1NzR8MA&ixlib=rb-4.1.0&q=85",
      title: "Armada Truk Profesional",
      description: "Berbagai ukuran truk untuk kebutuhan pindahan Anda",
    },
    {
      url: "https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxob3VzZSUyMG1vdmluZ3xlbnwwfHx8fDE3NTkzMDE1Nzh8MA&ixlib=rb-4.1.0&q=85",
      title: "Persiapan Barang Pindahan",
      description: "Barang dikemas dengan rapi siap untuk dipindahkan",
    },
    {
      url: "https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg",
      title: "Tim Movers Berpengalaman",
      description:
        "Pekerja profesional yang berpengalaman dalam menangani berbagai jenis barang",
    },
    {
      url: "https://images.pexels.com/photos/8963079/pexels-photo-8963079.jpeg",
      title: "Hasil Packing yang Rapi",
      description: "Barang tertata rapi dan siap untuk proses pemindahan",
    },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentIndex]);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Galeri <span className="text-blue-600">Pekerjaan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi pengalaman nyata layanan pindahan profesional kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              onClick={() => openModal(image, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative max-w-4xl w-full max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/30 rounded-full text-white transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/20 hover:bg-black/30 rounded-full text-white transition-all duration-200"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/20 hover:bg-black/30 rounded-full text-white transition-all duration-200"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/20 rounded-full text-white text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ingin Melihat Hasil Kerja Kami Langsung?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Hubungi kami untuk survei lokasi gratis dan dapatkan pengalaman
              pindahan terbaik
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
