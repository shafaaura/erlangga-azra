// ===================================
// PEMBUKA WEBSITE
// ===================================

function enterWebsite() {
    const opening = document.getElementById("opening");

    opening.classList.add("hide");

    document.body.style.overflow = "auto";
}


// ===================================
// CERITA DI BALIK FOTO
// ===================================

const memories = [
    {
        title: "Salah satu favoritku",
        text: "Aku suka foto ini karena ada kamu di dalamnya. Mungkin kelihatannya sederhana, tapi aku senang bisa punya kenangan seperti ini sama kamu. Kalau bisa, aku mau punya lebih banyak foto dan cerita yang bisa kita simpan bersama."
    },

    {
        title: "Tentang kamu",
        text: "Kadang aku suka memperhatikan hal-hal kecil tentang kamu. Cara kamu bercanda, cara kamu cerita, bahkan hal random yang kamu lakukan. Mungkin kamu nggak sadar, tapi hal-hal seperti itu bisa bikin aku kangen."
    },

    {
        title: "Tentang kita",
        text: "Kita punya cerita sendiri. Nggak selalu sempurna, nggak selalu mudah, tapi aku tetap senang bisa menjalani semuanya sama kamu. Terima kasih sudah menjadi bagian dari hari-hari aku."
    },

    {
        title: "Hari yang ingin diulang",
        text: "Kalau ada kesempatan untuk mengulang salah satu momen bersama kamu, mungkin aku mau kembali ke hari ini. Bukan karena semuanya harus sempurna, tapi karena aku senang bisa menghabiskan waktu sama kamu."
    },

    {
        title: "Masih banyak cerita",
        text: "Ini cuma sebagian kecil dari kenangan yang kita punya. Aku berharap ke depannya masih ada banyak foto, tawa, cerita random, dan momen sederhana yang bisa kita buat bersama."
    }
];


// ===================================
// PESAN KECIL
// ===================================

const messages = [
    {
        title: "Kalau kamu capek",
        text: "Jangan lupa istirahat, ya. Kamu nggak harus selalu kuat dan menyelesaikan semuanya sekaligus. Aku tahu kamu punya banyak hal yang sedang kamu usahakan. Semangat terus, aku selalu berharap semua hal baik datang ke kamu. Jangan lupa kalau ada seseorang di sini yang selalu bangga sama kamu."
    },

    {
        title: "Kalau kamu kangen",
        text: "Kalau aku boleh jujur, aku juga sering kangen. Kadang pengin banget bisa langsung ketemu, cerita banyak hal, atau sekadar menghabiskan waktu bareng. Tapi untuk sekarang, kita sabar dulu, ya. Semoga nanti ada hari ketika kita nggak perlu menghitung jarak lagi."
    },

    {
        title: "Kalau kamu ragu",
        text: "Aku memang nggak bisa menjanjikan kalau semuanya akan selalu mudah. Kita pasti punya kekurangan dan mungkin akan ada hari yang nggak berjalan sesuai keinginan. Tapi aku mau kita tetap saling mendengarkan, saling memahami, dan berusaha menjaga apa yang sudah kita punya."
    }
];


// ===================================
// PESAN TENTANG DIA
// ===================================

function openFavorite() {
    showPopup(
        "HAL YANG AKU SUKA",
        "Kamu, dengan segala hal kecilmu.",
        "Aku suka caramu menjadi diri sendiri. Aku suka saat kamu cerita banyak hal, saat kamu bercanda, dan saat kamu berusaha melakukan sesuatu dengan sungguh-sungguh. Aku mungkin nggak selalu pandai mengungkapkannya, tapi aku benar-benar bersyukur bisa mengenal kamu. Dan satu hal lagi, jangan pernah merasa kamu harus jadi orang lain supaya bisa disayang, ya. Aku suka kamu sebagai kamu."
    );
}


// ===================================
// SURAT UNTUK ERLANGGA
// ===================================

function openLetter() {
    showPopup(
        "SURAT KHUSUS UNTUK ERLANGGA",
        "Hai, orang kesayanganku.",
        `Aku sebenarnya bingung harus mulai dari mana, karena ada banyak hal yang ingin aku sampaikan.

Pertama, terima kasih sudah hadir di hidup aku. Terima kasih karena sudah memberikan banyak cerita, pengalaman, dan kenangan yang mungkin nantinya akan selalu aku ingat.

Aku senang bisa mengenal kamu. Dari awal pertemuan kita sampai sekarang, ada banyak hal yang sudah kita lewati. Ada tawa, cerita random, rasa kangen, dan mungkin juga beberapa hal yang membuat kita belajar untuk lebih memahami satu sama lain.

Aku tahu hubungan kita sekarang nggak selalu mudah. Ada jarak yang kadang bikin kita cuma bisa saling mengabari lewat layar. Ada rasa ingin bertemu yang nggak selalu bisa langsung terwujud. Tapi aku berharap kita nggak menjadikan jarak sebagai alasan untuk berhenti saling menjaga.

Aku nggak butuh hubungan yang selalu sempurna. Aku cuma ingin kita bisa terus belajar, saling menghargai, saling percaya, dan tetap punya keinginan untuk memperbaiki semuanya ketika ada masalah.

Kalau suatu saat kamu merasa capek, jangan lupa istirahat. Kalau ada sesuatu yang mengganggu pikiranmu, jangan ragu untuk cerita. Aku mungkin nggak selalu punya jawaban untuk semuanya, tapi aku akan berusaha mendengarkan.

Terakhir, aku cuma mau bilang kalau aku sayang kamu. Mungkin lebih banyak daripada yang sering aku ucapkan.

Semoga kita masih punya banyak kesempatan untuk membuat cerita baru, mengambil foto baru, dan menghabiskan lebih banyak waktu bersama.

Jaga diri baik-baik, ya, Langga.

Dengan banyak sayang,
dari aku. ♡`
    );
}


// ===================================
// FUNGSI POPUP
// ===================================

function showPopup(label, title, text) {
    document.getElementById("modalLabel").textContent = label;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;

    document.getElementById("memoryModal").classList.add("active");

    document.body.style.overflow = "hidden";
}


// ===================================
// MEMBUKA CERITA FOTO
// ===================================

function openMemory(index) {
    const memory = memories[index];

    if (!memory) return;

    showPopup(
        "CERITA DI BALIK FOTO",
        memory.title,
        memory.text
    );
}


// ===================================
// MEMBUKA PESAN
// ===================================

function openMessage(index) {
    const message = messages[index];

    if (!message) return;

    showPopup(
        "PESAN KECIL DARIKU",
        message.title,
        message.text
    );
}


// ===================================
// MENUTUP POPUP
// ===================================

function closeModal() {
    document.getElementById("memoryModal").classList.remove("active");

    document.body.style.overflow = "auto";
}


// ===================================
// KLIK DI LUAR POPUP
// ===================================

document.getElementById("memoryModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeModal();
    }
});


// ===================================
// TOMBOL ESC UNTUK MENUTUP
// ===================================

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});