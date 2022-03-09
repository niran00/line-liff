// Import stylesheets
import './style.css';
import liff from '@line/liff';
import liffApiAvailable from '@line/is-api-available';
import tslib from 'tslib';
// Write Javascript code!
const appDiv = document.getElementById('body');

const pictureUrl = document.getElementById('pictureUrl');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const email = document.getElementById('email');

async function main() {
  liff.ready.then(() => {
    if (liff.getOS() === 'ISO') {
      body.style.backgroundColor = '#888';
    }
    if (liff.isInClient()) {
      getUserProfile();
    }
  });
  await liff.init({ liffId: '1656955187-j6JWxVQG' });
}
main();

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>UserID:</b>' + profile.userId;
  displayName.innerHTML = '<b>Display Name: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>Status : </b>' + profile.statusMessage;
  email.innerHTML = '<b>Email : </b>' + liff.getDecodedIDToken().email;
}
