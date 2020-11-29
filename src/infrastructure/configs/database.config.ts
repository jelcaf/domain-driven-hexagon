import { typeormConfig } from './ormconfig';

const databaseDir = 'src/app/shared/infrastructure/database';

const database = {
  ...typeormConfig,
  entities: ['src/app/**/*.orm-entity.ts'],
  migrationsTableName: 'migrations',
  migrations: [`${databaseDir}/migrations/*.ts`],
  seeds: [`${databaseDir}/seeders/**/*.seeder.ts`],
  factories: [`${databaseDir}/factories/**/*.ts`],
  cli: {
    migrationsDir: `${databaseDir}/migrations`,
  },
};

export = database;
