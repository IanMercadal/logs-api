import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLogs1794158106487 implements MigrationInterface {
    name = 'CreateLogs1794158106487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`logs\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`app\` varchar(60) NOT NULL, \`user_id\` varchar(100) NULL, \`user_label\` varchar(150) NULL, \`action\` varchar(100) NOT NULL, \`entity\` varchar(100) NULL, \`entity_id\` varchar(100) NULL, \`details\` json NULL, \`created_at\` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3), INDEX \`idx_entity\` (\`app\`, \`entity\`, \`entity_id\`), INDEX \`idx_user\` (\`user_id\`, \`created_at\`), INDEX \`idx_app_date\` (\`app\`, \`created_at\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`idx_app_date\` ON \`logs\``);
        await queryRunner.query(`DROP INDEX \`idx_user\` ON \`logs\``);
        await queryRunner.query(`DROP INDEX \`idx_entity\` ON \`logs\``);
        await queryRunner.query(`DROP TABLE \`logs\``);
    }

}
