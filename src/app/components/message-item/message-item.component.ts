import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input() message_content?: string;

  constructor() {

  }

  ngOnInit(): void {

  }

  Speak(): void {
    if (!('speechSynthesis' in window)) {
      alert('TTS in this browser not supported!');
    }
    const speech = new SpeechSynthesisUtterance();
    speech.text = this.message_content ?? "content not found!";
    const voices = window.speechSynthesis.getVoices();
    /*
        Select voice
        => first voice
    */
    speech.voice = voices[0];
    window.speechSynthesis.speak(speech);
  }
}
