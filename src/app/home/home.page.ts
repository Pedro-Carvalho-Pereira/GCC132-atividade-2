import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number;
  height: number;

  constructor(private toastController: ToastController) {}

  isFormValid() {
    return (this.height && this.weight && this.height > 0 && this.weight > 0);
  }

  onCalculate() {
    const imc = this.weight / (this.height * this.height);
    if(((this.weight / (this.height * this.height)) <18.5)){
    this.showMessage(`IMC = ${imc.toFixed(2)}  Situação: Magreza`);
    }
    else if(((this.weight / (this.height * this.height)) <24.9)){
      this.showMessage(`IMC = ${imc.toFixed(2)}  Situação: Normal`);
      }
      else if(this.weight / (this.height * this.height) <29.9){
        this.showMessage(`IMC = ${imc.toFixed(2)}  Situação: Sobrepeso`);
        }
        else if(this.weight / (this.height * this.height) <39.9){
          this.showMessage(`IMC = ${imc.toFixed(2)}  Situação: Obesidade`);
          }
          else {
            this.showMessage(`IMC = ${imc.toFixed(2)}  Situação: Obesidade Grave`);
            }
  }

  async showMessage(msg: string) {
    const previousToast = await this.toastController.getTop();
    if (previousToast) {
      await this.toastController.dismiss();
    }

    const toast = await this.toastController.create(
      {
        message: msg,
        color: 'light',
        buttons: [
          {
            icon: 'close'
          }
        ]
      }
    );
    toast.present();
  }
}
