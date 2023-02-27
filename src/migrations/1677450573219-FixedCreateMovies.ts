import { MigrationInterface, QueryRunner } from "typeorm";

export class FixedCreateMovies1677450573219 implements MigrationInterface {
    name = 'FixedCreateMovies1677450573219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "deleteAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
