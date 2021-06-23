import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Tags1624405337616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "tags",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                    },
                    {
                        name:"name",
                        type:"varchar",                        
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()",
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()",
                    }
            ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tags")
    }

}