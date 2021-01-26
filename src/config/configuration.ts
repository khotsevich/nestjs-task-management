export default () => ({
  server: {
    port: +process.env.PORT || 3000,
    origin: 'http://nestjs.std-927.ist.mospolytech.ru',
  },
  typeorm: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOSTNAME || 'localhost',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'taskmanagement',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: !!process.env.TYPEORM_SYNC || true,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    signOptions: { expiresIn: 3600 },
  },
});
