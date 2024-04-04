export interface Cita {
    [key: string]: string // Index Signature
    id: string;
    paciente: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
}