export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileJob: this._profileJob.textContent,
      profileAvatar: this._avatar
    };
  }

  setUserInfo({ name, job, avatar }) {
    if ({ name }) {
      this._profileName.textContent = name;
    }

    if ({ job }) {
      this._profileJob.textContent = job;
    }

    if ({ avatar }) {
      this._avatar.src = avatar;
    }
  }

  changeAvatar(link) {
    this._avatar.src = link;
  }
}