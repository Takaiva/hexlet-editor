/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class snippets1662489659089 implements MigrationInterface {
  name = 'snippets1662489659089';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "snippets" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT 'Untitled', "code" character varying NOT NULL, CONSTRAINT "PK_da592ff802b6af1369e622402a6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "snippets"`);
  }
}
