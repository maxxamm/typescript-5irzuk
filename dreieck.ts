import { Form } from "./form";

export class Dreieck extends Form{

  constructor(_farbe: string, private _grundseite: number, private _hoehe : number){
    super(_farbe)

  }

  berechneFlaecheRechteck(_grundseite : number, _hoehe : number){
    let flaecheDreieck : number;

    flaecheDreieck = 0,5 *_grundseite * _hoehe;

    return flaecheDreieck;
  }
  
  toString(): string {

    let text: string = super.toString()
    text+= "\nHoehe: " + this._hoehe;
    text += "\nGrundseite: " + this._grundseite;
    return text;
  }
}  