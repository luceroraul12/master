export class Conversiones {
    public static adptarFecha(fecha: Date): string{
        let dia     : string = this.padTo2Digits(fecha.getDate());
        let mes     : string = this.padTo2Digits(fecha.getMonth()+1);
        let anio    : number = fecha.getUTCFullYear();    

        return `${anio}-${mes}-${dia}`;
    }

    private static padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
      }
}