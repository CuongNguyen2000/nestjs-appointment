import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from './logger/logger.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
        }),
        PrismaModule,
        LoggerModule,
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
