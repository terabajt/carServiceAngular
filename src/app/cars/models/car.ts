export interface Car {
    [x: string]: any;
    id: number;
    model: string;
    type: string;
    plate: string;
    deliveryDate: string;
    deadline: string;
    color: string;
    power: number;
    clientFirstName: string;
    clientSurname: string;
    cost: number;
    isFullyDamaged: boolean;
    parts: Object[];
}
