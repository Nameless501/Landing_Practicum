import Popup from './Popup'

export default class PopupWithVideo extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    const wrapper = this._popup.querySelector('.popup__video-wrapper');
    wrapper.insertAdjacentHTML('afterbegin', `<iframe id="ytplayer" type="text/html" width="100%" height="100%"
    src="https://www.youtube.com/embed/yNLtreZkkL0"
    frameborder="0" allowfullscreen>`);
    super.open();
  }

  close() {
    this._popup.querySelector('iframe').remove();
    super.close();
  }

  handleClicks() {
    const videoElements = document.querySelectorAll('.grid__item-video');
    videoElements.forEach(videoElement => {
      videoElement.addEventListener('click', () => {
        this.open();
      })
    });
  }
}
