import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  public textColor: string = 'blue'
  private _errors?: ValidationErrors | null

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value
    this.setErrorMessage();
  }

  @Input() set color(value: string){
    this.textColor = value
    this.setStyles();
  }

  constructor(private el: ElementRef<HTMLElement>) {

    this.htmlElement = el;
    // this.htmlElement.nativeElement.innerHTML = 'Hola Mundo'
  }
  ngOnInit(): void {
    this.setStyles();
  }


  setStyles():void{
    if( !this.htmlElement )return

    this.htmlElement!.nativeElement.style.color = this.textColor
  }

  setErrorMessage(): void {
    if( !this.htmlElement )return
    if( !this._errors ){
      this.htmlElement!.nativeElement.innerText = 'No hay errores'
      return
    }

    const errors = Object.keys(this._errors)
    if(errors.includes('required')){
      this.htmlElement!.nativeElement.innerText = 'El campo es  requerido'
      return
    }
    if(errors.includes('minlength')){
      const min = this._errors['minlength']['requiredLength']
      this.htmlElement!.nativeElement.innerText = `la longitud mínima es de ${min}`
      return
    }
    if(errors.includes('email')){
      this.htmlElement!.nativeElement.innerText = 'El email no es válido';
      return
    }

  }
}
