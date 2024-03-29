import { Time } from '@angular/common'

export class Class{
    classId: number
    day: string
    startTime: string
    endTime: string
    name: string
    labels: string

    constructor(classId: number, day: string, startTime: string, endTime: string, name: string, labels: string){
        this.classId = classId;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.labels = labels;
    }
}

export class ClassesRespoonse {
    classes: Class[];
}