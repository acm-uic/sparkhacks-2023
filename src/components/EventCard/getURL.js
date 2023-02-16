//Check if the user is on a mobile phone
const isPhone = /Mobile/i.test(navigator.userAgent);

//Check what the platform of user is
const isAndroid = /Android/i.test(navigator.userAgent);

//Dynamically generate URLs
export default function getURL(latitude, longitude, label) {
  //Handle phones
  if (isPhone) {
    //Retruns a link for Android phone, otherwise return a link for iPhones
    return isAndroid
      ? "geo:" + latitude + "," + longitude + "?q=" + encodeURIComponent(label)
      : "maps://" +
          latitude +
          "," +
          longitude +
          "?q=" +
          encodeURIComponent(label);
  }

  //Handle PCs by returning a Google maps link (as a default)
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURI(label) +
    "&center=" +
    latitude +
    "%2C" +
    longitude
  );
}
