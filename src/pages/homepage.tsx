import Header from "../components/Header";
import Button from "../components/ui/Button";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Card } from "../components/ui/Card";

function App() {
  const speakers = [
    {
      name: "Uniqlo Airism T-Shirt",
      role: "Lightweight & breathable everyday wear - Rp199.000",
      imageUrl:
        "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/img/product/item_03_kv.jpg?240112",
    },
    {
      name: "Uniqlo Hoodie Sweatshirt",
      role: "Comfortable casual hoodie for daily use - Rp399.000",
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/475378/sub/goods_475378_sub14_3x4.jpg?width=600",
    },
    {
      name: "Uniqlo Flannel Shirt",
      role: "Classic flannel for a stylish look - Rp299.000",
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/470188002/item/goods_53_470188002_3x4.jpg?width=600",
    },
    {
      name: "Uniqlo HEATTECH Long Sleeve",
      role: "Warm innerwear technology - Rp249.000",
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460406/sub/goods_460406_sub14_3x4.jpg?width=600",
    },
    {
      name: "Uniqlo Smart Ankle Pants",
      role: "Elegant & flexible pants - Rp499.000",
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450606/sub/goods_450606_sub14_3x4.jpg?width=600",
    },
    {
      name: "Uniqlo Oversized T-Shirt",
      role: "Trendy loose fit style - Rp229.000",
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/469322/item/goods_09_469322_3x4.jpg?width=600",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu UNIQLO?",
      description:
        "UNIQLO adalah brand fashion global asal Jepang yang menawarkan pakaian berkualitas tinggi dengan desain minimalis, nyaman, dan inovatif untuk semua kalangan.",
    },
    {
      title: "Apa keunggulan produk UNIQLO?",
      description:
        "UNIQLO dikenal dengan teknologi bahan seperti AIRism dan HEATTECH yang memberikan kenyamanan maksimal dalam berbagai kondisi cuaca.",
    },
    {
      title: "Siapa target market UNIQLO?",
      description:
        "UNIQLO ditujukan untuk semua kalangan, mulai dari anak muda hingga dewasa, yang menginginkan pakaian simpel, fungsional, dan stylish.",
    },
  ];

  const cardItems = [
    {
      title: "T-Shirts Collection",
      description:
        "Koleksi kaos UNIQLO dengan bahan AIRism yang ringan, adem, dan nyaman digunakan sehari-hari.",
    },
    {
      title: "Outerwear Collection",
      description:
        "Jaket dan hoodie stylish dari UNIQLO yang cocok untuk berbagai aktivitas dan cuaca.",
    },
    {
      title: "Casual Shirts",
      description:
        "Kemeja kasual dengan desain modern dan bahan berkualitas untuk tampilan santai maupun semi formal.",
    },
    {
      title: "Pants & Bottoms",
      description:
        "Celana dengan desain ergonomis dan bahan nyaman untuk menunjang aktivitas harian.",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto">
        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            {/* ✅ TAMBAHAN GAMBAR */}
            <img
              src="https://15.ie/wp-content/uploads/2016/03/UniQlo-Logo.jpg"
              alt="product"
              className="w-full max-w-md rounded-lg"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/2560px-UNIQLO_logo.svg.png"
              alt=""
              className="w-48"
            />

            <p>
              UNIQLO menghadirkan fashion global dengan sentuhan minimalis yang elegan, mengutamakan kenyamanan tanpa mengorbankan gaya. Setiap koleksi dirancang dengan teknologi inovatif dan bahan berkualitas tinggi, sehingga cocok digunakan dalam berbagai aktivitas sehari-hari. Tampil simpel, modern, dan tetap stylish di setiap momen bersama UNIQLO.
            </p>

            <div className="flex gap-3">
              <Button label="Lihat Koleksi" variant="primary" />
              <Button label="Belanja Sekarang" variant="outline" />
            </div>
          </div>

          <div className="w-1/3 flex flex-col gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/500px-UNIQLO_logo.svg.png"
              alt=""
              className="rounded-lg"
            />
          </div>
        </section>

        <section id="speaker" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <h1 className="text-4xl font-bold text-red-900 px-3 mt-16">
          Detail Produk
        </h1>
        <p className="px-3 text-gray-600 mb-10">
          Temukan koleksi terbaik dari UNIQLO yang dirancang untuk kenyamanan maksimal dan gaya modern. Pilih outfit favoritmu dan upgrade penampilanmu sekarang juga
        </p>

        <section
          id="cards"
          className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3"
        >
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label="Lihat Detail"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
        </section>

        <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;