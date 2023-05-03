import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { OrgResolver } from './OrgResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,

      // See https://github.com/nestjs/graphql/issues/2810 for why the config is like this
      subscriptions: {
        subscriptions: {
          'graphql-ws': true,
        },
      } as any,
    }),
  ],
  providers: [OrgResolver],
})
export class AppModule {}
