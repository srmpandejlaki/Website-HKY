import React from "react";
import GambarPastor from "@/assets/images/foto-pastor.png";
import TemplateSubSK from "./components/TemplateSubSK";

function SabdaKehidupan() {
  return (
    <div className="sabda-kehidupan-page">
      <h2 className="sabda-kehidupan-title">Sabda Kehidupan</h2>
      <div className="sabda-kehidupan-utama">
        <div className="sabda-kehidupan-image">
          <img src={GambarPastor} alt="Foto Pastor" />
        </div>
        <div className="sabda-kehidupan-content">
          <div className="sabda-kehidupan-header">
            <h3 className="sabda-kehidupan-judul">Refleksi Harian</h3>
            <p className="sabda-kehidupan-tanggal">23 Februari 2026</p> 
          </div>
          <div className="sabda-kehidupan-main-content">
            <p className="sabda-kehidupan-sub-judul">Peringatan St Polikarpus</p>
            <p className="sabda-kehidupan-bacaan-injil">Matius 25:45-46 (Mat 25:31-46)</p>
            <p className="sabda-kehidupan-deskripsi">
              “Aku berkata kepadamu, sesungguhnya segala sesuatu yang tidak kamu lakukan untuk salah seorang dari yang paling hina ini, kamu tidak 
              melakukannya juga untuk Aku. Dan mereka ini akan masuk ke tempat siksaan yang kekal, tetapi orang benar ke dalam hidup yang kekal."
              <br /><br />
              Injil Matius pasal 25 adalah pesan Yesus menyangkut akhir jaman dan diberi judul “Penghakiman Terakhir.”_Menarik untuk disimak apa 
              yang disampaikan Yesus bahwa orang-orang yang tidak diperkenankan masuk ke dalam kebahagiaan surga, bukan pertama-tama para penjahat 
              ulung yang telah melanggar 10 perintah Allah.<br />
              Mereka yang diusir dan masuk ke dalam kematian kekal adalah mereka yang tidak melakukan apapun untuk saudaraKu yang paling hina ini. 
              Itulah mereka yang malas, yang melalaikan tugas perutusannya di dunia, mereka yang tidak peduli dengan sesamanya, mereka yang tidak 
              melakukan tanggungjawabnya, mereka yang diam dan mencari aman untuk diri sendiri.
              Itu berarti kelalaian untuk menolong orang lain, membiarkan orang lain lapar dan haus, telanjang dan sepi sendiri, konsekwensinya 
              sungguh berat. Apalagi bila hal ini dilakukan oleh para pemimpin yang diberi Tuhan tanggungjawab untuk melayani orang lain. Entah 
              pimpinan gereja, pemerintah, maupun organisasi, bahkan pemimpin keluarga.
              <br /><br />
              Ingatlah bahwa ketika mengaku dosa di hadapan Tuhan, kita berkata, “saya berdosa dengan pikiran dan perkataan, dengan perbuatan dan 
              kelalaian.
              Jangan anggap semua baik-baik saja ketika kita tidak berbuat apa-apa untuk Tuhan dan sesama. Pepatah mengatakan, “sebuah kapal akan 
              aman bila berada di pelabuhan. Tapi bukan untuk itulah kapal itu diciptakan.” Ia harus berlayar mengarungi badai dan gelombang 
              lautan untuk membawa orang sampai ke tujuan. Demikian manusia diciptakan Allah bukan untuk tertambat di zona nyamannya tapi untuk 
              melakukan perintah Tuhan, yakni melayani sesama.<br />
              Contoh yang Yesus berikan antara lain seperti orang Samaria yang baik hati.<br />
              Semoga Roh Kudus Allah menggerakkan hati kita untuk berbuat baik, dan terhindar dari kelalaian. Sesungguhnya lawan kata dari 
              cintakasih bukanlah kebencian, tapi tidak peduli atau diam saja dan tidak berbuat apa-apa.<br />
              Dalam Yakobus 4:17, dikatakan, “Jadi jika seorang tahu bagaimana ia harus berbuat baik, tetapi ia tidak melakukannya, ia berdosa".
              <br /><br />
              Semangat Senin, semangat melayani seperti Yesus telah melayani kita.🙏❤️😇<br />
              Ps Revi Tanod Pr
            </p>
          </div>
        </div>
      </div>

      <div className="yellow-line-bold"></div>

      <div className="sub-berita">
        <h2 className="sub-berita-title">Artikel Lainnya</h2>

        <div className="sub-berita-section">
          <TemplateSubSK />
          <TemplateSubSK />
          <TemplateSubSK />
        </div>
      </div>
    </div>
  );
}

export default SabdaKehidupan;