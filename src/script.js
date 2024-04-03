function sectionproject() {
    gsap.from(".project__div span", {
      y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      opacity: 0,
      scrollTrigger: {
        trigger: ".project",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1.9,
      },
    });
  }
  document.addEventListener("DOMContentLoaded",sectionproject);

  function sectioncertificate() {
    gsap.from(".certificate__div span", {
      y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      opacity: 0,
      scrollTrigger: {
        trigger: ".certificate",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1.9,
      },
    });
  }
  document.addEventListener("DOMContentLoaded",sectioncertificate);


function sectionprofile() {
    gsap.from(".profile-info h2",{
        x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
        opacity: 1,
        scrollTrigger: {
          trigger: ".project",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.9,
        },
      });
    }
    document.addEventListener("DOMContentLoaded",sectionprofile);

function openModal1(){
  Swal.fire({
    html: '<iframe src="https://iamhuda.github.io/20220140049_Exercise1/" frameborder="0" style="width: 100%; height: 80vh;"></iframe>', // Ganti URL dengan URL website yang ingin ditampilkan
    showCloseButton: true,
    showConfirmButton: false,
    width: '80%',
    padding: '3rem',
    allowOutsideClick: true 
  });
}
function openModal2(){
  Swal.fire({
    html: '<iframe src="https://kmti.tech/" frameborder="0" style="width: 100%; height: 80vh;"></iframe>', // Ganti URL dengan URL website yang ingin ditampilkan
    showCloseButton: true,
    showConfirmButton: false,
    width: '80%',
    padding: '3rem',
    allowOutsideClick: true 
  });
}

function openModal3(){
  Swal.fire({
    html: '<iframe src="https://waroeng-jfbn.vercel.app/" frameborder="0" style="width: 100%; height: 80vh;"></iframe>', // Ganti URL dengan URL website yang ingin ditampilkan
    showCloseButton: true,
    showConfirmButton: false,
    width: '80%',
    padding: '3rem',
    allowOutsideClick: true 
  });
}

function opencertif1() {
  // Tampilkan popup SweetAlert2 dengan gambar sertifikat
  Swal.fire({
      imageUrl: './assets/sertif1.png',
      imageAlt: 'Sertifikat 1',
      showCloseButton: true,
      showConfirmButton: false,
      width: '60%',
      padding: '3rem',
      allowOutsideClick: true
  });
}
function opencertif2() {
  // Tampilkan popup SweetAlert2 dengan gambar sertifikat
  Swal.fire({
      imageUrl: './assets/sertif2.jpg',
      imageAlt: 'Sertifikat 2',
      showCloseButton: true,
      showConfirmButton: false,
      width: '80%',
      padding: '3rem',
      allowOutsideClick: true
  });
}

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImage = document.querySelector(".song-img");
let songTitle = document.querySelector("h1");
let songDescription = document.querySelector("p");

// Daftar lagu
let songs = [
    { title: "Tak akan ada cinta yang lain",description:"dewa 19", image: "./assets/giphy.gif", src: "./assets/Dewa 19 - Tak Kan Ada Cinta yang Lain _ Official Lyric Video.mp3" },
    { title: "Munajat cinta",description:"dewa 19", image: "./assets/sad2.gif", src: "./assets/The Rock - Munajat Cinta (Official Music Video).mp3" },
 
];

let currentSongIndex = 0;

// Fungsi untuk memutar lagu
function playSong() {
    let currentSong = songs[currentSongIndex];
    song.src = currentSong.src;
    songTitle.textContent = currentSong.title;
    songDescription.textContent = currentSong.description;
    songImage.src = currentSong.image;
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

// Fungsi untuk berikutnya
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
}

// Fungsi untuk sebelumnya
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong();
}

// Memperbarui nilai progress saat lagu dimuat
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Memperbarui nilai progress saat lagu berubah waktu
song.ontimeupdate = function() {
    progress.value = song.currentTime;
}

// Memainkan atau menjeda lagu saat ikon kontrol diklik
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Memainkan lagu dari posisi progress yang dipilih
progress.oninput = function() {
    song.currentTime = progress.value;
}

// Memutar lagu berikutnya saat lagu saat ini selesai
song.onended = function() {
    nextSong();
}

