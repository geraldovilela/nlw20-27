import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624585361589 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"user_sender",
                        type:"uuid",
                    },
                    {
                        name:"user_receiver",
                        type:"uuid",
                    },
                    {
                        name:"tag_id",
                        type:"uuid"
                    },
                    {
                        name:"message",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp"
                    }

                ],
                foreignKeys:[
                    {
                        name:"FkUserSendingCompliments",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_sender"],
                        onDelete:"SET NULL",
                        onUpdate:"CASCADE"
                    },
                    {
                        name:"FkUserReceivingCompliments",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_receiver"],
                        onDelete:"SET NULL",
                        onUpdate:"CASCADE"
                    },
                    {
                        name:"FkTagsCompliments",
                        referencedTableName:"tags",
                        referencedColumnNames:["id"],
                        columnNames:["tag_id"],
                        onDelete:"SET NULL",
                        onUpdate:"CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
