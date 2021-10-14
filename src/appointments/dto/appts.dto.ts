import { IsString, IsNotEmpty } from 'class-validator';
import { FindApptsByUser } from '../../graphql';

export class getApptsDTO extends FindApptsByUser {

    @IsString()
    @IsNotEmpty()
    readonly user: string;

    @IsString()
    @IsNotEmpty()
    readonly start_date: string;

    @IsString()
    @IsNotEmpty()
    readonly end_date: string;

}
