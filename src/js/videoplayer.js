// Інінціалізація програвача
const player = new Plyr('#features-player');

const mobileImage = '../images/howmade/howmade-mobile.jpg';
const mobileImage2x = '../images/howmade/howmade-mobile@2x.jpg';
const mobileImage3x = '../images/howmade/howmade-mobile@3x.jpg';

const tabletImage = '../images/howmade/howmade-tablet.jpg';
const tabletImage2x = '../images/howmade/howmade-tablet@2x.jpg';
const tabletImage3x = '../images/howmade/howmade-tablet@3x.jpg';

const desktopImage = '../images/howmade/howmade-desktop.jpg';
const desktopImage2x = '../images/howmade/howmade-desktop@2x.jpg';
const desktopImage3x = '../images/howmade/howmade-desktop@3x.jpg';

if (window.innerWidth >= 1200 && window.devicePixelRatio >= 3) {
  player.poster = desktopImage3x;
} else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 2) {
  player.poster = desktopImage2x;
} else if (window.innerWidth >= 1200 && window.devicePixelRatio >= 1) {
  player.poster = desktopImage;
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 3) {
  player.poster = tabletImage3x;
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 2) {
  player.poster = tabletImage2x;
} else if (window.innerWidth >= 768 && window.devicePixelRatio >= 1) {
  player.poster = tabletImage;
} else if (window.innerWidth < 768 && window.devicePixelRatio >= 3) {
  player.poster = mobileImage3x;
} else if (window.innerWidth < 768 && window.devicePixelRatio >= 2) {
  player.poster = mobileImage2x;
} else {
  player.poster = mobileImage;
}

if (window.innerWidth > 1199) {
  player.poster = desktopImage;
} else if (window.innerWidth > 767) {
  player.poster = tabletImage;
} else {
  player.poster = mobileImage;
}
