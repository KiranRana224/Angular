import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {
  otp: string[] = ['', '', '', '', '', ''];  // Array to hold OTP digits

  constructor() {}

  // This method is triggered on each input event
  onInput(event: any, nextIndex: number): void {
    const value = event.target.value;
    if (value) {
      // If a digit is entered, focus the next input field
      setTimeout(() => {
        const nextInput = document.getElementById(`otp-input-${nextIndex}`);
        if (nextInput) {
          (nextInput as HTMLElement).focus();
        }
      }, 100); // Delay the focus slightly for better user experience
    }
  }

  // This method handles moving the focus when the user presses backspace (to go to the previous input field)
  onKeydown(event: KeyboardEvent, currentIndex: number): void {
    if (event.key === 'Backspace' && this.otp[currentIndex] === '') {
      // Move to the previous input if backspace is pressed and the current input is empty
      setTimeout(() => {
        const previousInput = document.getElementById(`otp-input-${currentIndex - 1}`);
        if (previousInput) {
          (previousInput as HTMLElement).focus();
        }
      }, 100);
    }
  }

  // Method to handle paste event
  onPaste(event: ClipboardEvent): void {
    const pastedData = event.clipboardData?.getData('text') || '';
    
    // Only process the first 6 characters
    const otpDigits = pastedData.slice(0, 6).split('');
    
    // Fill OTP fields with the pasted digits
    for (let i = 0; i < otpDigits.length; i++) {
      this.otp[i] = otpDigits[i];
    }

    // Move focus to the next empty field after pasting
    setTimeout(() => {
      for (let i = 0; i < this.otp.length; i++) {
        if (this.otp[i] === '') {
          const nextInput = document.getElementById(`otp-input-${i}`);
          if (nextInput) {
            (nextInput as HTMLElement).focus();
            break;
          }
        }
      }
    }, 100);
  }

  // Submit the OTP
  onSubmit(): void {
    alert('OTP Submitted: ' + this.otp.join(''));
  }
}
