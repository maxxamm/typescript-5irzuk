import { Form } from "./form";

export class Raute extends Form{

  constructor(_farbe: string, private _diagonaleE: number, private _diagonaleF : number){
    super(_farbe)

  }

  berechneFlaecheRaute(_diagonaleE : number, _diagonaleF : number){
    let FlaecheRaute : number;

    FlaecheRaute = 0,5 *_diagonaleE * _diagonaleF;

    return FlaecheRaute;

  }
  
  toString(): string {

    let text: string = super.toString()
    text+= "\nDiagonaleE: " + this._diagonaleE;
    text += "\nDiagonaleF: " + this._diagonaleF;
    return text;
  }
}  