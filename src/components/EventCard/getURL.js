//Check if the user is on a mobile phone
const isPhone = /Mobile/i.test(navigator.userAgent);

//Check what the platform of user is
const isAndroid = /Android/i.test(navigator.userAgent);

//Dynamically generate URLs
export default function getURL(latitude, longitude, label) {
  //Handle phones
  if (isPhone) {
    return isAndroid
      ? "geo:" + latitude + "," + longitude + "?q=" + encodeURIComponent(label)
      : "maps://" +
          latitude +
          "," +
          longitude +
          "?q=" +
          encodeURIComponent(label);
  }

  //Handle desktop
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURI(label) +
    "&center=" +
    latitude +
    "%2C" +
    longitude
  );
}
