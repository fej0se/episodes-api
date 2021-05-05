import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEpisodes1619869996220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "episodes",
                columns: [
                    {
                       name: "id",
                       type: "varchar",
                       isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "members",
                        type: "varchar",
                    },
                    {
                        name: "published_at",
                        type: "varchar",
                    },
                    {
                        name: "thumbnail",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "fileurl",
                        type: "varchar",
                    },
                    {
                        name: "fileduration",
                        type: "integer",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
