import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openChat() {
    const chatPopup = document.getElementById('chatPopup');
    if(chatPopup?.style.display==='block')
      {
        chatPopup.style.display='none';
      }
      else if(chatPopup?.style.display==='none')
      {
        chatPopup.style.display='block';
      }
  }
}
