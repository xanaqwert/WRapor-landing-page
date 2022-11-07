import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="WRapor"
        description="WRapor adalah rapor berbentuk aplikasi sehingga mempermudah siswa/siswi untuk melihat rapor mereka, serta ramah lingkungan dan mengikuti teknologi."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="UI/UX Lebih Pintar"
        description="Memiliki UI/UX yang lebih canggih dan modern, untuk mempermudah siswa/siswi dan guru."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="React Native Expo"
        description="WRapor dibangun menggunakan Expo yang berjalan secara native di semua perangkat pengguna. Kamu dapat dengan mudah membawa aplikasi WRapor ke tangan orang."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Kreatif dan Inovatif untuk memajukan Bangsa"
        description="Aplikasi ini berisi dua layar. Layar pertama mencantumkan semua Rapor sedangkan layar kedua menampilkan detail Rapor tertentu."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with AI by <span className="bold">©xanaqwert</span>
        </p>
      </div>
    </>
  );
};

export default App;
