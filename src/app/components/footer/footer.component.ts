import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  StatusMode: string = "default";
  // inputs display
  displayMessageInput: boolean = true;
  displayVoiceSelector: boolean = false;
  // buttons display
  displaySendMessageButton: boolean = false;
  displayVoiceChangerButton: boolean = true;
  displayBackButton: boolean = false;
  // Inputs
  @Input() MessageInput: string = "";
  @Input() VoiceSelector: string = "";

  setDefaultMode() {
    this.displayMessageInput = true;
    this.displayVoiceSelector = false;
    this.displaySendMessageButton = false;
    this.displayVoiceChangerButton = true;
    this.displayBackButton = false;
  }

  setTypingMode(event: any) {
    if (event.target.value === "") {
      this.setDefaultMode();
    } else {
      this.displayMessageInput = true;
      this.displayVoiceSelector = false;
      this.displaySendMessageButton = true;
      this.displayVoiceChangerButton = false;
      this.displayBackButton = false;
    }
  }
  setVoiceChangerMode() {
    this.displayMessageInput = false;
    this.displayVoiceSelector = true;
    this.displaySendMessageButton = false;
    this.displayVoiceChangerButton = false;
    this.displayBackButton = true;
  }
}
