import { Injectable } from '@nestjs/common';
import {StudentsDataHrView} from "../interface/students-data-hr-view";
import * as STUDENTS_RESPONSE from '../utils/students-for-hr-view.json'

@Injectable()
export class RecruiterService {
    getStudents(): StudentsDataHrView[] {
        return STUDENTS_RESPONSE;
    }
}
