import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	answer = '';
	answerDisplay = '';
	showSpinner = false;

	showAnswer() {
		this.showSpinner = true;

		setTimeout(() => {
			this.answerDisplay = this.answer;
			this.showSpinner = false;
		}, 2000);
	}
}
