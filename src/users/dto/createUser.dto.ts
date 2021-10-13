import { IsNotEmpty, IsString } from 'class-validator';
import { NewUser } from '../../graphql';

export class createUserDTO extends NewUser {
    @IsString()
    @IsNotEmpty()
    readonly first_name: string;

    @IsString()
    @IsNotEmpty()
    readonly last_name: string;

    @IsString()
    readonly birthdate: string;
}
