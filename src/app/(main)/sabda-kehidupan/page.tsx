import Image from "next/image";
import TemplateSubSK from "@/components/sabda-kehidupan/TemplateSubSK";

import styles from "@/styles/sabda-kehidupan.module.scss";

export default function SabdaKehidupanPage() {
  return (
    <div className="main-section">
      <h2 className={styles["sabda-kehidupan-title"]}>Sabda Kehidupan</h2>
      <div className={styles["sabda-kehidupan-utama"]}>
        <div className={styles["sabda-kehidupan-image"]}>
          <Image
            src="/images/foto-pastor-2.png"
            alt="Foto Pastor"
            width={900}
            height={900}
            style={{ borderRadius: "15rem", border: "3px solid #042572" }}
          />
        </div>
        <div className={styles["sabda-kehidupan-content"]}>
          <div className={styles["sabda-kehidupan-header"]}>
            <h3 className={styles["sabda-kehidupan-judul"]}>Refleksi Harian</h3>
            <p className={styles["sabda-kehidupan-tanggal"]}>23 Februari 2026</p>
          </div>
          <div className={styles["sabda-kehidupan-main-content"]}>
            <p className={styles["sabda-kehidupan-sub-judul"]}>
              Peringatan St Polikarpus
            </p>
            <p className={styles["sabda-kehidupan-bacaan-injil"]}>
              Matius 25:45-46 (Mat 25:31-46)
            </p>
            <p className={styles["sabda-kehidupan-deskripsi"]}>
              &ldquo;Aku berkata kepadamu, sesungguhnya segala sesuatu yang tidak
              kamu lakukan untuk salah seorang dari yang paling hina ini, kamu
              tidak melakukannya juga untuk Aku. Dan mereka ini akan masuk ke
              tempat siksaan yang kekal, tetapi orang benar ke dalam hidup yang
              kekal.&rdquo;
              <br />
              <br />
              Injil Matius pasal 25 adalah pesan Yesus menyangkut akhir jaman
              dan diberi judul &ldquo;Penghakiman Terakhir.&rdquo;_Menarik untuk
              disimak apa yang disampaikan Yesus bahwa orang-orang yang tidak
              diperkenankan masuk ke dalam kebahagiaan surga, bukan pertama-tama
              para penjahat ulung yang telah melanggar 10 perintah Allah.
              <br />
              Mereka yang diusir dan masuk ke dalam kematian kekal adalah mereka
              yang tidak melakukan apapun untuk saudaraKu yang paling hina ini.
              Itulah mereka yang malas, yang melalaikan tugas perutusannya di
              dunia, mereka yang tidak peduli dengan sesamanya, mereka yang tidak
              melakukan tanggungjawabnya, mereka yang diam dan mencari aman untuk
              diri sendiri. Itu berarti kelalaian untuk menolong orang lain,
              membiarkan orang lain lapar dan haus, telanjang dan sepi sendiri,
              konsekwensinya sungguh berat. Apalagi bila hal ini dilakukan oleh
              para pemimpin yang diberi Tuhan tanggungjawab untuk melayani orang
              lain. Entah pimpinan gereja, pemerintah, maupun organisasi, bahkan
              pemimpin keluarga.
              <br />
              <br />
              Ingatlah bahwa ketika mengaku dosa di hadapan Tuhan, kita berkata,
              &ldquo;saya berdosa dengan pikiran dan perkataan, dengan perbuatan
              dan kelalaian. Jangan anggap semua baik-baik saja ketika kita tidak
              berbuat apa-apa untuk Tuhan dan sesama. Pepatah mengatakan,
              &ldquo;sebuah kapal akan aman bila berada di pelabuhan. Tapi bukan
              untuk itulah kapal itu diciptakan.&rdquo; Ia harus berlayar
              mengarungi badai dan gelombang lautan untuk membawa orang sampai ke
              tujuan. Demikian manusia diciptakan Allah bukan untuk tertambat di
              zona nyamannya tapi untuk melakukan perintah Tuhan, yakni melayani
              sesama.
              <br />
              Contoh yang Yesus berikan antara lain seperti orang Samaria yang
              baik hati.
              <br />
              Semoga Roh Kudus Allah menggerakkan hati kita untuk berbuat baik,
              dan terhindar dari kelalaian. Sesungguhnya lawan kata dari
              cintakasih bukanlah kebencian, tapi tidak peduli atau diam saja dan
              tidak berbuat apa-apa.
              <br />
              Dalam Yakobus 4:17, dikatakan, &ldquo;Jadi jika seorang tahu
              bagaimana ia harus berbuat baik, tetapi ia tidak melakukannya, ia
              berdosa&rdquo;.
              <br />
              <br />
              Semangat Senin, semangat melayani seperti Yesus telah melayani
              kita.🙏❤️😇
              <br />
              Ps Revi Tanod Pr
            </p>
          </div>
        </div>
      </div>

      <div className="yellow-line-bold"></div>

      <div className={styles["sub-sabda-kehidupan"]}>
        <h2 className={styles["sub-sabda-kehidupan-title"]}>Lainnya</h2>

        <div className={styles["sub-sabda-kehidupan-section"]}>
          <TemplateSubSK />
          <TemplateSubSK />
          <TemplateSubSK />
        </div>
      </div>
    </div>
  );
}
