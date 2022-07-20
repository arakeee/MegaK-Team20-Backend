import {Controller, Get} from '@nestjs/common';
import {RecruiterService} from "./recruiter.service";
import {StudentsDataHrView} from "../interface/students-data-hr-view";

@Controller('/recruiter')
export class RecruiterController {
    constructor(private readonly recruiterService: RecruiterService){}

    @Get()
    async getStudents(): Promise<StudentsDataHrView[]> {
        return this.recruiterService.getStudents();
    }
}
