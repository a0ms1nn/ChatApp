import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="rooms"
export default class extends Controller {
  static targets = ["name"];
  connect(event) {
    const roomName = event.currentTarget.dataset.roomName;
    this.nameTarget.textcontent = roomName;
  }
}
