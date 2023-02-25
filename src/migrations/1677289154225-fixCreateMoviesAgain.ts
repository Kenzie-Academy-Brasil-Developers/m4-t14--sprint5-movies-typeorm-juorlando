import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCreateMoviesAgain1677289154225 implements MigrationInterface {
    name = 'fixCreateMoviesAgain1677289154225'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" character varying`);
    }

}
